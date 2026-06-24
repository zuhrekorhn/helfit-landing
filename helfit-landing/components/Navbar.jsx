import { useState, useEffect } from 'react'
import Logo from './Logo'

const LINKS = [
  ['#ozellikler', 'Özellikler'],
  ['#nasil-calisir', 'Nasıl Çalışır'],
  ['#ai-koc', 'Yapay Zeka Koç'],
  ['#mobil', 'Mobil'],
  ['#fiyat', 'Fiyatlandırma'],
  ['#sss', 'SSS'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo size={32} />

        {/* Desktop links */}
        <ul className="hidden xl:flex items-center gap-7">
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a href={href} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200">
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden xl:flex items-center gap-3">
          <a
            href="https://helfit-prod.web.app/#/login"
            className="text-sm font-semibold text-gray-600 hover:text-gray-900 px-4 py-2 rounded-xl transition-colors duration-200"
          >
            Giriş Yap
          </a>
          <a
            href="https://helfit-prod.web.app"
            className="text-sm font-semibold text-white px-5 py-2.5 rounded-xl bg-brand hover:bg-brandhover transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
          >
            Ücretsiz Başla →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden p-2 rounded-xl text-gray-700"
          aria-label="Menüyü aç"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-lg">
          <ul className="space-y-1 mb-4">
            {LINKS.map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="block py-2.5 text-sm font-medium text-gray-700 hover:text-brand transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="space-y-2 border-t border-gray-100 pt-4">
            <a href="https://helfit-prod.web.app/#/login" className="block text-center py-2.5 text-sm font-semibold text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              Giriş Yap
            </a>
            <a href="https://helfit-prod.web.app" className="block text-center py-2.5 text-sm font-semibold text-white rounded-xl bg-brand hover:bg-brandhover transition-colors">
              Ücretsiz Başla →
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
