/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './../components/Navbar';
import Hero from './../components/Hero';
import About from './../components/About';
import Services from './../components/Services';
import Gallery from './../components/Gallery';
import Testimonials from './../components/Testimonials';
import Appointment from './../components/Appointment';
import Contact from './../components/Contact';
import Footer from './../components/Footer';
import Faq from './../components/Faq';
import FloatingContact from './../components/FloatingContact';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
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
    <div className="font-sans text-zinc-800 bg-zinc-50 relative overflow-x-hidden pb-[54px] md:pb-0">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Faq />
      <Appointment />
      <Contact />
      <Footer />
      <FloatingContact />
    </div>
  );
}

