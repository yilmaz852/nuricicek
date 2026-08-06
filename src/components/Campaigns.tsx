import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { campaignsData } from '../data';

export default function Campaigns() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.children;
    if (cards) {
      gsap.fromTo(cards,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="campaigns" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <span className="text-zinc-900 uppercase tracking-[0.3em] text-xs font-bold">Fırsatlar</span>
          <h2 className="serif-font text-5xl md:text-6xl mt-4 text-zinc-900 font-bold">Özel Kampanyalar</h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-6"></div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {campaignsData.map((campaign) => (
            <div
              key={campaign.id}
              className="border border-zinc-200 p-12 relative bg-zinc-50 text-center hover:border-[#D4AF37] transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-zinc-900 text-[#D4AF37] px-6 py-2 text-xs font-bold tracking-[0.2em] uppercase shadow-lg">
                {campaign.badge}
              </span>
              <h3 className="serif-font text-3xl mb-4 text-zinc-900">{campaign.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-8 font-light">{campaign.desc}</p>
              
              <div className="pt-8 border-t border-zinc-200">
                <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">Son Geçerlilik</p>
                <p className="font-serif text-xl text-zinc-900 font-medium">{new Date(campaign.endDate).toLocaleDateString('tr-TR')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
