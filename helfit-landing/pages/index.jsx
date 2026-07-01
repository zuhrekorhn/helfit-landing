import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Icon from '../components/Icon'
import useReveal from '../components/useReveal'

const BRAND = '#95B82D'
const APP = 'https://helfit-prod.web.app'

// ── CheckItem helper ──────────────────────────────────────────────────────────
function Check({ text, light }) {
  return (
    <li className="flex items-start gap-3 text-sm">
      <span
        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{ background: light ? 'rgba(255,255,255,.25)' : `${BRAND}22` }}
      >
        <Icon name="check" size={11} color={light ? 'white' : BRAND} />
      </span>
      <span className={light ? 'text-white/90' : 'text-gray-600'}>{text}</span>
    </li>
  )
}

// ── Trust bar ─────────────────────────────────────────────────────────────────
function Stats() {
  return (
    <section className="py-14 bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
          Neden Helfit?
        </p>
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            ['8+', 'Kapsamlı Özellik'],
            ['4', 'Yapay Zeka Koç Karakteri'],
            ['7/24', 'Yapay Zeka Destekli Danışan Desteği'],
          ].map(([v, l], i) => (
            <div key={l} className={`reveal delay-${i + 1} text-center`}>
              <p className="text-3xl font-extrabold text-brand">{v}</p>
              <p className="text-sm text-gray-500 mt-1">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Feature grid ─────────────────────────────────────────────────────────────
const FEATURE_ITEMS = [
  {
    n: 'calendar',
    t: 'Randevu ve Takvim',
    d: 'Çalışma saatlerini tanımla, müsait slotlar otomatik oluşsun. Hatırlatmalar danışana otomatik gitsin.',
    tag: 'Otomasyon',
  },
  {
    n: 'diet',
    t: 'Diyet Planı & Şablonlar',
    d: 'Şablonu tek tıkla ata — danışan planını doğrudan uygulamada görür, her öğünü tamamladıkça işaretler. Kağıt veya PDF değil, canlı ve interaktif.',
    tag: 'Hız',
  },
  {
    n: 'trend',
    t: 'Gelişim Grafikleri',
    d: 'Kilo, bel, kalça ölçümleri — haftalık grafiklerle ilerleme takibi. Danışan kendi gelişimini görür.',
    tag: 'Takip',
  },
  {
    n: 'message',
    t: 'Güvenli Mesajlaşma',
    d: 'Uygulama içi şifreli iletişim. Kişisel telefon numaranı paylaşmak zorunda değilsin.',
    tag: 'Gizlilik',
  },
  {
    n: 'note',
    t: 'Not Defteri',
    d: 'Danışana özel sınırsız notlar, etiketler ve aranabilir geçmiş. Hiçbir bilgi kaybolmaz.',
    tag: 'Düzen',
  },
  {
    n: 'users',
    t: 'Danışan Yönetimi',
    d: 'Süreli davet koduyla anında eşleş. Anamnez, ölçüm ve notlar tek panelde düzenli.',
    tag: 'Yönetim',
  },
  {
    n: 'brain',
    t: 'Yapay Zeka Koç (7/24)',
    d: '4 farklı yapay zeka koç karakteri danışanlarının sorularını kişiselleştirilmiş yanıtlarla karşılar.',
    tag: 'Yapay Zeka',
  },
  {
    n: 'shield',
    t: 'KVKK Uyumlu',
    d: 'Firebase altyapısı, rol tabanlı erişim kontrolü. Danışan verileri yalnızca yetkili kişiye açık.',
    tag: 'Güvenlik',
  },
]

function Features() {
  return (
    <section id="ozellikler" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            İhtiyacın olan her şey,<br />tek platformda
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Kağıt defterini ve WhatsApp grubunu kapat. Pratiğini dijitalleştir.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURE_ITEMS.map((f, i) => (
            <div
              key={f.t}
              className={`reveal delay-${(i % 4) + 1} card-hover bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${BRAND}18` }}
                >
                  <Icon name={f.n} size={22} color={BRAND} />
                </div>
                <span
                  className="text-[10px] font-bold px-2 py-1 rounded-lg flex-shrink-0"
                  style={{ background: `${BRAND}12`, color: BRAND }}
                >
                  {f.tag}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">{f.t}</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{f.d}</p>
              <div
                className="mt-4 h-0.5 rounded-full w-8"
                style={{ background: `${BRAND}40` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── How it works ──────────────────────────────────────────────────────────────
function HowItWorks() {
  return (
    <section id="nasil-calisir" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">3 Adımda Başla</h2>
          <p className="mt-4 text-lg text-gray-500">Karmaşık kurulum yok. Dakikalar içinde hazırsın.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { n:'users', step:1, title:'Hesabını Oluştur', desc:'Bilgilerini gir, uzmanlık alanlarını tanımla ve saniyeler içinde dijital ofisini aktif et. Admin onayından sonra platforma tam erişim sağlanır.' },
            { n:'qr', step:2, title:'Süreli Davet Kodu Üret', desc:'Panelinden tek tıkla danışanına özel, benzersiz ve güvenli bir katılım kodu oluştur. Kodun geçerlilik süresini kendin belirle.' },
            { n:'trend', step:3, title:'Eşleş ve Yönetmeye Başla', desc:'Danışanın kodu girdiğinde mobil uygulamasıyla anında paneline bağlansın; diyet, randevu ve takip otomatik başlasın.' },
          ].map((s,i) => (
            <div key={s.step} className={`reveal delay-${i+1} flex flex-col items-center text-center`}>
              <div className="relative mb-5">
                <div className="w-20 h-20 rounded-3xl flex items-center justify-center" style={{background:`${BRAND}12`}}>
                  <Icon name={s.n} size={34} color={BRAND}/>
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-xl flex items-center justify-center text-white text-xs font-extrabold shadow-md" style={{background:BRAND}}>
                  {s.step}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="reveal mt-12 text-center">
          <a href={APP} className="inline-flex items-center gap-2 text-white font-bold py-4 px-10 rounded-2xl bg-brand hover:bg-brandhover transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl text-base">
            Hemen Başla — Ücretsiz <Icon name="arrow" size={18}/>
          </a>
        </div>
      </div>
    </section>
  )
}

// ── AI Coach ──────────────────────────────────────────────────────────────────
function AICoach() {
  const agents = [
    { init:'C', name:'Caner', role:'Motivasyon & Kriz Koçu', desc:'Zor anlarda danışanın yanında. Duygusal yeme ve motivasyon krizlerini yönetir.', color:'#F97316' },
    { init:'M', name:'Melis', role:'Tarif & Mutfak Koçu', desc:'Fit ve lezzetli tarifler önerir. Günlük plana uygun beslenme rehberi sağlar.', color:BRAND },
    { init:'E', name:'Ege', role:'Spor & Hareket Koçu', desc:'Harekete geç, güçlen. Egzersiz ve aktivite önerileriyle danışanı motive eder.', color:'#3B82F6' },
    { init:'Ö', name:'Özge', role:'Alışkanlık & Takip Koçu', desc:'Küçük adımlar, büyük değişim. Sağlıklı alışkanlık oluşturmayı destekler.', color:'#8B5CF6' },
  ]

  return (
    <section id="ai-koc" className="py-24 px-6" style={{background:'linear-gradient(135deg,#0f172a 0%,#1a2744 100%)'}}>
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="reveal text-center mb-14">
          <div
            className="inline-flex items-center gap-2.5 mb-6 px-5 py-2.5 rounded-2xl font-bold text-sm"
            style={{background:'rgba(149,184,45,0.12)',border:'1px solid rgba(149,184,45,0.35)',color:'#b5d43a'}}
          >
            <Icon name="brain" size={18} color="#b5d43a"/>
            Yapay Zeka Destekli Koçluk
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Sen yokken danışanın<br/>
            <span style={{color:BRAND}}>yalnız kalmıyor.</span>
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{color:'#94a3b8'}}>
            4 yapay zeka koç karakteri danışanın uygulama üzerinden eriştiği —
            diyet planını, hedeflerini ve geçmiş konuşmalarını bilerek 7/24 kişisel destek verir.
            Sen müsait olmadığında bile.
          </p>

          {/* Two-side benefit bar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 max-w-2xl mx-auto">
            <div className="flex-1 rounded-2xl p-4 text-left" style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)'}}>
              <p className="text-xs font-bold text-white mb-1">💼 Diyetisyen olarak sen</p>
              <p className="text-xs" style={{color:'#94a3b8'}}>Gece yarısı mesajlarından kurtulursun. Danışan soruları yapay zeka koçu tarafından karşılanır, sen yalnızca profesyonel müdahale gereken anlarda devreye girersin.</p>
            </div>
            <div className="flex-1 rounded-2xl p-4 text-left" style={{background:'rgba(149,184,45,0.08)',border:'1px solid rgba(149,184,45,0.2)'}}>
              <p className="text-xs font-bold mb-1" style={{color:BRAND}}>📱 Danışanın kazandığı</p>
              <p className="text-xs" style={{color:'#94a3b8'}}>Her soru anında yanıt alır. Plana özel, kişiselleştirilmiş destek — tarif, motivasyon, spor veya alışkanlık konusunda 7/24.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-10 items-start">
          <div className="flex-1">

            {/* ── Agent cards ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {agents.map(a => (
                <div key={a.name} className="reveal card-hover rounded-2xl p-5"
                  style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.09)'}}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {/* Avatar + brain badge */}
                      <div className="relative">
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-extrabold text-base"
                          style={{background:a.color}}>{a.init}</div>
                        <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center"
                          style={{background:'#0f172a',border:`1.5px solid ${a.color}`}}>
                          <Icon name="brain" size={9} color={a.color}/>
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">{a.name}</p>
                        <p className="text-xs font-semibold" style={{color:a.color}}>{a.role}</p>
                      </div>
                    </div>
                    {/* YZ chip — en kritik sinyal */}
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-lg tracking-wide flex-shrink-0"
                      style={{background:`${a.color}22`,color:a.color,border:`1px solid ${a.color}44`}}>
                      YZ
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{color:'#94a3b8'}}>{a.desc}</p>
                </div>
              ))}
            </div>

            {/* ── Bullet list ── */}
            <ul className="space-y-2.5">
              {[
                'Danışanın planına özel kişiselleştirilmiş yanıtlar',
                '7/24 otomatik destek — gece yarısı da hazır',
                'Diyetisyen onaylı içerik ve yönlendirmeler',
                'Konuşma geçmişi kalıcı olarak saklanır',
              ].map(t => (
                <li key={t} className="flex items-center gap-3 text-sm" style={{color:'#cbd5e1'}}>
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{background:BRAND}}>
                    <Icon name="check" size={11}/>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Chat preview ── */}
          <div className="reveal-r flex-shrink-0 w-full xl:w-80">
            <div className="rounded-3xl shadow-2xl p-5"
              style={{background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.12)'}}>

              {/* Chat header */}
              <div className="flex items-center gap-2.5 pb-3 mb-4"
                style={{borderBottom:'1px solid rgba(255,255,255,0.1)'}}>
                <div className="relative">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-extrabold text-sm"
                    style={{background:BRAND}}>M</div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full flex items-center justify-center"
                    style={{background:'#0f172a',border:`1.5px solid ${BRAND}`}}>
                    <Icon name="brain" size={8} color={BRAND}/>
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-white">
                    Melis{' '}
                    <span className="font-normal" style={{color:'rgba(255,255,255,0.5)'}}>— Yapay Zeka Tarif Koçu</span>
                  </p>
                  <p className="text-xs flex items-center gap-1.5 text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse inline-block"/>Çevrimiçi
                  </p>
                </div>
                <span className="ml-auto text-[10px] font-extrabold px-2 py-0.5 rounded-lg"
                  style={{background:`${BRAND}22`,color:BRAND,border:`1px solid ${BRAND}44`}}>YZ</span>
              </div>

              {/* Messages */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-end">
                  <div className="px-3.5 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%] text-white"
                    style={{background:BRAND}}>
                    Akşam 22:00'de acıktım, ne yiyebilirim? 🤔
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-xl flex items-center justify-center text-white font-extrabold text-[10px] flex-shrink-0"
                    style={{background:BRAND}}>M</div>
                  <div className="px-3.5 py-2.5 rounded-2xl rounded-tl-sm max-w-[85%] leading-relaxed"
                    style={{background:'rgba(255,255,255,0.1)',color:'#e2e8f0'}}>
                    Planınıza göre bu saatte 150g lor peyniri veya 2 haşlanmış yumurta ideal! Karbonhidrattan kaçının 🥗
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="px-3.5 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%] text-white"
                    style={{background:BRAND}}>
                    Teşekkürler! Hemen yaparım 💪
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Mobile App ────────────────────────────────────────────────────────────────
function MobileApp() {
  return (
    <section id="mobil" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-14">
          {/* Phone mockup */}
          <div className="reveal-l flex-shrink-0 order-2 lg:order-1">
            <div className="bg-gray-900 rounded-[2.8rem] p-3 shadow-2xl border border-gray-700" style={{width:280}}>
              <div className="bg-white rounded-[2.2rem] overflow-hidden">
                <div className="bg-white px-4 pt-3 pb-2 flex items-center justify-between border-b border-gray-100">
                  <span className="text-xs font-bold text-gray-700">9:41</span>
                  <div className="w-2 h-2 rounded-full bg-brand"/>
                </div>
                <div className="px-4 py-3">
                  <p className="text-xs text-gray-400 mb-0.5">Hoş Geldiniz!</p>
                  <p className="text-sm font-bold text-gray-800 mb-4">Sağlıklı yaşam yolculuğunuza</p>
                  <div className="grid grid-cols-2 gap-2.5 mb-3">
                    {[
                      {l:'Davet Kodu Gir',c:BRAND,n:'qr'},
                      {l:'Gelişim Takibi',c:BRAND,n:'trend'},
                      {l:'Yapay Zeka Koçum',c:BRAND,n:'brain'},
                      {l:'Randevularım',c:'#F59E0B',n:'calendar'},
                    ].map(item=>(
                      <div key={item.l} className="rounded-2xl p-3 flex flex-col items-center gap-1.5 border border-gray-100" style={{background:`${item.c}0d`}}>
                        <Icon name={item.n} size={20} color={item.c}/>
                        <p className="text-[10px] font-semibold text-center" style={{color:item.c}}>{item.l}</p>
                      </div>
                    ))}
                  </div>
                  {/* Randevu card */}
                  <div className="rounded-2xl p-3 border border-gray-100 bg-gray-50">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon name="calendar" size={13} color={BRAND}/>
                      <span className="text-xs font-bold text-gray-700">Randevu</span>
                      <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded-full text-white font-semibold" style={{background:BRAND}}>Yaklaşan</span>
                    </div>
                    <p className="text-xs text-gray-700 font-semibold">Dyt. Dr. Aslı Yılmaz</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Icon name="clock" size={11} color={BRAND}/>
                      <span className="text-[10px] text-gray-500">11/06/2026  15:00 – 15:30</span>
                    </div>
                  </div>
                </div>
                {/* Bottom nav */}
                <div className="flex border-t border-gray-100 bg-white">
                  {[['Anasayfa','users'],['Diyet Planım','diet'],['Randevularım','calendar'],['Mesajlar','message'],['Profilim','note']].map(([l,n],i)=>(
                    <div key={l} className={`flex-1 flex flex-col items-center py-2 gap-0.5 ${i===0?'':'opacity-40'}`}>
                      <Icon name={n} size={14} color={i===0?BRAND:'#9CA3AF'}/>
                      <span className="text-[8px] font-medium" style={{color:i===0?BRAND:'#9CA3AF'}}>{l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-r flex-1 order-1 lg:order-2 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 border text-xs font-bold px-3 py-1.5 rounded-full mb-5" style={{color:BRAND,borderColor:`${BRAND}44`,background:`${BRAND}0d`}}>
              <Icon name="mobile" size={14} color={BRAND}/> Danışan Deneyimi
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              Her an, her yerden<br/><span className="text-brand">tam erişim</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-6">
              Danışanlarınız diyet planlarına, randevularına ve yapay zeka koçlarına istedikleri cihazdan her an erişebilir.
            </p>
            <ul className="space-y-3 mb-8 text-left inline-block">
              {['Diyet planı görüntüleme ve öğün işaretleme','Randevu alma ve geçmiş görüntüleme','Diyetisyenle güvenli mesajlaşma','Kilo ve vücut ölçümü takibi','Gelişim grafiklerini izleme','4 yapay zeka koçuyla 7/24 destek'].map(t=>(
                <li key={t} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{background:BRAND}}><Icon name="check" size={11}/></span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="https://helfit-prod.web.app" className="flex items-center gap-3 bg-gray-900 text-white px-5 py-3.5 rounded-2xl hover:bg-gray-800 transition-colors duration-200">
                <Icon name="mobile" size={22}/>
                <div className="text-left">
                  <p className="text-xs text-gray-400 leading-none mb-0.5">hemen kullanın</p>
                  <p className="font-bold text-sm leading-none">Web Uygulaması</p>
                </div>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.helfit.app&hl=tr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-gray-900 text-white px-5 py-3.5 rounded-2xl hover:bg-gray-800 transition-colors duration-200">
                <Icon name="mobile" size={22}/>
                <div className="text-left">
                  <p className="text-xs text-gray-400 leading-none mb-0.5">hemen indirin</p>
                  <p className="font-bold text-sm leading-none">Google Play</p>
                </div>
              </a>
              <div className="flex items-center gap-3 bg-gray-200 text-gray-500 px-5 py-3.5 rounded-2xl cursor-not-allowed select-none">
                <Icon name="mobile" size={22}/>
                <div className="text-left">
                  <p className="text-xs leading-none mb-0.5">çok yakında</p>
                  <p className="font-bold text-sm leading-none">App Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Pricing ───────────────────────────────────────────────────────────────────
function Pricing() {
  const plans = [
    {
      name:'Ücretsiz — Lansmana Özel', price:'₺0', sub:'sonsuza kadar', hi:false,
      features:[
        '2 aktif danışana kadar',
        '2 adet diyet planı şablonu oluşturma',
        'Danışan profili (anamnez, sağlık geçmişi)',
        'Uygulama içi mesajlaşma ve dosya paylaşımı',
        'Randevu takibi ve otomatik hatırlatma',
        'Danışan başına not tutma',
        '7 farklı ölçümle gelişim takibi',
        '4 Yapay Zeka Koç — Caner, Melis, Ege, Özge',
        'Web ve mobil uygulama (iOS & Android)',
        '7 gün geçerlilik süreli davet kodu',
      ],
      cta:'Ücretsiz Başla', href:APP,
    },
    {
      name:'Premium Aylık — Lansmana Özel', price:'4.999₺', sub:'/ ay', hi:false,
      features:[
        'Sınırsız danışan',
        'Sınırsız diyet planı şablonu oluşturma',
        'Danışan profili (anamnez, sağlık geçmişi)',
        'Uygulama içi mesajlaşma ve dosya paylaşımı',
        'Randevu takibi ve otomatik hatırlatma',
        'Danışan başına not tutma',
        '7 farklı ölçümle gelişim takibi',
        '4 Yapay Zeka Koç — Caner, Melis, Ege, Özge',
        'Web ve mobil uygulama (iOS & Android)',
        'Özel geçerlilik süreli davet kodu (1-365 gün)',
        'Öncelikli destek',
      ],
      cta:'Premium\'a Geç', href:APP,
    },
    {
      name:'Premium Yıllık — Lansmana Özel', price:'54.989₺', sub:'/ yıl · aylık ödemeye göre 1 ay bedava', hi:true, badge:'⭐ En Popüler',
      features:[
        'Sınırsız danışan',
        'Sınırsız diyet planı şablonu oluşturma',
        'Danışan profili (anamnez, sağlık geçmişi)',
        'Uygulama içi mesajlaşma ve dosya paylaşımı',
        'Randevu takibi ve otomatik hatırlatma',
        'Danışan başına not tutma',
        '7 farklı ölçümle gelişim takibi',
        '4 Yapay Zeka Koç — Caner, Melis, Ege, Özge',
        'Web ve mobil uygulama (iOS & Android)',
        'Özel geçerlilik süreli davet kodu (1-365 gün)',
        'Öncelikli destek',
        'Yıllık ödemede 1 ay bedava',
      ],
      cta:'Premium\'a Geç', href:APP,
    },
  ]

  return (
    <section id="fiyat" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Sana uygun planı seç</h2>
          <p className="mt-4 text-lg text-gray-500">Ücretsiz başla, büyüdükçe yükselt. Sürpriz ücret yok.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((p,i)=>(
            <div key={p.name} className={`reveal delay-${i+1} card-hover relative rounded-3xl p-7 flex flex-col ${p.hi?'shadow-2xl':'bg-white border border-gray-200 shadow-sm'}`}
              style={p.hi?{background:`linear-gradient(140deg,${BRAND},#7a9822)`}:{}}>
              {p.badge&&<span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md border" style={{color:BRAND,borderColor:`${BRAND}33`}}>{p.badge}</span>}
              <h3 className={`font-bold text-lg mb-1 ${p.hi?'text-white':'text-gray-900'}`}>{p.name}</h3>
              <p className={`text-3xl font-extrabold mb-1 ${p.hi?'text-white':'text-gray-900'}`}>{p.price}</p>
              <p className={`text-xs mb-4 ${p.hi?'text-white/70':'text-gray-400'}`}>{p.sub}</p>
              {p.highlight&&(
                <div className="mb-4 px-3 py-2 rounded-xl text-xs font-bold text-center border" style={{borderColor:`${BRAND}33`,color:BRAND,background:`${BRAND}0d`}}>
                  {p.highlight}
                </div>
              )}
              <ul className="space-y-2.5 flex-1 mb-6">
                {p.features.map(f=><Check key={f} text={f} light={p.hi}/>)}
              </ul>
              <a href={p.href} className={`text-center font-bold py-3.5 rounded-2xl text-sm transition-all duration-300 ${p.hi?'bg-white hover:bg-gray-50':'border-2 hover:opacity-80'}`}
                style={p.hi?{color:BRAND}:{borderColor:BRAND,color:BRAND}}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Testimonials ──────────────────────────────────────────────────────────────
function Testimonials() {
  const list = [
    {i:'FŞ',n:'Dyt. Fatma Şahin',t:'Serbest Diyetisyen',c:'İstanbul',q:'Helfit\'i kullanmaya başladığımdan beri danışan takibi için harcadığım süre yarıya indi. Takvim ve şablon özellikleri inanılmaz pratik.'},
    {i:'MK',n:'Dyt. Mehmet Kaya',t:'Klinik Diyetisyeni',c:'Ankara',q:'Davet kodu sistemi çok akıllıca. Danışanlarım kodu girdikten saniyeler sonra bağlandı, WhatsApp karmaşası tamamen bitti.'},
    {i:'EY',n:'Dyt. Elif Yıldız',t:'Online Diyetisyen',c:'İzmir',q:'Yapay Zeka Koç özelliği danışanlarımın motivasyonunu ciddi artırdı. Hafta sonları bile sorular yanıtlanıyor, ben müdahil olmak zorunda kalmıyorum.'},
  ]
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Diyetisyenler ne diyor?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {list.map((t,i)=>(
            <div key={t.n} className={`reveal delay-${i+1} card-hover bg-white rounded-3xl p-6 border border-gray-100 shadow-sm`}>
              <div className="flex mb-3">
                {[1,2,3,4,5].map(s=><Icon key={s} name="star" size={16} color="#FBBF24"/>)}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">"{t.q}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold" style={{background:BRAND}}>{t.i}</div>
                <div>
                  <p className="text-sm font-bold text-gray-800">{t.n}</p>
                  <p className="text-xs text-gray-400">{t.t} · {t.c}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Final CTA ─────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="reveal max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          Pratiğini büyütmeye<br/>hazır mısın?
        </h2>
        <p className="mt-5 text-lg text-gray-500">Ücretsiz hesap aç, 5 dakikada ilk danışanını ekle.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={APP} className="font-bold py-4 px-10 rounded-2xl bg-brand hover:bg-brandhover text-white transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl text-base">
            Ücretsiz Başla →
          </a>
          <a href="mailto:destek@helfit.com" className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold py-4 px-10 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 text-base">
            Bize Ulaş
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  useReveal()
  return (
    <>
      <Head>
        <title>Helfit — Diyetisyenler İçin Uçtan Uca Dijital Ofis ve Danışan Yönetim Platformu</title>
        <meta name="description" content="Kağıt-kalem dağınıklığına, karmaşık Excel dosyalarına ve kaybolan WhatsApp mesajlarına son verin. Tüm iş akışınızı tek bir profesyonel panelden yönetin."/>
        <meta name="keywords" content="diyetisyen yazılımı, danışan yönetim platformu, diyet planı, randevu, yapay zeka koçu, helfit"/>
        <meta property="og:title" content="Helfit — Diyetisyenler İçin Dijital Ofis Platformu"/>
        <meta property="og:description" content="Kağıt ve WhatsApp karmaşasına son. Tüm iş akışınızı tek platformdan yönetin."/>
        <meta property="og:type" content="website"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" type="image/png" href="/favicon.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>

      <Navbar/>

      <main>
        <Hero/>
        <Stats/>
        <Features/>
        <HowItWorks/>
        <AICoach/>
        <MobileApp/>
        <Pricing/>
        <Testimonials/>
        <FAQ/>
        <FinalCTA/>
      </main>

      <Footer/>
    </>
  )
}
