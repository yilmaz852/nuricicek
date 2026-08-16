import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import { blogPosts } from '../data/blogPosts';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (!post) return;

    const title = `${post.title} | Kuaför Nuri Çiçek Blog`;
    const description = post.excerpt;
    
    document.title = title;
    document.querySelector('meta[name="title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    
    const canonicalUrl = `https://www.nuricicek.com/blog/${post.slug}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Add Article schema
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "image": post.image,
      "datePublished": "2026-08-01T08:00:00+08:00", // Using a static approximate date for valid schema
      "dateModified": "2026-08-01T08:00:00+08:00",
      "author": [{
          "@type": "Person",
          "name": post.author,
          "url": "https://www.nuricicek.com/"
        }],
      "publisher": {
        "@type": "Organization",
        "name": "Kuaför Nuri Çiçek",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.nuricicek.com/assets/images/hero_salon_1784790292526.jpg"
        }
      },
      "description": post.excerpt
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
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="font-sans text-zinc-800 bg-zinc-50 relative min-h-screen flex flex-col pb-[54px] md:pb-0">
      <Navbar />
      
      {/* Article Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 relative bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src={post.image} 
          alt={post.title} 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="container mx-auto max-w-4xl relative z-20 text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-widest">
            <ArrowLeft size={16} /> Blog'a Dön
          </Link>
          <h1 className="serif-font text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-300 font-medium uppercase tracking-wider">
            <span className="flex items-center gap-2"><User size={16} className="text-[#D4AF37]" /> {post.author}</span>
            <span className="flex items-center gap-2"><Calendar size={16} className="text-[#D4AF37]" /> {post.date}</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#D4AF37]" /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <article className="text-lg leading-relaxed text-zinc-700 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-zinc-900 [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:font-serif [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-3 [&>ul]:mb-8">
            {post.content}
          </article>

          <div className="mt-16 pt-8 border-t border-zinc-200">
            <div className="flex items-center gap-3 flex-wrap">
              <Tag size={20} className="text-zinc-400" />
              {post.tags.map(tag => (
                <span key={tag} className="bg-zinc-100 text-zinc-600 px-4 py-2 text-sm font-medium uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
}
