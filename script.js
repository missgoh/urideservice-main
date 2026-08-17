const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');
const header = document.querySelector('[data-header]');

function closeMenu() {
  menu?.classList.remove('open');
  document.body.classList.remove('menu-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open menu');
}

menuButton?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  document.body.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('resize', () => { if (window.innerWidth >= 980) closeMenu(); });
window.addEventListener('scroll', () => header?.classList.toggle('scrolled', window.scrollY > 10), { passive: true });
document.querySelectorAll('[data-year]').forEach((node) => { node.textContent = new Date().getFullYear(); });

const siteData = window.URIDE_DATA;
const language = window.URIDE_I18N?.language || 'en';
const translate = window.URIDE_I18N?.t || ((text) => text);
const pricingGrid = document.querySelector('[data-pricing-grid]');
if (siteData && pricingGrid) {
  const source = pricingGrid.dataset.pricingGrid === 'airport'
    ? siteData.airportTransfer
    : siteData.interstateTransfer;
  const destinationId = (destination) => `fare-${destination.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
  pricingGrid.innerHTML = source.map((fare) => {
    const destination = fare.destination;
    const route = fare.route;
    const routeMessage = encodeURIComponent(language === 'zh'
      ? `你好 URide Service，我想查询 ${route} 接送的档期。`
      : `Hi URide Service, I would like to check availability for ${route} transfer.`);
    const formatPrice = (price) => typeof price === 'number' ? price.toLocaleString() : price;
    return `<article class="destination-card" id="${destinationId(fare.destination)}" tabindex="-1">
      <div class="destination-head"><p>${translate('Destination')}</p><h2>${destination}</h2><span>${route}</span><b class="fare-direction">${translate('One Way')}</b></div>
      <dl class="price-list">
        ${siteData.vehicles.map((vehicle, index) => `<div><dt><b>${vehicle.name}</b><small>${language === 'zh' ? `👤 最多 ${vehicle.maxPassengers} 位乘客<br>🧳 最多 ${vehicle.maxLuggage} 个 28&quot; 行李` : `👤 Up to ${vehicle.maxPassengers} passengers<br>🧳 Up to ${vehicle.maxLuggage} × 28&quot; luggage`}</small></dt><dd>RM${formatPrice(fare.prices[index])}</dd></div>`).join('')}
      </dl>
      ${fare.locationVariable ? `<p class="range-note">${translate('Final fare may vary depending on the exact pickup or drop-off location.')}</p>` : ''}
      <a class="card-cta" href="https://wa.me/${siteData.contact.whatsappNumber}?text=${routeMessage}" target="_blank" rel="noopener">${translate('Check Availability')} <span>→</span></a>
    </article>`;
  }).join('');

  const selector = document.querySelector('[data-destination-selector]');
  if (selector) {
    selector.innerHTML = source.map((fare) => {
      const id = destinationId(fare.destination);
      return `<button class="destination-chip" type="button" data-destination-target="${id}" aria-controls="${id}">${fare.destination}</button>`;
    }).join('');

    selector.addEventListener('click', (event) => {
      const chip = event.target.closest('[data-destination-target]');
      if (!chip) return;
      const card = document.getElementById(chip.dataset.destinationTarget);
      if (!card) return;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      document.querySelectorAll('.destination-chip.is-selected').forEach((item) => item.classList.remove('is-selected'));
      document.querySelectorAll('.destination-card.is-highlighted').forEach((item) => item.classList.remove('is-highlighted'));
      chip.classList.add('is-selected');
      card.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      card.classList.add('is-highlighted');
      window.setTimeout(() => {
        chip.classList.remove('is-selected');
        card.classList.remove('is-highlighted');
      }, reduceMotion ? 500 : 1800);
    });
  }
}

document.querySelectorAll('[data-capacity-index]').forEach((container) => {
  const vehicle = siteData?.vehicles[Number(container.dataset.capacityIndex)];
  if (!vehicle) return;
  container.innerHTML = language === 'zh'
    ? `<span>👤 最多 ${vehicle.maxPassengers} 位乘客</span><span>🧳 最多 ${vehicle.maxLuggage} 个 28&quot; 行李</span>`
    : `<span>👤 Up to ${vehicle.maxPassengers} passengers</span><span>🧳 Up to ${vehicle.maxLuggage} × 28&quot; luggage</span>`;
});

document.querySelectorAll('[data-travel-addons]').forEach((container) => {
  const addOn = siteData?.addOns?.[0];
  if (!addOn) return;
  const isChinese = language === 'zh';
  const name = isChinese ? addOn.nameZh : addOn.name;
  const description = isChinese ? addOn.descriptionZh : addOn.description;
  const cta = isChinese ? addOn.ctaZh : addOn.cta;
  const message = isChinese ? addOn.whatsappMessageZh : addOn.whatsappMessage;
  const compact = container.hasAttribute('data-addon-compact');
  container.innerHTML = `<article class="travel-addon-card${compact ? ' is-compact' : ''}">
    <span class="addon-symbol" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M9 4a3 3 0 1 1 6 0M7 10a5 5 0 0 1 10 0v2a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-2Z"/><path d="M8 14 5 20m11-6 3 6M9 20h6M9 9h.01M15 9h.01"/></svg></span>
    <div class="addon-copy"><p class="addon-kicker">${translate('Optional travel comfort')}</p><h3>${name}</h3><p>${description}</p></div>
    <strong class="addon-price">RM${addOn.price}</strong>
    <a class="addon-cta" href="https://wa.me/${siteData.contact.whatsappNumber}?text=${encodeURIComponent(message)}" target="_blank" rel="noopener">${cta} <span aria-hidden="true">→</span></a>
  </article>`;
});

function tourImagePath(path) {
  return document.body.classList.contains('service-page') ? `../../${path}` : path;
}

function tourWhatsapp(tour) {
  const message = language === 'zh' ? tour.whatsappMessageZh : tour.whatsappMessage;
  return `https://wa.me/${siteData.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const tourPreview = document.querySelector('[data-tour-preview]');
if (siteData?.dayTours && tourPreview) {
  tourPreview.innerHTML = siteData.dayTours.map((tour) => {
    const name = language === 'zh' ? tour.nameZh : tour.name;
    const duration = language === 'zh' ? tour.durationZh : tour.duration;
    const cta = language === 'zh' ? '查看行程' : 'Explore This Trip';
    const previewHighlights = tour.highlights.slice(0, 3).map((item) => `<li>${language === 'zh' ? item.nameZh : item.name}</li>`).join('');
    return `<a class="tour-preview-card" href="services/day-tours/#${tour.id}">
      <img src="${tourImagePath(tour.image)}" alt="${name}" width="1536" height="1024" loading="lazy">
      <span class="tour-preview-shade"></span><span class="tour-preview-copy"><small>${duration}</small><strong>${name}</strong><ul>${previewHighlights}</ul><span>${cta} →</span></span>
    </a>`;
  }).join('');
}

const tourPackages = document.querySelector('[data-tour-packages]');
if (siteData?.dayTours && tourPackages) {
  tourPackages.innerHTML = siteData.dayTours.map((tour, index) => {
    const name = language === 'zh' ? tour.nameZh : tour.name;
    const duration = language === 'zh' ? tour.durationZh : tour.duration;
    const description = language === 'zh' ? tour.descriptionZh : tour.description;
    const note = language === 'zh' ? tour.noteZh : tour.note;
    const highlights = tour.highlights.length ? `<div class="tour-highlights"><h3>${language === 'zh' ? '行程亮点' : 'Highlights'}</h3><ul>${tour.highlights.map((item) => `<li>${item.icon ? `<span aria-hidden="true">${item.icon}</span>` : ''}${language === 'zh' ? item.nameZh : item.name}</li>`).join('')}</ul></div>` : '';
    return `<article class="tour-story ${index % 2 ? 'tour-story-reverse' : ''}" id="${tour.id}">
      <div class="tour-story-image"><img src="${tourImagePath(tour.image)}" alt="${name}" width="1536" height="1024" loading="lazy"></div>
      <div class="tour-story-copy"><p class="tour-duration">${duration}</p><h2>${name}</h2>${description ? `<p class="tour-description">${description}</p>` : ''}${highlights}${note ? `<p class="tour-note">${note}</p>` : ''}<a class="button" href="${tourWhatsapp(tour)}" target="_blank" rel="noopener">${language === 'zh' ? 'WhatsApp 咨询' : 'Enquire on WhatsApp'}</a></div>
    </article>`;
  }).join('');
}

const surchargeList = document.querySelector('[data-surcharges]');
if (siteData && surchargeList) {
  surchargeList.innerHTML = siteData.vehicles.map((vehicle) =>
    `<li><span>${vehicle.name}</span><b>+RM${vehicle.surcharge}</b></li>`
  ).join('');
}
