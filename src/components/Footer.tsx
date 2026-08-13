import { ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-24 pb-12 border-t border-zinc-900 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="luxury-font text-3xl text-white mb-6">KUAFÖR NURİ ÇİÇEK</h3>
            <p className="text-sm leading-relaxed mb-6 font-light">
              Atakent ve Küçükçekmece'nin önde gelen kadın kuaförü ve güzellik merkezi. Profesyonel saç kesimi, ombre, makyaj ve gelin saçı hizmetleriyle sanatın saçla buluştuğu nokta.
            </p>
          </div>
          
          <div>
            <h4 className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-bold mb-6">Hızlı Menü</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#hero" className="hover:text-white transition-colors">Anasayfa</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Hakkımızda</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Hizmetler</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Galeri</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-bold mb-6">Hizmetler</h4>
            <ul className="space-y-4 text-sm font-light">
              <li>Saç Kesimi & Şekillendirme</li>
              <li>Renk & Balyaj</li>
              <li>Gelin Paketi</li>
              <li>Profesyonel Makyaj</li>
              <li>El & Ayak Bakımı</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-bold mb-6">Yasal</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kullanım Koşulları</a></li>
              <li><a href="#" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</a></li>
            </ul>
            <h4 className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-bold mb-6 mt-8">Bölge & Lokasyon</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="/atakent-kuafor" className="hover:text-white transition-colors">Atakent Kuaför</a></li>
              <li><a href="/atakent-kadin-kuaforu" className="hover:text-white transition-colors">Atakent Kadın Kuaförü</a></li>
              <li><a href="/atakent-bayan-kuaforu" className="hover:text-white transition-colors">Atakent Bayan Kuaförü</a></li>
              <li><a href="/kucukcekmece-kuafor" className="hover:text-white transition-colors">Küçükçekmece Kuaför</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-600 tracking-wider">
          <p>&copy; {new Date().getFullYear()} Kuaför Nuri Çiçek. Tüm Hakları Saklıdır.</p>
          <p className="mt-4 md:mt-0 uppercase">Designed for Excellence</p>
        </div>
      </div>

      <button 
        onClick={scrollToTop}
        className="absolute bottom-12 right-6 md:right-12 w-14 h-14 border border-zinc-800 bg-zinc-900 hover:bg-[#D4AF37] hover:border-[#D4AF37] text-white flex items-center justify-center transition-all duration-500"
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} strokeWidth={1} />
      </button>
    </footer>
  );
}
