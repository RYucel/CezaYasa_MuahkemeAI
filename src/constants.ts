export interface AIModel {
  id: string;
  name: string;
  version: string;
  author: string;
  content: string;
  accent: string;
  consensus: {
    [key: string]: 'compatible' | 'conflict' | 'warning' | 'neutral';
  };
}

export const AI_MODELS: AIModel[] = [
  {
    id: 'z-ai',
    name: 'Z.AI',
    version: '5.1',
    author: 'Z.AI Research',
    accent: 'emerald',
    consensus: {
      'Madde 2': 'compatible',
      'Madde 3': 'compatible',
      'Madde 4': 'conflict', // Partial conflict on tüzük
      'Madde 5': 'conflict',
      'Madde 6': 'compatible',
      'Madde 7': 'conflict'
    },
    content: `KKTC Anayasası ile Ceza Muhakemeleri Usulü (Değişiklik) Yasa Tasarısı'nın karşılaştırmalı analizi sonucunda tespit edilen uyumlu ve sorunlu maddeler aşağıda tablo halinde özetlenmiştir:

### 🟢 ANAYASAYA UYUMLU OLAN MADDELER

| Tasarı Madde No | Tasarı Konusu | Anayasa Karşılığı | Uyum Gerekçesi |
| :--- | :--- | :--- | :--- |
| **Madde 2** (13A) | Tutuklama yerlerinin fiziki ve hijyenik koşullarının insan onuruna uygun hale getirilmesi | Md. 14 (Kişi dokunulmazlığı, insanlık onuruyla bağdaşmayan muamele yasağı) | Polis hücrelerinin insan onuruna uygun, sağlıklı ve hijyenik olmasının zorunlu kılınması, Anayasa'nın kişi dokunulmazlığı ve onurunu koruma ilkeleriyle doğrudan örtüşmektedir. |
| **Madde 3** (13B) | Tutukluların nakil şartları, gereksiz kelepçe takma ve arkadan kelepçe yasağı | Md. 14 (İnsanlık onuruyla bağdaşmayan muamele yasağı), Md. 15 (Vücut bütünlüğü) | Kişilerin kamuya teşhir edilmeden, onur kırıcı araçlarda taşınması; çocuk, engelli ve akıl hastalarına kelepçe takılamaması ve arkadan kelepçe yasağı Anayasal onur ve vücut bütünlüğü haklarına tam uyumludur. |
| **Madde 4** (23A/6) | Adli kontrol (teminat) kararlarına 12 aylık süre sınırı getirilmesi | Md. 16 (Kişi özgürlüğü ve güvenliği), Md. 18 (Suçsuzluk karinesi) | Kişilerin yıllarca dava açılmadan özgürlüklerinin sınırlanmasına (belirsizliğe) son verilmesi, hukuki güvenlik ve özgürlüğün güvence altına alınması bakımından Anayasal ilkelerle uyumludur. |
| **Madde 6** (48) | Teminat altında yargılanan kişinin, kaçma şüphesi yoksa tutuklanamaması | Md. 16 (Kişi özgürlüğü), Md. 18/4 (Suçluluğu kanıtlanana kadar suçsuz sayılma) | Tutukluluğun istisnai bir ölçüt olması gerektiği evrensel hukuk kuralını güçlendirmesi ve keyfi tutuklamaların önüne geçmesi bakımından Anayasaya uygun bir düzenlemedir. |

---

### 🔴 ANAYASAYA AYKIRI VE SORUNLU OLAN MADDELER

| Tasarı Madde No | Tasarı Konusu | İhlal Edilen Anayasa Maddeleri | Sorun Gerekçesi |
| :--- | :--- | :--- | :--- |
| **Madde 4** (23A/7) | Elektronik kelepçe uygulama usulünün **tüzüğe** (Bakanlar Kurulu kararına) bırakılması | Md. 11 (Temel hakların ancak yasa ile kısıtlanması), Md. 22 (Gezi ve yerleşme özgürlüğünün ancak yasa ile kısıtlanması), Md. 7 (Anayasanın üstünlüğü) | Kişinin özgürlüğünün ağır bir kısıtlaması olan elektronik kelepçenin usul ve esaslarının yasalaşmaması, idarenin (Bakanlar Kurulu) keyfiyetine bırakılması "Temel haklar ancak yasayla kısıtlanabilir" kuralını doğrudan ihlal eder. İdari işlemlerle temel hak kısıtlanamaz. |
| **Madde 5** (23B) | Suçu kesinleşmemiş kişinin isim/fotoğrafının yayınlanmasını ağır cezalarla suç haline getirilmesi | Md. 26/4 (Olaylar hakkında yayın yasaklanamaz), Md. 24 (Düşünce ve anlatım özgürlüğü), Md. 34 (Kamu görevlilerine isnadta ispat hakkı) | Yargılama bir "olay"dır ve Anayasa olaylar hakkında yayın yasağını açıkça kaldırmıştır. Yargılamayı haber yapmayı suç saymak basın özgürlüğüne ağır bir sansürdür. Özellikle kamu görevlilerinin yolsuzluklarına dair isnadları haber yapmayı men etmek, Anayasa'nın 34. maddesindeki "ispat hakkını" kullanılmaz hale getirir ve yolsuzlukların örtbas edilmesine aracı olur. |
| **Madde 7** (64) | Yoksul sanığa avukat atanmasını mahkemenin **takdirine** bırakılması ve Sosyal Hizmetler raporu şartı | Md. 17/4-ç (Parasız hukukçu atanması hakkı), Md. 18/5-ç (Sanık hakları) | Anayasa, adaletin gerektirmesi halinde parasız avukat atanmasını bir "hak" olarak düzenlerken, tasarı bunu "mahkeme atayabilir/talep edebilir" şeklinde keyfi bir takdire çevirmiştir. Ayrıca kişinin yoksulluğunu ispat yükünü Sosyal Hizmetler Dairesi'ne vermek, acil olan yargılama sürecinde sanığın savunmasız kalmasına ve hakkının gasp edilmesine neden olacaktır. |`
  },
  {
    id: 'gemini',
    name: 'Gemini Pro',
    version: '3.0',
    author: 'Google AI',
    accent: 'blue',
    consensus: {
      'Madde 2': 'warning', // Power delegation issue
      'Madde 3': 'compatible',
      'Madde 4': 'warning', // Tüzük issue
      'Madde 5': 'conflict',
      'Madde 6': 'compatible',
      'Madde 7': 'warning' // Discretionary power
    },
    content: `Sunmuş olduğunuz Ceza Muhakemeleri Usulü (Değişiklik) Yasa Tasarısı'ı, KKTC Anayasası'nın temel hak ve özgürlükler, hukuk devleti ve kuvvetler ayrılığı ilkeleri ışığında analiz ettim. Genel olarak tasarı, kişi özgürlüğü ve insan onurunu korumayı amaçlasa da bazı maddeler Anayasa ile çelişme riski taşımaktadır.

İşte derinlemesine analiz ve sorunlu görülen noktalar:

---

## 1. Yürütmeye Aşırı Yetki Devri ve "Yasal Düzenleme" İlkesi
Tasarıda en dikkat çeken sorun, temel hakları doğrudan etkileyen unsurların **tüzüklere (yürütmeye)** bırakılmış olmasıdır.

*   **Sorunlu Madde:** Tasarı Madde 2 (Yeni 13A) ve Madde 4 (Yeni 23A(7)(b)).
*   **Analiz:** Tasarı, hücrelerin fiziksel şartlarını (metrekare, teknik donanım vb.) ve elektronik kelepçenin uygulama esaslarını Bakanlar Kurulu'nun çıkaracağı bir tüzüğe bırakmaktadır. 
*   **Anayasal Çelişki:** Anayasa **Madde 11**, temel hak ve özgürlüklerin ancak **"yasalarla"** kısıtlanabileceğini hükme bağlar. Kişi özgürlüğünü kısıtlayan bir yöntem olan elektronik kelepçenin sınırlarının ve hürriyetten yoksun bırakılan yerlerin standartlarının tüzükle belirlenmesi, yasama yetkisinin devri anlamına gelebilir ve Anayasa'nın **Madde 11** ve **Madde 122** ilkelerine aykırılık teşkil edebilir.

## 2. "Başka Yerler" İfadesindeki Belirsizlik
*   **Sorunlu Madde:** Tasarı Madde 2 (Yeni 13A(1)).
*   **Analiz:** Madde, tutuklu sayısının çokluğu durumunda nezaret şartlarına sahip **"başka yerlerin"** de kullanılabileceğini belirtmektedir.
*   **Anayasal Çelişki:** Anayasa **Madde 16(2)**, bir kişinin ancak "yasanın gösterdiği biçimde" özgürlüğünden yoksun bırakılabileceğini söyler. "Başka yerler" ifadesi ucu açık ve muğlaktır. Bu durum, keyfi tutuklama yerlerinin oluşmasına sebebiyet verebilir ve Anayasa'nın **Madde 16** (Kişi Özgürlüğü ve Güvenliği) ile **Madde 1** (Hukuk Devleti) ilkelerini zedeleyebilir.

## 3. Basın Özgürlüğü vs. Masumiyet Karinesi
*   **Sorunlu Madde:** Tasarı Madde 5 (Yeni 23B).
*   **Analiz:** Henüz mahkum olmamış bir zanlının isminin veya fotoğrafının yayınlanmasını suç haline getirerek hapis cezası öngörmektedir.
*   **Anayasal Çelişki:** Bu madde, Anayasa **Madde 18**'deki "Masumiyet Karinesi"ni korumayı amaçlasa da, Anayasa **Madde 26** (Basın Özgürlüğü) ile doğrudan çatışmaktadır. Anayasa **Madde 26(4)**, olaylar hakkında yayın yasağının ancak **"mahkeme veya yargıç tarafından"** verilebileceğini belirtir. Yasayla getirilen bu genel ve peşin yasak, yargı denetimini devre dışı bıraktığı için Anayasa'ya aykırı bulunabilir. Ayrıca, kamu yararı bulunan durumlarda haber yapma hakkının "özüne" dokunulmuş olur (Anayasa Madde 11).

## 4. Adli Yardım ve "Takdir Yetkisi" Sorunu
*   **Sorunlu Madde:** Tasarı Madde 7 (Yeni 64(1)).
*   **Analiz:** Mahkemenin, mali gücü olmayan zanlılara avukat atama konusunda **"atayabilir"** (takdir yetkisi) ifadesi kullanılmıştır.
*   **Anayasal Çelişki:** Anayasa **Madde 17(4)(ç)**, adaletin sağlanması için gerekli görüldüğü durumlarda herkese **"parasız bir hukukçu atanması"** hakkını tanır. Tasarıdaki "atayabilir" ifadesi, bu anayasal hakkı mahkemenin mutlak takdirine bırakmaktadır. Oysa hak arama özgürlüğü çerçevesinde, özellikle ağır suçlarda veya yoksulluk belgelendiğinde bu bir "hak" olmalı, takdir değil "zorunluluk" (atanır) olarak düzenlenmelidir.

---

### Özet Tablo: Risk Analizi

| Tasarı Maddesi | İçerik | Anayasal Risk Faktörü | İlgili Anayasa Maddesi |
| :--- | :--- | :--- | :--- |
| **13A & 23A(7)** | Tüzükle düzenleme yetkisi | Yasama yetkisinin devri, kanunilik ilkesi | Madde 11, 122 |
| **13A(1)** | "Başka yerler" kullanımı | Belirsizlik, keyfi uygulama riski | Madde 16 |
| **23B** | İsim/Fotoğraf yayın yasağı | Basın özgürlüğünün kısıtlanması | Madde 24, 26 |
| **64(1)** | Avukat atama (atayabilir) | Hak arama özgürlüğünün zayıflatılması | Madde 17 |

### Olumlu Değerlendirme
Tasarıda yer alan;
*   **Teminat emirlerine 12 ay sınır getirilmesi** (Madde 4), Anayasa Madde 16 ve 17'deki "makul sürede yargılanma" ilkesini destekleyen çok güçlü bir adımdır.
*   **Kelepçe kullanımı üzerindeki kısıtlamalar** (Madde 13B), Anayasa Madde 14'teki "insan onurunun dokunulmazlığı" ilkesiyle tam uyumludur.
`
  },
  {
    id: 'grok',
    name: 'Grok Thinking',
    version: '4.2',
    author: 'xAI',
    accent: 'purple',
    consensus: {
      'Madde 2': 'compatible',
      'Madde 3': 'compatible',
      'Madde 4': 'compatible',
      'Madde 5': 'warning', // Potential tension
      'Madde 6': 'compatible',
      'Madde 7': 'compatible'
    },
    content: `**KKTC Anayasası ile Ceza Muhakemeleri Usulü (Değişiklik) Yasa Tasarısı Analizi**

Ekteki **Ceza Muhakemeleri Usulü (Değişiklik) Yasa Tasarısı**’nı, KKTC Anayasası’nın özellikle **İkinci Kısım (Temel Haklar, Özgürlükler ve Ödevler)** bölümüyle (Madde 10-29 arası temel haklar, özellikle Madde 14-18-19-24-26) ve Genel İlkeler (Madde 7, 8, 11, 12) ile karşılaştırdım. Analiz, Anayasa’nın **temel hakların özüne dokunulmadan** (Madde 11) ve **orantılı/ölçülü** sınırlama ilkesine dayanıyor. Ayrıca Madde 7 (yasaların Anayasa’ya aykırı olamayacağı), Madde 12 (hakların kötüye kullanılmaması) ve Madde 122 (tüzük yetkisi) dikkate alındı.

### Genel Değerlendirme
Tasarının **genel gerekçesi** açıkça Anayasa ve Avrupa İnsan Hakları Sözleşmesi’ne uyum amacı taşıyor. Çoğu hüküm, pratikte yaşanan hak ihlallerini (kişi özgürlüğü, onur, masumiyet karinesi, adil yargılanma) gidermek için getirilmiş **iyileştirici** düzenlemelerdir. Anayasa’ya **doğrudan aykırılık** içeren bir madde tespit etmedim. Ancak **bir maddede potansiyel gerilim** var.

### Madde Madde Analiz ve Sorunlu Alanlar

**Madde 2 – Yeni 13A (Tutuklama amaçlı polis karakolu/tutuklu kabul yerlerinin koşulları)**  
- **İlgili Anayasa maddeleri**: Madde 14 (kişi dokunulmazlığı – eziyet/işkence yasağı, insan onuru), Madde 15 (hayat ve vücut bütünlüğü), Madde 16 (kişi özgürlüğü ve güvenliği).  
- **Değerlendirme**: Tam uyumlu ve **olumlu**. Hücrelerin insan onuruna uygun, hijyenik, denetlenebilir olmasını zorunlu kılıyor; yetersiz durumda alternatif yer kullanımına izin veriyor.

**Madde 3 – Yeni 13B (Tutukluların nakli)**  
- **İlgili Anayasa maddeleri**: Madde 14 ve 15 (onur ve vücut bütünlüğü).  
- **Değerlendirme**: Tam uyumlu ve **olumlu**. Kamuya teşhir önleniyor, kelepçe kullanımı makul şüpheye bağlanıyor, arkadan kelepçe ve hassas gruplara (18 yaş altı, akıl hastası, engelli) yasaklanıyor.

**Madde 4 – 23A değişiklikleri (Elektronik kelepçe + teminat süresi sınırı)**  
- **İlgili Anayasa maddeleri**: Madde 16 (kişi özgürlüğü – tutukluluk istisnai olmalı), Madde 17 (adil yargılanma), Madde 11 (sınırlamalar orantılı olmalı).  
- **Değerlendirme**: **Olumlu reform**. Elektronik kelepçe tutukluluğa alternatif getiriyor (liberty as rule ilkesini destekliyor). Teminat emrine **12 ay üst sınır** koyması, sınırsız bekleyişi önlüyor.

**Madde 5 – Yeni 23B (Masumiyet karinesinin ihlali – isim/fotoğraf teşhiri yasağı)**  
- **Değerlendirme**: **Potansiyel olarak sorunlu tek madde burası**.  
  - **Olumlu yön**: Masumiyet karinesini (Madde 18) ve özel hayatı (Madde 19) korumak için getirilmiş. Medya ve sosyal medyada teşhirin “dozu artan” ihlali önleniyor.
  - **Sorunlu yönler**: Basın özgürlüğüyle (Madde 26) gerilim. Madde 26(4) “olaylar hakkında yayın yasağı”nı genel olarak yasaklıyor. Bu hüküm, zanlının açık ismini/fotoğrafını yayınlamayı otomatik suç sayıyor. Anayasa Mahkemesi riski mevcut.

**Madde 6 – 48. maddenin değiştirilmesi (Erteleme ve tutuklu bırakma)**  
- **Değerlendirme**: **Olumlu**. Seri yargılamada/ilk soruşturmada tutukluluk süresini 8 günle sınırlıyor. Teminatlı sanıkların tutuklanmasını “yeterli sebep” şartına bağlıyor.

**Madde 7 – 64. maddenin değiştirilmesi (Zanlı ve sanıklara avukat atanması)**  
- **Değerlendirme**: **Olumlu ve güçlendirici**. Tutuklama talebi, ithamsız zanlılar ve istinaf için avukat atanmasını genişletiyor; yoksulluk belgesiyle Baro’dan avukat talep edilebiliyor.
`
  },
  {
    id: 'claude',
    name: 'Claude Sonnet',
    version: '4.6',
    author: 'Anthropic',
    accent: 'orange',
    consensus: {
      'Madde 2': 'compatible',
      'Madde 3': 'compatible',
      'Madde 4': 'compatible',
      'Madde 5': 'conflict',
      'Madde 6': 'compatible',
      'Madde 7': 'compatible'
    },
    content: `Belgeyi inceledim. Gazetecilerin itiraz ettiği hüküm gerçekten mevcut — **Madde 5, yeni 23B maddesi**. Şimdi Anayasa karşısında tam bir analiz yapayım.

---

## Ceza Muhakemeleri Usulü (Değişiklik) Yasa Tasarısı — Anayasa Uygunluk Analizi

---

### Madde 5 — Yeni 23B: İsim ve Fotoğraf Yayım Yasağı

Bu hüküm masumiyet karinesi açısından meşru bir kaygıyı yansıtmaktadır. Ancak çözüm yöntemi birden fazla temel hak ve özgürlükle ciddi gerilim yaratmaktadır.

#### Anayasal Değerlendirme

1. **Basın Özgürlüğü — Madde 26 | **Ciddi Aykırılık Şüphesi ⚠️⚠️****
Anayasa'nın 26(4). maddesi açıkça "Olaylar hakkında yayın yasağı konamaz" demektedir. Mahkeme önünde görülen bir dava kamuyu ilgilendiren bir "olaydır." İsim ve fotoğraf yasağı, özünde bu olaya ilişkin haber yapılmasını fiilen engelleyen bir yayın yasağına dönüşmektedir.

2. **Düşünce, Söz ve Anlatım Özgürlüğü — Madde 24 | **Aykırılık Şüphesi ⚠️⚠️****
Haber alma ve verme hakkının kısıtlanması, Anayasa'nın öngördüğü sınırlı haller (ulusal güvenlik, kamu düzeni vb.) dışında Anayasa'ya aykırıdır.

3. **Masumiyet Karinesi — Madde 18(4) | **Meşru Amaç ✅ — Ancak Araç Orantısız****
Masumiyet karinesinin korunması meşru ve anayasal bir amaçtır. Sorun seçilen araçtadır. Mutlak cezai yaptırım yerine orantılı araçlar tercih edilmelidir.

---

### Diğer Maddeler — Kısa Değerlendirme

| Madde | Düzenleme | Değerlendirme |
|---|---|---|
| Md. 2 (13A) | Gözaltı yeri koşulları | ✅ Anayasa Md. 14 ile uyumlu |
| Md. 3 (13B) | Nakil ve kelepçe kuralları | ✅ Anayasa Md. 14/15 ile uyumlu |
| Md. 4 (23A) | Elektronik kelepçe, teminat süresi | ✅ Anayasa Md. 16 ile uyumlu |
| Md. 5 (23B) | İsim/fotoğraf yayım yasağı | ⚠️⚠️ Md. 24, 26, 27 ile ciddi çelişki |
| Md. 6 (48) | Tutuklu yargılama sınırı | ✅ Anayasa Md. 16 ile uyumlu |
| Md. 7 (64) | Yoksul sanığa avukat | ✅ Anayasa Md. 17/18 ile uyumlu |

---

### Sonuç
23B maddesi, masumiyet karinesi gibi meşru bir amacı korumaya çalışırken basın özgürlüğüne getirdiği mutlak cezai yaptırım nedeniyle **Anayasa'nın 24, 26 ve 27. maddeleriyle** doğrudan çelişmektedir.
`
  }
];

export const ARTICLES = [
  'Madde 2',
  'Madde 3',
  'Madde 4',
  'Madde 5',
  'Madde 6',
  'Madde 7'
];
