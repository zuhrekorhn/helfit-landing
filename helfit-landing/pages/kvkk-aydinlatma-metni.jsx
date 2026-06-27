import LegalLayout, { Section, SubSection, P, Bullets, DataTable, Note } from '../components/LegalLayout'

export default function KVKKAydinlatmaMetni() {
  return (
    <LegalLayout
      title="Helfit Kişisel Verilerin İşlenmesine İlişkin Aydınlatma Metni"
      subtitle="6698 sayılı KVKK'nın 10. maddesi uyarınca hazırlanmıştır."
      lastUpdated="19.06.2026"
    >
      <P>
        NİFA SOFTWARE YAZILIM BİLGİSAYAR ELEKTRONİK BİLİŞİM İNŞAAT VE İTHALAT İHRACAT
        SANAYİ TİC.LTD.ŞTİ. ("NİFA Software" ve/veya "Şirket"), Cumhuriyet Mah. Şişecam
        Yolu Sk. Arge 11 No: 52 İç Kapı No: 2 Gebze/Kocaeli adresinde mukim olup, "Helfit"
        markalı mobil ve web uygulaması ("Platform") üzerinden diyetisyenlere yönelik bir
        dijital ofis ve danışan yönetim aracı sunmaktadır.
      </P>

      <Section num="1" title="Veri Sorumlusu Kimdir?">
        <P>İşbu Aydınlatma Metni iki farklı veri sorumluluğu ilişkisini düzenler:</P>
        <P>
          <strong className="text-gray-700">A) Diyetisyen'in NİFA Software ile ilişkisi
          bakımından:</strong> Diyetisyen'in kendi kimlik, iletişim, ödeme ve hesap bilgileri
          açısından veri sorumlusu <strong className="text-gray-700">NİFA Software'dir.</strong>
        </P>
        <P>
          <strong className="text-gray-700">B) Danışan'a ait veriler bakımından:</strong>{' '}
          Danışan'ın kimlik, sağlık, ölçüm ve benzeri verileri açısından veri sorumlusu,
          ilgili Danışan'ı Platform'a davet eden <strong className="text-gray-700">Diyetisyen'dir.</strong>{' '}
          NİFA Software bu veriler bakımından KVKK'nın 3. maddesi kapsamında{' '}
          <strong className="text-gray-700">veri işleyen</strong> sıfatıyla hareket eder.
        </P>
      </Section>

      <Section num="2" title="Hangi Kişisel Veriler, Hangi Amaçla İşlenmektedir?">
        <SubSection title="A. Diyetisyen Tarafından Paylaşılan Veriler">
          <DataTable
            headers={['İşlenen Kişisel Veri', 'Hukuki Sebep', 'İşleme Amacı']}
            rows={[
              ['Ad, soyad, e-posta, telefon', 'Sözleşmenin kurulması/ifası', 'Kullanıcı hesabının oluşturulması, Platform\'un sunulması'],
              ['Mesleki yeterlilik belgeleri (diploma, sertifika)', 'Sözleşmenin kurulması/ifası', 'Diyetisyen kaydının onaylanması süreci'],
              ['Ödeme/abonelik bilgileri', 'Sözleşmenin kurulması/ifası', 'Abonelik bedelinin tahsil edilmesi'],
              ['İşlem güvenliği verisi (IP, cihaz bilgisi)', 'Meşru menfaat', 'Hesap güvenliğinin sağlanması, dolandırıcılığın önlenmesi'],
              ['Kullanım verileri (giriş sıklığı, kullanılan özellikler)', 'Meşru menfaat', 'Platform\'un geliştirilmesi, hizmet kalitesinin artırılması'],
            ]}
          />
        </SubSection>

        <SubSection title="B. Danışan'a Ait Veriler (Diyetisyen Tarafından Sisteme Girilen)">
          <DataTable
            headers={['İşlenen Kişisel Veri', 'Hukuki Sebep', 'İşleme Amacı']}
            rows={[
              ['Ad, soyad, e-posta, telefon', 'Diyetisyen\'in talimatı / Açık Rıza', 'Danışan hesabının oluşturulması, randevu ve iletişim süreçlerinin yürütülmesi'],
              ['Ölçüm verileri (kilo, boy, bel çevresi vb.)', 'Diyetisyen\'in talimatı / Açık Rıza', 'Gelişim takibinin sağlanması'],
              ['Sağlık durumuna ilişkin notlar (özel nitelikli veri)', 'Açık Rıza', 'Beslenme danışmanlığı sürecinin yürütülmesi'],
              ['Diyet planı ve öğün takip verileri', 'Diyetisyen\'in talimatı', 'Plan oluşturma ve takip süreçlerinin yürütülmesi'],
              ['Fotoğraflar (öğün/aktivite görseli, talep halinde)', 'Açık Rıza', 'Diyetisyen\'e bilgi sağlanması'],
              ['Mesajlaşma içerikleri', 'Diyetisyen\'in talimatı', 'Diyetisyen-Danışan iletişiminin yürütülmesi'],
            ]}
          />
          <Note>
            <strong>Önemli Not:</strong> Sağlık verisi gibi özel nitelikli kişisel verilerin
            işlenmesi için Danışan'dan açık rızanın alınması, Danışan'ı Platform'a davet eden
            Diyetisyen'in sorumluluğundadır. NİFA Software bu açık rızanın varlığını teknik
            olarak denetleme imkânına sahip değildir; Diyetisyen, Danışan'ını sisteme dahil
            ederken gerekli aydınlatma ve rıza süreçlerini bizzat yürütmekle yükümlüdür.
          </Note>
        </SubSection>

        <SubSection title="C. Bildirim ve İletişim Verileri">
          <DataTable
            headers={['İşlenen Kişisel Veri', 'Hukuki Sebep', 'İşleme Amacı']}
            rows={[
              ['Push bildirim token\'ı (FCM)', 'Meşru menfaat', 'Randevu hatırlatması, onay/red bildirimleri'],
              ['E-posta adresi', 'Meşru menfaat / Sözleşme', 'Onay süreci bildirimleri, sistem uyarıları'],
            ]}
          />
        </SubSection>
      </Section>

      <Section num="3" title="Kişisel Veriler Nasıl Toplanır?">
        <P>
          Kişisel verileriniz; Platform'a kayıt olurken, Diyetisyen tarafından danışan bilgisi
          girişi yapılırken, randevu oluşturulurken, mesajlaşma ve diyet planı modülleri
          kullanılırken doğrudan ve elektronik ortamda toplanmaktadır.
        </P>
      </Section>

      <Section num="4" title="Kişisel Veriler Nerede ve Nasıl Saklanır?">
        <P>
          4.1. Helfit, altyapısını <strong className="text-gray-700">Google Firebase (Google
          Cloud Platform)</strong> üzerinde barındırmaktadır. Veriler; kimlik doğrulama
          (Firebase Authentication), veritabanı (Cloud Firestore), dosya depolama (Firebase
          Storage) ve bildirim (Firebase Cloud Messaging) servisleri aracılığıyla
          işlenmektedir.
        </P>
        <P>
          4.2. Veritabanı (Cloud Firestore) verileri,{' '}
          <strong className="text-gray-700">Avrupa Birliği sınırları içerisinde
          (europe-west3 — Frankfurt, Almanya)</strong> bulunan Google veri merkezlerinde
          saklanmaktadır.
        </P>
        <P>
          4.3. Google Firebase/Cloud Platform, ISO/IEC 27001, ISO 27017, ISO 27018 ve SOC
          1/2/3 sertifikalarına sahip bir altyapı sağlayıcısıdır.
        </P>
        <P>
          4.4. Bildirim gönderimi (Firebase Cloud Messaging) ve e-posta bildirimleri
          (Gmail/Nodemailer altyapısı) kapsamında veriler, Google'ın küresel altyapısı
          üzerinden işlenebilmektedir. Bu işlemler bildirim iletiminin teknik gerekliliğidir
          ve içerik bazlı veri saklama amacı taşımaz.
        </P>
      </Section>

      <Section num="5" title="Kişisel Verilerin Yurt Dışına Aktarımı">
        <P>
          5.1. Platform'un temel veritabanı Avrupa Birliği (Frankfurt, Almanya) sınırları
          içinde tutulmaktadır.
        </P>
        <P>
          5.2. Bununla birlikte, Google Firebase altyapısının bildirim (FCM) ve kimlik
          doğrulama (Authentication) gibi bazı yardımcı servisleri, Google'ın küresel
          altyapısı kapsamında işlenebilmekte ve teknik olarak farklı ülkelerdeki
          sunuculardan geçebilmektedir. Bu aktarım, KVKK madde 9 uyarınca{' '}
          <strong className="text-gray-700">açık rızanıza</strong> dayanmaktadır ve
          Platform'a kayıt olurken bu hususta onayınız alınmaktadır.
        </P>
        <P>
          5.3. Google LLC, Avrupa Komisyonu'nun onayladığı Standart Sözleşme Maddeleri (SCC)
          ve/veya AB-ABD Veri Gizliliği Çerçevesi (Data Privacy Framework) kapsamında veri
          aktarım güvencelerine sahiptir.
        </P>
      </Section>

      <Section num="6" title="Kişisel Verilerin Üçüncü Kişilere Aktarılması">
        <P>Kişisel verileriniz, aşağıdaki durumlar ve kişiler ile sınırlı olarak paylaşılabilir:</P>
        <Bullets
          items={[
            'Google Firebase/Cloud Platform: Barındırma ve teknik altyapı hizmeti kapsamında (veri işleyen sıfatıyla),',
            'Diyetisyen: Danışan verileri, ilgili Diyetisyen ile paylaşılır,',
            'Yetkili kamu kurum ve kuruluşları: Yasal yükümlülüklerin yerine getirilmesi amacıyla, mevzuatın gerektirdiği hallerde.',
          ]}
        />
        <Note>
          NİFA Software, kişisel verileri pazarlama veya reklam amacıyla üçüncü taraflarla{' '}
          <strong>paylaşmamaktadır.</strong>
        </Note>
      </Section>

      <Section num="7" title="Kişisel Verilerin Saklanma Süresi">
        <DataTable
          headers={['Veri Türü', 'Saklama Süresi']}
          rows={[
            ['Hesap ve abonelik verileri', 'Hesap aktif olduğu sürece + mevzubahis sürecin sona ermesinden itibaren 10 yıl (vergi/ticaret hukuku yükümlülükleri)'],
            ['Danışan sağlık/ölçüm verileri', 'Diyetisyen-Danışan ilişkisi sona erene kadar; Diyetisyen\'in talebi üzerine silinir'],
            ['Push bildirim token\'ları', 'Geçersiz hale geldiğinde otomatik olarak silinir (günlük otomatik temizlik)'],
            ['Mesajlaşma verileri', 'Hesap aktif olduğu sürece'],
          ]}
        />
        <P>
          Saklama süresinin sona ermesi halinde kişisel veriler silinir, yok edilir veya
          anonim hale getirilir.
        </P>
      </Section>

      <Section num="8" title="KVKK Kapsamındaki Haklarınız">
        <P>KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</P>
        <Bullets
          items={[
            'Kişisel verilerinizin işlenip işlenmediğini öğrenme,',
            'İşlenmişse buna ilişkin bilgi talep etme,',
            'İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,',
            'Yurt içinde/dışında aktarıldığı üçüncü kişileri bilme,',
            'Eksik veya yanlış işlenmişse düzeltilmesini isteme,',
            'KVKK\'da öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme,',
            'Düzeltme/silme taleplerinin üçüncü kişilere bildirilmesini isteme,',
            'İşlenen verilerin münhasıran otomatik sistemlerle analizi sonucu aleyhinize bir sonuç çıkmasına itiraz etme,',
            'Kanuna aykırı işleme nedeniyle zarara uğramanız halinde zararın giderilmesini talep etme.',
          ]}
        />
        <Note>
          <strong>Danışan'a Özel Not:</strong> Sağlık ve ölçüm verilerinizin silinmesi veya
          düzeltilmesi taleplerinizi öncelikle kendi Diyetisyen'inize iletmeniz
          gerekmektedir; çünkü bu veriler bakımından veri sorumlusu Diyetisyen'dir.
          Diyetisyen'e ulaşamadığınız hallerde talebinizi doğrudan NİFA Software'e de
          iletebilirsiniz.
        </Note>
      </Section>

      <Section num="9" title="Başvuru Yöntemi">
        <P>
          Yukarıda belirtilen haklarınızı kullanmak için taleplerinizi aşağıdaki adreslere
          iletebilirsiniz:
        </P>
        <Bullets
          items={[
            'E-posta: helfit.destek@gmail.com',
            'Kurumsal E-posta: info@nifasoftware.com',
            'Posta: Cumhuriyet Mah. Şişecam Yolu Sk. Arge 11 No: 52 İç Kapı No: 2 Gebze/Kocaeli',
          ]}
        />
        <P>
          Talebiniz, ilgili belgelerin ulaşmasından itibaren en kısa sürede ve en geç 30
          (otuz) gün içinde sonuçlandırılır.
        </P>
      </Section>

      <Section num="10" title="Kişisel Verileri Koruma Kurulu'na Şikayet Hakkı">
        <P>
          Başvurunuzun olumsuz değerlendirilmesi veya süresinde cevap verilmemesi halinde,
          Kişisel Verileri Koruma Kurulu'na şikayette bulunma hakkınız bulunmaktadır.
        </P>
        <Bullets
          items={[
            'Kurul: Kişisel Verilerin Korunması Kurulu',
            'Adres: Nasuh Akar Mah. Ziyabey Cad. 1407. Sok. No:4, 06520 Balgat-Çankaya/Ankara',
            'Web: www.kvkk.gov.tr',
          ]}
        />
      </Section>

      <Section num="11" title="Metin Değişiklikleri">
        <P>
          İşbu Aydınlatma Metni zaman zaman güncellenebilir. Önemli değişiklikler Platform
          üzerinden veya e-posta ile bildirilir.
        </P>
      </Section>

      <div className="mt-10 pt-6 border-t border-gray-100 space-y-1">
        <P>
          <strong className="text-gray-700">Veri Sorumlusu:</strong> NİFA SOFTWARE YAZILIM
          BİLGİSAYAR ELEKTRONİK BİLİŞİM İNŞAAT VE İTHALAT İHRACAT SANAYİ TİC.LTD.ŞTİ.
        </P>
        <P>Adres: Cumhuriyet Mah. Şişecam Yolu Sk. Arge 11 No: 52 İç Kapı No: 2 Gebze/Kocaeli</P>
        <P>E-posta: info@nifasoftware.com / helfit.destek@gmail.com</P>
      </div>
    </LegalLayout>
  )
}
