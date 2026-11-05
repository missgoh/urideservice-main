import { readFile, mkdir, writeFile, rename, rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export function validateReviewData(data) {
  const rating = data?.rating;
  const userRatingCount = data?.userRatingCount;
  if (typeof rating !== 'number' || !Number.isFinite(rating) || rating < 1 || rating > 5) {
    throw new Error('Places API returned an invalid rating.');
  }
  if (!Number.isSafeInteger(userRatingCount) || userRatingCount < 0) {
    throw new Error('Places API returned an invalid userRatingCount.');
  }
  return { rating, userRatingCount };
}

export async function updateGoogleReviews({ apiKey, placeId, outputPath, fetchImpl = fetch }) {
  if (!apiKey) throw new Error('GOOGLE_PLACES_API_KEY is not configured.');
  if (!placeId) throw new Error('GOOGLE_PLACE_ID is not configured.');

  const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;
  const response = await fetchImpl(url, {
    method: 'GET',
    headers: {
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'rating,userRatingCount'
    },
    signal: AbortSignal.timeout(20000)
  });
  if (!response.ok) throw new Error(`Places API request failed with HTTP ${response.status}.`);

  const nextData = validateReviewData(await response.json());
  const target = outputPath || resolve(dirname(fileURLToPath(import.meta.url)), '../../public/data/google-reviews.json');

  let previousData = null;
  try {
    previousData = validateReviewData(JSON.parse(await readFile(target, 'utf8')));
  } catch {
    // A valid API response may repair a missing or invalid output file.
  }
  if (previousData?.rating === nextData.rating && previousData?.userRatingCount === nextData.userRatingCount) {
    console.log('Google review summary is unchanged.');
    return { changed: false, ...nextData };
  }

  const serialized = `${JSON.stringify(nextData, null, 2)}\n`;
  const temporaryPath = `${target}.${process.pid}.tmp`;
  await mkdir(dirname(target), { recursive: true });
  try {
    await writeFile(temporaryPath, serialized, { flag: 'wx' });
    await rename(temporaryPath, target);
  } catch (error) {
    await rm(temporaryPath, { force: true }).catch(() => {});
    throw error;
  }

  console.log('Google review summary updated.');
  return { changed: true, ...nextData };
}

const invokedPath = process.argv[1] ? pathToFileURL(resolve(process.argv[1])).href : '';
if (invokedPath === import.meta.url) {
  updateGoogleReviews({
    apiKey: process.env.GOOGLE_PLACES_API_KEY,
    placeId: process.env.GOOGLE_PLACE_ID
  }).catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
