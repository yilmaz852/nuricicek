import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Anasayfa', href: '#hero' },
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Hizmetler', href: '#services' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'İletişim', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a href="#hero" className={`luxury-font text-2xl font-bold ${isScrolled ? 'text-zinc-900' : 'text-white'}`}>
          Nuri Çiçek
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm tracking-widest uppercase font-medium transition-colors hover:text-[#D4AF37] ${
                isScrolled ? 'text-zinc-600' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            className={`px-6 py-2.5 text-sm uppercase tracking-widest transition-all border ${
              isScrolled
                ? 'bg-zinc-900 text-white border-zinc-900 hover:bg-white hover:text-zinc-900 hover:border-zinc-900'
                : 'bg-white text-zinc-900 border-white hover:bg-transparent hover:text-white'
            }`}
          >
            Randevu Al
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-zinc-900' : 'text-white'} size={28} />
          ) : (
            <Menu className={isScrolled ? 'text-zinc-900' : 'text-white'} size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden"
          >
            <div className="flex flex-col py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-zinc-800 text-lg py-2 border-b border-zinc-100 uppercase tracking-wide font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-rose-500 text-white text-center py-3 uppercase tracking-widest mt-4 hover:bg-rose-600 transition-colors"
              >
                Randevu Al
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
