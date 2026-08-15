import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MapPin, Scissors, Sparkles, Star } from 'lucide-react';

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

  const renderContent = () => {
    switch (keyword) {
      case 'Bayan Kuaförü':
        return (
          <>
            <p>
              Güzellik ve bakım rutininizi sıradanlıktan çıkarıp bir sanat eserine dönüştürmek için <strong>İstanbul {location}</strong> bölgesinde hizmetinizdeyiz. Profesyonel, güvenilir ve dünya trendlerini yakından takip eden bir <strong>bayan kuaför salonu</strong> arayışındaysanız, Kuaför Nuri Çiçek olarak 30 yılı aşkın tecrübemizle en doğru adres biziz. 
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-sm hover:shadow-lg transition-shadow duration-300">
                <Scissors className="text-[#D4AF37] w-10 h-10 mb-4" />
                <h3 className="serif-font text-2xl text-zinc-900 font-bold mb-3">Kusursuz Saç Boyama</h3>
                <p className="text-base">
                  <strong>{location} röfle, ombre, sombre ve buz sarısı balyaj</strong> gibi yüksek teknik ve uzmanlık gerektiren renklendirme işlemlerinde bölgenin referans noktasıyız. Saçlarınızı yıpratmadan, en sağlıklı formda hayalinizdeki tona ulaştırıyoruz.
                </p>
              </div>
              <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-sm hover:shadow-lg transition-shadow duration-300">
                <Sparkles className="text-[#D4AF37] w-10 h-10 mb-4" />
                <h3 className="serif-font text-2xl text-zinc-900 font-bold mb-3">Gelin Başı Yapan Yerler</h3>
                <p className="text-base">
                  Düğün, nişan ve özel davetleriniz için <strong>VIP Gelin Başı ve Porselen Makyaj</strong> paketlerimizle {location} bölgesinin en çok tercih edilen salonlarından biriyiz. Dünyaca ünlü Kryolan, Mac ve Dior gibi birinci sınıf makyaj ürünleriyle kalıcı güzellik sunuyoruz.
                </p>
              </div>
            </div>
            
            <h3 className="serif-font text-3xl text-zinc-900 font-bold mb-4 mt-8">Bizi Öne Çıkaran Farkımız</h3>
            <p>
              Birinci sınıf dünya markalarından seçilen ürünlerimiz (Wella, L'Oréal Professionnel, Schwarzkopf, Kerastase), işlemler sırasında görebileceği hasarı sıfıra indirir. Ayrıca <strong>keratin bakım, brezilya fönü, saç detoksu</strong> uygulamalarımızla saçlarınıza ipeksi dokusunu geri kazandırıyoruz. {location} merkezde güvenle tercih edebileceğiniz salonumuzda üst düzey hijyen standartlarıyla çalışıyoruz.
            </p>
          </>
        );

      case 'Kadın Kuaförü':
        return (
          <>
            <p>
              İmajınızı baştan yaratmak ve kendinizi şımartmak için <strong>İstanbul {location}</strong> bölgesinde yer alan modern güzellik merkezimize davetlisiniz. Yenilikçi saç tasarımları ve cilt dostu ürünlerle çalışan <strong>profesyonel kadın kuaförü</strong> arıyorsanız, Kuaför Nuri Çiçek olarak uzman kadromuzla buradayız.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-sm hover:shadow-lg transition-shadow duration-300">
                <Scissors className="text-[#D4AF37] w-10 h-10 mb-4" />
                <h3 className="serif-font text-2xl text-zinc-900 font-bold mb-3">Modern Kadın Saç Kesimi</h3>
                <p className="text-base">
                  Yüz hatlarınıza en uygun <strong>kadın saç kesim</strong> modellerini belirliyor, en trend katlı kesim, bob ve lob modellerini ustalıkla uyguluyoruz. Sadece kesim değil, {location} ombre ve kişiye özel renklendirme servislerimizle imajınızı tamamlıyoruz.
                </p>
              </div>
              <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-sm hover:shadow-lg transition-shadow duration-300">
                <Sparkles className="text-[#D4AF37] w-10 h-10 mb-4" />
                <h3 className="serif-font text-2xl text-zinc-900 font-bold mb-3">Makyaj & Özel Gün Tasarımı</h3>
                <p className="text-base">
                  Düğün, kına, mezuniyet ve özel davetler için tasarladığımız göz alıcı saç modelleri ve <strong>profesyonel gece makyajı</strong> ile kusursuz görünmenizi sağlıyoruz. Teninize tam uyum sağlayan cilt alt tonu analizlerimizle kalıcı bir güzellik inşa ediyoruz.
                </p>
              </div>
            </div>
            
            <h3 className="serif-font text-3xl text-zinc-900 font-bold mb-4 mt-8">Kaliteden Ödün Vermeyen Anlayış</h3>
            <p>
              Salonumuzda her uygulama, sizin beklentileriniz ve saçınızın yapısı analiz edilerek başlar. Saçınızın ihtiyaç duyduğu nemi ve parlaklığı sağlayan <strong>bakım ritüellerimiz (Keratin, Botox)</strong> ile {location} bölgesinde farklılık yaratıyoruz. Kullanılan her ekipman tek kullanımlık steril paketlerden çıkarılmakta ve sağlığınız her şeyin önünde tutulmaktadır.
            </p>
          </>
        );

      case 'Kuaför':
      default:
        return (
          <>
            <p>
              Saç tasarımının ve güzellik trendlerinin kalbi <strong>İstanbul {location}</strong> bölgesinde atıyor. Uzun yılların tecrübesini güncel saç modasıyla harmanlayan <strong>en iyi kuaför</strong> salonumuzda, sizlere baştan aşağı yenilenme fırsatı sunuyoruz. Kuaför Nuri Çiçek markası olarak önceliğimiz; kaliteden ödün vermeden hayalinizdeki görünüme ulaşmanızı sağlamaktır.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-sm hover:shadow-lg transition-shadow duration-300">
                <Scissors className="text-[#D4AF37] w-10 h-10 mb-4" />
                <h3 className="serif-font text-2xl text-zinc-900 font-bold mb-3">Saç Tasarımı ve Renklendirme</h3>
                <p className="text-base">
                  Doğal geçişli <strong>ombre, sombre ve röfle</strong> uygulamalarında saçlarınızı yormadan en canlı sonuçları elde ediyoruz. {location} bölgesinin lider saç renklendirme salonu olarak, dünya standartlarında orijinal boya ve açıcı ürünler kullanmaktayız.
                </p>
              </div>
              <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-sm hover:shadow-lg transition-shadow duration-300">
                <Sparkles className="text-[#D4AF37] w-10 h-10 mb-4" />
                <h3 className="serif-font text-2xl text-zinc-900 font-bold mb-3">Gelin & Davet Hazırlığı</h3>
                <p className="text-base">
                  Hayatınızın en mutlu gününe adım atarken, <strong>profesyonel saç ve porselen makyaj</strong> uygulamalarımızla ışıltınızı ortaya çıkarıyoruz. Özel saç aksesuarları ve gün boyu kalıcı makyaj tekniklerimizle {location} ve çevresinin favori salonuyuz.
                </p>
              </div>
            </div>
            
            <h3 className="serif-font text-3xl text-zinc-900 font-bold mb-4 mt-8">Neden Kuaför Nuri Çiçek?</h3>
            <p>
              Çünkü biz işimizi sevgiyle ve tutkuyla yapıyoruz. Dünyaca ünlü kozmetik devlerinin ürünlerini (Wella, Schwarzkopf, L'Oréal) tecrübemizle birleştiriyoruz. <strong>Brezilya fönü, saç botoksu ve onarıcı bakımlarımızla</strong> hasar görmüş saçlarınıza yeniden hayat veriyoruz. {location} bölgesinde kolay erişilebilir konumumuz sayesinde siz değerli misafirlerimize vip standartlarda hizmet sunuyoruz.
            </p>
          </>
        );
    }
  };

  return (
    <section id="seo-content" ref={sectionRef} className="py-24 bg-zinc-50 border-b border-zinc-200 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div ref={containerRef} className="bg-white p-10 md:p-16 shadow-2xl border border-zinc-100 rounded-sm">
          <div className="flex items-center justify-center gap-3 mb-6 text-[#D4AF37]">
            <Star size={28} />
            <span className="text-zinc-900 uppercase tracking-[0.2em] text-sm font-bold">Profesyonel Güzellik Merkezi</span>
          </div>
          
          <h2 className="serif-font text-3xl md:text-5xl text-center text-zinc-900 mb-10 font-bold leading-tight">
            {location} Bölgesinin En İyi <br /> {keyword} Deneyimi
          </h2>
          
          <div className="space-y-8 text-zinc-600 font-light leading-relaxed text-lg text-justify">
            {renderContent()}

            <div className="mt-12 p-8 bg-zinc-900 text-white rounded-sm text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]"></div>
              <MapPin className="text-[#D4AF37] w-12 h-12 mx-auto mb-4" />
              <h3 className="serif-font text-2xl font-bold mb-3">Sizleri Salonumuza Bekliyoruz</h3>
              <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
                {location} merkezde, ulaşımı son derece kolay olan salonumuza Google Haritalar (Maps) üzerinden tek tıkla yol tarifi alabilirsiniz. Geniş otopark alanımız ve rahat bekleme salonumuzla hizmetinizdeyiz. Size özel zaman ayırabilmemiz için randevu almayı unutmayın.
              </p>
              <a href="#booking" className="inline-block px-10 py-4 bg-[#D4AF37] text-zinc-900 text-sm uppercase tracking-widest font-bold hover:bg-white transition-colors duration-300">
                Randevu ve Fiyat Bilgisi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
