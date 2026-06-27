import Head from 'next/head'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'

export function Section({ num, title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-base font-extrabold text-gray-900 mb-4 pb-2.5 border-b border-gray-100 flex items-baseline gap-1.5">
        {num && (
          <span className="text-sm font-extrabold flex-shrink-0" style={{ color: '#95B82D' }}>
            {num}.
          </span>
        )}
        <span>{title}</span>
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  )
}

export function SubSection({ title, children }) {
  return (
    <div className="mt-5 mb-2">
      <h3 className="text-sm font-bold text-gray-800 mb-2.5" style={{ color: '#95B82D' }}>
        {title}
      </h3>
      <div className="space-y-2.5">{children}</div>
    </div>
  )
}

export function P({ children }) {
  return <p className="text-sm text-gray-600 leading-relaxed">{children}</p>
}

export function Bullets({ items }) {
  return (
    <ul className="space-y-2 mt-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[7px]"
            style={{ background: '#95B82D' }}
          />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function DataTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-100 mt-2">
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: '#95B82D14' }}>
            {headers.map((h) => (
              <th
                key={h}
                className="text-left py-2.5 px-4 font-semibold text-gray-700 text-xs uppercase tracking-wide"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="py-2.5 px-4 text-gray-600 align-top text-xs leading-relaxed">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function Note({ children }) {
  return (
    <div
      className="rounded-xl p-4 text-sm text-gray-600 leading-relaxed mt-3"
      style={{ background: '#95B82D0d', borderLeft: '3px solid #95B82D' }}
    >
      {children}
    </div>
  )
}

export default function LegalLayout({ title, subtitle, lastUpdated, children }) {
  return (
    <>
      <Head>
        <title>{title} — Helfit</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Navbar />

      <main className="pt-24 pb-20 px-6 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-brand transition-colors duration-200 mb-8"
          >
            ← Ana Sayfaya Dön
          </Link>

          <article className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
            <div className="mb-10 pb-8 border-b border-gray-100">
              <div
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full mb-4"
                style={{ background: '#95B82D14', color: '#95B82D' }}
              >
                Yasal Metin
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-2">
                {title}
              </h1>
              {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
              {lastUpdated && (
                <p className="text-xs text-gray-400 mt-2">Son güncellenme: {lastUpdated}</p>
              )}
            </div>

            <div className="space-y-1">{children}</div>
          </article>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-400">
              Sorularınız için:{' '}
              <a
                href="mailto:helfit.destek@gmail.com"
                className="hover:text-brand transition-colors duration-200"
              >
                helfit.destek@gmail.com
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
