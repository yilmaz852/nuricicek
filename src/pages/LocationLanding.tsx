import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from '../components/Navbar';
import LocationHero from '../components/LocationHero';
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

    // Dynamic Canonical URL
    const slug = `${location.toLowerCase().replace(/ç/g, 'c').replace(/ş/g, 's').replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ö/g, 'o').replace(/ı/g, 'i')}-${keyword.toLowerCase().replace(/ç/g, 'c').replace(/ş/g, 's').replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ö/g, 'o').replace(/ı/g, 'i').replace(/\s+/g, '-')}`;
    const canonicalUrl = `https://www.nuricicek.com/${slug}`;
    
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Schema.org Structured Data
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "HairSalon",
      "name": `Kuaför Nuri Çiçek - ${location} ${keyword}`,
      "image": "https://www.nuricicek.com/assets/images/hero_salon_1784790292526.jpg",
      "url": canonicalUrl,
      "telephone": "+905321234567", // Update to real number if known
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Atakent 1. Posta Sokak",
        "addressLocality": location,
        "addressRegion": "İstanbul",
        "addressCountry": "TR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 41.0422,
        "longitude": 28.7770
      },
      "priceRange": "$$",
      "description": description
    };

    let scriptTag = document.querySelector('#seo-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'seo-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

    return () => {
      // Clean up dynamic schema if needed (or just let it overwrite next time)
      if (scriptTag) scriptTag.remove();
    };
  }, [location, keyword]);

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
      <LocationHero location={location} keyword={keyword} />
      <SeoContentBlock location={location} keyword={keyword} />
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
