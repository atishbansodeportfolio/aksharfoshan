export interface Project {
  id: string;
  name: string;
  location: string;
  brand: string;
  scope: string;
  bgClass: string;
  textClass: string;
  badgeBg: string;
  badgeText: string;
  lineColor: string;
  buttonClass: string;
  linkButtonClass: string;
  mainImage: string;
  folderName: string;
  imageCount: number;
  description: string;
  zClass: string;
}

export const projectsData: Project[] = [
  {
    id: 'comfort-inn-houston',
    name: 'Comfort Inn & Suites',
    location: 'Houston, Texas',
    brand: 'Choice Hotels Standards',
    scope: 'Guestrooms & Suites FF&E',
    bgClass: 'bg-[#FBFBFB]', // Soft Light Grey 1
    textClass: 'text-brand-charcoal',
    badgeBg: 'bg-brand-charcoal/5',
    badgeText: 'text-brand-charcoal/80',
    lineColor: 'bg-brand-plum/10',
    buttonClass: 'bg-brand-charcoal text-white hover:bg-brand-plum hover:text-white',
    linkButtonClass: 'border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white',
    mainImage: '/assets/our-portfolio/Comfort Inn & Suites Houston/1.webp',
    folderName: 'Comfort Inn & Suites Houston',
    imageCount: 19,
    description: "Manufactured custom guestroom casegoods, nightstands, and headboards compliant with Choice Hotels design regulations. Project highlights include durable wood-veneer writing desks, integrated power hubs, and upholstered accent chairs.",
    zClass: 'z-10'
  },
  {
    id: 'best-western-montrose',
    name: 'Best Western Montrose Inn',
    location: 'Montrose, Colorado',
    brand: 'Best Western Standards',
    scope: 'Casegoods & Lounge Seating',
    bgClass: 'bg-[#F6F6F6]', // Soft Light Grey 2
    textClass: 'text-brand-charcoal',
    badgeBg: 'bg-brand-charcoal/5',
    badgeText: 'text-brand-charcoal/80',
    lineColor: 'bg-brand-plum/10',
    buttonClass: 'bg-brand-charcoal text-white hover:bg-brand-plum hover:text-white',
    linkButtonClass: 'border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white',
    mainImage: '/assets/our-portfolio/Best Western Montrose Inn, Montrose, CO/1.webp',
    folderName: 'Best Western Montrose Inn, Montrose, CO',
    imageCount: 20,
    description: "Crafted high-quality, high-traffic guestroom dressers, bedside units, and desks customized for mountain retreat tourists. Designed to handle severe weather adjustments with resilient finishes and heavy-duty drawer slides.",
    zClass: 'z-20'
  },
  {
    id: 'everspring-bismarck',
    name: 'EverSpring Inn & Suites',
    location: 'Bismarck, North Dakota',
    brand: 'EverSpring Brand Standards',
    scope: 'Lobby & Wardrobes',
    bgClass: 'bg-[#F0F0F0]', // Soft Light Grey 3
    textClass: 'text-brand-charcoal',
    badgeBg: 'bg-brand-charcoal/5',
    badgeText: 'text-brand-charcoal/80',
    lineColor: 'bg-brand-plum/10',
    buttonClass: 'bg-brand-charcoal text-white hover:bg-brand-plum hover:text-white',
    linkButtonClass: 'border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white',
    mainImage: '/assets/our-portfolio/EverSpring Inn, Bismarck, ND, USA/1.webp',
    folderName: 'EverSpring Inn, Bismarck, ND, USA',
    imageCount: 10,
    description: "Delivered functional closet wardrobes, media panel solutions, and lobby lounge tables. Designed in collaboration with design teams to maximize efficiency in space-restricted rooms while adhering to modern aesthetic sensibilities.",
    zClass: 'z-30'
  },
  {
    id: 'hampton-inn-columbia',
    name: 'Hampton Inn St. Louis',
    location: 'Columbia, Illinois',
    brand: 'Hampton by Hilton Standards',
    scope: 'Suite Casegoods & Vanities',
    bgClass: 'bg-[#EBEBEB]', // Soft Lighted Grey 4 (lightened from #E2E2E2)
    textClass: 'text-brand-charcoal',
    badgeBg: 'bg-brand-charcoal/5',
    badgeText: 'text-brand-charcoal/80',
    lineColor: 'bg-brand-plum/10',
    buttonClass: 'bg-brand-charcoal text-white hover:bg-brand-plum hover:text-white',
    linkButtonClass: 'border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white',
    mainImage: '/assets/our-portfolio/Hampton Inn St. Louis, Columbia - Illinois/1.webp',
    folderName: 'Hampton Inn St. Louis, Columbia - Illinois',
    imageCount: 17,
    description: "Manufactured premium quartz-top vanity counter units, luggage credenzas, custom wall mirrors, and headboards. Fully engineered to meet Hilton's rigid quality specifications and built to endure extreme guest cycles.",
    zClass: 'z-40'
  },
  {
    id: 'americinn-pampa',
    name: 'AmericInn Wyndham Pampa',
    location: 'Pampa, Texas',
    brand: 'Wyndham Standards',
    scope: 'Event Center & Guestrooms',
    bgClass: 'bg-[#FBFBFB]',
    textClass: 'text-brand-charcoal',
    badgeBg: 'bg-brand-charcoal/5',
    badgeText: 'text-brand-charcoal/80',
    lineColor: 'bg-brand-plum/10',
    buttonClass: 'bg-brand-charcoal text-white hover:bg-brand-plum hover:text-white',
    linkButtonClass: 'border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white',
    mainImage: '/assets/our-portfolio/AmericInn by Wyndham Pampa Event Center, Texas/1.webp',
    folderName: 'AmericInn by Wyndham Pampa Event Center, Texas',
    imageCount: 11,
    description: "Fabricated premium banquet chairs, custom event center nesting tables, and guestroom dressers designed to withstand high occupancy. Custom-stained wood finishes selected to coordinate with Wyndham's corporate design palette.",
    zClass: 'z-10'
  },
  {
    id: 'best-western-post',
    name: 'Best Western Post Inn',
    location: 'Post, Texas',
    brand: 'Best Western Standards',
    scope: 'Guestrooms & Suites Casegoods',
    bgClass: 'bg-[#F6F6F6]',
    textClass: 'text-brand-charcoal',
    badgeBg: 'bg-brand-charcoal/5',
    badgeText: 'text-brand-charcoal/80',
    lineColor: 'bg-brand-plum/10',
    buttonClass: 'bg-brand-charcoal text-white hover:bg-brand-plum hover:text-white',
    linkButtonClass: 'border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white',
    mainImage: '/assets/our-portfolio/Best Western Post Inn, Texas/1.webp',
    folderName: 'Best Western Post Inn, Texas',
    imageCount: 15,
    description: "Delivered contemporary guestroom beds, desk units, and matching vanity frames for a complete room layout. Each piece is engineered with high-pressure laminate tops and solid wood edge bands for long-term wear resistance.",
    zClass: 'z-20'
  },
  {
    id: 'crossroads-huron',
    name: 'Crossroads Hotel & Event Center',
    location: 'Huron, South Dakota',
    brand: 'Independent Standards',
    scope: 'Custom Public Area FF&E',
    bgClass: 'bg-[#F0F0F0]',
    textClass: 'text-brand-charcoal',
    badgeBg: 'bg-brand-charcoal/5',
    badgeText: 'text-brand-charcoal/80',
    lineColor: 'bg-brand-plum/10',
    buttonClass: 'bg-brand-charcoal text-white hover:bg-brand-plum hover:text-white',
    linkButtonClass: 'border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white',
    mainImage: '/assets/our-portfolio/Crossroads Hotel-Huron Event Center, South Dakota/1.webp',
    folderName: 'Crossroads Hotel-Huron Event Center, South Dakota',
    imageCount: 14,
    description: "Manufactured grand scale lobby statement desks, lounge credenzas, and custom partition screens for the hotel lobby and event center. Melded modern metal-frame elements with traditional stained wood finishes for an upscale transitional style.",
    zClass: 'z-30'
  },
  {
    id: 'holiday-inn-waco',
    name: 'Holiday Inn Express & Suites Waco',
    location: 'Waco, Texas',
    brand: 'IHG Formula Blue Standards',
    scope: 'Formula Blue Room Package',
    bgClass: 'bg-[#EBEBEB]',
    textClass: 'text-brand-charcoal',
    badgeBg: 'bg-brand-charcoal/5',
    badgeText: 'text-brand-charcoal/80',
    lineColor: 'bg-brand-plum/10',
    buttonClass: 'bg-brand-charcoal text-white hover:bg-brand-plum hover:text-white',
    linkButtonClass: 'border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white',
    mainImage: '/assets/our-portfolio/Holiday Inn Express & Suites N Waco Area - West Texas/1.webp',
    folderName: 'Holiday Inn Express & Suites N Waco Area - West Texas',
    imageCount: 13,
    description: "Supplied complete guestroom casegoods, including headboards with integrated LED accent lights, bedside tables with charging outlets, and sliding closet doors. Fully compliant with IHG's modern Formula Blue design guidelines.",
    zClass: 'z-40'
  },
  {
    id: 'holiday-inn-fairhope',
    name: 'Holiday Inn Express Fairhope',
    location: 'Fairhope, Alabama',
    brand: 'IHG Brand Standards',
    scope: 'Guestroom Casegoods & Seating',
    bgClass: 'bg-[#FBFBFB]',
    textClass: 'text-brand-charcoal',
    badgeBg: 'bg-brand-charcoal/5',
    badgeText: 'text-brand-charcoal/80',
    lineColor: 'bg-brand-plum/10',
    buttonClass: 'bg-brand-charcoal text-white hover:bg-brand-plum hover:text-white',
    linkButtonClass: 'border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white',
    mainImage: '/assets/our-portfolio/Holiday Inn Express Fairhope-Point Clear - Alabama/1.webp',
    folderName: 'Holiday Inn Express Fairhope-Point Clear - Alabama',
    imageCount: 11,
    description: "Manufactured premium desks, ergonomic task chairs, bedside tables, and luggage chests. Built using select veneer panels and moisture-resistant core boards to prevent warping in high-humidity coastal climates.",
    zClass: 'z-10'
  },
  {
    id: 'country-inn-pierre',
    name: 'Country Inn & Suites',
    location: 'Pierre, South Dakota',
    brand: 'Radisson Standards',
    scope: 'Guestrooms & Suites Casegoods',
    bgClass: 'bg-[#F6F6F6]',
    textClass: 'text-brand-charcoal',
    badgeBg: 'bg-brand-charcoal/5',
    badgeText: 'text-brand-charcoal/80',
    lineColor: 'bg-brand-plum/10',
    buttonClass: 'bg-brand-charcoal text-white hover:bg-brand-plum hover:text-white',
    linkButtonClass: 'border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white',
    mainImage: '/assets/our-portfolio/Country Inn & Suites, Pierre, South Dakota/1.webp',
    folderName: 'Country Inn & Suites, Pierre, South Dakota',
    imageCount: 22,
    description: "Custom oak-finish headboards, nightstands, dressers, and desks designed to meet Radisson's brand standards.",
    zClass: 'z-20'
  },
  {
    id: 'quality-inn-bemidji',
    name: 'Quality Inn Bemidji',
    location: 'Bemidji, Minnesota',
    brand: 'Choice Hotels Standards',
    scope: 'Custom Casegoods & Lounge Seating',
    bgClass: 'bg-[#F0F0F0]',
    textClass: 'text-brand-charcoal',
    badgeBg: 'bg-brand-charcoal/5',
    badgeText: 'text-brand-charcoal/80',
    lineColor: 'bg-brand-plum/10',
    buttonClass: 'bg-brand-charcoal text-white hover:bg-brand-plum hover:text-white',
    linkButtonClass: 'border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white',
    mainImage: '/assets/our-portfolio/Quality Inn, Bemidji, MN/1.webp',
    folderName: 'Quality Inn, Bemidji, MN',
    imageCount: 20,
    description: "Heavy-duty guestroom desks, matching nightstands, and upholstered lounge seating built for high-occupancy guest use.",
    zClass: 'z-30'
  },
  {
    id: 'springhill-suites-washington',
    name: 'SpringHill Suites Washington',
    location: 'Washington, Pennsylvania',
    brand: 'Marriott Standards',
    scope: 'Suite Casegoods & Modular Wardrobes',
    bgClass: 'bg-[#EBEBEB]',
    textClass: 'text-brand-charcoal',
    badgeBg: 'bg-brand-charcoal/5',
    badgeText: 'text-brand-charcoal/80',
    lineColor: 'bg-brand-plum/10',
    buttonClass: 'bg-brand-charcoal text-white hover:bg-brand-plum hover:text-white',
    linkButtonClass: 'border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white',
    mainImage: '/assets/our-portfolio/Springhill Suites by Marriott, Washington, PA/1.webp',
    folderName: 'Springhill Suites by Marriott, Washington, PA',
    imageCount: 17,
    description: "Sleek contemporary media panels, floating desks, and integrated smart-wardrobes conforming to Marriott's brand specifications.",
    zClass: 'z-40'
  },
  {
    id: 'hampton-inn-farmington',
    name: 'Hampton Inn Farmington',
    location: 'Farmington, Missouri',
    brand: 'Hilton Standards',
    scope: 'Guestroom Casegoods & Seating',
    bgClass: 'bg-[#FBFBFB]',
    textClass: 'text-brand-charcoal',
    badgeBg: 'bg-brand-charcoal/5',
    badgeText: 'text-brand-charcoal/80',
    lineColor: 'bg-brand-plum/10',
    buttonClass: 'bg-brand-charcoal text-white hover:bg-brand-plum hover:text-white',
    linkButtonClass: 'border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white',
    mainImage: '/assets/our-portfolio/Hampton Inn Farmington, MO/1.webp',
    folderName: 'Hampton Inn Farmington, MO',
    imageCount: 30,
    description: "Custom quartz-top guestroom vanities, headboards with integrated reading light mounts, and ergonomic armchairs.",
    zClass: 'z-10'
  },
  {
    id: 'quality-inn-fort-pierre',
    name: 'Quality Inn Fort Pierre',
    location: 'Fort Pierre, South Dakota',
    brand: 'Choice Hotels Standards',
    scope: 'Public Spaces & Guestrooms',
    bgClass: 'bg-[#F6F6F6]',
    textClass: 'text-brand-charcoal',
    badgeBg: 'bg-brand-charcoal/5',
    badgeText: 'text-brand-charcoal/80',
    lineColor: 'bg-brand-plum/10',
    buttonClass: 'bg-brand-charcoal text-white hover:bg-brand-plum hover:text-white',
    linkButtonClass: 'border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white',
    mainImage: '/assets/our-portfolio/Quality Inn Pierre – Fort Pierre, South Dakota/1.webp',
    folderName: 'Quality Inn Pierre – Fort Pierre, South Dakota',
    imageCount: 20,
    description: "Lobby reception desks, common area credenzas, and custom-styled guestroom furniture packages.",
    zClass: 'z-20'
  },
  {
    id: 'holiday-inn-mobile',
    name: 'Holiday Inn Mobile',
    location: 'Mobile, Alabama',
    brand: 'IHG Standards',
    scope: 'Room Packages & Seating',
    bgClass: 'bg-[#F0F0F0]',
    textClass: 'text-brand-charcoal',
    badgeBg: 'bg-brand-charcoal/5',
    badgeText: 'text-brand-charcoal/80',
    lineColor: 'bg-brand-plum/10',
    buttonClass: 'bg-brand-charcoal text-white hover:bg-brand-plum hover:text-white',
    linkButtonClass: 'border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white',
    mainImage: '/assets/our-portfolio/Holiday Inn Mobile - Alabama/1.webp',
    folderName: 'Holiday Inn Mobile - Alabama',
    imageCount: 25,
    description: "Comprehensive guestroom furniture solutions, functional wardrobes, and accent seating customized to IHG brand layouts.",
    zClass: 'z-30'
  }
];

// Helper to generate the list of image paths for a project folder
export const getProjectImages = (folderName: string, count: number): string[] => {
  const images = [];
  for (let i = 1; i <= count; i++) {
    images.push(`/assets/our-portfolio/${folderName}/${i}.webp`);
  }
  return images;
};
