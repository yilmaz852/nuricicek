import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import { blogPosts } from '../data/blogPosts';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import salonInteriorImg from '../assets/images/salon_interior_1784790308663.jpg';

export default function BlogList() {
  useEffect(() => {
    const title = 'Blog & Güzellik Sırları | Kuaför Nuri Çiçek Atakent';
    const description = 'Saç bakımı, ombre, gelin başı ve güzellik trendleri hakkında uzman ipuçları. Atakent ve Küçükçekmece bölgesi için en güncel saç tasarımları.';
    
    document.title = title;
    document.querySelector('meta[name="title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    
    const canonicalUrl = 'https://www.nuricicek.com/blog';
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Add Blog schema
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Kuaför Nuri Çiçek Blog",
      "url": canonicalUrl,
      "description": description,
      "publisher": {
        "@type": "HairSalon",
        "name": "Kuaför Nuri Çiçek",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.nuricicek.com/assets/images/hero_salon_1784790292526.jpg"
        }
      }
    };

    let scriptTag = document.querySelector('#seo-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'seo-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-zinc-800 bg-zinc-50 relative min-h-screen flex flex-col pb-[54px] md:pb-0">
      <Navbar />
      
      {/* Blog Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 relative bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src={salonInteriorImg} 
          alt="Atakent Güzellik Merkezi" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="container mx-auto max-w-5xl relative z-20 text-center">
          <h1 className="serif-font text-4xl md:text-6xl font-bold mb-6">Blog & Güzellik Sırları</h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-light">
            Atakent'in uzmanından saç bakımı, renklendirme trendleri ve güzellik ipuçları.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 flex-grow">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white group cursor-pointer hover:shadow-2xl transition-all duration-300 border border-zinc-100 flex flex-col h-full">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-widest text-zinc-900">
                    {post.tags[0]}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4 font-medium uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                  </div>
                  
                  <h2 className="serif-font text-xl font-bold text-zinc-900 mb-4 group-hover:text-[#D4AF37] transition-colors leading-snug">
                    <Link to={`/blog/${post.slug}`} className="before:absolute before:inset-0">
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-zinc-600 font-light leading-relaxed text-sm flex-grow mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="text-[#D4AF37] font-bold text-sm uppercase tracking-widest flex items-center gap-2 mt-auto">
                    Devamını Oku <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
}
