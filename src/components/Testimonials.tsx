import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { testimonialsData } from '../data';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = containerRef.current?.children;
    if (items) {
      gsap.fromTo(items,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="py-32 bg-zinc-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold">Yorumlar</span>
          <h2 className="serif-font text-5xl md:text-6xl mt-4 text-white font-bold">Müşterilerimiz Ne Diyor?</h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-6"></div>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t) => (
            <div key={t.id} className="p-10 border border-zinc-800 bg-zinc-800/50 relative hover:bg-zinc-800 transition-colors duration-500">
              {/* Quote Mark */}
              <div className="absolute top-6 right-6 text-6xl text-zinc-700 font-serif leading-none">"</div>
              
              <div className="flex text-[#D4AF37] mb-8">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-zinc-300 mb-10 italic serif-font text-lg leading-relaxed font-light">"{t.comment}"</p>
              
              <div className="flex items-center gap-4 border-t border-zinc-700 pt-6">
                <div className="w-14 h-14 rounded-full bg-zinc-700 flex items-center justify-center text-[#D4AF37] font-serif text-2xl uppercase">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm uppercase tracking-[0.1em]">{t.name}</h4>
                  <span className="text-xs text-zinc-500">Mutlu Müşteri</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
