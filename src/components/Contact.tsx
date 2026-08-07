import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MapPin, Phone, Instagram, Facebook, Mail } from 'lucide-react';

export default function Contact() {
  const currentHour = new Date().getHours();
  const currentDay = new Date().getDay(); // 0 is Sunday
  const sectionRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  const isOpen = (currentDay !== 1 && currentHour >= 9 && currentHour < 20);

  useEffect(() => {
    gsap.fromTo(infoRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1, x: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-32 bg-zinc-50 border-t border-zinc-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <span className="text-zinc-900 uppercase tracking-[0.3em] text-xs font-bold">İletişim & Konum</span>
          <h2 className="serif-font text-5xl md:text-6xl mt-4 text-zinc-900 font-bold">Bize Ulaşın</h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div ref={infoRef} className="space-y-12">
            <div className="bg-white p-10 border border-zinc-200 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-serif text-3xl text-zinc-900 font-bold">Çalışma Saatleri</h3>
                <span className={`px-4 py-2 text-xs font-bold tracking-widest uppercase border ${isOpen ? 'border-green-500 text-green-600' : 'border-red-500 text-red-600'}`}>
                  {isOpen ? 'ŞU AN AÇIK' : 'ŞU AN KAPALI'}
                </span>
              </div>
              <ul className="space-y-4 text-lg text-zinc-600 font-light">
                <li className="flex justify-between border-b border-zinc-100 pb-4">
                  <span>Salı - Pazar</span>
                  <span className="font-medium text-zinc-900">09:00 - 20:00</span>
                </li>
                <li className="flex justify-between pt-2">
                  <span>Pazartesi</span>
                  <span className="font-medium text-red-600">Kapalı</span>
                </li>
              </ul>
            </div>

            <div className="space-y-8 pl-4 border-l border-[#D4AF37]">
              <div className="flex items-start gap-6">
                <div className="text-[#D4AF37] shrink-0 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-2 uppercase tracking-widest text-sm">Adres</h4>
                  <p className="text-zinc-500 text-lg leading-relaxed font-light">
                    Atakent, 1. Posta Sk 16 J<br/>
                    34307 Küçükçekmece / İstanbul
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="text-[#D4AF37] shrink-0 mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-2 uppercase tracking-widest text-sm">Telefon</h4>
                  <p className="text-zinc-500 text-lg leading-relaxed font-light">0538 731 66 99</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="text-[#D4AF37] shrink-0 mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-2 uppercase tracking-widest text-sm">Google Haritalar</h4>
                  <a href="https://maps.app.goo.gl/WRZ5mSzUCUQFcW5D9?g_st=ac" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-[#D4AF37] transition-colors text-lg leading-relaxed font-light break-all">Profilimizi İnceleyin</a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-bold text-zinc-900 mb-6 uppercase tracking-widest text-sm">Bizi Takip Edin</h4>
              <div className="flex gap-6">
                <a href="#" className="w-12 h-12 border border-zinc-300 flex items-center justify-center text-zinc-900 hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 border border-zinc-300 flex items-center justify-center text-zinc-900 hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] transition-all">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[600px] bg-zinc-200 overflow-hidden border border-zinc-200">
            <iframe 
              src="https://maps.google.com/maps?q=Atakent,+1.+Posta+Sk+16+J,+34307+Küçükçekmece/İstanbul&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
