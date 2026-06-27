import LegalLayout, { Section, P, Bullets, Note } from '../components/LegalLayout'

export default function TeslimatIptalIadeKosullari() {
  return (
    <LegalLayout
      title="Helfit İade ve İptal Politikası"
      subtitle="NİFA SOFTWARE tarafından sunulan Helfit abonelik hizmetlerine ilişkin iptal ve iade kuralları."
    >
      <P>
        Bu politika, NİFA SOFTWARE YAZILIM BİLGİSAYAR ELEKTRONİK BİLİŞİM İNŞAAT VE
        İTHALAT İHRACAT SANAYİ TİC.LTD.ŞTİ. ("NİFA Software") tarafından sunulan Helfit
        abonelik hizmetlerine ilişkin iptal ve iade kurallarını düzenler. İşbu politika,
        Helfit Mesafeli Satış Sözleşmesi'nin ayrılmaz bir parçasıdır.
      </P>

      <Section num="1" title="Cayma Hakkı (İlk 14 Gün)">
        <P>
          1.1. Alıcı, abonelik satın aldığı tarihten itibaren 14 (on dört) gün içinde,{' '}
          <strong className="text-gray-700">Platform'u hiç kullanmamış olması</strong>{' '}
          (hiçbir danışan eklememiş, hiçbir özelliği aktif olarak kullanmamış olması)
          şartıyla, gerekçe göstermeksizin cayma hakkını kullanabilir ve ödediği bedelin
          tamamı iade edilir.
        </P>
        <P>
          1.2. Alıcı, 14 günlük süre içinde olsa bile Platform'u kullanmaya başlamışsa (en
          az bir danışan eklemiş veya bir özelliği kullanmışsa), Mesafeli Sözleşmeler
          Yönetmeliği m.15/1-ğ uyarınca cayma hakkı sona erer ve iade talep edilemez.
        </P>
      </Section>

      <Section num="2" title="Abonelik İptali">
        <P>
          2.1. Alıcı, dilediği zaman Platform üzerindeki "Aboneliği İptal Et" seçeneğini
          kullanarak veya helfit.destek@gmail.com adresine yazılı talepte bulunarak
          aboneliğini iptal edebilir.
        </P>
        <P>
          2.2. <strong className="text-gray-700">Aylık Abonelik İptali:</strong> İptal talebi
          alındığında, mevcut ödeme dönemi sonuna kadar Hizmet'e erişim devam eder. Bir
          sonraki yenileme tarihinde herhangi bir tahsilat yapılmaz. Cari dönem için ödenmiş
          bedelin iadesi yapılmaz.
        </P>
        <P>
          2.3. <strong className="text-gray-700">Yıllık Abonelik İptali:</strong> İptal talebi
          alındığında, cari yıllık dönem sonuna kadar Hizmet'e erişim devam eder. Bir sonraki
          yenileme döneminde tahsilat yapılmaz. Kullanılmayan aylara ilişkin kısmi iade
          yapılmaz.
        </P>
        <P>
          2.4. İptal işlemi geriye dönük olarak uygulanmaz; iptal talebinden önceki dönemlere
          ilişkin ödemeler bu politika kapsamı dışındadır.
        </P>
      </Section>

      <Section num="3" title="Ödemenin Tahsil Edilememesi">
        <P>
          3.1. Abonelik yenileme tarihinde kayıtlı ödeme yönteminden tahsilatın başarısız
          olması halinde, NİFA Software Alıcı'ya bildirimde bulunur ve 7 (yedi) gün boyunca
          periyodik olarak tahsilatı tekrar dener.
        </P>
        <P>
          3.2. Bu süre sonunda tahsilat halen başarısız olursa, abonelik otomatik olarak sona
          erdirilir ve Alıcı'nın Platform'a erişimi premium özellikler bakımından kısıtlanır.
        </P>
      </Section>

      <Section num="4" title="İade Süreci">
        <P>
          4.1. Cayma hakkı kapsamında onaylanan iadeler, Alıcı'nın ödemeyi yaptığı
          kart/hesaba, ödeme altyapısı (iyzico) üzerinden en geç 14 (on dört) gün içinde
          gerçekleştirilir.
        </P>
        <P>
          4.2. İade işlemi yalnızca ödemenin yapıldığı kart veya hesap üzerinden yapılır;
          farklı bir hesaba iade yapılmaz.
        </P>
      </Section>

      <Section num="5" title="İstisnai Durumlar">
        <P>
          5.1. Platform'un NİFA Software'den kaynaklanan teknik bir arıza nedeniyle Alıcı'nın
          hizmetten yararlanamadığı süreler için, NİFA Software'in takdirine bağlı olarak
          kısmi iade veya ek kullanım süresi tanınabilir.
        </P>
        <P>
          5.2. Alıcı'nın işbu Sözleşme'yi veya Helfit Kullanıcı Sözleşmesi'ni ihlal etmesi
          nedeniyle hesabının NİFA Software tarafından sonlandırılması halinde, kalan abonelik
          süresi için iade yapılmaz.
        </P>
      </Section>

      <Section num="6" title="Başvuru">
        <P>İade ve iptal taleplerinizi aşağıdaki kanallardan iletebilirsiniz:</P>
        <Bullets
          items={[
            'E-posta: helfit.destek@gmail.com',
            'Kurumsal E-posta: info@nifasoftware.com',
          ]}
        />
        <Note>Talepler en geç 14 (on dört) gün içinde sonuçlandırılır.</Note>
      </Section>

      <Section num="7" title="Uyuşmazlık Çözümü">
        <P>
          İade ve iptal taleplerinin reddedilmesi veya uyuşmazlık yaşanması halinde Alıcı,
          yerleşim yerindeki Tüketici Hakem Heyeti veya Tüketici Mahkemesi'ne başvurabilir.
        </P>
      </Section>

      <div className="mt-10 pt-6 border-t border-gray-100 space-y-1">
        <P>
          <strong className="text-gray-700">NİFA SOFTWARE YAZILIM BİLGİSAYAR ELEKTRONİK
          BİLİŞİM İNŞAAT VE İTHALAT İHRACAT SANAYİ TİC.LTD.ŞTİ.</strong>
        </P>
        <P>Adres: Cumhuriyet Mah. Şişecam Yolu Sk. Arge 11 No: 52 İç Kapı No: 2 Gebze/Kocaeli</P>
        <P>E-posta: info@nifasoftware.com / helfit.destek@gmail.com</P>
      </div>
    </LegalLayout>
  )
}
