import Icon from './Icon'

const BRAND = '#95B82D'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-white overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#95B82D14 1px, transparent 1px)', backgroundSize: '26px 26px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">

          {/* ── Left: Copy ── */}
          <div className="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">

            <span className="inline-flex items-center gap-2 border text-xs font-semibold px-4 py-1.5 rounded-full mb-7 border-brand/30 text-brand bg-brand/5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand pulse" />
              Beta'ya katılın — Ücretsiz
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-[3.25rem] font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-5">
              Diyetisyenin<br />
              <span className="text-brand">Dijital Ofisi,</span><br />
              Danışanın Akıllı Koçu.
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-7">
              Randevu, plan ve danışan takibini tek yerden yönet — kağıt, Excel ve WhatsApp'a gerek kalmadan.
            </p>

            {/* Two-sided labels */}
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-gray-100 text-gray-600">
                <Icon name="users" size={13} color="#6B7280" />
                Diyetisyen paneli
              </div>
              <span className="flex items-center text-gray-300 text-xs">+</span>
              <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl text-brand" style={{ background: '#95B82D12' }}>
                <Icon name="brain" size={13} color="#95B82D" />
                Danışan arayüzü
              </div>
              <span className="flex items-center text-gray-300 text-xs">+</span>
              <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl text-purple-600" style={{ background: '#8B5CF612' }}>
                <Icon name="brain" size={13} color="#8B5CF6" />
                AI Koç (7/24)
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="https://app.helfit.com"
                className="group inline-flex items-center justify-center gap-2 text-white font-bold py-4 px-8 rounded-2xl bg-brand hover:bg-brandhover transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl text-base"
              >
                Ücretsiz Başla
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  <Icon name="arrow" size={18} />
                </span>
              </a>
              <a
                href="#nasil-calisir"
                className="inline-flex items-center justify-center gap-2 font-semibold py-4 px-8 rounded-2xl border-2 border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 transition-all duration-300 hover:-translate-y-0.5 text-base"
              >
                Nasıl Çalışır?
              </a>
            </div>

          </div>

          {/* ── Right: Dual mockup ── */}
          <div className="flex-1 w-full max-w-xl lg:max-w-none relative">
            <div className="relative mx-auto" style={{ maxWidth: 560 }}>

              {/* Laptop shell */}
              <div className="bg-gray-800 rounded-t-2xl pt-3 px-3">
                <div className="flex justify-center mb-2">
                  <div className="w-2 h-2 rounded-full bg-gray-600" />
                </div>
                <div className="bg-white rounded-t-xl overflow-hidden border border-gray-200 shadow-inner">

                  {/* Browser chrome */}
                  <div className="bg-gray-100 px-3 py-2.5 flex items-center gap-2 border-b border-gray-200">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <div className="flex-1 ml-2 bg-white rounded px-3 py-1 text-xs text-gray-400 border border-gray-200 flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-brand" />
                      app.helfit.com/panel
                    </div>
                  </div>

                  {/* Dashboard content */}
                  <div className="flex" style={{ height: 300 }}>
                    {/* Sidebar */}
                    <div className="w-40 border-r border-gray-100 bg-white p-3 flex-shrink-0">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 rounded-lg bg-brand flex items-center justify-center text-white font-black text-xs">H</div>
                        <span className="text-sm font-bold text-gray-800">Helfit</span>
                      </div>
                      {[
                        ['Panel', 'users', true],
                        ['Danışanlar', 'users', false],
                        ['Takvim', 'calendar', false],
                        ['Mesajlar', 'message', false],
                      ].map(([label, icon, active]) => (
                        <div
                          key={label}
                          className={`flex items-center gap-2 px-2.5 py-2 rounded-xl text-xs font-medium mb-0.5 ${active ? 'text-white bg-brand' : 'text-gray-500'}`}
                        >
                          <Icon name={icon} size={13} color={active ? 'white' : '#9CA3AF'} />
                          {label}
                        </div>
                      ))}
                    </div>

                    {/* Main panel */}
                    <div className="flex-1 bg-gray-50 p-4 overflow-hidden">
                      <p className="text-xs font-bold text-gray-800 mb-3">Genel Bakış</p>
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        {[
                          ['24', 'Aktif Danışan', BRAND],
                          ['8', 'Bu Hafta', '#3B82F6'],
                          ['3', 'Yeni', '#F97316'],
                        ].map(([v, l, c]) => (
                          <div key={l} className="bg-white rounded-xl p-2.5 text-center border border-gray-100">
                            <p className="text-base font-extrabold" style={{ color: c }}>{v}</p>
                            <p className="text-[9px] text-gray-500">{l}</p>
                          </div>
                        ))}
                      </div>
                      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                        <div className="px-3 py-2 border-b border-gray-100">
                          <p className="text-[10px] font-bold text-gray-700">Son Danışanlar</p>
                        </div>
                        {[
                          ['Ayşe K.', '3. Hafta', '-1.2kg', '#22c55e'],
                          ['Mehmet Y.', '7. Hafta', '-4.8kg', '#22c55e'],
                          ['Zeynep A.', '1. Hafta', 'Yeni', '#3B82F6'],
                        ].map(([name, week, stat, sc]) => (
                          <div key={name} className="flex items-center justify-between px-3 py-1.5 border-b border-gray-50 last:border-0">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-brand" style={{ background: '#95B82D20' }}>{name[0]}</div>
                              <span className="text-[10px] font-semibold text-gray-700">{name}</span>
                            </div>
                            <span className="text-[9px] text-gray-400">{week}</span>
                            <span className="text-[9px] font-semibold" style={{ color: sc }}>{stat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700 h-3 rounded-b-2xl mx-2" />
              <div className="bg-gray-600 h-1.5 rounded-b-xl" />

              {/* ── Phone mockup: AI Coach preview ── */}
              <div
                className="float-b absolute z-10"
                style={{ bottom: -32, right: -40, width: 172 }}
              >
                <div className="bg-gray-900 rounded-[1.8rem] p-2 shadow-2xl border border-gray-700">
                  <div className="bg-white rounded-[1.4rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="bg-gray-900 px-3 pt-2 pb-1 flex items-center justify-between">
                      <span className="text-[9px] font-bold text-white">9:41</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                    </div>
                    {/* Chat */}
                    <div className="px-3 py-2.5" style={{ background: '#0f172a' }}>
                      {/* Label */}
                      <div className="flex items-center gap-1 mb-2">
                        <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-md text-purple-300" style={{ background: 'rgba(139,92,246,0.2)' }}>
                          Danışan Arayüzü
                        </span>
                      </div>
                      {/* Header */}
                      <div className="flex items-center gap-2 pb-2 mb-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center text-white font-extrabold text-[9px]" style={{ background: BRAND }}>M</div>
                        <div>
                          <p className="text-[9px] font-bold text-white">Melis</p>
                          <p className="text-[8px] text-green-400">● AI Koç · Çevrimiçi</p>
                        </div>
                      </div>
                      {/* Messages */}
                      <div className="space-y-1.5 text-[9px]">
                        <div className="flex justify-end">
                          <div className="px-2 py-1.5 rounded-xl rounded-tr-sm text-white" style={{ background: BRAND, maxWidth: '82%' }}>
                            Gece acıktım 😅
                          </div>
                        </div>
                        <div className="flex gap-1.5">
                          <div className="w-5 h-5 rounded-lg flex items-center justify-center text-white font-extrabold text-[8px] flex-shrink-0" style={{ background: BRAND }}>M</div>
                          <div className="px-2 py-1.5 rounded-xl rounded-tl-sm leading-relaxed" style={{ background: 'rgba(255,255,255,0.1)', color: '#e2e8f0', maxWidth: '82%' }}>
                            Planına göre 150g lor peyniri harika! 🥗
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat — top left */}
              <div className="float-a absolute -top-4 -left-5 bg-white rounded-2xl shadow-xl border border-gray-100 p-3.5 z-10">
                <p className="text-[10px] font-bold text-gray-700 mb-1">Aktif Danışanlar</p>
                <div className="flex items-end gap-1.5">
                  <p className="text-2xl font-extrabold text-brand">24</p>
                  <p className="text-[10px] text-green-500 font-semibold mb-0.5">↑ +3 bu ay</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <p className="text-xs font-medium tracking-wide">Keşfet</p>
        <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-gray-400 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
