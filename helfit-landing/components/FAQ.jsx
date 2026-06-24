import { useState } from 'react'
import Icon from './Icon'

const FAQS = [
  { q: 'Helfit kimler için geliştirildi?', a: 'Türkiye\'deki lisanslı diyetisyenler için özel olarak tasarlanmış bir dijital ofis platformudur. Bireysel çalışan diyetisyenlerden kliniklere kadar her ölçekte kullanılabilir. Not: Helfit bir Sağlık Bilgi Yönetim Sistemi (SBYS) değildir; organizasyon, not alma ve randevu takip aracıdır.' },
  { q: 'Danışanlarım platforma nasıl katılır?', a: 'Panelinden özel bir davet kodu oluşturursun. Danışanın bu kodu mobil uygulamaya girdikten saniyeler sonra otomatik eşleşme gerçekleşir. Diyet planı, randevu ve takip hemen başlar.' },
  { q: 'Ücretsiz planda ne kadar kullanabilirim?', a: 'Ücretsiz plan sınırsız sürelidir ve 5 aktif danışanı kapsar. Diyet planı oluşturma, şablonlar, mesajlaşma, randevu takvimi, gelişim takibi ve 7 günlük davet kodu dahildir.' },
  { q: 'Verilerim güvende mi?', a: 'Tüm veriler Google Firebase altyapısında, rol tabanlı güvenlik kurallarıyla korunarak saklanır. Yalnızca yetkili kişiler kendi verilerine erişebilir. KVKK uyumluluğuna önem veriyoruz.' },
  { q: 'Yapay Zeka Koçlar nasıl çalışıyor?', a: '4 farklı karakter var: Caner (Motivasyon), Melis (Tarif), Ege (Spor), Özge (Alışkanlık). Her biri danışanın anamnez bilgilerini, diyet planını ve konuşma geçmişini bilerek 7/24 kişiselleştirilmiş yanıtlar verir.' },
  { q: 'Mobil uygulama var mı?', a: 'Evet, iOS ve Android\'de ücretsiz kullanılabilir. Danışanlar diyet planı görüntüleme, öğün işaretleme, randevu alma, diyetisyenle mesajlaşma ve Yapay Zeka Koç erişimi için kullanabilir.' },
  { q: 'Diyet planlarını PDF olarak gönderebilir miyim?', a: 'Planlar danışanın uygulamasında canlı olarak görüntüleniyor — bu sayede danışan her zaman güncel plana erişiyor. PDF dışa aktarma özelliği yakında geliyor.' },
  { q: 'Hesabım neden onay bekliyor?', a: 'Platform yalnızca lisanslı diyetisyenlere hizmet verir. Başvurun diploma ve belgelerinle birlikte 1–3 iş günü içinde değerlendirilir.' },
  { q: 'Kredi kartı gerekiyor mu?', a: 'Ücretsiz plan için kesinlikle hayır. Kredi kartı yalnızca ücretli plana geçişte istenir.' },
  { q: 'Premium\'a geçince ne değişiyor?', a: 'Sınırsız danışan, gelişmiş analitik raporlama, derinlemesine gelişim grafikleri, sınırsız ve özel süreli davet kodları ile öncelikli destek sunulur.' },
  { q: 'Mevcut verilerimi sisteme aktarabilir miyim?', a: 'Şu an manuel ekleme yöntemi mevcut. CSV ile toplu aktarım özelliği yakında geliyor.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const [query, setQuery] = useState('')

  const filtered = query.trim()
    ? FAQS.filter(f => f.q.toLowerCase().includes(query.toLowerCase()) || f.a.toLowerCase().includes(query.toLowerCase()))
    : FAQS

  const toggle = i => setOpen(prev => prev === i ? null : i)

  return (
    <section id="sss" className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">

        <div className="reveal text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Sıkça Sorulan Sorular</h2>
          <p className="mt-4 text-gray-500">Merak ettiğiniz her şey burada.</p>
        </div>

        {/* Search */}
        <div className="reveal relative mb-6">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon name="search" size={16} />
          </span>
          <input
            value={query}
            onChange={e => { setQuery(e.target.value); setOpen(null) }}
            placeholder="Soru ara..."
            className="w-full pl-10 pr-4 py-3.5 rounded-2xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-brand transition-colors duration-200 shadow-sm"
          />
        </div>

        {/* Items */}
        <div className="space-y-2">
          {filtered.map((faq, i) => {
            const isOpen = open === i
            return (
              /* Outer wrapper carries `reveal` — className never changes so React
                 never overwrites it, and the IntersectionObserver's `.show` class
                 is never wiped on accordion open/close. */
              <div key={faq.q} className="reveal">
                <div
                  className={`bg-white rounded-2xl border overflow-hidden transition-all duration-200 ${
                    isOpen ? 'border-brand/30 shadow-sm' : 'border-gray-100'
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-gray-800 text-sm leading-relaxed">{faq.q}</span>
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
                      style={{ background: isOpen ? '#95B82D' : '#F3F4F6', color: isOpen ? 'white' : '#6B7280' }}
                    >
                      <span style={{ display: 'inline-flex', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform .3s ease' }}>
                        <Icon name="chevron" size={14} />
                      </span>
                    </span>
                  </button>

                  <div
                    style={{
                      maxHeight: isOpen ? '500px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height .38s cubic-bezier(0.22,1,0.36,1)',
                    }}
                  >
                    <p className="px-5 pb-5 pt-1 text-sm text-gray-500 leading-relaxed border-t border-gray-100">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}

          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-10 text-sm">
              "<span className="text-gray-600 font-medium">{query}</span>" için sonuç bulunamadı.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
