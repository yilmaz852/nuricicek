import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';

import heroImage from '../assets/images/hero_salon_1784790292526.jpg';

interface LocationHeroProps {
  location: string;
  keyword: string;
}

export default function LocationHero({ location, keyword }: LocationHeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry Animation
      gsap.fromTo(overlayRef.current, { scaleY: 1 }, { scaleY: 0, transformOrigin: 'top', duration: 1.5, ease: 'power4.inOut' });
      gsap.fromTo(imageRef.current, { scale: 1.2 }, { scale: 1, duration: 2, ease: 'power3.out' });
      
      const texts = textRef.current?.children;
      if (texts) {
        gsap.fromTo(texts, 
          { y: 100, opacity: 0, clipPath: 'inset(100% 0 0 0)' }, 
          { y: 0, opacity: 1, clipPath: 'inset(0% 0 0 0)', duration: 1.2, stagger: 0.2, ease: 'power4.out', delay: 0.8 }
        );
      }

      // Parallax on Scroll
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });

      gsap.to(textRef.current, {
        yPercent: 50,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-900">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={overlayRef} className="absolute inset-0 bg-zinc-900 z-20"></div>
        <img
          ref={imageRef}
          src={heroImage}
          alt={`Kuaför Nuri Çiçek - ${location} ${keyword}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-zinc-900/70 z-10"></div>
      </div>

      <div ref={textRef} className="relative z-30 text-center px-6 max-w-5xl mx-auto mt-20 flex flex-col items-center">
        <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm font-bold mb-6 block" style={{ clipPath: 'inset(0 0 0 0)' }}>
          KUAFÖR NURİ ÇİÇEK
        </span>
        <h1 className="luxury-font text-4xl md:text-5xl lg:text-7xl text-white mb-6 tracking-wide drop-shadow-lg leading-tight" style={{ clipPath: 'inset(0 0 0 0)' }}>
          {location.toUpperCase()} <br/> {keyword.toUpperCase()}
        </h1>
        
        <h2 className="text-zinc-300 text-sm md:text-base tracking-[0.1em] uppercase mb-12 font-light max-w-2xl mx-auto leading-relaxed" style={{ clipPath: 'inset(0 0 0 0)' }}>
          İstanbul {location} bölgesinde profesyonel {keyword.toLowerCase()} arıyorsanız, 30 yıllık tecrübemizle yanınızdayız. Güzellikte mükemmeliyete giden yol.
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full" style={{ clipPath: 'inset(0 0 0 0)' }}>
          <a 
            href="#booking" 
            className="w-full sm:w-auto px-10 py-4 bg-[#D4AF37] text-zinc-900 text-sm uppercase tracking-widest hover:bg-white transition-colors duration-300 font-semibold"
          >
            Randevu Alın
          </a>
          <a 
            href="#seo-content" 
            className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/50 text-white text-sm uppercase tracking-widest hover:bg-white/10 hover:border-white transition-colors duration-300"
          >
            Hizmetlerimizi İnceleyin
          </a>
        </div>
      </div>

      <a 
        href="#seo-content"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce z-30"
      >
        <ChevronDown size={32} strokeWidth={1} />
      </a>
    </section>
  );
}
