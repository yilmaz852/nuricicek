import { useState, useEffect, useRef, FormEvent } from 'react';
import gsap from 'gsap';
import bgAppointment from '../assets/images/bg_appointment_1784790432579.jpg';

export default function Appointment() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const sectionRef = useRef<HTMLElement>(null);
  const formBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(formBoxRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      }
    );
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section ref={sectionRef} id="booking" className="py-32 relative bg-zinc-100">
      <div className="absolute inset-0 z-0">
        <img 
          src={bgAppointment}
          alt="Spa/Salon Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div ref={formBoxRef} className="bg-white p-10 md:p-16 shadow-2xl border border-zinc-200">
          <div className="text-center mb-12">
            <span className="text-zinc-900 uppercase tracking-[0.3em] text-xs font-bold">Online Rezervasyon</span>
            <h2 className="serif-font text-5xl mt-4 text-zinc-900 font-bold">Randevu Al</h2>
            <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>

          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-3xl font-serif text-zinc-900 mb-4">Randevunuz Alındı!</h3>
              <p className="text-zinc-500 font-light text-lg">En kısa sürede onay için sizinle iletişime geçeceğiz.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-10 px-8 py-3 border border-zinc-900 text-sm uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-colors"
              >
                Yeni Randevu
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Adınız Soyadınız *</label>
                  <input required type="text" className="w-full border-b border-zinc-300 py-3 text-lg font-serif bg-transparent focus:border-[#D4AF37] focus:outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Telefon Numaranız *</label>
                  <input required type="tel" className="w-full border-b border-zinc-300 py-3 text-lg font-serif bg-transparent focus:border-[#D4AF37] focus:outline-none transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2 md:col-span-1">
                  <label className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Hizmet *</label>
                  <select required className="w-full border-b border-zinc-300 py-3 text-lg font-serif bg-transparent focus:border-[#D4AF37] focus:outline-none transition-colors appearance-none">
                    <option value="" disabled selected>Seçiniz</option>
                    <option value="sac">Saç Kesimi / Boya</option>
                    <option value="makyaj">Makyaj</option>
                    <option value="gelin">Gelin Paketi</option>
                    <option value="bakim">Bakım (Manikür vs.)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Tarih *</label>
                  <input required type="date" className="w-full border-b border-zinc-300 py-3 text-lg font-serif bg-transparent focus:border-[#D4AF37] focus:outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Saat *</label>
                  <input required type="time" className="w-full border-b border-zinc-300 py-3 text-lg font-serif bg-transparent focus:border-[#D4AF37] focus:outline-none transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Notunuz (Opsiyonel)</label>
                <textarea rows={3} className="w-full border-b border-zinc-300 py-3 text-lg font-serif bg-transparent focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"></textarea>
              </div>

              <div className="pt-6 text-center">
                <button 
                  disabled={status === 'submitting'}
                  type="submit" 
                  className="w-full md:w-auto px-16 py-5 bg-zinc-900 text-white text-sm uppercase tracking-[0.2em] hover:bg-[#D4AF37] transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Gönderiliyor...' : 'Randevuyu Onayla'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
