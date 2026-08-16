import React from 'react';
import bridalImg from '../assets/images/gallery_bridal_1784790368497.jpg';
import colorImg from '../assets/images/gallery_color_1784790337960.jpg';
import heroImg from '../assets/images/hero_salon_1784790292526.jpg';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: React.ReactNode;
  date: string;
  image: string;
  author: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "atakent-en-iyi-gelin-basi-kuaforu-nasil-secilir",
    title: "Atakent'te En İyi Gelin Başı Kuaförü Nasıl Seçilir?",
    excerpt: "Düğün telaşı içinde saç ve makyaj provanızı şansa bırakmayın. Atakent ve Küçükçekmece bölgesindeki gelin adayları için kusursuz güzelliğin sırlarını paylaşıyoruz.",
    date: "14 Ağustos 2026",
    image: bridalImg,
    author: "Kuaför Nuri Çiçek",
    readTime: "4 dk okuma",
    tags: ["Gelin Başı", "Atakent", "Profesyonel Makyaj"],
    content: (
      <>
        <p className="text-lg text-zinc-600 mb-6">
          Hayatınızın en özel günü olan düğün gününüzde, her detayın kusursuz olmasını istersiniz. Gelinliğiniz kadar önemli olan bir diğer unsur ise şüphesiz <strong>gelin saçı ve profesyonel makyajınızdır</strong>. Peki, <strong>İstanbul Atakent</strong> bölgesinde en iyi kadın kuaförünü seçerken nelere dikkat etmelisiniz?
        </p>

        <h3 className="text-2xl font-bold text-zinc-900 mt-10 mb-4 serif-font">1. Uzmanlık ve Referanslar</h3>
        <p className="text-zinc-600 mb-6 leading-relaxed">
          Gelin başı sıradan bir fön veya maşa işlemi değildir. Saatlerce bozulmayacak, duvağınızı taşıyacak ve fotoğraflarda kusursuz görünecek bir mimari gerektirir. Küçükçekmece Atakent mahallesinde kuaför seçerken mutlaka salonun önceki gelin çalışmalarını inceleyin. <strong>Kuaför Nuri Çiçek</strong> olarak 30 yıllık tecrübemizle binlerce gelinin mutluluğuna ortak olduk.
        </p>

        <h3 className="text-2xl font-bold text-zinc-900 mt-10 mb-4 serif-font">2. Kullanılan Ürünlerin Kalitesi</h3>
        <p className="text-zinc-600 mb-6 leading-relaxed">
          Gelin makyajında kalıcılık esastır. Gözyaşlarına, tere ve uzun saatlere dayanabilen bir makyaj için Kryolan, MAC, Dior gibi dünyaca ünlü ve porselen makyaj altyapısına sahip ürünler kullanılmalıdır. Ucuz ve kalitesiz ürünler kullanan salonlar, düğününüzün ortasında makyajınızın akmasına neden olabilir. Atakent güzellik merkezimizde sadece birinci sınıf dermatolojik onaylı ürünler kullanıyoruz.
        </p>

        <h3 className="text-2xl font-bold text-zinc-900 mt-10 mb-4 serif-font">3. Prova İmkânı ve İletişim</h3>
        <p className="text-zinc-600 mb-6 leading-relaxed">
          En iyi sonucu almak için düğünden önce mutlaka bir saç ve makyaj provası yapılmalıdır. Yüz hatlarınıza, gelinliğinizin yaka modeline ve düğün konseptinize (kır düğünü, salon düğünü vb.) en uygun modeli birlikte belirlemek hayati önem taşır. 
        </p>

        <div className="bg-zinc-50 p-8 border-l-4 border-[#D4AF37] my-10">
          <h4 className="text-xl font-bold text-zinc-900 mb-2">Atakent Gelin Paketi Randevusu</h4>
          <p className="text-zinc-600">
            Siz de hayalinizdeki görünüme kavuşmak ve düğün gününüzde stresten uzak, VIP bir hizmet almak istiyorsanız <strong>Atakent 1. Posta Sokak'taki</strong> salonumuza kahve içmeye bekliyoruz.
          </p>
        </div>
      </>
    )
  },
  {
    id: "2",
    slug: "kucukcekmece-ombre-sombre-trendleri",
    title: "Küçükçekmece'de 2026'nın En Popüler Ombre ve Sombre Trendleri",
    excerpt: "Saç renklendirmede doğallığın zirvesi olan Ombre ve Sombre işlemleri arasındaki farklar nelerdir? Saçınıza zarar vermeden nasıl uygulanır?",
    date: "10 Ağustos 2026",
    image: colorImg,
    author: "Kuaför Nuri Çiçek",
    readTime: "5 dk okuma",
    tags: ["Ombre", "Sombre", "Saç Boyama", "Küçükçekmece"],
    content: (
      <>
        <p className="text-lg text-zinc-600 mb-6">
          Saçlarda doğal bir ışıltı, güneşte açılmış gibi duran yumuşak geçişler... Son yılların vazgeçilmezi olan <strong>Ombre ve Sombre</strong> teknikleri, 2026 yılında da Küçükçekmece ve Atakent bölgesindeki kadınların bir numaralı tercihi olmaya devam ediyor.
        </p>

        <h3 className="text-2xl font-bold text-zinc-900 mt-10 mb-4 serif-font">Ombre mi, Sombre mi? Hangisi Size Göre?</h3>
        <p className="text-zinc-600 mb-6 leading-relaxed">
          <strong>Ombre:</strong> Fransızca "gölge" anlamına gelen bu teknikte, saç dipleri kendi renginde veya koyu bir tonda bırakılırken, uçlara doğru renk belirgin şekilde açılır. Kontrast daha yüksektir. İddialı ama bir o kadar da şık bir görünüm sunar.
          <br /><br />
          <strong>Sombre:</strong> "Soft Ombre" kelimelerinden türetilen sombre, daha yumuşak ve belirsiz geçişlere sahiptir. Saç renginin sadece 1-2 ton açığı kullanılarak diplerden uçlara doğru hafif bir aydınlanma sağlanır. Doğallıktan yana olanların tercihidir.
        </p>

        <h3 className="text-2xl font-bold text-zinc-900 mt-10 mb-4 serif-font">Saçlara Zarar Vermeden Renklendirme Mümkün mü?</h3>
        <p className="text-zinc-600 mb-6 leading-relaxed">
          Birçok kadın saçlarının açıcı işlemlerden (oryal) dolayı yanmasından veya yıpranmasından korkar. Ancak doğru teknik ve kaliteli malzeme ile bu risk sıfıra indirilebilir. <strong>Atakent bayan kuaförü</strong> salonumuzda Wella ve L'Oréal gibi markaların saç bağlarını koruyan özel açıcı sistemlerini kullanıyoruz. Bu sayede saçlarınız elastikiyetini kaybetmez ve koparak dökülmez.
        </p>

        <h3 className="text-2xl font-bold text-zinc-900 mt-10 mb-4 serif-font">Evde Bakım Nasıl Olmalı?</h3>
        <ul className="list-disc pl-6 text-zinc-600 space-y-3 mb-8">
          <li>İşlem görmüş saçlar için özel olarak üretilen sülfatsız şampuanlar (örneğin mor şampuan) kullanılmalıdır.</li>
          <li>Haftada en az bir kez yoğun nemlendirici saç maskesi uygulanmalıdır.</li>
          <li>Isı ile şekillendirmeden önce mutlaka ısı koruyucu serumlar tercih edilmelidir.</li>
        </ul>

        <p className="text-zinc-600 leading-relaxed">
          Saçınıza en uygun tonu belirlemek ve yüz hatlarınızı ortaya çıkaracak bir tasarım için <strong>Küçükçekmece Atakent</strong> merkezdeki Kuaför Nuri Çiçek salonumuzdan ücretsiz saç analizi randevusu alabilirsiniz.
        </p>
      </>
    )
  },
  {
    id: "3",
    slug: "sac-botoksu-ve-keratin-bakim-atakent",
    title: "Saç Botoksu mu Keratin Bakım mı? Atakent'ten Uzman Tavsiyeleri",
    excerpt: "Mat, cansız ve elektriklenen saçlar kaderiniz değil. Hangi bakımın saçınıza daha uygun olduğunu uzmanından öğrenin.",
    date: "05 Ağustos 2026",
    image: heroImg,
    author: "Kuaför Nuri Çiçek",
    readTime: "3 dk okuma",
    tags: ["Saç Bakımı", "Keratin", "Saç Botoksu"],
    content: (
      <>
        <p className="text-lg text-zinc-600 mb-6">
          Özellikle İstanbul'un nemli havası, sık yapılan fön, maşa işlemleri ve mevsim geçişleri saçların doğal yapısını bozabilir. <strong>Atakent kadın kuaförü</strong> arayışında olan müşterilerimizin bize en çok sorduğu soru şudur: "Saçlarım çok yıprandı, Keratin Bakım mı yaptırmalıyım yoksa Saç Botoksu mu?"
        </p>

        <h3 className="text-2xl font-bold text-zinc-900 mt-10 mb-4 serif-font">Keratin Bakım (Brezilya Fönü) Nedir?</h3>
        <p className="text-zinc-600 mb-6 leading-relaxed">
          Keratin, saçın yapıtaşını oluşturan bir proteindir. Zamanla azalan keratin, dışarıdan takviye edildiğinde saç tellerini onarır ve kalınlaştırır. Keratin bakımın en büyük özelliği <strong>düzleştirici etkisinin</strong> olmasıdır. Kıvırcık, elektriklenen veya kabaran saçlara sahipseniz ve aylarca fön çekilmiş gibi düz kalmasını istiyorsanız Keratin Bakım (Brezilya Fönü) tam size göredir.
        </p>

        <h3 className="text-2xl font-bold text-zinc-900 mt-10 mb-4 serif-font">Saç Botoksu Nedir?</h3>
        <p className="text-zinc-600 mb-6 leading-relaxed">
          Saç botoksu ise düzleştirici bir işlem değildir; tamamen bir <strong>yeniden yapılandırma ve anti-aging (yaşlanma karşıtı)</strong> bakımıdır. İçeriğindeki amino asitler, vitaminler ve yoğun nemlendiriciler sayesinde saçın yıpranmış dokusunu doldurur. Saçın kendi doğal dalgasını bozmadan, parlaklık, yumuşaklık ve hacim kazandırır.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          <div className="bg-zinc-50 p-6 border border-zinc-200">
            <h4 className="font-bold text-zinc-900 mb-3 uppercase tracking-wider text-sm">Keratin Bakım Seçmelisiniz Eğer:</h4>
            <ul className="list-disc pl-5 text-zinc-600 space-y-2 text-sm">
              <li>Saçlarınız sürekli kabarıyor ve elektrikleniyorsa.</li>
              <li>Dalgalı/kıvırcık saçlarınızı düz kullanmak istiyorsanız.</li>
              <li>Her sabah fön çekmekten yorulduysanız.</li>
            </ul>
          </div>
          <div className="bg-zinc-50 p-6 border border-zinc-200">
            <h4 className="font-bold text-zinc-900 mb-3 uppercase tracking-wider text-sm">Saç Botoksu Seçmelisiniz Eğer:</h4>
            <ul className="list-disc pl-5 text-zinc-600 space-y-2 text-sm">
              <li>Saçlarınız ince telli ve sönükse.</li>
              <li>Röfle, açma boyama işlemlerinden dolayı saçınız aşırı kuruduysa.</li>
              <li>Saçınızın doğal dalgasını koruyup sadece parlamasını istiyorsanız.</li>
            </ul>
          </div>
        </div>

        <p className="text-zinc-600 leading-relaxed">
          Hangi işlemin saçınıza uygun olduğuna karar veremiyorsanız, <strong>Atakent Kuaför Nuri Çiçek</strong> salonumuza gelerek saç tellerinizin elastikiyet testini yaptırabilirsiniz. Sağlıklı saçlar, güzelliğinizin en önemli tamamlayıcısıdır.
        </p>
      </>
    )
  }
];

