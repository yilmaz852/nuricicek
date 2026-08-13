import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MapPin } from 'lucide-react';

interface SeoContentBlockProps {
  location: string;
  keyword: string;
}

export default function SeoContentBlock({ location, keyword }: SeoContentBlockProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = containerRef.current?.children;
      if (elements) {
        gsap.fromTo(elements, 
          { y: 30, opacity: 0 }, 
          {
            y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            }
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-zinc-100 border-b border-zinc-200 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div ref={containerRef} className="bg-white p-10 md:p-14 shadow-xl border border-zinc-200 rounded-sm">
          <div className="flex items-center justify-center gap-3 mb-6 text-[#D4AF37]">
            <MapPin size={28} />
            <span className="text-zinc-900 uppercase tracking-[0.2em] text-sm font-bold">Yerel Rehber</span>
          </div>
          
          <h1 className="serif-font text-3xl md:text-4xl text-center text-zinc-900 mb-8 font-bold leading-tight">
            En İyi {location} {keyword} Arayışınız İçin <br /> Doğru Adres: Kuaför Nuri Çiçek
          </h1>
          
          <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-lg">
            <p>
              İstanbul {location} bölgesinde profesyonel, güvenilir ve trendleri yakından takip eden bir <strong>{keyword.toLowerCase()}</strong> arıyorsanız, Kuaför Nuri Çiçek olarak 30 yılı aşkın tecrübemizle yanınızdayız. Güzellik vizyonumuz, sadece bir işlem yapmak değil; yüz hatlarınıza, yaşam tarzınıza ve ten renginize en uygun tasarımı ortaya çıkarmaktır.
            </p>
            
            <p>
              Özellikle <strong className="text-zinc-800">saç kesimi, ombre, sombre, bebek kumralı, buz sarısı balyaj</strong> gibi uzmanlık gerektiren renklendirme işlemlerinde bölgenin referans noktasıyız. Kullanılan malzemelerin birinci sınıf dünya markalarından seçilmesi, saçlarınızın yıpranmadan en sağlıklı şekilde istenen tona ulaşmasını sağlar. Ayrıca keratin botox ve brezilya fönü gibi bakımlarla saçlarınıza eski canlılığını kazandırıyoruz.
            </p>
            
            <p>
              Düğün, nişan ve özel davetleriniz için hazırladığımız <strong>VIP Gelin Başı ve Porselen Makyaj</strong> paketlerimizle en özel gününüzde kusursuz görünmenizi sağlıyoruz. <strong className="text-zinc-800">Atakent 1. Posta Sokak</strong> üzerindeki kolay ulaşılabilir merkezi konumumuz sayesinde hem {location} içinden hem de çevre semtlerden gelen misafirlerimiz için konforlu bir deneyim sunuyoruz.
            </p>
            
            <div className="mt-8 p-6 bg-zinc-50 border border-zinc-100 rounded-sm text-center">
              <h3 className="serif-font text-xl text-zinc-900 font-semibold mb-3">Kolay Ulaşım ve Google Haritalar Konumu</h3>
              <p className="text-base text-zinc-500 mb-4">
                Google Haritalar (Maps) üzerinden yol tarifi alarak salonumuza kolayca ulaşabilir, rahat otopark imkanımızdan faydalanabilirsiniz. Randevulu sistemle çalıştığımız için beklemeden hizmet alırsınız.
              </p>
              <a href="#booking" className="inline-block px-8 py-3 bg-[#D4AF37] text-white text-sm uppercase tracking-widest font-semibold hover:bg-zinc-900 transition-colors duration-300">
                Hemen Randevu Alın
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
