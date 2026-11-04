(function () {
  const gallery = document.querySelector('[data-recent-transfers-gallery]');
  const records = window.URIDE_DATA?.recentTransfers;
  if (!gallery || !records) return;

  const language = window.URIDE_I18N?.language === 'zh' ? 'zh' : 'en';
  const isChinese = language === 'zh';
  const months = records
    .filter((month) => month.published && month.photos?.some((photo) => photo.published))
    .slice()
    .sort((a, b) => b.monthKey.localeCompare(a.monthKey));
  const photoIndexes = new Map();
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);

  const imageFor = (photo) => isChinese
    ? (photo.imageZh || photo.imageEn || photo.sharedImage)
    : (photo.imageEn || photo.imageZh || photo.sharedImage);
  const altFor = (month, index) => isChinese
    ? `${month.monthKey.slice(0, 4)}年${Number(month.monthKey.slice(5, 7))}月 URide Service 真实接送记录，照片 ${index + 1}`
    : `URide Service ${month.titleEn.replace(' Transfer Records', '')} transfer records, photo ${index + 1}`;
  const metadataFor = (photo) => {
    const date = photo.date ? `<span class="recent-photo-date">${escapeHtml(photo.date)}</span>` : '';
    const route = photo.route ? `<strong class="recent-photo-route">${escapeHtml(photo.route)}</strong>` : '';
    const vehicle = photo.vehicle ? `<span class="recent-photo-vehicle">${escapeHtml(photo.vehicle)}</span>` : '';
    return date || route || vehicle ? `<div class="recent-photo-meta">${date}${route}${vehicle}</div>` : '';
  };

  gallery.setAttribute('aria-label', isChinese ? '按月份浏览接送照片' : 'Browse transfer photos by month');
  gallery.innerHTML = months.map((month) => {
    const photos = month.photos.filter((photo) => photo.published).slice().sort((a, b) => a.displayOrder - b.displayOrder);
    const title = isChinese ? month.titleZh : month.titleEn;
    const firstPhoto = photos[0];
    photoIndexes.set(month.monthKey, 0);

    return `<article class="recent-month-card" data-recent-month="${escapeHtml(month.monthKey)}" aria-roledescription="carousel">
      <header class="recent-month-heading"><div><p class="recent-month-eyebrow">${isChinese ? '接送记录' : 'TRANSFER RECORDS'}</p><h3>${escapeHtml(title)}</h3></div><span class="recent-photo-count" data-photo-count>01 / ${String(photos.length).padStart(2, '0')}</span></header>
      <div class="recent-month-viewport"><figure class="recent-transfer-media"><img data-month-image src="${escapeHtml(imageFor(firstPhoto))}" alt="${escapeHtml(altFor(month, 0))}" width="900" height="1200" loading="lazy" decoding="async"></figure>
        <button class="recent-photo-arrow recent-photo-previous" type="button" data-photo-previous aria-label="${isChinese ? '上一张接送照片' : 'Previous transfer photo'}"${photos.length < 2 ? ' hidden' : ''}>‹</button>
        <button class="recent-photo-arrow recent-photo-next" type="button" data-photo-next aria-label="${isChinese ? '下一张接送照片' : 'Next transfer photo'}"${photos.length < 2 ? ' hidden' : ''}>›</button>
      </div>
      <div data-photo-metadata>${metadataFor(firstPhoto)}</div>
      <div class="recent-photo-dots" role="group" aria-label="${isChinese ? '选择接送照片' : 'Choose a transfer photo'}">${photos.map((photo, index) => `<button type="button" class="recent-photo-dot${index === 0 ? ' is-active' : ''}" data-photo-index="${index}" aria-label="${isChinese ? `显示第 ${index + 1} 张照片` : `Show photo ${index + 1}`}" aria-pressed="${index === 0}"></button>`).join('')}</div>
    </article>`;
  }).join('');

  gallery.querySelectorAll('.recent-month-card').forEach((card) => {
    const month = months.find((item) => item.monthKey === card.dataset.recentMonth);
    const photos = month.photos.filter((photo) => photo.published).slice().sort((a, b) => a.displayOrder - b.displayOrder);
    const image = card.querySelector('[data-month-image]');
    const count = card.querySelector('[data-photo-count]');
    const metadata = card.querySelector('[data-photo-metadata]');
    const dots = [...card.querySelectorAll('[data-photo-index]')];
    const renderPhoto = (index) => {
      const selected = (index + photos.length) % photos.length;
      const photo = photos[selected];
      photoIndexes.set(month.monthKey, selected);
      image.src = imageFor(photo);
      image.alt = altFor(month, selected);
      count.textContent = `${String(selected + 1).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}`;
      metadata.innerHTML = metadataFor(photo);
      dots.forEach((dot, dotIndex) => {
        const active = dotIndex === selected;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-pressed', String(active));
      });
    };

    card.querySelector('[data-photo-previous]')?.addEventListener('click', () => renderPhoto(photoIndexes.get(month.monthKey) - 1));
    card.querySelector('[data-photo-next]')?.addEventListener('click', () => renderPhoto(photoIndexes.get(month.monthKey) + 1));
    dots.forEach((dot, index) => dot.addEventListener('click', () => renderPhoto(index)));
  });
})();
