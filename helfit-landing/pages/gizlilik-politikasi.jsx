import LegalLayout, { Section, P, Bullets } from '../components/LegalLayout'

export default function GizlilikPolitikasi() {
  return (
    <LegalLayout
      title="Helfit Gizlilik Politikası"
      subtitle="NİFA SOFTWARE YAZILIM BİLGİSAYAR ELEKTRONİK BİLİŞİM İNŞAAT VE İTHALAT İHRACAT SANAYİ TİC.LTD.ŞTİ. tarafından hazırlanmıştır."
    >
      <P>
        Bu Gizlilik Politikası, Cumhuriyet Mah. Şişecam Yolu Sk. Arge 11 No: 52 İç Kapı No: 2
        Gebze/Kocaeli adresinde kurulu NİFA SOFTWARE YAZILIM BİLGİSAYAR ELEKTRONİK BİLİŞİM
        İNŞAAT VE İTHALAT İHRACAT SANAYİ TİC.LTD.ŞTİ. ("NİFA Software") tarafından, "Helfit"
        markalı uygulama ve web sitesi ("Platform") ziyaretçileri ve kullanıcıları için
        hazırlanmıştır.
      </P>
      <P>
        İşbu Gizlilik Politikası, Helfit KVKK Aydınlatma Metni'ni tamamlayıcı niteliktedir ve
        Platform'u ziyaret eden, henüz kayıt olmamış kişiler dahil tüm ziyaretçiler için genel
        bilgilendirme amacı taşır. Kayıtlı kullanıcılara (Diyetisyen ve Danışan) özel detaylı
        bilgiler için Helfit KVKK Aydınlatma Metni'ne başvurulmalıdır.
      </P>

      <Section num="1" title="Genel İlkeler">
        <P>NİFA Software, kişisel verileri işlerken aşağıdaki ilkelere uyar:</P>
        <Bullets
          items={[
            'Hukuka ve dürüstlük kurallarına uygunluk,',
            'Doğru ve güncel veri tutma,',
            'Belirli, açık ve hukuka uygun amaçlarla işleme,',
            'İşlenecekleri amaçla bağlantılı, sınırlı ve ölçülü olma,',
            'Mevzuatta öngörülen veya işlendikleri amaç için gerekli olan süre kadar saklama.',
          ]}
        />
      </Section>

      <Section num="2" title="Toplanan Veriler ve Toplanma Yöntemi">
        <P>
          Platform'u ziyaret ettiğinizde veya kullanmaya başladığınızda, kullanıcı türünüze
          (Diyetisyen/Danışan) göre kimlik, iletişim, sağlık/ölçüm ve kullanım verileriniz
          doğrudan sizden veya (Danışan'lar için) sizi davet eden Diyetisyen aracılığıyla
          toplanmaktadır. Detaylı veri kategorileri için Helfit KVKK Aydınlatma Metni'ne
          bakınız.
        </P>
      </Section>

      <Section num="3" title="Verilerin Saklandığı Altyapı">
        <P>
          Helfit, verilerini Google Firebase / Google Cloud Platform altyapısında
          barındırmaktadır. Veritabanı sunucuları Avrupa Birliği (Frankfurt, Almanya)
          bölgesinde konumlandırılmıştır. Bu altyapı, uluslararası kabul görmüş ISO 27001
          bilgi güvenliği standardı ile uyumlu bir sağlayıcıya aittir.
        </P>
      </Section>

      <Section num="4" title="Çerezler ve Benzeri Teknolojiler">
        <P>
          Helfit web sitesi, kullanıcı deneyimini iyileştirmek ve temel oturum yönetimini
          sağlamak amacıyla sınırlı sayıda teknik çerez kullanabilir. Helfit, şu an itibarıyla
          üçüncü taraf reklam ağları veya davranışsal reklamcılık amaçlı çerez
          kullanmamaktadır. Bu politika güncellenirse, ayrı bir Çerez Politikası yayınlanacak
          ve kullanıcılar bilgilendirilecektir.
        </P>
      </Section>

      <Section num="5" title="Veri Güvenliği Tedbirleri">
        <P>
          NİFA Software, kişisel verilerin hukuka aykırı işlenmesini ve yetkisiz erişimi
          önlemek amacıyla aşağıdaki teknik ve idari tedbirleri uygulamaktadır:
        </P>
        <Bullets
          items={[
            'Firebase Authentication ile şifreli kimlik doğrulama,',
            'Firestore güvenlik kuralları (Security Rules) ile rol bazlı erişim kontrolü — her kullanıcı yalnızca kendi verilerine veya yetkili olduğu verilere erişebilir,',
            'Diyetisyen yalnızca kendi Danışan\'larının verilerine erişebilir; Danışan\'lar arası veri görünürlüğü teknik olarak engellenmiştir,',
            'Hassas yapılandırma bilgileri (API anahtarları, e-posta kimlik bilgileri) sunucu tarafı ortam değişkenlerinde (environment variables) saklanır ve herkese açık kod deposuna dahil edilmez,',
            'Düzenli güvenlik kuralı güncellemeleri ve erişim denetimi.',
          ]}
        />
      </Section>

      <Section num="6" title="Çocuklara İlişkin Politika">
        <P>
          Helfit, 18 yaşından küçük kişilere yönelik tasarlanmamıştır ve bu kişilere yönelik
          pazarlama faaliyeti yürütülmemektedir. Platform üzerinden sunulan beslenme
          danışmanlığı hizmetinin reşit olmayan danışanlara sunulması durumunda, ilgili
          Diyetisyen'in yasal vasi onayı ve mevzuata uygunluk konusunda gerekli özeni
          göstermesi beklenir.
        </P>
      </Section>

      <Section num="7" title="Üçüncü Taraf Bağlantıları">
        <P>
          Helfit içerisinde üçüncü taraf web sitelerine veya hizmetlere bağlantı bulunması
          halinde, bu sitelerin gizlilik uygulamaları kendi politikalarına tabidir; NİFA
          Software bu siteler için sorumluluk kabul etmez.
        </P>
      </Section>

      <Section num="8" title="Haklarınız">
        <P>
          Kişisel verilerinize ilişkin haklarınız ve bu hakları nasıl kullanacağınız hakkında
          detaylı bilgi için Helfit KVKK Aydınlatma Metni'nin "Haklarınız" ve "Başvuru
          Yöntemi" bölümlerine bakınız.
        </P>
      </Section>

      <Section num="9" title="İletişim">
        <P>Bu Gizlilik Politikası hakkındaki sorularınızı aşağıdaki kanallardan iletebilirsiniz:</P>
        <Bullets
          items={[
            'E-posta: helfit.destek@gmail.com',
            'Kurumsal E-posta: info@nifasoftware.com',
            'Adres: Cumhuriyet Mah. Şişecam Yolu Sk. Arge 11 No: 52 İç Kapı No: 2 Gebze/Kocaeli',
          ]}
        />
      </Section>

      <Section num="10" title="Politika Güncellemeleri">
        <P>
          Bu Gizlilik Politikası zaman zaman güncellenebilir. Güncel sürüm her zaman Helfit
          Platform'u üzerinden erişilebilir olacaktır.
        </P>
      </Section>

      <div className="mt-10 pt-6 border-t border-gray-100">
        <P>
          <strong className="text-gray-700">Veri Sorumlusu:</strong> NİFA SOFTWARE YAZILIM
          BİLGİSAYAR ELEKTRONİK BİLİŞİM İNŞAAT VE İTHALAT İHRACAT SANAYİ TİC.LTD.ŞTİ.
        </P>
      </div>
    </LegalLayout>
  )
}
