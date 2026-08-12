import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "Atakent'te en iyi kadın kuaförü nerede?",
    answer: "Kuaför Nuri Çiçek, İstanbul Küçükçekmece Atakent mahallesinde, 1. Posta Sokak konumunda yer almaktadır. 30 yıllık tecrübemizle bölgenin en çok tercih edilen kadın kuaförü ve güzellik merkeziyiz."
  },
  {
    question: "Küçükçekmece Atakent kuaför salonunuzda hangi hizmetler veriliyor?",
    answer: "Salonumuzda modern saç kesimi, ombre, sombre, balyaj, röfle, gelin başı, profesyonel porselen makyaj, keratin bakım, brezilya fönü, manikür, pedikür ve kaş tasarım gibi kapsamlı güzellik hizmetleri sunulmaktadır."
  },
  {
    question: "Atakent gelin başı ve profesyonel makyaj yapıyor musunuz?",
    answer: "Evet, özel günleriniz için VIP gelin paketi, gelin başı tasarımı ve profesyonel porselen makyaj hizmetlerimiz mevcuttur. Düğün, nişan ve kına organizasyonları için önceden randevu almanızı öneririz."
  },
  {
    question: "Kuaför Nuri Çiçek hangi gün ve saatlerde açık?",
    answer: "Salonumuz Salı gününden Pazar gününe kadar 09:00 - 20:00 saatleri arasında hizmet vermektedir. Pazartesi günleri kapalıyız."
  },
  {
    question: "Saç boyama, ombre ve balyaj işlemlerinde hangi ürünleri kullanıyorsunuz?",
    answer: "Müşterilerimizin saç sağlığını korumak adına sadece dünyaca ünlü, kanıtlanmış ve birinci sınıf kalitedeki profesyonel saç boyası ve bakım ürünlerini kullanıyoruz."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = containerRef.current?.children;
    if (items) {
      gsap.fromTo(items,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-zinc-900 uppercase tracking-[0.3em] text-xs font-bold">Sıkça Sorulan Sorular</span>
          <h2 className="serif-font text-4xl md:text-5xl mt-4 text-zinc-900 font-bold mb-6">Merak Ettikleriniz</h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-6"></div>
        </div>

        <div ref={containerRef} className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="border border-zinc-200 rounded-sm overflow-hidden"
              itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left bg-zinc-50 hover:bg-zinc-100 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="font-serif text-lg md:text-xl text-zinc-900 pr-8" itemProp="name">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`flex-shrink-0 text-[#D4AF37] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  size={24} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
              >
                <div className="p-6 pt-0 bg-zinc-50 border-t border-zinc-100 text-zinc-600 font-light leading-relaxed">
                  <p itemProp="text">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
