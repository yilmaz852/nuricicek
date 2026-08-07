import { useEffect, useRef, ElementType } from 'react';
import gsap from 'gsap';
import { Scissors, Paintbrush, Wind, Sparkles, Brush, Heart, Hand, Eye } from 'lucide-react';
import { servicesData } from '../data';

const iconMap: Record<string, ElementType> = {
  Scissors, Paintbrush, Wind, Sparkles, Brush, Heart, Hand, Eye
};

interface ServiceCardProps {
  key?: string | number;
  service: any;
  index: number;
  IconComponent: ElementType;
}

function ServiceCard({ service, index, IconComponent }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(card,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
        delay: (index % 4) * 0.1
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group p-8 border border-zinc-200 bg-zinc-50 hover:bg-white text-center flex flex-col items-center transition-all duration-500 rounded-sm hover:shadow-2xl"
    >
      <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:bg-[#D4AF37] group-hover:text-zinc-900 transition-colors duration-500 shadow-sm">
        {IconComponent && <IconComponent size={28} strokeWidth={1.5} />}
      </div>
      <h3 className="text-lg font-bold text-zinc-900 mb-3 uppercase tracking-wider">{service.title}</h3>
      <p className="text-zinc-500 text-sm mb-6 flex-grow leading-relaxed font-light">{service.desc}</p>
      <div className="mt-auto">
        <a href="#booking" className="text-xs uppercase tracking-widest font-semibold text-[#D4AF37] hover:text-zinc-900 transition-colors">
          Randevu Al &rarr;
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 80%' }
      }
    );
  }, []);

  return (
    <section id="services" className="py-32 bg-zinc-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div ref={headerRef} className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-zinc-900 uppercase tracking-[0.3em] text-xs font-bold">Hizmetlerimiz</span>
          <h2 className="serif-font text-4xl md:text-5xl lg:text-6xl mt-4 text-zinc-900 font-bold mb-6">Atakent'te Lüks & Konfor</h2>
          <p className="text-zinc-600 font-light text-lg">
            Küçükçekmece Atakent mahallesindeki modern salonumuzda kadınlara özel saç kesimi, ombre, profesyonel makyaj ve gelin başı gibi geniş bir yelpazede hizmet sunuyoruz.
          </p>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return <ServiceCard key={service.id} service={service} index={index} IconComponent={IconComponent} />;
          })}
        </div>
      </div>
    </section>
  );
}
