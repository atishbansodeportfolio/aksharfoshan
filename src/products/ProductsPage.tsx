import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const LOOKBOOK_DATA: Record<string, string[]> = {
  "clubchairs": [
    "palma.jpeg",
    "julian.jpeg",
    "amelie.jpeg",
    "sinclair.jpeg",
    "bruce.jpeg"
  ],
  "cabinets": [
    "dawson-bar-cabinate.jpeg",
    "dawson-tv-dressor.jpeg",
    "dawson-bookcase.jpeg",
    "dawson-dressor.jpeg",
    "vancouver-glass-cabinet.jpeg"
  ],
  "dining-tables": [
    "canmore.jpeg",
    "everton.jpeg",
    "Freeform.jpeg",
    "Seattle.jpeg",
    "Berlin.jpeg"
  ],
  "chair-and-benches": [
    "paloma.jpeg",
    "Sabine (E) Bench.jpeg",
    "carprice-bulged.jpeg",
    "otis.jpeg",
    "paloma-with-arm.jpeg"
  ],
  "barstools": [
    "caprice-barstool.jpeg",
    "Cassius Barstool.jpeg",
    "Dex_barstool.jpeg",
    "evan.jpeg",
    "sabina-barstool.jpeg",
    "school-chair-with-arms.jpeg",
    "school-chair.jpeg",
    "steve.jpeg"
  ],
  "sofas": [
    "senaa-chaise-lounge.jpeg",
    "senna-pouf.jpeg",
    "Senna-sofa-240.jpeg",
    "Senna-Sofa-285.jpeg",
    "victor-elements.jpeg"
  ]
};

// Dimensions lookups for spec-sheet look
const PRODUCT_SPECS: Record<string, string> = {
  "Palma": "75 W x 72 D x 80 H cm",
  "Julian": "70 W x 75 D x 78 H cm",
  "Amelie": "82 W x 80 D x 74 H cm",
  "Sinclair": "74 W x 74 D x 76 H cm",
  "Bruce": "78 W x 82 D x 80 H cm",
  "Dawson Bar Cabinate": "110 W x 50 D x 180 H cm",
  "Dawson Tv Dressor": "200 W x 45 D x 65 H cm",
  "Dawson Bookcase": "90 W x 35 D x 195 H cm",
  "Dawson Dressor": "120 W x 50 D x 85 H cm",
  "Vancouver Glass Cabinet": "100 W x 40 D x 190 H cm",
  "Canmore": "220 W x 100 D x 75 H cm",
  "Everton": "240 W x 110 D x 75 H cm",
  "Freeform": "260 W x 120 D x 75 H cm",
  "Seattle": "200 W x 95 D x 75 H cm",
  "Berlin": "220 W x 100 D x 75 H cm",
  "Paloma": "58 W x 56 D x 82 H cm",
  "Sabine (E) Bench": "150 W x 45 D x 48 H cm",
  "Carprice Bulged": "60 W x 58 D x 80 H cm",
  "Otis": "56 W x 54 D x 82 H cm",
  "Paloma With Arm": "64 W x 58 D x 82 H cm",
  "Caprice Barstool": "48 W x 48 D x 105 H (75 Seat) cm",
  "Cassius Barstool": "50 W x 46 D x 100 H (70 Seat) cm",
  "Dex Barstool": "46 W x 45 D x 102 H (75 Seat) cm",
  "Evan": "48 W x 48 D x 105 H (75 Seat) cm",
  "Sabina Barstool": "50 W x 48 D x 102 H (75 Seat) cm",
  "School Chair With Arms": "58 W x 54 D x 80 H cm",
  "School Chair": "50 W x 52 D x 80 H cm",
  "Steve": "48 W x 46 D x 100 H (70 Seat) cm",
  "Senaa Chaise Lounge": "170 W x 85 D x 72 H cm",
  "Senna Pouf": "90 W x 90 D x 42 H cm",
  "Senna Sofa 240": "240 W x 95 D x 72 H cm",
  "Senna Sofa 285": "285 W x 95 D x 72 H cm",
  "Victor Elements": "Modular Configuration"
};



interface ProductImage {
  path: string;
  title: string;
  specs: string;
}

interface Category {
  id: string;
  name: string;
  folder: string;
  count: number;
  desc: string;
  refImage: string;
  images: ProductImage[];
}

const formatTitle = (filename: string): string => {
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, "");
  const withSpaces = nameWithoutExt.replace(/[-_]/g, ' ');
  return withSpaces
    .split(' ')
    .map(word => word ? word.charAt(0).toUpperCase() + word.slice(1) : '')
    .join(' ');
};

export default function ProductsPage() {
  const [activeCategoryId, setActiveCategoryId] = useState('clubchairs');

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Assemble dynamic categories matching index layout list
  const categoriesList: Category[] = [
    { 
      id: 'clubchairs', 
      name: 'Club Chairs', 
      folder: 'clubchairs',
      count: 5,
      desc: 'Luxurious, deep-seated lounge chairs offering exceptional comfort and refined styling for hotel lobbies, guest rooms, and executive suites.',
      refImage: '/about-hero.png',
      images: []
    },
    { 
      id: 'barstools', 
      name: 'Barstools', 
      folder: 'barstools',
      count: 8,
      desc: 'High-occupancy durability bar seating with precision-engineered footrests and ergonomic back angles, perfect for hotel bars and restaurant counters.',
      refImage: '/assets/images/ref_sofa_stool.png',
      images: []
    },
    { 
      id: 'cabinets', 
      name: 'Cabinets', 
      folder: 'cabinets',
      count: 5,
      desc: 'Premium custom casegoods, credenzas, modular wardrobes, and television dressers built with heavy-duty joinery and high-end veneer finishes.',
      refImage: '/assets/images/hero_casegoods.png',
      images: []
    },
    { 
      id: 'dining-tables', 
      name: 'Dining Tables', 
      folder: 'dining-tables',
      count: 5,
      desc: 'Architectural statement tables featuring solid hardwood tops, metallic support structures, and commercial-grade sealants resistant to heavy wear.',
      refImage: '/assets/images/hero_credenza.png',
      images: []
    },
    { 
      id: 'chair-and-benches', 
      name: 'Chairs & Benches', 
      folder: 'chair-and-benches',
      count: 5,
      desc: 'Sleek, ergonomically designed seating options that provide optimal support and sophisticated styling for dining and lounge environments.',
      refImage: '/journey-roots.png',
      images: []
    },
    { 
      id: 'sofas', 
      name: 'Sofas', 
      folder: 'sofas',
      count: 5,
      desc: 'Modular lounge sofas, chaise lounges, and custom poufs utilizing high-density commercial-grade foam and premium stain-resistant upholstery.',
      refImage: '/journey-flagship.png',
      images: []
    }
  ].map(cat => {
    const files = LOOKBOOK_DATA[cat.folder] || [];
    const images = files.map((file) => {
      const title = formatTitle(file);
      return {
        path: `/assets/lookbook/${cat.folder}/${file}`,
        title,
        specs: PRODUCT_SPECS[title] || "Custom Dimensions on Request"
      };
    });
    return {
      ...cat,
      images
    };
  });

  const activeCategory = categoriesList.find(c => c.id === activeCategoryId) || categoriesList[0];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16">
        
        {/* Page Hero Description Block */}
        <div className="flex flex-col gap-3 mb-16 max-w-[900px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-brand-charcoal leading-tight font-sans">
            Premium Casegoods
          </h1>
          <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
            Browse our curated collections, specify material components, and download design schematics. Custom imagery uploading capabilities will be fully enabled in your dashboard.
          </p>
        </div>

        {/* Catalog Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Index Selection Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 bg-white border border-[#EBEBE9] rounded-[16px] p-6 sm:p-8 shadow-sm">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-brand-plum/40 block mb-1">
              PURE FURNITURE
            </span>
            <h3 className="text-3xl font-black font-sans text-brand-charcoal mb-8">
              Index
            </h3>

            <div className="space-y-4">
              {categoriesList.map(cat => {
                const isActive = cat.id === activeCategoryId;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategoryId(cat.id)}
                    className="flex items-center justify-between w-full text-left py-2 text-xs sm:text-sm transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-brand-plum shrink-0" />}
                      <span className={`transition-colors font-sans ${
                        isActive 
                          ? "font-bold text-brand-plum text-sm" 
                          : "text-gray-500 hover:text-brand-charcoal font-medium text-xs sm:text-sm"
                      }`}>
                        {cat.name}
                      </span>
                    </div>
                    <span className="flex-grow mx-3 border-b border-dotted border-gray-300 group-hover:border-gray-400" />
                    <span className={`font-mono text-xs ${isActive ? "font-bold text-brand-plum" : "text-gray-400"}`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Catalog Grid Showcase */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Category Meta */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-brand-charcoal font-sans">
                {activeCategory.name}
              </h2>
              <p className="text-sm text-gray-500 font-light leading-relaxed max-w-[700px]">
                {activeCategory.desc}
              </p>
            </div>

            {/* Products / Swatches Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
              
              {/* Normal product items */}
              {activeCategory.images.map((prod, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-[#EBEBE9] rounded-[10px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
                >
                  {/* Item Image Container - Aspect ratio locked to perfect square */}
                  <div className="w-full aspect-square overflow-hidden relative flex-shrink-0 bg-gray-50">
                    <img 
                      src={prod.path} 
                      alt={prod.title} 
                      className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm shadow-sm border border-gray-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-4 h-4 text-brand-charcoal" />
                    </div>
                  </div>

                  {/* Metadata details - Clean banner directly underneath, no white space gaps */}
                  <div className="py-3 text-center bg-white border-t border-[#EBEBE9]">
                    <h4 className="font-bold text-xs sm:text-sm text-brand-charcoal truncate font-sans group-hover:text-brand-plum transition-colors uppercase tracking-widest">
                      {prod.title}
                    </h4>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
