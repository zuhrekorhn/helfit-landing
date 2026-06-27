import LegalLayout, { Section, P, Bullets } from '../components/LegalLayout'

export default function KullanimSartlari() {
  return (
    <LegalLayout
      title="Helfit Kullanıcı Sözleşmesi"
      lastUpdated="19.06.2026"
    >
      <Section num="1" title="Taraflar">
        <P>
          1.1. İşbu Kullanıcı Sözleşmesi ("Sözleşme"), Helfit mobil ve web uygulaması
          ("Platform") üzerinden üye olan diyetisyenler ve danışanlar ("Kullanıcı(lar)") ile
          Cumhuriyet Mah. Şişecam Yolu Sk. Arge 11 No: 52 İç Kapı No: 2 Gebze/Kocaeli
          adresinde mukim NİFA SOFTWARE YAZILIM BİLGİSAYAR ELEKTRONİK BİLİŞİM İNŞAAT VE
          İTHALAT İHRACAT SANAYİ TİC.LTD.ŞTİ. ("NİFA Software" ve/veya "Şirket") arasında
          akdedilmiştir.
        </P>
        <P>
          1.2. İşbu Sözleşme'de NİFA Software ve Kullanıcı ayrı ayrı "Taraf" ve birlikte
          "Taraflar" olarak anılacaklardır.
        </P>
      </Section>

      <Section num="2" title="Tanımlar">
        <P>
          <strong className="text-gray-700">Platform:</strong> NİFA Software'e ait, "Helfit"
          markasını taşıyan, mobil cihazlara indirilebilen uygulama ve bağlı web sitesinin
          tamamını ifade eder.
        </P>
        <P>
          <strong className="text-gray-700">Diyetisyen:</strong> Beslenme ve diyetetik alanında
          lisans eğitimi veren fakülte veya yüksekokullardan mezun olmuş, mesleğini
          yürürlükteki mevzuata uygun şekilde icra eden ve Platform üzerinden danışanlarına
          hizmet sunmak amacıyla kayıt olan kullanıcıyı ifade eder.
        </P>
        <P>
          <strong className="text-gray-700">Danışan:</strong> Bir Diyetisyen tarafından
          Platform'a davet edilerek, o Diyetisyen'in beslenme danışmanlığı hizmetinden
          Platform üzerinden yararlanan kullanıcıyı ifade eder.
        </P>
        <P>
          <strong className="text-gray-700">Hizmet:</strong> Diyetisyenlerin danışan yönetimi,
          randevu takibi, diyet planı oluşturma, not alma ve danışanlarla iletişim kurma
          amacıyla Platform üzerinden sundukları dijital araçların tamamını ifade eder.
        </P>
        <P>
          <strong className="text-gray-700">Davet Kodu:</strong> Diyetisyen'in kendi
          Danışan'ını Platform'a bağlamak için oluşturduğu, tek kullanımlık veya sınırlı
          kullanımlık benzersiz kodu ifade eder.
        </P>
      </Section>

      <Section num="3" title="Sözleşme'nin Kapsamı ve Amacı">
        <P>
          3.1. İşbu Sözleşme'nin konusu, Diyetisyen'in kendi mesleki faaliyetini yürütmek
          amacıyla Platform'u bir dijital ofis ve danışan yönetim aracı olarak kullanmasına;
          Danışan'ın ise kendi Diyetisyen'i tarafından davet edilerek Platform üzerinden bu
          sürece dahil olmasına ilişkin hüküm ve koşulların belirlenmesidir.
        </P>
        <P>
          3.2. <strong className="text-gray-700">Platform'un Niteliği.</strong> Helfit;
          Diyetisyenlerin mesleki iş akışlarını (randevu, not, plan, iletişim) dijitalleştiren
          bir yazılım aracıdır. Helfit:
        </P>
        <Bullets
          items={[
            'Bir sağlık kuruluşu değildir,',
            'T.C. Sağlık Bakanlığı\'nın ilgili düzenlemeleri kapsamında resmî bir Sağlık Bilgi Yönetim Sistemi (SBYS) değildir; bu kapsamda bir sağlık kurumu olarak faaliyet göstermemektedir,',
            'Tıbbi teşhis, tedavi veya reçete hizmeti sunmaz,',
            'Diyetisyen ile Danışan arasındaki danışmanlık ilişkisinin tarafı değildir; bu ilişkinin yürütülmesi için dijital altyapı sağlar.',
          ]}
        />
        <P>
          Platform üzerinden sunulan beslenme danışmanlığı hizmetinin içeriği, niteliği ve
          sonuçları münhasıran ilgili Diyetisyen'in mesleki sorumluluğundadır.
        </P>
        <P>
          3.3. Kullanıcı, Platform'a erişim sağlayarak, bir kullanıcı hesabı oluşturarak veya
          Platform'u kullanmaya başlayarak işbu Sözleşme'yi okuduğunu, içeriğini anladığını ve
          hükümlerine uyacağını kabul, beyan ve taahhüt eder.
        </P>
        <P>
          3.4. İşbu Sözleşme, Diyetisyen ile Danışan arasında akdedilen danışmanlık ilişkisinin
          bir tarafı değildir. Diyetisyen ile Danışan arasındaki beslenme danışmanlığı
          hizmetine ilişkin ücret, içerik ve şartlar Taraflar arasında ayrıca ve doğrudan
          belirlenir; NİFA Software bu ilişkinin tarafı olmayıp yalnızca bu ilişkinin
          yürütülmesi için teknik altyapı sağlar.
        </P>
      </Section>

      <Section num="4" title="Diyetisyen'e İlişkin Bilgilendirme ve Beyanlar">
        <P>
          4.1. Diyetisyen, Platform'a kayıt olurken beslenme ve diyetetik alanında lisans
          eğitimi veren bir fakülte veya yüksekokuldan mezun olduğunu ve mesleğini
          yürürlükteki mevzuata uygun şekilde icra ettiğini beyan ve taahhüt eder.
          Diyetisyen, talep edilmesi halinde diploma veya mesleki yeterliliğini gösteren
          belgeleri Platform'a yüklemekle yükümlüdür.
        </P>
        <P>
          4.2. Diyetisyen'in kaydı, NİFA Software tarafından yapılacak inceleme sonucunda
          onaylanır. NİFA Software, herhangi bir gerekçe göstermeksizin bir kaydı
          onaylamama veya onaylanmış bir hesabı askıya alma hakkını saklı tutar.
        </P>
        <P>
          4.3. Platform'da sunulan beslenme programları, öneriler, notlar ve geri bildirimler
          yalnızca ilgili Diyetisyen'in kişisel ve mesleki değerlendirmesine dayanmaktadır.
          NİFA Software, Diyetisyen tarafından verilen tavsiyelerin, hazırlanan planların
          veya alınan kararların tıbbi veya mesleki doğruluğunu, yeterliliğini garanti etmez
          ve bu içeriklerden kaynaklanabilecek doğrudan veya dolaylı zararlardan sorumlu
          tutulamaz.
        </P>
        <P>
          4.4. Diyetisyen, Danışan'ına yönelik mesleki kararların, önerilerin ve
          değerlendirmelerin tamamından münhasıran kendisinin sorumlu olduğunu; NİFA
          Software'in bu kararların içeriğine müdahale etmediğini ve edemeyeceğini kabul,
          beyan ve taahhüt eder.
        </P>
        <P>
          4.5. Diyetisyen, kendi Danışan'ına ait kişisel ve sağlık verilerini Platform'a
          girerken, bu verilerin toplanması ve işlenmesi için Danışan'ından gerekli
          onayı/aydınlatmayı kendisinin yapmakla yükümlü olduğunu kabul eder. NİFA Software,
          Diyetisyen ile Danışan arasındaki bu aydınlatma yükümlülüğünün yerine getirilip
          getirilmediğini denetleme imkânına sahip değildir.
        </P>
        <P>
          4.6. Diyetisyen, Danışan'ına özel sağlık durumu gerektiren hallerde (örneğin;
          hamilelik, kronik hastalık, ilaç kullanımı, yeme bozukluğu gibi tıbbi gözetim
          gerektirebilecek durumlar) gerekli mesleki özeni göstermekle ve gerektiğinde
          Danışan'ı ilgili sağlık kuruluşuna yönlendirmekle yükümlüdür.
        </P>
        <P>
          4.7. <strong className="text-gray-700">Acil Durumlar.</strong> Platform, acil tıbbi
          durumlar için tasarlanmamıştır. Danışan'ın acil bir sağlık sorunu yaşaması halinde,
          Platform üzerinden değil doğrudan 112 Acil Çağrı Merkezi'ne veya en yakın sağlık
          kuruluşuna başvurması gerekmektedir.
        </P>
      </Section>

      <Section num="5" title="Veri Sorumluluğu ve Platformun Rolü">
        <P>
          5.1. İşbu Sözleşme kapsamında, Danışan'a ait kişisel veriler bakımından veri
          sorumlusu, ilgili Danışan'ı Platform'a davet eden <strong className="text-gray-700">Diyetisyen'dir.</strong>{' '}
          NİFA Software, bu veriler bakımından 6698 sayılı KVKK çerçevesinde{' '}
          <strong className="text-gray-700">veri işleyen</strong> sıfatıyla hareket eder.
        </P>
        <P>
          5.2. Diyetisyen, Danışan'larına ait verileri Platform'a girmesi nedeniyle KVKK ve
          ilgili mevzuat kapsamında veri sorumlusu sıfatıyla doğan tüm yükümlülüklerden
          bizzat sorumlu olduğunu kabul eder.
        </P>
        <P>
          5.3. NİFA Software, Diyetisyen ve Şirket arasındaki kayıt, hesap yönetimi ve
          abonelik ilişkisi bakımından veri sorumlusu sıfatıyla hareket eder.
        </P>
        <P>
          5.4. NİFA Software'in Platform üzerindeki rolü; güvenli bir teknik altyapı sağlamak,
          veri bütünlüğünü ve erişim kontrolünü temin etmek ve Diyetisyen-Danışan iletişimini
          teknik olarak mümkün kılmaktır.
        </P>
      </Section>

      <Section num="6" title="Abonelik ve Ödeme">
        <P>
          6.1. Platform'un temel kullanımı için Diyetisyen, belirlenen abonelik paketlerinden
          birini satın alabilir. Abonelik bedeli, Diyetisyen'in Platform'u kullanma hakkı
          karşılığında NİFA Software'e ödenir.
        </P>
        <P>
          6.2. <strong className="text-gray-700">Şüpheye mahal vermemek adına:</strong>{' '}
          Diyetisyen'in kendi Danışan'ından aldığı beslenme danışmanlığı ücreti, NİFA
          Software'in tarafı olduğu bir işlem değildir.
        </P>
        <P>
          6.3. Abonelik, aksi belirtilmedikçe aylık olarak otomatik yenilenir. Yenileme
          tarihinde ödemenin tahsil edilememesi halinde NİFA Software, Diyetisyen'e
          bildirimde bulunur ve makul bir süre içinde tahsilatı tekrar dener; bu sürenin
          sonunda abonelik askıya alınabilir.
        </P>
        <P>
          6.4. Diyetisyen, mevzuatın tanıdığı cayma hakkı süresi içinde, kullanmadığı
          abonelik süresi için gerekçe göstermeksizin iade talep edebilir. Kullanılmış
          sürelere ilişkin iade talep edilemez.
        </P>
      </Section>

      <Section num="7" title="Kayıt, Onay ve Hesap Güvenliği">
        <P>
          7.1. Diyetisyen kaydı, NİFA Software'in onayına tabidir. Onay sürecinde
          Diyetisyen'den mesleki yeterlilik belgesi talep edilebilir.
        </P>
        <P>
          7.2. Danışan, ancak kendisini davet eden Diyetisyen'in oluşturduğu Davet Kodu ile
          kayıt olabilir.
        </P>
        <P>
          7.3. Kullanıcı, hesap bilgilerinin (kullanıcı adı, şifre) gizliliğinden ve
          güvenliğinden bizzat sorumludur.
        </P>
        <P>
          7.4. Kullanıcı, Platform'a doğru ve güncel bilgi sağlamakla yükümlüdür.
        </P>
      </Section>

      <Section num="8" title="Platform Kullanımına İlişkin Kurallar">
        <P>
          8.1. Kullanıcı, Platform'u yürürlükteki mevzuata, ahlaka ve işbu Sözleşme'ye uygun
          şekilde kullanacağını kabul eder.
        </P>
        <P>
          8.2. Kullanıcı, Platform üzerinden tehdit, hakaret, iftira içeren veya hukuka aykırı
          herhangi bir içerik paylaşmayacağını kabul, beyan ve taahhüt eder.
        </P>
        <P>
          8.3. Diyetisyen, Platform'u yalnızca kendi mesleki faaliyeti kapsamında
          kullanacağını; Platform'daki hesabını veya hizmetlerini üçüncü kişilere ticari
          amaçla kullandırmayacağını kabul eder.
        </P>
        <P>
          8.4. NİFA Software, Platform'un teknik bakımı, güncellenmesi veya geliştirilmesi
          amacıyla hizmeti geçici olarak durdurma hakkına sahiptir.
        </P>
      </Section>

      <Section num="9" title="Fikri Mülkiyet">
        <P>
          9.1. Platform'a ait yazılım, tasarım, marka ve tüm fikri mülkiyet hakları NİFA
          Software'e aittir. Kullanıcı'ya Platform'u kullanma hakkı dışında herhangi bir hak
          devredilmez.
        </P>
        <P>
          9.2. Diyetisyen'in Platform'a yüklediği diyet planı şablonları, notlar gibi özgün
          içerikler Diyetisyen'e ait kalır; NİFA Software bu içerikleri yalnızca Hizmet'in
          sunulması amacıyla işler.
        </P>
      </Section>

      <Section num="10" title="Sorumluluğun Sınırlandırılması">
        <P>
          10.1. NİFA Software, Platform'un kesintisiz veya hatasız çalışacağını garanti etmez;
          ancak makul teknik tedbirleri almayı taahhüt eder.
        </P>
        <P>
          10.2. NİFA Software, Diyetisyen tarafından Danışan'a sunulan beslenme danışmanlığı
          hizmetinin sonuçlarından, Diyetisyen'in mesleki hata veya ihmalinden kaynaklanan
          zararlardan sorumlu değildir.
        </P>
        <P>
          10.3. Kullanıcı'nın Platform'a erişim için kullandığı donanım, internet bağlantısı
          vb. unsurların yeterliliğinden NİFA Software sorumlu değildir.
        </P>
        <P>
          10.4. Diyetisyen, kendi Danışan'larına ait kişisel ve sağlık verilerini Platform'a
          girerken, bu verilerin doğruluğundan ve gerekli onay/aydınlatmanın alınmış
          olmasından bizzat sorumludur.
        </P>
      </Section>

      <Section num="11" title="Gizlilik ve Kişisel Verilerin Korunması">
        <P>
          11.1. NİFA Software, Platform üzerinden işlenen kişisel verilerin korunmasına önem
          vermektedir. Kişisel verilerin işlenmesine ilişkin detaylı bilgi Helfit KVKK
          Aydınlatma Metni'nde yer almaktadır.
        </P>
        <P>
          11.2. Kullanıcı, Platform üzerinde ekran görüntüsü alma, kayıt etme veya üçüncü
          kişilerle paylaşma faaliyetlerinin yetkisiz kişisel veri paylaşımına yol
          açabileceğini kabul eder.
        </P>
      </Section>

      <Section num="12" title="Muhtelif Hükümler">
        <P>
          12.1. İşbu Sözleşme, Kullanıcı'nın Platform'a kaydolması ile yürürlüğe girer ve
          hesabın kapatılmasına kadar geçerliliğini sürdürür.
        </P>
        <P>
          12.2. NİFA Software, işbu Sözleşme'yi zaman zaman güncelleyebilir. Önemli
          değişiklikler Kullanıcı'ya Platform veya e-posta yoluyla bildirilir.
        </P>
        <P>
          12.3. İşbu Sözleşme Türkiye Cumhuriyeti kanunlarına tabidir. Sözleşme'den
          kaynaklanan ihtilaflarda Kocaeli Mahkemeleri ve İcra Müdürlükleri yetkilidir. Bu
          husus, Kullanıcı'nın tüketici sıfatıyla yetkili Tüketici Mahkemesi veya Tüketici
          Hakem Heyeti'ne başvuru hakkını etkilemez.
        </P>
        <P>
          12.4. Kullanıcı, NİFA Software'in önceden yazılı onayı olmaksızın işbu
          Sözleşme'den doğan haklarını üçüncü kişilere devredemez.
        </P>
        <P>
          12.5. İşbu Sözleşme, Kullanıcı tarafından elektronik ortamda onaylanmak suretiyle
          akdedilmiş ve yürürlüğe girmiştir.
        </P>
      </Section>

      <div className="mt-10 pt-6 border-t border-gray-100 space-y-1">
        <P>
          <strong className="text-gray-700">NİFA SOFTWARE YAZILIM BİLGİSAYAR ELEKTRONİK
          BİLİŞİM İNŞAAT VE İTHALAT İHRACAT SANAYİ TİC.LTD.ŞTİ.</strong>
        </P>
        <P>Adres: Cumhuriyet Mah. Şişecam Yolu Sk. Arge 11 No: 52 İç Kapı No: 2 Gebze/Kocaeli</P>
        <P>E-posta: info@nifasoftware.com | Helfit Destek: helfit.destek@gmail.com</P>
      </div>
    </LegalLayout>
  )
}
