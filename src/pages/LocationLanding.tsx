import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Appointment from '../components/Appointment';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Faq from '../components/Faq';
import SeoContentBlock from '../components/SeoContentBlock';

gsap.registerPlugin(ScrollTrigger);

interface LocationLandingProps {
  location: string;
  keyword: string;
}

export default function LocationLanding({ location, keyword }: LocationLandingProps) {
  useEffect(() => {
    const title = `Kuaför Nuri Çiçek | ${location} ${keyword} & Güzellik Merkezi`;
    const description = `İstanbul ${location} bölgesinde profesyonel ${keyword.toLowerCase()}, saç kesimi, ombre, balyaj, makyaj, gelin başı ve güzellik salonu hizmetleri. Kuaför Nuri Çiçek ile farkı hissedin.`;
    const keywords = `${location} ${keyword.toLowerCase()}, ${location} kuaför, ${location} kadın kuaförü, ${location} bayan kuaförü, ${location} güzellik merkezi, saç kesimi, ombre, sombre, balyaj, gelin başı, makyaj, brezilya fönü, Kuaför Nuri Çiçek`;

    document.title = title;
    document.querySelector('meta[name="title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', keywords);
    
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    
    document.querySelector('meta[property="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="twitter:description"]')?.setAttribute('content', description);
  }, [location]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="font-sans text-zinc-800 bg-zinc-50 relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <SeoContentBlock location={location} keyword={keyword} />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Faq />
      <Appointment />
      <Contact />
      <Footer />
    </div>
  );
}
