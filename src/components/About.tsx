import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import interiorImage from '../assets/images/salon_interior_1784790308663.jpg';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text Reveal
      const elements = textContainerRef.current?.children;
      if (elements) {
        gsap.fromTo(elements, 
          { y: 50, opacity: 0 }, 
          { 
            y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
            }
          }
        );
      }

      // Image Parallax
      gsap.fromTo(imageRef.current,
        { scale: 1.2, y: -40 },
        {
          scale: 1, y: 20, ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div ref={textContainerRef} className="order-2 lg:order-1">
            <div className="mb-8 inline-block">
              <span className="text-zinc-900 uppercase tracking-[0.3em] text-xs font-bold">Hakkımızda</span>
              <div className="w-12 h-0.5 bg-[#D4AF37] mt-3"></div>
            </div>
            
            <h2 className="serif-font text-5xl md:text-6xl lg:text-7xl text-zinc-900 mb-10 leading-[1.1] font-bold">
              Sanatın ve Estetiğin <br/> Buluşma Noktası
            </h2>
            
            <p className="text-zinc-600 mb-8 leading-relaxed font-sans text-lg md:text-xl font-light">
              İstanbul Küçükçekmece Atakent mahallesinde yer alan Kuaför Nuri Çiçek, 30 yılı aşkın süredir güzellikte mükemmeliyeti hedefleyen bir vizyonla hizmet vermektedir. Modern teknikleri profesyonel dokunuşlarla birleştirerek, bölgenin en çok tercih edilen kadın kuaförü ve güzellik salonu olarak sizlere benzersiz bir deneyim sunuyoruz.
            </p>
            
            <p className="text-zinc-600 mb-12 leading-relaxed font-sans text-lg font-light">
              Amacımız sadece saç yapmak değil, aynı zamanda ruhunuza dokunan, kendinizi şımarttığınız ve stresten arındığınız sıcak, konforlu ve minimalist bir ortam yaratmaktır. Saç kesimi, ombre, balyaj ve profesyonel makyaj gibi birçok alanda uzman ekibimizle yanınızdayız.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-zinc-200">
              <div>
                <span className="block text-4xl serif-font text-zinc-900 mb-2 font-bold">15+</span>
                <span className="text-xs uppercase tracking-widest text-zinc-500">Yıl Deneyim</span>
              </div>
              <div>
                <span className="block text-4xl serif-font text-zinc-900 mb-2 font-bold">8K+</span>
                <span className="text-xs uppercase tracking-widest text-zinc-500">Mutlu Müşteri</span>
              </div>
              <div>
                <span className="block text-4xl serif-font text-zinc-900 mb-2 font-bold">10</span>
                <span className="text-xs uppercase tracking-widest text-zinc-500">Uzman Ekip</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[3/4] overflow-hidden shadow-2xl rounded-sm bg-zinc-100">
              <img 
                ref={imageRef}
                src={interiorImage}
                alt="Salonumuz İç Görünüm" 
                className="w-full h-full object-cover origin-center"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-zinc-900 p-8 shadow-2xl w-56 text-center hidden md:block">
              <p className="luxury-font text-2xl text-[#D4AF37]">EST. 2009</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
