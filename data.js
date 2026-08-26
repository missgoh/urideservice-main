window.URIDE_DATA = Object.freeze({
  contact: Object.freeze({
    displayPhone: "011-6391 1017",
    whatsappNumber: "601163911017",
    whatsappUrl: "https://wa.me/601163911017"
  }),
  vehicles: Object.freeze([
    Object.freeze({ name: "Toyota Corolla Cross", model: "Toyota Corolla Cross", colour: "Silver", colourZh: "银色", maxPassengers: 4, maxLuggage: 3, lateNightSurcharge: 50, surcharge: 50, image: "public/images/toyota-corolla-cross-silver.webp" }),
    Object.freeze({ name: "Toyota Alphard AGH30", model: "Toyota Alphard AGH30", colour: "White", colourZh: "白色", maxPassengers: 6, maxLuggage: 5, lateNightSurcharge: 80, surcharge: 80, image: "public/images/toyota-alphard-agh30-white-2021.webp" }),
    Object.freeze({ name: "Hyundai Staria", model: "Hyundai Staria", colour: "Black", colourZh: "黑色", maxPassengers: 8, maxLuggage: 6, lateNightSurcharge: 50, surcharge: 50, image: "public/images/hyundai-staria-black-2025.webp" })
  ]),
  airportTransfer: Object.freeze([
    Object.freeze({ destination: "Ipoh", destinationZh: "Ipoh", route: "KLIA / KLIA2 ⇄ Ipoh", routeZh: "KLIA / KLIA2 ⇄ Ipoh", prices: [400, 650, 750] }),
    Object.freeze({ destination: "Chemor / Sg. Siput", destinationZh: "Chemor / Sg. Siput", route: "KLIA / KLIA2 ⇄ Chemor / Sg. Siput", routeZh: "KLIA / KLIA2 ⇄ Chemor / Sg. Siput", prices: [450, 680, 780] }),
    Object.freeze({ destination: "Tg Tualang / Batu Gajah", destinationZh: "Tg Tualang / Batu Gajah", route: "KLIA / KLIA2 ⇄ Tg Tualang / Batu Gajah", routeZh: "KLIA / KLIA2 ⇄ Tg Tualang / Batu Gajah", prices: [450, 700, 780] }),
    Object.freeze({ destination: "Kuala Kangsar / Taiping", destinationZh: "Kuala Kangsar / Taiping", route: "KLIA / KLIA2 ⇄ Kuala Kangsar / Taiping", routeZh: "KLIA / KLIA2 ⇄ Kuala Kangsar / Taiping", prices: [550, "750 – 800", "800 – 850"], locationVariable: true }),
    Object.freeze({ destination: "Cameron Highlands", destinationZh: "Cameron Highlands", route: "KLIA / KLIA2 ⇄ Cameron Highlands", routeZh: "KLIA / KLIA2 ⇄ Cameron Highlands", prices: [550, 750, 850] }),
    Object.freeze({ destination: "Teluk Intan", destinationZh: "Teluk Intan", route: "KLIA / KLIA2 ⇄ Teluk Intan", routeZh: "KLIA / KLIA2 ⇄ Teluk Intan", prices: [550, 800, 900] }),
    Object.freeze({ destination: "Ayer Tawar / Sitiawan", destinationZh: "Ayer Tawar / Sitiawan", route: "KLIA / KLIA2 ⇄ Ayer Tawar / Sitiawan", routeZh: "KLIA / KLIA2 ⇄ Ayer Tawar / Sitiawan", prices: [580, 800, 850] }),
    Object.freeze({ destination: "Penang", destinationZh: "Penang", route: "KLIA / KLIA2 ⇄ Penang", routeZh: "KLIA / KLIA2 ⇄ Penang", prices: [700, 1050, 1200] })
  ]),
  interstateTransfer: Object.freeze([
    Object.freeze({ destination: "Penang", destinationZh: "Penang", route: "Ipoh ⇄ Penang", routeZh: "Ipoh ⇄ Penang", prices: [380, 580, 630] }),
    Object.freeze({ destination: "Malacca", destinationZh: "Malacca", route: "Ipoh ⇄ Malacca", routeZh: "Ipoh ⇄ Malacca", prices: [550, 750, 800] }),
    Object.freeze({ destination: "Genting Highlands", destinationZh: "Genting Highlands", route: "Ipoh ⇄ Genting Highlands", routeZh: "Ipoh ⇄ Genting Highlands", prices: [450, 700, 800] }),
    Object.freeze({ destination: "Cameron Highlands", destinationZh: "Cameron Highlands", route: "Ipoh ⇄ Cameron Highlands", routeZh: "Ipoh ⇄ Cameron Highlands", prices: [450, 600, 700] }),
    Object.freeze({ destination: "Johor", destinationZh: "Johor", route: "Ipoh ⇄ Johor", routeZh: "Ipoh ⇄ Johor", prices: [750, 1200, 1200] })
  ]),
  dayTours: Object.freeze([
    Object.freeze({
      id: "ipoh-one-day-trip",
      name: "Ipoh One Day Trip",
      nameZh: "Ipoh One Day Trip · 怡保一日游",
      duration: "10 Hours",
      durationZh: "10小时",
      description: "Discover Ipoh’s nature, heritage streets and famous local flavours on a flexible private 10-hour journey.",
      descriptionZh: "以私人包车方式探索 Ipoh 的自然景观、老街文化与代表性美食，行程可根据旅客喜好灵活安排。",
      whatsappMessage: "Hi URide Service, I would like to enquire about the Ipoh One Day Trip.",
      whatsappMessageZh: "你好 URide Service，我想询问 Ipoh One Day Trip 怡保一日游。",
      image: "public/images/review-ipoh-day-tour-placeholder.webp",
      highlights: Object.freeze([
        Object.freeze({ icon: "🌿", name: "Gaharu Tea Valley", nameZh: "Gaharu Tea Valley 沉香茶园" }),
        Object.freeze({ icon: "🏞️", name: "Tasik Cermin", nameZh: "Tasik Cermin 镜湖" }),
        Object.freeze({ icon: "🏮", name: "Concubine Lane 二奶巷", nameZh: "Concubine Lane 二奶巷" }),
        Object.freeze({ icon: "☕", name: "Ipoh White Coffee", nameZh: "Ipoh White Coffee 怡保白咖啡" }),
        Object.freeze({ icon: "🍗", name: "Ipoh Bean Sprout Chicken 芽菜鸡", nameZh: "Ipoh Bean Sprout Chicken 怡保芽菜鸡" })
      ])
    }),
    Object.freeze({
      id: "ipoh-penang-2d1n",
      name: "Ipoh ⇄ Penang",
      nameZh: "Ipoh ⇄ Penang",
      duration: "2 Days 1 Night",
      durationZh: "2天1夜",
      description: "Enjoy a flexible private two-day journey featuring Penang’s heritage streets, temples, scenic views, seaside atmosphere and famous local food.",
      descriptionZh: "以两天一夜的私人包车行程，探索 Penang 的文化老街、寺庙景观、城市风景、海边氛围与当地美食。",
      note: "Tour highlights are flexible and can be adjusted according to the customer’s preferred pace and interests.",
      noteZh: "行程亮点可根据旅客喜好、步调及实际情况灵活调整。",
      whatsappMessage: "Hi URide Service, I would like to enquire about the Ipoh to Penang 2 Days 1 Night trip.",
      whatsappMessageZh: "你好 URide Service，我想询问 Ipoh ⇄ Penang 2天1夜包车行程。",
      image: "public/images/review-ipoh-penang-placeholder.webp",
      highlights: Object.freeze([
        Object.freeze({ icon: "", name: "Kek Lok Si Temple 极乐寺", nameZh: "Kek Lok Si Temple 极乐寺" }),
        Object.freeze({ icon: "", name: "Penang Hill 升旗山", nameZh: "Penang Hill 升旗山" }),
        Object.freeze({ icon: "", name: "George Town Heritage Area", nameZh: "George Town Heritage Area" }),
        Object.freeze({ icon: "", name: "George Town Street Art", nameZh: "George Town Street Art" }),
        Object.freeze({ icon: "", name: "Clan Jetties 姓氏桥", nameZh: "Clan Jetties 姓氏桥" }),
        Object.freeze({ icon: "", name: "Cheong Fatt Tze Blue Mansion 蓝屋", nameZh: "Cheong Fatt Tze Blue Mansion 蓝屋" }),
        Object.freeze({ icon: "", name: "Batu Ferringhi Beach", nameZh: "Batu Ferringhi Beach" }),
        Object.freeze({ icon: "", name: "Penang Local Food", nameZh: "Penang 当地美食" })
      ])
    }),
    Object.freeze({
      id: "ipoh-kuala-lumpur-one-day-trip",
      name: "Ipoh ⇄ Kuala Lumpur",
      nameZh: "Ipoh ⇄ Kuala Lumpur",
      duration: "One Day Trip · 10 Hours",
      durationZh: "一日游 · 10小时",
      description: "Experience Kuala Lumpur’s most recognisable cultural, heritage and city landmarks on a comfortable private journey from Ipoh.",
      descriptionZh: "从 Ipoh 出发，以舒适的私人包车方式探索 Kuala Lumpur 的文化地标、历史建筑与现代城市景观。",
      note: "The number of stops may vary depending on traffic conditions, visiting time and the customer’s preferred pace.",
      noteZh: "实际游览景点数量将视交通状况、停留时间及旅客步调而定。",
      whatsappMessage: "Hi URide Service, I would like to enquire about the Ipoh to Kuala Lumpur One Day Trip.",
      whatsappMessageZh: "你好 URide Service，我想询问 Ipoh ⇄ Kuala Lumpur 一日游包车。",
      image: "public/images/kuala-lumpur-day-tour.webp",
      highlights: Object.freeze([
        Object.freeze({ icon: "", name: "Batu Caves", nameZh: "Batu Caves" }),
        Object.freeze({ icon: "", name: "Thean Hou Temple 天后宫", nameZh: "Thean Hou Temple 天后宫" }),
        Object.freeze({ icon: "", name: "Merdeka Square 独立广场", nameZh: "Merdeka Square 独立广场" }),
        Object.freeze({ icon: "", name: "Sultan Abdul Samad Building", nameZh: "Sultan Abdul Samad Building" }),
        Object.freeze({ icon: "", name: "Petaling Street 茨厂街", nameZh: "Petaling Street 茨厂街" }),
        Object.freeze({ icon: "", name: "Central Market", nameZh: "Central Market" }),
        Object.freeze({ icon: "", name: "Petronas Twin Towers 双峰塔", nameZh: "Petronas Twin Towers 双峰塔" }),
        Object.freeze({ icon: "", name: "KLCC", nameZh: "KLCC" })
      ])
    }),
    Object.freeze({
      id: "ipoh-malacca-one-day-trip",
      name: "Ipoh ⇄ Malacca",
      nameZh: "Ipoh ⇄ Malacca",
      duration: "One Day Trip",
      durationZh: "一日游",
      description: "Discover Malacca’s historic landmarks, colourful heritage streets and riverside atmosphere on a flexible private journey from Ipoh.",
      descriptionZh: "从 Ipoh 出发，以舒适的私人包车方式探索 Malacca 的历史建筑、文化老街及河岸景色。",
      note: "The itinerary is flexible. The number of attractions visited may vary depending on traffic conditions, attraction operating hours, visiting time and the customer’s preferred pace.",
      noteZh: "行程可灵活调整。实际游览景点数量将视交通状况、景点开放时间、停留时间及旅客步调而定。",
      whatsappMessage: "Hi URide Service, I would like to enquire about the Ipoh to Malacca One Day Trip.",
      whatsappMessageZh: "你好 URide Service，我想询问 Ipoh ⇄ Malacca 一日游包车。",
      image: "public/images/review-ipoh-day-tour-placeholder.webp",
      highlights: Object.freeze([
        Object.freeze({ icon: "", name: "A’ Famosa / Porta de Santiago", nameZh: "A’ Famosa / Porta de Santiago" }),
        Object.freeze({ icon: "", name: "St. Paul’s Church", nameZh: "St. Paul’s Church" }),
        Object.freeze({ icon: "", name: "Dutch Square", nameZh: "Dutch Square" }),
        Object.freeze({ icon: "", name: "The Stadthuys 荷兰红屋", nameZh: "The Stadthuys 荷兰红屋" }),
        Object.freeze({ icon: "", name: "Christ Church", nameZh: "Christ Church" }),
        Object.freeze({ icon: "", name: "Jonker Walk", nameZh: "Jonker Walk" }),
        Object.freeze({ icon: "", name: "Melaka River Cruise", nameZh: "Melaka River Cruise" }),
        Object.freeze({ icon: "", name: "Melaka Straits Mosque 海峡清真寺", nameZh: "Melaka Straits Mosque 海峡清真寺" })
      ])
    })
  ]),
  addOns: Object.freeze([
    Object.freeze({
      id: "baby-car-seat",
      name: "Baby Car Seat Rental",
      nameZh: "儿童安全座椅租借",
      price: 15,
      description: "Add a baby car seat to your private transfer for RM15. Please request it when making your booking.",
      descriptionZh: "预订接送服务时，可加租儿童安全座椅，费用为 RM15。请在预订时提前告知。",
      cta: "Request a Baby Car Seat",
      ctaZh: "预订儿童安全座椅",
      whatsappMessage: "Hi URide Service, I would like to request a baby car seat for my booking.",
      whatsappMessageZh: "你好 URide Service，我想在接送订单中加订儿童安全座椅。"
    })
  ]),
  meetAndGreet: Object.freeze({ price: 50, unit: "per service" })
});
