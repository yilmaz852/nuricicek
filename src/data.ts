import heroSalon from './assets/images/hero_salon_1784790292526.jpg';
import salonInterior from './assets/images/salon_interior_1784790308663.jpg';
import galleryHair from './assets/images/gallery_hair_1784790323911.jpg';
import galleryColor from './assets/images/gallery_color_1784790337960.jpg';
import galleryMakeup from './assets/images/gallery_makeup_1784790353516.jpg';
import galleryBridal from './assets/images/gallery_bridal_1784790368497.jpg';

export const servicesData = [
  { id: 'haircut', title: "Saç Kesimi", icon: "Scissors", desc: "Yüz hatlarınıza uygun, modern ve trend saç kesim modelleri." },
  { id: 'color', title: "Ombre & Sombre", icon: "Paintbrush", desc: "Kişiselleştirilmiş renk tasarımı, balyaj, ombre ve sombre işlemleri." },
  { id: 'styling', title: "Fön & Topuz", icon: "Wind", desc: "Brezilya fönü, kırık fön, kalıcı şekillendirme ve özel gün topuz modelleri." },
  { id: 'care', title: "Keratin & Bakım", icon: "Sparkles", desc: "Yıpranmış saçlar için onarıcı keratin botox ve saç bakımı." },
  { id: 'makeup', title: "Profesyonel Makyaj", icon: "Brush", desc: "Porselen makyaj, gece makyajı ve günlük profesyonel makyaj uygulamaları." },
  { id: 'bridal', title: "Gelin Başı & Paketi", icon: "Heart", desc: "En özel gününüzde kusursuz gelin başı, makyaj ve VIP gelin hazırlığı." },
  { id: 'nails', title: "Manikür & Pedikür", icon: "Hand", desc: "Kalıcı oje, nail art ve SPA el-ayak bakımı hizmetleri." },
  { id: 'brows', title: "Kaş & Kirpik", icon: "Eye", desc: "Microblading, ipek kirpik ve kaş laminasyonu ile belirgin bakışlar." }
];

export const galleryData = [
  { id: 1, cat: 'hair', img: galleryHair },
  { id: 2, cat: 'color', img: galleryColor },
  { id: 3, cat: 'makeup', img: galleryMakeup },
  { id: 4, cat: 'bridal', img: galleryBridal },
  { id: 5, cat: 'nails', img: galleryMakeup },
  { id: 6, cat: 'hair', img: galleryHair },
  { id: 7, cat: 'makeup', img: galleryMakeup },
  { id: 8, cat: 'color', img: galleryColor }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Ayşe Yılmaz",
    comment: "Saç kesimim tam istediğim gibi oldu. Personel çok ilgili ve salon çok şık.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    name: "Zeynep Kaya",
    comment: "Gelin saçım ve makyajım harikaydı. En özel günümde beni bir prenses gibi hissettirdiler.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 3,
    name: "Merve Demir",
    comment: "Ombre işlemi için geldim, renk geçişleri mükemmel oldu. Kesinlikle tavsiye ederim.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  }
];
