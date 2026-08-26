(function () {
  const STORAGE_KEY = 'uride-language';
  const getLanguage = () => {
    try { return localStorage.getItem(STORAGE_KEY) === 'zh' ? 'zh' : 'en'; }
    catch { return 'en'; }
  };
  const zh = {
    'Skip to content':'跳至主要内容','Services':'服务','Fleet':'车队','Why URide':'选择 URide 的理由','Fares':'价格','FAQ':'常见问题','WhatsApp us':'WhatsApp 咨询','Explore':'浏览','Back to top ↑':'返回顶部 ↑','Airport':'机场接送','Interstate':'跨州接送','Charter':'私人包车','CUSTOMER EXPERIENCES':'客户体验','Real journeys. Real feedback.':'真实旅程，真实评价。','on Google':'Google 评价','25 Reviews':'25 条评价','Google Review':'Google 评价','View all Google Reviews →':'查看所有 Google 评价 →',
    "Ipoh's private transfer specialist":'怡保私人接送服务专家','From your door to':'从家门出发，安心抵达','departure.':'机场。','Premium private rides between Ipoh and KLIA, plus charter journeys across Malaysia—planned around your time, comfort and peace of mind.':'提供怡保往返 KLIA 的尊贵私人接送，以及全马包车服务。行程配合您的时间，以舒适、安心为先。','Get a trip quote':'索取行程报价','Explore our fleet':'查看车队','Private, door-to-door':'私人点对点接送','Professional local drivers':'专业本地司机','YOUR MOST-BOOKED ROUTE':'热门路线','Available':'可预约','Doorstep pickup':'上门接送','Terminal drop-off':'机场航站楼下车','Private':'私人','ride':'行程','Direct':'直达','journey':'接送','booking':'预约','Door-to-door':'点对点接送','Travel made simple':'让旅程更轻松','Planned pickups':'预约接送','Comfortable fleet':'舒适车队','Interstate coverage':'跨州服务','Direct support':'直接沟通',
    'What we do':'我们的服务','A ride for every journey.':'每一段旅程，都有合适安排。','From airport departures to private days out, every trip is arranged with the same care and attention.':'从机场接送到私人一日游，每趟行程都用心安排。','KLIA / KLIA2 transfers':'KLIA / KLIA2 机场接送','Airport Transfer':'机场接送','Private airport transfer with doorstep pickup and direct terminal drop-off.':'私人机场接送，上门接载并直达航站楼。','View Airport Fares':'查看机场接送价格','Private Charter':'私人包车','A dedicated vehicle and driver for business, family, or special occasions.':'为商务、家庭或特别场合安排专属车辆与司机。','Explore Charter':'了解包车服务','Interstate Transfer':'跨州接送','Comfortable point-to-point private transfers from Ipoh across Malaysia.':'从怡保出发，舒适直达全马各地。','View Destinations':'查看路线','Day Tours':'一日游包车','Flexible private outings shaped around the places you want to experience.':'按照您想探索的地点，灵活安排私人一日游。','Explore Tours':'查看一日游','Meet & Greet':'机场接机礼宾服务','A reassuring welcome and a smooth handover from arrival to vehicle.':'抵达后由专人接待，顺畅引导至车辆。','View Service':'查看服务',
    'Airport transfer, refined':'尊贵机场接送','Start calm. Arrive ready.':'从容出发，安心抵达。','Early flight, late arrival, or family holiday—we make the long airport journey feel straightforward.':'无论早班机、深夜抵达或家庭出游，我们都让机场长途接送更轻松。','Private service from Ipoh to KLIA':'怡保至 KLIA 私人接送','Pickup from your home, hotel, or office':'可从住家、酒店或办公室接载','Direct support before your journey':'行程前直接沟通','Comfortable vehicle choices':'多款舒适车辆选择','Request an airport quote':'索取机场接送报价','Our fleet':'我们的车队','Space that suits you.':'为您的旅程选择合适空间。','Choose a comfortable vehicle for solo travel, family trips, or larger groups with luggage.':'无论个人、家庭或多人携带行李出行，都可选择合适舒适的车辆。','Silver':'银色','White':'白色','Black':'黑色','Premium comfort':'尊贵舒适','Enquire on WhatsApp →':'WhatsApp 咨询 →','Luggage capacity may vary depending on passenger count, luggage size and arrangement. Please contact us if you are travelling with multiple large suitcases.':'行李容量会因乘客人数、行李尺寸及摆放方式而异。如携带多个大型行李箱，请先联系我们。',
    'Simple from the start':'简单三步即可预约','Booked in three easy steps.':'三个简单步骤，轻松预约。','Share your trip':'提供行程资料','Tell us your pickup, destination, date, group, and luggage.':'告诉我们上车地点、目的地、日期、人数及行李。','Confirm your ride':'确认接送安排','We’ll recommend a vehicle and confirm your journey details.':'我们会推荐合适车辆并确认行程资料。','Travel comfortably':'舒适出发','Meet your driver and enjoy a smooth, private journey.':'与司机会合，享受顺畅的私人旅程。','Why URide':'为什么选择 URide','Thoughtful service, all the way.':'全程细致周到。','Professional private transport should feel personal, dependable and uncomplicated.':'专业私人接送，应当贴心、可靠且简单。','Local knowledge':'熟悉本地路线','Your own space':'专属私人空间','Clear coordination':'沟通清楚','Right-sized comfort':'合适舒适空间','Good to know':'出发前须知','Frequently asked questions.':'常见问题。','Need something specific? Send us your trip details and we’ll help.':'有特别需求？把行程资料发给我们，我们会协助您。','Ready when you are':'随时为您安排','Tell us where you\'re going.':'告诉我们您的目的地。','Share your pickup, destination, travel date, passengers, and luggage with us on WhatsApp.':'通过 WhatsApp 提供上车地点、目的地、日期、人数及行李资料。','WhatsApp':'WhatsApp','Get a quote':'索取报价','Professional private transportation from Ipoh, Malaysia.':'马来西亚怡保专业私人接送服务。',
    'Home / Services':'首页 / 服务','Airport journeys,':'机场旅程，','handled beautifully.':'从容安排。','Premium private transfers between KLIA / KLIA2 and Ipoh, Perak destinations, Cameron Highlands, and Penang.':'提供 KLIA / KLIA2 往返怡保、霹雳州各地、金马仑高原及槟城的尊贵私人接送。','View reference fares':'查看参考价格','Check availability →':'查询档期 →','A considered arrival':'贴心抵达安排','Private from terminal to destination.':'从航站楼直达目的地。','Travel directly with a professional private vehicle service and clear WhatsApp coordination before your journey.':'专业私人车辆直达接送，行程前通过 WhatsApp 清楚确认安排。','KLIA / KLIA2 routes':'KLIA / KLIA2 路线','Reference fares':'参考价格','Fares shown are for general reference. Final pricing may vary depending on the exact pickup or drop-off location, travel requirements and booking details. Round-trip bookings may be eligible for special rates. Contact us on WhatsApp for the latest quotation and availability.':'所列价格仅供参考。最终价格可能因确切上车或下车地点、行程需求及预订详情而有所不同。往返预订可能享有特别价格。请通过 WhatsApp 查询最新报价及档期。','Quick navigation':'快速导航','Select destination':'选择目的地','Destination':'目的地','One Way':'单程','Check availability':'查询档期','Final fare may vary depending on the exact pickup or drop-off location.':'最终价格可能因确切上车或下车地点而有所不同。','Late-night surcharge':'深夜附加费','Trips between 12:00am and 7:00am':'适用于凌晨 12:00 至早上 7:00 的行程','Plan your airport transfer':'安排机场接送','Share your flight and destination.':'提供航班与目的地资料。','We’ll confirm the latest quotation, vehicle availability, and journey details with you directly.':'我们会直接与您确认最新报价、车辆档期及行程详情。','Airport transfer':'机场接送','Ask on WhatsApp →':'WhatsApp 咨询 →',
    'From Ipoh,':'从怡保出发，','comfortably onward.':'舒适前往各地。','Private point-to-point journeys from Ipoh to Penang, Malacca, Genting Highlands, Cameron Highlands, and Johor.':'提供怡保前往槟城、马六甲、云顶高原、金马仑高原及柔佛的私人点对点接送。','View destinations':'查看路线','Request a quotation →':'索取报价 →','Private point-to-point travel':'私人点对点接送','Your own pace. Your own space.':'按您的节奏，享受专属空间。','A dedicated vehicle and driver for direct interstate travel based on your pickup and destination.':'根据上车地点和目的地，安排专属车辆与司机提供跨州直达接送。','From Ipoh':'从怡保出发','Destinations & reference fares':'路线与参考价格','These interstate fares are separate from KLIA / KLIA2 airport transfer fares. Contact us for the latest quotation and availability.':'以下跨州接送价格与 KLIA / KLIA2 机场接送价格完全分开。请联系我们查询最新报价及档期。','Plan your interstate ride':'安排跨州接送','Where would you like to go?':'您想前往哪里？','Send your destination, date, passenger details, and luggage information for a current quotation.':'请提供目的地、日期、乘客及行李资料，以获取最新报价。','Interstate transfer':'跨州接送',
    'Your journey,':'您的旅程，','privately arranged.':'为您专属安排。','Book a dedicated vehicle and driver around your travel requirements—for families, business travellers, private groups, and special occasions.':'按您的行程需求预订专属车辆与司机，适合家庭、商务旅客、私人团体及特别场合。','Request a quotation':'索取报价','Designed around your plans':'根据您的计划安排','Flexible private travel.':'灵活的私人出行。','Tell us your schedule and destination requirements. URide Service will recommend an appropriate arrangement and available vehicle.':'告诉我们您的时间表与目的地需求，URide Service 将推荐合适安排及可用车辆。','Family journeys':'家庭出行','Business travel':'商务出行','Special occasions':'特别场合','Charter pricing is quotation-based.':'包车服务按需求报价。','No official fixed charter pricing has been provided. Your quotation will depend on the itinerary, schedule, vehicle choice, and travel requirements.':'包车没有固定价格，报价将根据路线、时间、车辆选择及行程需求而定。','Plan your charter':'安排私人包车','Share your requirements.':'告诉我们您的需求。','Ask on WhatsApp':'WhatsApp 咨询',
    'See more,':'轻松探索，','at your own pace.':'按自己的节奏。','Flexible private day tours built around the destinations and experiences you would like to explore.':'根据您想探索的目的地与体验，灵活安排私人一日游。','Explore day tours':'查看一日游','Plan on WhatsApp →':'WhatsApp 规划 →','A private travel experience':'私人旅游体验','Curated around you.':'为您量身规划。','Choose your preferred places, pace, and vehicle. Additional confirmed tour packages can be added here as official details become available.':'选择喜欢的地点、节奏与车辆。更多确认后的一日游配套将陆续加入。','Custom day tour':'定制一日游','Your preferred itinerary':'您的专属行程','Share the destinations or attractions you have in mind, your preferred date, and group details. URide Service will provide a tailored quotation.':'提供想去的目的地或景点、日期及人数，URide Service 将为您提供专属报价。','Plan a day tour':'规划一日游','More curated tour packages are coming.':'更多精选一日游配套即将推出。','Where would you like to explore?':'您想探索哪里？','Let’s shape the day.':'一起规划精彩一天。','Enquire on WhatsApp':'WhatsApp 咨询',
    'A reassuring':'安心迎接，','welcome on arrival.':'从抵达开始。','Additional arrival assistance for customers who want a smoother handover from the airport to their private vehicle.':'为需要额外抵达协助的客户提供机场接机礼宾服务，顺畅引导至私人车辆。','View service':'查看服务','Simple arrival assistance':'贴心抵达协助','Meet with confidence.':'安心会合。','Arrange Meet & Greet alongside your airport journey for clear arrival coordination and additional assistance.':'可在机场接送行程中加订接机礼宾服务，让抵达沟通更清楚并获得额外协助。','Reference price':'参考价格','per service':'每次服务','Pre-arranged':'提前安排','Clear coordination':'沟通清楚','Add Meet & Greet':'加订接机礼宾服务','Arrange your arrival.':'安排您的抵达接待。','Book via WhatsApp':'通过 WhatsApp 预订',
    'How early should I book my airport transfer?':'机场接送应该提前多久预订？','Advance booking is recommended, especially for weekends, public holidays, and larger vehicles. Contact us with your travel date to check availability.':'建议提前预订，尤其是周末、公共假期及需要较大车辆时。请提供出行日期以查询档期。','Which KLIA terminals do you serve?':'你们提供哪些 KLIA 航站楼的接送？','We arrange transfers for both KLIA Terminal 1 and Terminal 2. Include your flight details when requesting a quote.':'我们提供 KLIA 第一航站楼及第二航站楼接送。询价时请附上航班资料。','Which vehicle is best for my group?':'哪款车辆适合我的同行人数？','Share your passenger count and approximate luggage. We’ll recommend the most suitable vehicle based on space and comfort.':'提供乘客人数及大约行李数量，我们会根据空间与舒适需求推荐合适车辆。','Can I book a custom interstate trip or day tour?':'可以定制跨州行程或一日游吗？','Yes. Tell us where you would like to go, your preferred schedule, and group size for a tailored quote.':'可以。告诉我们目的地、理想时间及人数，我们会提供定制报价。',
    'Drivers familiar with Ipoh, airport routes, and interstate travel.':'司机熟悉怡保、机场路线及跨州行程。','No shared ride or unnecessary stops—just your group and destination.':'不拼车、不绕路，只服务您的同行人员与目的地。','Trip details are confirmed directly so you know what to expect.':'直接确认行程详情，让安排更清楚。','A considered fleet for different passenger and luggage needs.':'多款车辆配合不同乘客与行李需求。','WhatsApp 011-6391 1017':'WhatsApp 011-6391 1017'
  };

  Object.assign(zh, {
    'Most Popular Airport Route':'热门机场接送路线',
    'Most Popular Route':'热门路线',
    'Ipoh ⇄ KLIA Airport Transfer':'Ipoh ⇄ KLIA 机场接送',
    'Private, door-to-door airport travel with three vehicle choices for different passenger and luggage needs.':'私人点对点机场接送，提供三款车辆以配合不同乘客与行李需求。',
    'View Featured Route':'查看热门路线',
    'Our most-requested private airport journey, with direct coordination and vehicle choices for different passenger and luggage needs.':'最受欢迎的私人机场接送行程，提供直接沟通及多款车辆选择，以配合不同乘客与行李需求。',
    'Ipoh ⇄ KLIA / KLIA2':'Ipoh ⇄ KLIA / KLIA2',
    'Private airport transfer, arranged around your journey.':'按您的行程安排私人机场接送。',
    'Choose the vehicle that suits your group, then confirm your travel date, pickup details, luggage and flight information directly with URide Service.':'选择适合同行人数的车辆，再直接与 URide Service 确认日期、上车资料、行李与航班信息。',
    'The Hyundai Staria fare shown on this website has been corrected to the latest official reference fare: RM750.':'本网站显示的 Hyundai Staria 价格已修正为最新官方参考价格：RM750。',
    'WhatsApp Us':'WhatsApp 咨询',
    "Ipoh's private transfer specialist":'Ipoh 私人接送服务专家',
    'Premium private rides between Ipoh and KLIA, plus charter journeys across Malaysia—planned around your time, comfort and peace of mind.':'提供 Ipoh 往返 KLIA 的尊贵私人接送，以及全马包车服务。行程配合您的时间，以舒适、安心为先。',
    'Comfortable point-to-point private transfers from Ipoh across Malaysia.':'从 Ipoh 出发，舒适直达全马各地。',
    'Private service from Ipoh to KLIA':'Ipoh 至 KLIA 私人接送',
    'Professional private transportation from Ipoh, Malaysia.':'马来西亚 Ipoh 专业私人接送服务。',
    'Premium private transfers between KLIA / KLIA2 and Ipoh, Perak destinations, Cameron Highlands, and Penang.':'提供 KLIA / KLIA2 往返 Ipoh、Perak 各地、Cameron Highlands 及 Penang 的尊贵私人接送。',
    'From Ipoh,':'从 Ipoh 出发，',
    'From Ipoh':'从 Ipoh 出发',
    'Private point-to-point journeys from Ipoh to Penang, Malacca, Genting Highlands, Cameron Highlands, and Johor.':'提供 Ipoh 前往 Penang、Malacca、Genting Highlands、Cameron Highlands 及 Johor 的私人点对点接送。',
    'Drivers familiar with Ipoh, airport routes, and interstate travel.':'司机熟悉 Ipoh、机场路线及跨州行程。',
    'Premium private transfers between Ipoh, KLIA and beyond.':'提供怡保、KLIA 及其他地区的尊贵私人接送服务。',
    'Check Availability':'查询档期',
    '✈️ KLIA / KLIA2':'✈️ KLIA / KLIA2',
    '🚘 Private Transfer':'🚘 私人接送',
    '🧳 Luggage Friendly':'🧳 行李友好',
    '📍 Ipoh & Beyond':'📍 Ipoh 及其他地区',
    'Travel starts at your doorstep':'旅程从家门开始',
    'Your journey starts before the flight.':'您的旅程，在起飞前就已开始。',
    'Travel comfortably from your doorstep.':'从家门舒适出发。',
    'Curated private journeys':'精选私人旅程',
    'Travel beyond the transfer.':'不只是接送，更是旅程体验。','PRIVATE AIRPORT TRANSFER':'私人机场接送','Departures · KLIA T1 / T2':'出发层 · KLIA T1 / T2','Airport ready':'机场出行','Chauffeur comfort':'尊贵司机服务','Group travel':'多人出行',
    'Discover Ipoh, Penang or Kuala Lumpur in the comfort of a private journey shaped around your pace.':'以舒适的私人包车方式探索 Ipoh、Penang 或 Kuala Lumpur，行程可按您的步调灵活安排。',
    'Discover Ipoh or continue to Penang in the comfort of a private journey shaped around your pace.':'舒适探索 Ipoh，或继续前往 Penang，按您的步调享受私人旅程。',
    'Travel slowly.':'从容旅行。',
    'See more.':'看见更多。',
    'Curated private journeys with the freedom to experience each destination at your own pace.':'精选私人旅程，让您按自己的步调体验每个目的地。',
    'Explore This Trip':'查看行程',
    'Private journeys, thoughtfully arranged':'用心安排的私人旅程',
    'More than transport.':'不只是交通。',
    'A day worth remembering.':'更是一段值得记住的时光。',
    'Travel with your own group and enjoy a comfortable private journey. Choose from the confirmed trips below, then contact URide Service to discuss availability and travel details.':'与自己的同行伙伴舒适出发。选择以下已确认行程，再联系 URide Service 查询档期与旅程详情。',
    'Curated trips':'精选行程',
    'Choose your next journey.':'选择您的下一段旅程。',
    'Send us your preferred date and group details to discuss the experience and availability.':'请提供日期与同行人数，以便沟通旅程体验与档期。',
    'Ready to explore?':'准备出发？',
    'Let’s plan your private journey.':'一起规划您的私人旅程。',
    'Tell us which trip interests you, your preferred date, group size, and travel requirements.':'告诉我们您感兴趣的行程、日期、人数与出行需求。',
    'WhatsApp enquiry →':'WhatsApp 咨询 →',
    'Airport & private travel':'机场与私人出行',
    'Private rides for every departure.':'为每一次出发，安排专属接送。',
    'DEPARTURES · KLIA T1 / T2':'出发层 · KLIA T1 / T2',
    'POINT-TO-POINT · LONG DISTANCE':'点对点 · 长途接送',
    'PRIVATE HIRE · YOUR SCHEDULE':'私人包车 · 配合您的时间',
    'TRAVEL EXPERIENCES · PRIVATE':'私人旅游体验',
    'ARRIVALS · TERMINAL WELCOME':'抵达层 · 航站楼迎接',
    'DEPARTURES':'出发层',
    'DOORSTEP':'上门接载',
    'TERMINAL':'航站楼',
    'FLIGHT DAY READY · 24/7 ENQUIRY':'航班出行准备 · 24小时咨询',
    'AIRPORT TRANSFER · DEPARTURES / ARRIVALS':'机场接送 · 出发 / 抵达',
    'ORIGIN':'出发地',
    'FLIGHT DAY READY · TERMINAL TRANSFER':'航班出行准备 · 航站楼接送',
    'TERMINAL ROUTE':'航站楼路线',
    'PRIVATE PICKUP':'私人接载',
    'DIRECT JOURNEY':'直达行程',
    'AIRPORT TERMINAL':'机场航站楼',
    'DOORSTEP PICKUP':'上门接载',
    'Optional travel comfort':'可选舒适配套',
    'Travel Add-ons':'行程附加服务',
    'A small extra for a more comfortable family journey.':'为家庭旅程增添一份舒适与安心。',
    'Follow URide':'关注我们',
    'Service overview':'服务概览',
    'Featured Services':'精选服务',
    'Premium private transport for airport transfers, interstate travel and day trips.':'高品质私人接送服务，适用于机场接送、跨州接送及一日游。',
    'URide Service featured services poster for airport transfers, interstate travel and day trips.':'URide Service 机场接送、跨州接送及一日游精选服务海报。',
    'KLIA · KLIA2 TRANSFERS':'KLIA · KLIA2 机场接送',
    'Comfortable point-to-point private transfers across Malaysia.':'舒适直达全马各地的私人点对点接送。',
    'AIRPORT ARRIVAL · WELCOME SERVICE':'机场抵达 · 迎宾服务',
    'A smoother airport arrival with personalised welcome assistance.':'个性化迎宾协助，让机场抵达更顺畅。',
    'Learn More':'了解更多'
  });

  const titleZh = {
    'URide Service | Ipoh to KLIA Airport Transfer':'URide Service｜Ipoh 至 KLIA 机场接送',
    'Airport Transfer Fares | URide Service':'机场接送价格｜URide Service',
    'Interstate Transfer | URide Service':'跨州接送｜URide Service',
    'Private Charter | URide Service':'私人包车｜URide Service',
    'Day Tours | URide Service':'一日游包车｜URide Service',
    'Meet & Greet | URide Service':'机场接机礼宾服务｜URide Service'
  };

  const originalTexts = new WeakMap();
  function translateTextNodes(language) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim() || ['SCRIPT','STYLE'].includes(node.parentElement?.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      if (!originalTexts.has(node)) originalTexts.set(node, node.nodeValue);
      const original = originalTexts.get(node);
      const trimmed = original.trim();
      const replacement = language === 'zh' ? zh[trimmed] : trimmed;
      if (replacement) node.nodeValue = original.replace(trimmed, replacement);
    });
  }

  function chineseWhatsAppMessage(message) {
    if (/^你好\s+URide Service/.test(message)) return message;
    if (/KLIA/.test(message) && /Ipoh/.test(message)) return '你好 URide Service，我想查询 Ipoh ⇄ KLIA / KLIA2 接送的档期。';
    if (/Penang|槟城/.test(message) && /Ipoh|怡保/.test(message)) return '你好 URide Service，我想询问怡保到槟城的接送服务。';
    if (/airport/i.test(message)) return '你好 URide Service，我想询问机场接送服务的报价与档期。';
    if (/interstate/i.test(message)) return '你好 URide Service，我想询问跨州接送服务的报价与档期。';
    if (/charter/i.test(message)) return '你好 URide Service，我想询问私人包车服务。';
    if (/day tour/i.test(message)) return '你好 URide Service，我想规划私人一日游。';
    if (/Meet/i.test(message)) return '你好 URide Service，我想询问机场接机礼宾服务。';
    if (/Corolla/i.test(message)) return '你好 URide Service，我想询问 Toyota Corolla Cross 的接送服务。';
    if (/Alphard/i.test(message)) return '你好 URide Service，我想询问 Toyota Alphard AGH30 的接送服务。';
    if (/Staria/i.test(message)) return '你好 URide Service，我想询问 Hyundai Staria 的接送服务。';
    return '你好 URide Service，我想询问私人接送服务的报价与档期。';
  }

  function translateWhatsAppLinks(language) {
    document.querySelectorAll('a[href*="wa.me/601163911017"]').forEach((link) => {
      if (!link.dataset.hrefEn) link.dataset.hrefEn = link.href;
      if (language === 'en') { link.href = link.dataset.hrefEn; return; }
      const url = new URL(link.dataset.hrefEn);
      url.searchParams.set('text', chineseWhatsAppMessage(url.searchParams.get('text') || ''));
      link.href = url.toString();
    });
  }

  function setFeaturedServicesPoster(language) {
    const poster = document.querySelector('[data-featured-services-poster]');
    if (!poster) return;
    const source = language === 'zh' ? poster.dataset.srcZh : poster.dataset.srcEn;
    const alt = 'URide Service featured services poster for airport transfers, interstate travel and day trips.';
    poster.src = source;
    poster.alt = language === 'zh' ? (zh[alt] || alt) : alt;
  }

  function addLanguageSwitch(language) {
    if (document.querySelector('[data-language-switch]')) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'language-switch';
    button.dataset.languageSwitch = '';
    button.setAttribute('aria-label', language === 'en' ? '切换至中文' : 'Switch to English');
    button.textContent = language === 'en' ? '中文' : 'EN';
    const menuButton = document.querySelector('[data-menu-button]');
    menuButton?.before(button);
    button.addEventListener('click', () => {
      try { localStorage.setItem(STORAGE_KEY, language === 'en' ? 'zh' : 'en'); } catch {}
      location.reload();
    });
  }

  const language = getLanguage();
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  window.URIDE_I18N = { language, t: (text) => language === 'zh' ? (zh[text] || text) : text };
  document.addEventListener('DOMContentLoaded', () => {
    if (language === 'zh' && titleZh[document.title]) document.title = titleZh[document.title];
    setFeaturedServicesPoster(language);
    translateTextNodes(language);
    translateWhatsAppLinks(language);
    addLanguageSwitch(language);
  });
})();
