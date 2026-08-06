import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { galleryData } from '../data';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'Tümü' },
    { id: 'hair', label: 'Saç Kesimi' },
    { id: 'color', label: 'Boya & Ombre' },
    { id: 'makeup', label: 'Makyaj' },
    { id: 'bridal', label: 'Gelin' },
  ];

  const filteredGallery = filter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.cat === filter);

  useEffect(() => {
    if (gridRef.current) {
      const items = gridRef.current.children;
      gsap.fromTo(items, 
        { opacity: 0, scale: 0.9, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out' }
      );
    }
  }, [filter]);

  return (
    <section ref={sectionRef} id="gallery" className="py-32 bg-zinc-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold">Galeri</span>
          <h2 className="serif-font text-5xl md:text-6xl mt-4 text-white font-bold">Sanatsal Çalışmalarımız</h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-6"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-8 py-3 text-xs uppercase tracking-[0.2em] transition-all border ${
                filter === cat.id
                  ? 'bg-[#D4AF37] border-[#D4AF37] text-zinc-900 font-bold'
                  : 'bg-transparent border-zinc-700 text-zinc-400 hover:border-[#D4AF37] hover:text-[#D4AF37]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden aspect-[4/5] bg-zinc-800 rounded-sm cursor-pointer"
            >
              <img
                src={item.img}
                alt={`Gallery ${item.cat}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-zinc-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm font-medium border border-[#D4AF37] px-6 py-3">
                  {categories.find(c => c.id === item.cat)?.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
