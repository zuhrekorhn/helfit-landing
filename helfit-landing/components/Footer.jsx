import Logo from './Logo'

export default function Footer() {
  const cols = [
    ['Platform', [
      ['#ozellikler', 'Özellikler'],
      ['#nasil-calisir', 'Nasıl Çalışır'],
      ['#ai-koc', 'Yapay Zeka Koç'],
      ['#mobil', 'Mobil Uygulama'],
      ['#fiyat', 'Fiyatlandırma'],
      ['https://helfit-prod.web.app', 'Kayıt Ol'],
    ]],
    ['Yasal', [
      ['#', 'Gizlilik Politikası'],
      ['#', 'KVKK'],
      ['#', 'Kullanım Koşulları'],
      ['#', 'Çerez Politikası'],
    ]],
    ['İletişim', [
      ['mailto:destek@helfit.com', 'destek@helfit.com'],
      ['#sss', 'Yardım Merkezi'],
    ]],
  ]

  return (
    <footer className="bg-gray-950 text-gray-500 py-14 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">
          <div className="md:col-span-2">
            <Logo size={34} />
            <p className="text-sm mt-4 leading-relaxed max-w-xs text-gray-500">
              Diyetisyenlerin dijital ofisi. Danışan yönetiminden yapay zeka koçuna kadar her şey tek platformda.
            </p>
            <p className="text-xs mt-3 text-gray-600">destek@helfit.com</p>
          </div>

          {cols.map(([title, links]) => (
            <div key={title}>
              <p className="text-white text-sm font-semibold mb-4">{title}</p>
              <ul className="space-y-2.5 text-sm">
                {links.map(([href, label]) => (
                  <li key={label}>
                    <a href={href} className="hover:text-white transition-colors duration-200">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal disclaimer — spec exact text */}
        <div className="rounded-2xl border border-gray-800 bg-gray-900 p-4 mb-6">
          <p className="text-xs text-gray-400 leading-relaxed">
            💡 <strong className="text-gray-300">Helfit</strong>, bir{' '}
            <strong className="text-gray-300">Sağlık Bilgi Yönetim Sistemi (SBYS)</strong> değildir.
            Platform yalnızca bir organizasyon, not alma ve randevu takip aracıdır.
            Uygulama içerisindeki sağlık verilerinin, diyet planlarının ve yönlendirmelerin
            tüm yasal sorumluluğu hizmeti sunan diyetisyene aittir.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-700">© {new Date().getFullYear()} Helfit. Tüm hakları saklıdır.</p>
          <p className="text-xs text-gray-700">Türkiye'deki diyetisyenler için 🇹🇷</p>
        </div>
      </div>
    </footer>
  )
}
