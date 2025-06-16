// ==================== SORULAR VERİTABANI ====================
const questions = [
    // ORGANİZASYONEL ANALİZ SORULARI (1-30)
    {
        id: 1,
        section: "organizational",
        question: "Organizasyonel analiz, performans analizi sürecinin hangi adımıdır?",
        options: [
            "Son adımı",
            "İkinci adımı", 
            "İlk adımı",
            "Üçüncü adımı"
        ],
        correct: 2,
        explanation: "Organizasyonel analiz, performans analizi sürecinin ilk adımıdır ve stratejik planların yapıldığı bileşenlerin incelenmesidir."
    },
    {
        id: 2,
        section: "organizational",
        question: "Kuruluşun vizyon tanımı aşağıdakilerden hangisidir?",
        options: [
            "Var olma nedeni",
            "Arzu ettiği son duruma ilişkin uzun vadeli görüşü",
            "Temel değerleri",
            "İş stratejisi"
        ],
        correct: 1,
        explanation: "Vizyon, kuruluşun arzu ettiği son duruma ilişkin uzun vadeli görüşüdür; örgütün olmak istediği şeydir."
    },
    {
        id: 3,
        section: "organizational",
        question: "Misyon aşağıdakilerden hangisini ifade eder?",
        options: [
            "Gelecekteki hedefler",
            "Kuruluşun var olma nedeni",
            "Temel değerler",
            "Stratejik planlar"
        ],
        correct: 1,
        explanation: "Misyon, kuruluşun var olma nedenidir, aslında neden var olduğudur."
    },
    {
        id: 4,
        section: "organizational",
        question: "Değerler hakkında aşağıdakilerden hangisi doğrudur?",
        options: [
            "Geçici inançlardır",
            "Kalıcı temel inançlardır",
            "Sadece finansal hedeflerdir",
            "Kısa vadeli planlamalardır"
        ],
        correct: 1,
        explanation: "Değerler, kalıcı temel inançlardır ve zorlayıcı bir gelecek tasarlar ve öngörüyü derinleştirir."
    },
    {
        id: 5,
        section: "organizational",
        question: "Hedefler nasıl tanımlanmalıdır?",
        options: [
            "Genel ve belirsiz",
            "Açık, alakalı, anlaşılır, gerçekçi",
            "Sadece finansal",
            "Kısa vadeli"
        ],
        correct: 1,
        explanation: "Hedefler açık bir şekilde tanımlanmalı, alakalı, anlaşılır, gerçekçi olmalı ve kuruluşun kültürel dinamiklerini yansıtmalıdır."
    },
    {
        id: 6,
        section: "organizational",
        question: "Stratejiler ne için kullanılır?",
        options: [
            "Sadece pazarlama için",
            "Kuruluşun işi büyütme planı için",
            "Sadece insan kaynakları için",
            "Sadece finansal yönetim için"
        ],
        correct: 1,
        explanation: "Stratejiler, kuruluşun işi büyütme planıdır ve pazar konumu belirlemek, müşterileri geliştirmek için gereklidir."
    },
    {
        id: 7,
        section: "organizational",
        question: "Kritik meseleler ne anlama gelir?",
        options: [
            "Günlük işlemler",
            "Kuruluşun başarısını belirleyen sorunlar veya fırsatlar",
            "Personel sorunları",
            "Teknik aksaklıklar"
        ],
        correct: 1,
        explanation: "Kritik meseleler, bir kuruluşun başarısını belirleyen sorunlar veya fırsatlardır ve kapatılması gereken sonuçlarda bir boşluk oluşturabilir."
    },
    {
        id: 8,
        section: "organizational",
        question: "Organizasyonel analizin amacı nedir?",
        options: [
            "Maliyet hesaplama",
            "Yön arama",
            "Personel değerlendirme",
            "Teknoloji seçimi"
        ],
        correct: 1,
        explanation: "Organizasyonel analizin amacı yön aramaktır ve istenen veya optimum performansa ulaşmak için performans analizi sırasında talimatların erken belirlenmesi gerekir."
    },
    {
        id: 9,
        section: "organizational",
        question: "Kuruluşun yönünü belirleyen ana faktörler hangileridir?",
        options: [
            "Sadece vizyon ve misyon",
            "Vizyon, misyon, değerler, hedefler, stratejiler ve kritik konular",
            "Sadece finansal hedefler",
            "Sadece personel politikaları"
        ],
        correct: 1,
        explanation: "Kuruluşun yönünü belirleyen ana faktörler vizyon, misyon, değerler, hedefler, stratejiler ve kritik konulardır."
    },
    {
        id: 10,
        section: "organizational",
        question: "Başarılı bir strateji için ne gereklidir?",
        options: [
            "Sadece planlama",
            "Sadece düşünme",
            "Hem planlama hem de düşünme",
            "Sadece uygulama"
        ],
        correct: 2,
        explanation: "Başarılı bir strateji için hem planlama hem de düşünme gereklidir; stratejik planlama programatik, analitik düşünme sürecini ifade eder."
    },
    {
        id: 11,
        section: "organizational",
        question: "HPT uygulayıcısı organizasyonel analiz kapsamında hangi faktörleri analiz eder?",
        options: [
            "Sadece örgütsel yapı",
            "Örgütsel yapı, merkezi sistemler, kurumsal stratejiler, anahtar politikalar, iş değerleri, kurumsal kültür",
            "Sadece finansal veriler",
            "Sadece personel dosyaları"
        ],
        correct: 1,
        explanation: "HPT uygulayıcısı örgütsel yapı, merkezi olarak kontrol edilen sistemler, kurumsal stratejiler, anahtar politikalar, iş değerleri ve kurumsal kültürü analiz eder."
    },
    {
        id: 12,
        section: "organizational",
        question: "Organizasyonel analiz hangi araçlarla yapılır?",
        options: [
            "Sadece anketler",
            "Mevcut veri analizi, görüşmeler, anketler ve grup süreçleri",
            "Sadece gözlem",
            "Sadece belgeler"
        ],
        correct: 1,
        explanation: "Başlıca analiz teknikleri mevcut veri analizi, görüşmeler, anketler ve grup süreçleridir çünkü hem gerçekleri hem de algıları toplamak son derece önemlidir."
    },
    {
        id: 13,
        section: "organizational",
        question: "Müşteri hangi açıdan önemli bir paydaştır?",
        options: [
            "Sadece gelir kaynağı olarak",
            "Büyük ancak genellikle görmezden gelinen paydaş olarak",
            "Sadece şikayet kaynağı olarak",
            "Önemsiz paydaş olarak"
        ],
        correct: 1,
        explanation: "Büyük ancak genellikle görmezden gelinen paydaşlardan biri müşteridir: müşterinin ne düşündüğü, hissettiği ve müşterinin neden geri gelmeye devam ettiği önemlidir."
    },
    {
        id: 14,
        section: "organizational",
        question: "Başarılı kuruluşların liderleri nasıl davranır?",
        options: [
            "Sadece iç faktörlere odaklanır",
            "Mevcut ve gelecekteki müşteri gereksinimlerini kullanır",
            "Sadece rakiplere odaklanır",
            "Hiçbir analiz yapmaz"
        ],
        correct: 1,
        explanation: "Başarılı kuruluşların liderleri, kuruluşlarının rotasını veya yönünü belirlemelerine yardımcı olmak için mevcut ve gelecekteki müşteri gereksinimleri hakkındaki bilgileri kullanır."
    },
    {
        id: 15,
        section: "organizational",
        question: "Grant ve Moseley'in Müşteri Odaklı Performans Analizi Modeli'nin ilk adımı nedir?",
        options: [
            "İstenen durum",
            "Müşteri gereksinimi",
            "Mevcut iş durumu",
            "Performans boşluğu"
        ],
        correct: 1,
        explanation: "Grant ve Moseley'in modelinde ilk adım müşteri gereksinimi (müşteri kaliteli bir ürünü nasıl tanımlar?) sorusudur."
    },
    {
        id: 16,
        section: "organizational",
        question: "Organizasyonel analiz araçları seçerken hangi faktörler dikkate alınır?",
        options: [
            "Sadece maliyet",
            "Zaman, maliyet, organizasyon kültürü ve kaynakların mevcudiyeti",
            "Sadece zaman",
            "Sadece organizasyon kültürü"
        ],
        correct: 1,
        explanation: "Organizasyonel bir analiz yürütmek için araçlar seçerken zaman, maliyet, organizasyon kültürü ve kaynakların mevcudiyeti başlıca hususlardır."
    },
    {
        id: 17,
        section: "organizational",
        question: "Röportajlar için önerilen stratejilerden hangisi doğrudur?",
        options: [
            "Sadece kapalı uçlu sorular sormak",
            "Diğer kişinin düşüncelerinin akışının sohbeti yönlendirmesine izin vermek",
            "Sadece evet/hayır soruları sormak",
            "Görüşmeyi hızlı bitirmek"
        ],
        correct: 1,
        explanation: "Görüşmeyi yapanın sorularının açıklığa kavuşturması için, diğer kişinin düşüncelerinin ve fikirlerinin akışının sohbeti yönlendirmesine izin vermek gerekir."
    },
    {
        id: 18,
        section: "organizational",
        question: "Beyin fırtınası nedir?",
        options: [
            "Bireysel çalışma",
            "Herkesin eşit olarak katıldığı dürüst grup diyaloğu",
            "Rekabetçi tartışma",
            "Sadece yöneticilerin katıldığı toplantı"
        ],
        correct: 1,
        explanation: "Beyin fırtınası, herkesin eşit olarak katıldığı dürüst grup diyaloğudur."
    },
    {
        id: 19,
        section: "organizational",
        question: "Odak grup nedir?",
        options: [
            "Karar verme grubu",
            "Üyelerine bir konuyla ilgili görüşleri, algıları ve tutumları sorulan grup",
            "Yönetim kurulu",
            "Proje ekibi"
        ],
        correct: 1,
        explanation: "Odak grup üyelerine bir konuyla ilgili görüşleri, algıları ve tutumları sorulur."
    },
    {
        id: 20,
        section: "organizational",
        question: "Anketlerin avantajı nedir?",
        options: [
            "Yüz yüze iletişim",
            "Görüşmelerden daha anonim",
            "Daha hızlı sonuç",
            "Daha ucuz"
        ],
        correct: 1,
        explanation: "Anketler görüşmelerden daha anonimdir ve kuruluş tarafından belirlenen talimatlar hakkında hem gerçekleri hem de algıları oluşturabilir."
    },
    {
        id: 21,
        section: "organizational",
        question: "Kritik davranışı kaydetme tekniği ne için kullanılır?",
        options: [
            "Günlük aktiviteleri kaydetmek",
            "Kritik olumlu veya olumsuz etkiye sahip davranışları gözlemlemek",
            "Finansal verileri toplamak",
            "Zaman yönetimi"
        ],
        correct: 1,
        explanation: "Kritik olay tekniği, vaka çalışmaları, hikaye anlatımı, bir organizasyon üzerinde kritik olumlu veya olumsuz etkiye sahip olabilecek davranışları gözlemlemek ve raporlamak için kullanılır."
    },
    {
        id: 22,
        section: "organizational",
        question: "Sprint firmasında geliştirilen SCAN modeli neyi temsil eder?",
        options: [
            "Maliyet analizi",
            "Performansın arttığını belgeleyen Organizasyonel Tarama Modeli",
            "Personel değerlendirme",
            "Pazarlama stratejisi"
        ],
        correct: 1,
        explanation: "Sprint firmasında performans sunma müdürü Vince Araujo, performansın arttığını belgeleyen bir Organizasyonel Tarama Modeli (SCAN) geliştirdi."
    },
    {
        id: 23,
        section: "organizational",
        question: "SCAN modelinin temel özelliği nedir?",
        options: [
            "Tek döngülü sistem",
            "Biçimlendirici ve değerlendirici geri bildirim için ikili döngülerle tamamlanan temel giriş/çıkış sistemi",
            "Sadece girdi odaklı",
            "Sadece çıktı odaklı"
        ],
        correct: 1,
        explanation: "SCAN, biçimlendirici ve değerlendirici geri bildirim için ikili döngülerle tamamlanan temel giriş/çıkış sistemi modelidir."
    },
    {
        id: 24,
        section: "organizational",
        question: "Organizasyonel tarama hangi düzeylerde yapılır?",
        options: [
            "Sadece üst düzey",
            "Koşullar (organizasyon seviyesi), süreç, sonuçlar",
            "Sadece orta düzey",
            "Sadece alt düzey"
        ],
        correct: 1,
        explanation: "Performans Destek Aracı organizasyonel taramayı koşullar (organizasyon seviyesi), süreç ve sonuçlar düzeyinde planlamak için sorular önerir."
    },
    {
        id: 25,
        section: "organizational",
        question: "Stratejik düşünme ve stratejik planlama arasındaki fark nedir?",
        options: [
            "Aynı şeylerdir",
            "Stratejik düşünme yaratıcılık ve fark yaratır, stratejik planlama programatik ve analitik",
            "Stratejik planlama daha önemlidir",
            "Stratejik düşünme gereksizdir"
        ],
        correct: 1,
        explanation: "Stratejik planlama, programatik, analitik düşünme sürecini ifade eder ve stratejik düşünme yaratıcılık ve fark yaratır."
    },
    {
        id: 26,
        section: "organizational",
        question: "Organizasyonel unsurların hizalanması neden önemlidir?",
        options: [
            "Sadece görsel düzen için",
            "Daha iyi organizasyon çalışması için",
            "Sadece yönetim için",
            "Gereksiz bir gereklilik"
        ],
        correct: 1,
        explanation: "Tıpkı daha iyi araç çalışması için lastiklerin hizalanması gerektiği gibi, bir kuruluşun çalışanları, süreçleri ve kültürü de kuruluş yapısıyla uyum sağlamalıdır."
    },
    {
        id: 27,
        section: "organizational",
        question: "Müşteri odaklı performans analizi modelinde hangi soru kritiktir?",
        options: [
            "Ne kadar kar elde ediyoruz?",
            "Müşteri kaliteli bir ürünü nasıl tanımlar?",
            "Rakiplerimiz kim?",
            "Kaç çalışanımız var?"
        ],
        correct: 1,
        explanation: "Grant ve Moseley'in müşteri odaklı performans analizi modelinde temel soru 'Müşteri kaliteli bir ürünü nasıl tanımlar?' sorusudur."
    },
    {
        id: 28,
        section: "organizational",
        question: "Tosti ve Jackson'ın katkısı nedir?",
        options: [
            "Yeni bir model geliştirmek",
            "Kapsamlı bir organizasyonel tarama için yapı sağlayan sorular geliştirmek",
            "Sadece teorik çalışma",
            "Maliyet analizi"
        ],
        correct: 1,
        explanation: "Tosti ve Jackson kapsamlı bir organizasyonel tarama için yapı sağlayan bir dizi soru geliştirdi."
    },
    {
        id: 29,
        section: "organizational",
        question: "Organizasyonel analiz araştırmasının amacı nedir?",
        options: [
            "Sadece veri toplamak",
            "Çok çeşitli paydaşlardan hem gerçekleri hem de algıları tanımlamak",
            "Sadece yönetici görüşlerini almak",
            "Finansal analiz yapmak"
        ],
        correct: 1,
        explanation: "Amaç, çok çeşitli iç ve dış paydaşlardan hem gerçekleri hem de algıları tanımlamak ve kuruluşun vizyonunun, misyonunun uyumlu olup olmadığının belirlenmesine yardımcı olmaktır."
    },
    {
        id: 30,
        section: "organizational",
        question: "Performans Destek Aracı 5.2'de hangi kategoriler analiz edilir?",
        options: [
            "Sadece vizyon",
            "Vizyon, misyon, değerler, hedefler, stratejiler, kritik sorunlar",
            "Sadece finansal hedefler",
            "Sadece insan kaynakları"
        ],
        correct: 1,
        explanation: "Performans Destek Aracı 5.2'de vizyon, misyon, değerler, hedefler, stratejiler ve kritik sorunlar kategorileri analiz edilir."
    },

    // ÇEVRESEL ANALİZ SORULARI (31-60)
    {
        id: 31,
        section: "environmental",
        question: "Çevresel analiz ne için kullanılır?",
        options: [
            "Sadece fiziksel ortamı incelemek",
            "Gerçek performansı destekleyen gerçekleri belirlemek ve önceliklendirmek",
            "Sadece hava durumunu analiz etmek",
            "Sadece bina güvenliğini kontrol etmek"
        ],
        correct: 1,
        explanation: "Çevresel analiz, gerçek performansı destekleyen gerçekleri belirlemek ve önceliklendirmek için kullanılan bir süreçtir."
    },
    {
        id: 32,
        section: "environmental",
        question: "2012 HPT Modelinin çevresel analiz bileşeni kaç ortamı içerir?",
        options: [
            "İki",
            "Üç",
            "Dört (dünya, işyeri, iş, işçi)",
            "Beş"
        ],
        correct: 2,
        explanation: "2012 Performans İyileştirme/HPT Modelinin çevresel analiz bileşeni dünya, işyeri, iş ve işçiyi içerecek şekilde geliştirildi."
    },
    {
        id: 33,
        section: "environmental",
        question: "Dünya çevresi analizi hangi perspektifi gerektirir?",
        options: [
            "Mikro perspektif",
            "Mega veya ekstra geniş perspektif",
            "Orta düzey perspektif",
            "Yerel perspektif"
        ],
        correct: 1,
        explanation: "Dünya çevresi mega veya ekstra geniş bir perspektiftir ve bu nedenle mega veya ekstra büyük düşünmeyi gerektirir."
    },
    {
        id: 34,
        section: "environmental",
        question: "Günümüzün küresel iş yerindeki sorumlu organizasyonun nihai amacı nedir?",
        options: [
            "Sadece kar maksimizasyonu",
            "Topluma katkıda bulunmak ve kurumsal sosyal girişimler başlatmak",
            "Sadece çalışan memnuniyeti",
            "Sadece müşteri memnuniyeti"
        ],
        correct: 1,
        explanation: "Günümüzün küresel iş yerindeki sorumlu bir organizasyonun nihai amacı, kurumsal sosyal girişimler başlatarak ve uygulama topluluklarıyla ilgilenerek topluma katkıda bulunmaktır."
    },
    {
        id: 35,
        section: "environmental",
        question: "İşyeri ortamının beş boyutu nelerdir?",
        options: [
            "Sadece güvenilirlik",
            "Güvenilirlik, saygı, adalet, gurur, samimiyet",
            "Sadece verimlilik",
            "Sadece karlılık"
        ],
        correct: 1,
        explanation: "Great Place to Work Enstitüsü harika iş yerlerinin beş boyutunu belirledi: güvenilirlik, saygı, adalet, gurur ve samimiyet."
    },
    {
        id: 36,
        section: "environmental",
        question: "İş analizinin odak noktası nedir?",
        options: [
            "Sadece personel performansı",
            "İş tasarımı veya süreç düzeyi",
            "Sadece teknoloji",
            "Sadece finansal sonuçlar"
        ],
        correct: 1,
        explanation: "İş analizi, iş tasarımı veya süreç düzeyinde neler olduğuna odaklanır."
    },
    {
        id: 37,
        section: "environmental",
        question: "Çalışan analizi neyi inceler?",
        options: [
            "Sadece maaş bilgileri",
            "Bilgi, beceri, kapasite, motivasyon ve beklentiler",
            "Sadece eğitim durumu",
            "Sadece çalışma saatleri"
        ],
        correct: 1,
        explanation: "Çalışan veya performansçının analizi, çalışanlara neler olduğuna, daha spesifik olarak onların bilgi, beceri, kapasite, motivasyon ve beklentilerine odaklanır."
    },
    {
        id: 38,
        section: "environmental",
        question: "Çevresel analizin amacı nedir?",
        options: [
            "Sorunları tanımlamak",
            "Hem organizasyonun içinde hem de dışında gerçekte neler olup bittiğini değerlendirmek",
            "Sadece dış faktörleri incelemek",
            "Sadece iç faktörleri incelemek"
        ],
        correct: 1,
        explanation: "Çevresel analizin amacı sorunları tanımlamak değil, hem organizasyonun içinde hem de dışında gerçekte neler olup bittiğini değerlendirmektir."
    },
    {
        id: 39,
        section: "environmental",
        question: "Çevresel analiz ne zaman gerçekleşir?",
        options: [
            "Sadece başlangıçta",
            "Performans boşluğu sırasında veya sonrasında",
            "Sadece sonunda",
            "Hiçbir zaman"
        ],
        correct: 1,
        explanation: "Çevresel analiz performans boşluğu sırasında veya sonrasında gerçekleşebilir ve genellikle gerçek performansı analiz etmenin ayrılmaz bir parçasıdır."
    },
    {
        id: 40,
        section: "environmental",
        question: "Dünya bağlantısına odaklanan kuruluşlar neyi teşvik eder?",
        options: [
            "Bireysel çalışma",
            "Uygulama topluluklarını veya işbirlikçi ekipleri",
            "Rekabeti",
            "İzolasyonu"
        ],
        correct: 1,
        explanation: "Dünya bağlantısına odaklanan kuruluşlar, ortak hedeflere ulaşmak için üyeleri birbirine bağlı olarak çalışan uygulama topluluklarını veya işbirlikçi ekipleri teşvik eder."
    },
    {
        id: 41,
        section: "environmental",
        question: "Kurumsal sosyal girişimlerin kaç boyutu vardır?",
        options: [
            "Dört",
            "Beş",
            "Altı",
            "Yedi"
        ],
        correct: 2,
        explanation: "Kurumsal sosyal girişimlerin altı boyutu vardır: promosyonlara neden olmak, nedene bağlı pazarlama, kurumsal sosyal pazarlama, kurumsal hayırseverlik, topluluk gönüllülüğü, sosyal açıdan sorumlu iş uygulamaları."
    },
    {
        id: 42,
        section: "environmental",
        question: "İşyeri analizi kaç şekildedir?",
        options: [
            "Bir",
            "İki",
            "Üç",
            "Dört"
        ],
        correct: 1,
        explanation: "İşyeri analizi iki şekildedir: Organizasyonel Ortamı Analiz Etmek ve Çalışma Ortamını Analiz Etmek."
    },
    {
        id: 43,
        section: "environmental",
        question: "Organizasyonel ortam analizinde dış paydaşlar kimlerdir?",
        options: [
            "Sadece çalışanlar",
            "Müşteriler, tedarikçiler, distribütörler, hissedarlar, endüstri düzenleyicileri",
            "Sadece yöneticiler",
            "Sadece rakipler"
        ],
        correct: 1,
        explanation: "Kuruluşun dış paydaşları arasında müşteriler, tedarikçiler, distribütörler, hissedarlar, endüstri düzenleyicileri vb. yer alır."
    },
    {
        id: 44,
        section: "environmental",
        question: "Çalışma ortamını analiz ederken kimlerden bilgi alınır?",
        options: [
            "Sadece üst yönetimden",
            "Her düzeydeki yönetim, denetim ve işgücünden temsilciler",
            "Sadece işçilerden",
            "Sadece müşterilerden"
        ],
        correct: 1,
        explanation: "Cevapları verebilecek kişiler arasında her düzeydeki yönetim, denetim ve işgücünden temsilciler yer alır."
    },
    {
        id: 45,
        section: "environmental",
        question: "Etkili iş tasarımı neleri içerir?",
        options: [
            "Sadece sorumluluk dağılımı",
            "Sorumluluk paylaşımı, mantıksal sıralama, açık prosedürler, ergonomik tasarım",
            "Sadece fiziksel düzen",
            "Sadece teknoloji"
        ],
        correct: 1,
        explanation: "Etkili iş tasarımı: sorumlulukların paylaştırılması, iş faaliyetlerinin mantıksal sıralaması, açık prosedürler ve ergonomik tasarımı içerir."
    },
    {
        id: 46,
        section: "environmental",
        question: "Kurumsal sosyal sorumluluk neyi ifade eder?",
        options: [
            "Sadece kar paylaşımı",
           "İsteğe bağlı iş uygulamaları ve kurumsal kaynakların katkıları yoluyla toplumun refahını iyileştirme",
           "Sadece vergi ödeme",
           "Sadece yasal yükümlülükler"
       ],
       correct: 1,
       explanation: "Kurumsal sosyal sorumluluk, isteğe bağlı iş uygulamaları ve kurumsal kaynakların katkıları yoluyla toplumun refahını iyileştirme bağlantısıdır."
   },
   {
       id: 47,
       section: "environmental",
       question: "Çalışma ortamını mega düzeyde analiz etmenin faydaları nelerdir?",
       options: [
           "Sadece maliyet tasarrufu",
           "Kurumsal imaj, personel işe alma, marka konumlandırması, pazar payı artışı",
           "Sadece verimlilik artışı",
           "Sadece teknoloji geliştirme"
       ],
       correct: 1,
       explanation: "Mega düzeyde analizin kurumsal imaj ve personel işe alma becerisinden, marka konumlandırmasını iyileştirmeye ve pazar payını artırmaya kadar çok sayıda faydası vardır."
   },
   {
       id: 48,
       section: "environmental",
       question: "Rothwell'in ortam modelindeki dört ortam nedir?",
       options: [
           "İç, dış, üst, alt",
           "Dünya, işyeri, iş, işçi",
           "Başlangıç, gelişim, olgunluk, düşüş",
           "Planlama, uygulama, kontrol, iyileştirme"
       ],
       correct: 1,
       explanation: "Rothwell'in ortam modeli dünya, işyeri, iş ve işçi olmak üzere dört ortamdan oluşur."
   },
   {
       id: 49,
       section: "environmental",
       question: "İş temelli çevre analizi neyi dikkate alır?",
       options: [
           "Sadece verimlilik",
           "Kişisel tatmin, toplumsal refah ve sosyal refah için çıkarımlar",
           "Sadece teknoloji",
           "Sadece maliyet"
       ],
       correct: 1,
       explanation: "Sağlam bir iş temelli çevre analizi, kişisel tatmin, toplumsal refah ve sosyal refah için çıkarımları da dahil olmak üzere işin organizasyonunu dikkate alır."
   },
   {
       id: 50,
       section: "environmental",
       question: "İşçi analizi neyi keşfeder?",
       options: [
           "Sadece eğitim durumunu",
           "Bilgi durumu, fiziksel/zihinsel güçler, motivasyon, beklentiler",
           "Sadece deneyimi",
           "Sadece yaşı"
       ],
       correct: 1,
       explanation: "İşçi analizi, çalışanların neyi bildiğini veya bilmediğini, fiziksel veya zihinsel güçlerini, motivasyonlarını ve beklentilerini keşfeder."
   },
   {
       id: 51,
       section: "environmental",
       question: "Kültürel miras farklılıkları hakkında bilgi edinmenin faydası nedir?",
       options: [
           "Sadece merak için",
           "Belirli davranışların, beklentilerin arkasındaki nedeni anlamak",
           "Sadece sosyal medya için",
           "Gereksiz bilgi"
       ],
       correct: 1,
       explanation: "Kültürel miras farklılıkları hakkında bilgi edinmek, insanların belirli bir davranışın, beklentinin veya inancın arkasındaki nedeni anlamalarına yardımcı olur."
   },
   {
       id: 52,
       section: "environmental",
       question: "Sözel olmayan iletişime duyarlılık geliştirmek neden önemlidir?",
       options: [
           "Sadece görsel etki için",
           "Kültürel farklılıkları anlamak için özellikle faydalı",
           "Gereksiz bir beceri",
           "Sadece sanat için"
       ],
       correct: 1,
       explanation: "Sözel olmayan iletişime duyarlılık geliştirmede özellikle faydalıdır ve kültürel farklılıkları anlamamıza yardımcı olur."
   },
   {
       id: 53,
       section: "environmental",
       question: "İşyeri ortamında hangi çevresel faktörler analiz edilir?",
       options: [
           "Sadece fiziksel ortam",
           "Kaynak tahsisi, araçlar, politikalar, geri bildirim, sonuçlar, elde tutma",
           "Sadece teknoloji",
           "Sadece personel"
       ],
       correct: 1,
       explanation: "Çevresel analize kaynak tahsisi, araçlar, işe alma politikaları, geri bildirim, performansın sonuçları, elde tutma çabaları dahil edilir."
   },
   {
       id: 54,
       section: "environmental",
       question: "Güvenilirlik boyutu neleri içerir?",
       options: [
           "Sadece güven",
           "İletişim, yeterlilik ve dürüstlük",
           "Sadece iletişim",
           "Sadece dürüstlük"
       ],
       correct: 1,
       explanation: "Güvenilirlik boyutu iletişim, yeterlilik ve dürüstlük dahil olmak üzere güvenilirliği içerir."
   },
   {
       id: 55,
       section: "environmental",
       question: "Saygı boyutu neleri kapsar?",
       options: [
           "Sadece nezaket",
           "Destek, işbirliği, ilgi",
           "Sadece işbirliği",
           "Sadece destek"
       ],
       correct: 1,
       explanation: "Saygı boyutu destek, işbirliği, ilgi dahil olmak üzere saygıyı kapsar."
   },
   {
       id: 56,
       section: "environmental",
       question: "Adalet boyutu hangi unsurları içerir?",
       options: [
           "Sadece eşitlik",
           "Eşitlik, tarafsızlık, adalet",
           "Sadece tarafsızlık",
           "Sadece hukuk"
       ],
       correct: 1,
       explanation: "Adalet boyutu eşitlik, tarafsızlık, adalet dahil olmak üzere adaleti içerir."
   },
   {
       id: 57,
       section: "environmental",
       question: "Gurur boyutu neleri kapsamaktadır?",
       options: [
           "Sadece kişisel başarı",
           "Kişisel iş, ekip, şirket",
           "Sadece ekip başarısı",
           "Sadece şirket başarısı"
       ],
       correct: 1,
       explanation: "Gurur boyutu kişisel iş, ekip, şirket dahil olmak üzere gururu kapsar."
   },
   {
       id: 58,
       section: "environmental",
       question: "Samimiyet boyutu hangi unsurları içerir?",
       options: [
           "Sadece dostluk",
           "Dostluk, misafirperverlik ve toplum",
           "Sadece misafirperverlik",
           "Sadece toplum"
       ],
       correct: 1,
       explanation: "Samimiyet boyutu dostluk, misafirperverlik ve toplum da dahil olmak üzere samimiyeti içerir."
   },
   {
       id: 59,
       section: "environmental",
       question: "Çevresel analiz hangi veri toplama tekniklerini kullanır?",
       options: [
           "Sadece gözlem",
           "Personel belgeleri inceleme, gözlem, görüşmeler, anketler, grup süreçleri",
           "Sadece anket",
           "Sadece görüşme"
       ],
       correct: 1,
       explanation: "Gerçekleri, fikirleri veya duyguları keşfetmek için personel belgelerini inceler, uygulayıcıları gözlemler ve görüşmeleri, anket verilerini veya grup süreçlerini kullanır."
   },
   {
       id: 60,
       section: "environmental",
       question: "Çevresel analizde açık uçlu sorular neden tercih edilir?",
       options: [
           "Daha kolay",
           "En iyi bilgi kaynağı oldukları için",
           "Daha hızlı",
           "Daha ucuz"
       ],
       correct: 1,
       explanation: "Açık uçlu sorular en iyi bilgi kaynağıdır, bu nedenle anket verileri, görüşmeler veya grup süreçleri tercih edilen analiz araçlarıdır."
   },

   // BOŞLUK ANALİZİ SORULARI (61-90)
   {
       id: 61,
       section: "gap",
       question: "Boşluk analizi ne için kullanılır?",
       options: [
           "Sadece sorun tespiti",
           "İstenilen ve gerçek performans durumlarını analiz etmek",
           "Sadece gelecek planlaması",
           "Sadece geçmiş değerlendirmesi"
       ],
       correct: 1,
       explanation: "Boşluk analizi, istenilen ve gerçek performans durumlarını analiz etmek için kullanılır ve HPT Modelinin performans analizi aşamasındaki önemli bir adımdır."
   },
   {
       id: 62,
       section: "gap",
       question: "Performans boşlukları nasıl görülmelidir?",
       options: [
           "Sadece sorun olarak",
           "Performans iyileştirme fırsatları olarak",
           "Sadece maliyet olarak",
           "Önemsiz detaylar olarak"
       ],
       correct: 1,
       explanation: "Performans boşlukları, performans iyileştirme fırsatları olarak görülmelidir ve gelişme için bir şans sağlar."
   },
   {
       id: 63,
       section: "gap",
       question: "Performans iyileştirmenin gizli odak noktası genellikle nedir?",
       options: [
           "Fırsatlar",
           "Performans sorunu",
           "Teknoloji",
           "İnsan kaynakları"
       ],
       correct: 1,
       explanation: "Çoğu zaman insan performansını iyileştirmenin gizli odak noktası performans sorunudur, ancak teknoloji proaktif olarak da kullanılabilir."
   },
   {
       id: 64,
       section: "gap",
       question: "Takdir edici sorgulama neye odaklanır?",
       options: [
           "Sorunlara",
           "Olumlu yönlere",
           "Geçmişe",
           "Maliyet azaltmaya"
       ],
       correct: 1,
       explanation: "Takdir edici sorgulama, bardağın boş değil dolu tarafına bakmamıza yardımcı olur ve olumlu yönlere odaklanır."
   },
   {
       id: 65,
       section: "gap",
       question: "Performans boşlukları hangi türlerde olabilir?",
       options: [
           "Sadece negatif",
           "İstenilen performansı ölçmediğinde iyileştirmek veya inovasyon için",
           "Sadece pozitif",
           "Sadece nötr"
       ],
       correct: 1,
       explanation: "Performans boşlukları istenilen performansı ölçmediğinde gerçek performansı iyileştirmek için veya inovasyon için fırsatlar sağlar."
   },
   {
       id: 66,
       section: "gap",
       question: "Makul hedefler hangi özelliklere sahip olmalıdır?",
       options: [
           "Sadece yüksek",
           "Hem uygulanabilir hem de sürdürülebilir",
           "Sadece uygulanabilir",
           "Sadece sürdürülebilir"
       ],
       correct: 1,
       explanation: "Boşluk analizi literatürü, kuruluşların istenen duruma ulaşmak için makul hedefler belirlemelerini sağlar - hem uygulanabilir hem de sürdürülebilir hedeflerdir."
   },
   {
       id: 67,
       section: "gap",
       question: "Boşluk analizi için başlangıç noktası nedir?",
       options: [
           "Gelecek hedefler",
           "Mevcut ve istenen performans seviyelerini belirlemek",
           "Geçmiş veriler",
           "Rakip analizi"
       ],
       correct: 1,
       explanation: "Boşluk analizi için başlangıç noktası, mevcut ve istenen performans seviyelerini belirlemek ve ardından kalite, miktar, zaman ve maliyet açısından ilerlemeyi ölçmektir."
   },
   {
       id: 68,
       section: "gap",
       question: "En temel düzeyde hangi alanlar için makul hedef belirlenebilir?",
       options: [
           "Sadece satış",
           "Verimlilik, israf, satış, hizmet ve müşteri hizmetleri",
           "Sadece verimlilik",
           "Sadece müşteri hizmetleri"
       ],
       correct: 1,
       explanation: "En temel düzeyde, verimlilik, israf, satış, hizmet ve müşteri hizmetleri gibi alanlar için makul bir hedef belirlenebilir."
   },
   {
       id: 69,
       section: "gap",
       question: "Orta düzeyde hangi konular için hedef belirlenebilir?",
       options: [
           "Sadece güvenilirlik",
           "Güvenilirlik, garanti çağrıları, müşteriyi elde tutma, müşteri yönlendirmeleri",
           "Sadece garanti çağrıları",
           "Sadece müşteri yönlendirmeleri"
       ],
       correct: 1,
       explanation: "Orta düzeyde, güvenilirlik, garanti çağrıları, müşteriyi elde tutma veya müşteri yönlendirmeleri gibi konular için makul bir hedef belirlenebilir."
   },
   {
       id: 70,
       section: "gap",
       question: "İş sonucu düzeyinde hangi hedefler belirlenebilir?",
       options: [
           "Sadece karlılık",
           "Karlılık ve pazar payı",
           "Sadece pazar payı",
           "Sadece satış"
       ],
       correct: 1,
       explanation: "İş sonucu düzeyinde, karlılık ve pazar payı için makul hedefler belirlenebilir."
   },
   {
       id: 71,
       section: "gap",
       question: "İhtiyaç değerlendirmesi ile performans boşluğu analizi arasındaki fark nedir?",
       options: [
           "Aynı şeylerdir",
           "İhtiyaç değerlendirmesi bilgi, beceri, tutuma odaklanır; performans analizi herhangi bir eksikliği tanımlar",
           "Sadece zaman farkı",
           "Sadece yöntem farkı"
       ],
       correct: 1,
       explanation: "İhtiyaç değerlendirmesi bilgi, beceri ve tutuma odaklanma eğilimindedir; performans boşluğu analizi insan performansını etkileyen herhangi bir eksiklik veya yeterliliği tanımlar."
   },
   {
       id: 72,
       section: "gap",
       question: "İhtiyaç değerlendirmesi hangi zaman dilimlerine odaklanır?",
       options: [
           "Sadece geleceğe",
           "Geçmişe ve bugüne, performans analizi ise geleceğe de bakar",
           "Sadece geçmişe",
           "Sadece bugüne"
       ],
       correct: 1,
       explanation: "İhtiyaç değerlendirmesi geçmişe ve bugüne odaklanırken performans analizi de geleceğe bakar."
   },
   {
       id: 73,
       section: "gap",
       question: "Kaufman'ın İhtiyaç Tanımı modelinde 'ihtiyaç' ne olarak tanımlanır?",
       options: [
           "Çözüm",
           "Mevcut ve istenen sonuçlar arasındaki boşluk",
           "Kaynak",
           "Araç"
       ],
       correct: 1,
       explanation: "Kaufman'ın modelinde ihtiyaç, mevcut sonuçlar ve sonuçlar ile istenen sonuçlar ve sonuçlar arasındaki boşluk olarak tanımlanır."
   },
   {
       id: 74,
       section: "gap",
       question: "Altı hücreli boşluk analizinde kaç tür boşluk vardır?",
       options: [
           "Üç",
           "Altı",
           "Dokuz",
           "On iki"
       ],
       correct: 1,
       explanation: "Performansta altı potansiyel boşluk vardır: mevcut pozitif, mevcut nötr, mevcut negatif, gelecek pozitif, gelecek nötr, gelecek negatif."
   },
   {
       id: 75,
       section: "gap",
       question: "Performans iyileştirme için en büyük fırsat ne zaman ortaya çıkar?",
       options: [
           "Mevcut negatif boşluklarda",
           "Gelecekte nötr boşluklarda",
           "Mevcut pozitif boşluklarda",
           "Gelecek pozitif boşluklarda"
       ],
       correct: 1,
       explanation: "Performans iyileştirme için en büyük fırsat, gelecekte nötr olduğunda ortaya çıkabilir boşluklar var çünkü rakipler onları görmezden gelir."
   },
   {
       id: 76,
       section: "gap",
       question: "HPT uygulayıcısı hangi boşluklara dikkat etmelidir?",
       options: [
           "Sadece negatif boşluklar",
           "Pozitif ve nötr boşluklara sarı uyarı bayrakları",
           "Sadece pozitif boşluklar",
           "Sadece nötr boşluklar"
       ],
       correct: 1,
       explanation: "HPT uygulayıcısı, pozitif ve nötr boşluklarla ilgili sarı uyarı bayraklarına dikkat etmelidir."
   },
   {
       id: 77,
       section: "gap",
       question: "Performans açığı analizinin amacı nedir?",
       options: [
           "Sadece sorun tespiti",
           "İstenen ve gerçek performans durumu arasındaki mevcut ve gelecekteki boşlukları belirlemek",
           "Sadece çözüm üretmek",
           "Sadece raporlama"
       ],
       correct: 1,
       explanation: "Performans açığı analizinin amacı, istenen performans durumu ile gerçek performans durumu arasındaki mevcut ve gelecekteki boşlukları belirlemektir."
   },
   {
       id: 78,
       section: "gap",
       question: "Boşluklara öncelik verirken hangi kriterler kullanılır?",
       options: [
           "Sadece önem",
           "Kritiklik, karmaşıklık ve sıklık",
           "Sadece maliyet",
           "Sadece zaman"
       ],
       correct: 1,
       explanation: "Analist, kurumun hedeflerine ulaşmada boşluğun ne kadar önemli (kritiklik), ne kadar zor (karmaşıklık) ve ne sıklıkta (sıklık) oluştuğuna göre öncelik verir."
   },
   {
       id: 79,
       section: "gap",
       question: "Boşluk analizlerini yapmanın sistematik yaklaşımı kaç adımdan oluşur?",
       options: [
           "İki",
           "Üç",
           "Dört",
           "Beş"
       ],
       correct: 2,
       explanation: "Sistem yaklaşımı dört sıralı adım içerir: gerçek ve istenen performansın belirlenmesi, boşlukların belirlenmesi, boşluklara öncelik verilmesi, sebeplerin incelenmesi."
   },
   {
       id: 80,
       section: "gap",
       question: "Gerçek performansı analiz ederken hangi sorular sorulur?",
       options: [
           "Nasıl olmalıdır soruları",
           "Nedir soruları",
           "Ne zaman soruları",
           "Nerede soruları"
       ],
       correct: 1,
       explanation: "Gerçek durumda 'Nedir' sorularını sorun. Örneğin, bölgedeki ürün satışlarının mevcut durumu nedir?"
   },
   {
       id: 81,
       section: "gap",
       question: "İstenilen performansı analiz ederken hangi sorular sorulur?",
       options: [
           "Nedir soruları",
           "Nasıl Olmalıdır soruları",
           "Ne zaman soruları",
           "Neden soruları"
       ],
       correct: 1,
       explanation: "İstenilen durumda, 'Nasıl Olmalıdır?' sorular sorulur. Örneğin, optimum performansı ölçmek için olması gereken ölçütler neler olmalıdır?"
   },
   {
       id: 82,
       section: "gap",
       question: "İstenilen işgücü performansının anahtarı nedir?",
       options: [
           "Yüksek maaş",
           "Uyum",
           "Teknoloji",
           "Eğitim"
       ],
       correct: 1,
       explanation: "Uyum, istenen işgücü performansının anahtarıdır. Müşteri ihtiyaçları, organizasyonel hedefler ve tüm sistem bileşenleri hizalanmalıdır."
   },
   {
       id: 83,
       section: "gap",
       question: "Performans boşluklarını belirlemek için hangi yöntemler kullanılabilir?",
       options: [
           "Sadece anketler",
           "Anketler, mülakatlar, beyin fırtınası, odak grupları",
           "Sadece gözlem",
           "Sadece belgeler"
       ],
       correct: 1,
       explanation: "Başlıca araçlar anketler, mülakatlar ve fikirleri üretmek, önceliklendirmek için beyin fırtınası gibi grup süreçleri; odak gruplarıdır."
   },
   {
       id: 84,
       section: "gap",
       question: "Büyük ölçekli değişim çabası ne zaman en iyi yöntemdir?",
       options: [
           "Her zaman",
           "Riskler yüksek olduğunda",
           "Hiçbir zaman",
           "Sadece küçük projelerde"
       ],
       correct: 1,
       explanation: "Riskler yüksek olduğunda, büyük ölçekli, kısa vadeli bir değişim çabası genellikle performans boşluklarını analiz etmek için en iyi yöntemdir."
   },
   {
       id: 85,
       section: "gap",
       question: "Delphi yöntemi ne için kullanışlıdır?",
       options: [
           "Sadece veri toplama",
           "Tahmin, önceliklendirme ve fikir birliği elde etmek",
           "Sadece raporlama",
           "Sadece analiz"
       ],
       correct: 1,
       explanation: "Delphi, tahmin, önceliklendirme ve fikir birliği elde etmek için kullanışlıdır."
   },
   {
       id: 86,
       section: "gap",
       question: "Performans açıklarına öncelik verme neden önemlidir?",
       options: [
           "Sadece düzen için",
           "İnsanların yaptıklarıyla yapmalarını istediğiniz şey arasındaki farkı belirlemek harekete geçmek için yeterli neden değildir",
           "Sadece raporlama için",
           "Gereksiz bir işlem"
       ],
       correct: 1,
       explanation: "Bu çok önemli bir parçasıdır çünkü insanların yaptıklarıyla yapmalarını istediğiniz şey arasındaki farkı belirlemek, harekete geçmek için yeterli neden değildir."
   },
   {
       id: 87,
       section: "gap",
       question: "Eşleştirilmiş karşılaştırma analizi nedir?",
       options: [
           "İki seçenek arasında karar verme",
           "Listedeki öğeleri diğer tüm öğelerle ayrı ayrı karşılaştırma",
           "Sadece en iyi seçenek bulma",
           "Rastgele seçim yapma"
       ],
       correct: 1,
       explanation: "Eşleştirilmiş karşılaştırma analizi, katılımcıların bir listedeki öğeleri diğer tüm öğelerle ayrı ayrı karşılaştırmasına olanak tanır."
   },
   {
       id: 88,
       section: "gap",
       question: "Şebeke analizi ne zaman gereklidir?",
       options: [
           "Her zaman",
           "Birçok farklı faktörün dikkate alınması gerektiğinde",
           "Hiçbir zaman",
           "Sadece basit durumlarda"
       ],
       correct: 1,
       explanation: "Şebeke analizi, birçok farklı faktörün dikkate alınması gerektiğinde görevlerin önceliklendirilmesini gerektirir."
   },
   {
       id: 89,
       section: "gap",
       question: "Eylem öncelik matrisi neyi karşılaştırır?",
       options: [
           "Sadece maliyetleri",
           "Bir görevin değerini, görevi tamamlamak için gereken çabayla",
           "Sadece zamanı",
           "Sadece kaliteyi"
       ],
       correct: 1,
       explanation: "Eylem öncelik matrisi, bir görevin değerini, görevi tamamlamak için gereken çabayla karşılaştırmak için bir diyagram oluşturma tekniğidir."
   },
   {
       id: 90,
       section: "gap",
       question: "Performans açığı analizinin başarılı performans iyileştirmedeki rolü nedir?",
       options: [
           "Sadece ek bilgi",
           "Gerçekten başarılı performans iyileştirmenin anahtarı",
           "Gereksiz adım",
           "Son kontrol"
       ],
       correct: 1,
       explanation: "Performans açığı analizi, gerçekten başarılı performans iyileştirme veya iyileştirmenin anahtarıdır ve müdahale seçimi ve uygulamadan önce yapılmalıdır."
   }
];

// Soruları karıştırma fonksiyonu
function shuffleArray(array) {
   const shuffled = [...array];
   for (let i = shuffled.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
   }
   return shuffled;
}

// ==================== QUIZ UYGULAMASI ====================
class QuizApp {
   constructor() {
       this.currentQuestionIndex = 0;
       this.userAnswers = new Array(questions.length).fill(null);
       this.shuffledQuestions = shuffleArray(questions);
       
       this.initializeElements();
       this.startQuiz();
   }

   initializeElements() {
       this.elements = {
           currentQuestion: document.getElementById('current-question'),
           totalQuestions: document.getElementById('total-questions'),
           progress: document.getElementById('progress'),
           questionNum: document.getElementById('question-num'),
           questionText: document.getElementById('question-text'),
           options: document.getElementById('options'),
           prevBtn: document.getElementById('prev-btn'),
           nextBtn: document.getElementById('next-btn'),
           finishBtn: document.getElementById('finish-btn'),
           results: document.getElementById('results'),
           totalScore: document.getElementById('total-score'),
           percentage: document.getElementById('percentage'),
           orgScore: document.getElementById('org-score'),
           envScore: document.getElementById('env-score'),
           gapScore: document.getElementById('gap-score'),
           restartBtn: document.getElementById('restart-btn'),
           reviewBtn: document.getElementById('review-btn'),
           reviewSection: document.getElementById('review-section'),
           reviewContent: document.getElementById('review-content'),
           backToResults: document.getElementById('back-to-results'),
           questionContainer: document.getElementById('question-container'),
       };

       this.elements.prevBtn.addEventListener('click', () => this.prevQuestion());
       this.elements.nextBtn.addEventListener('click', () => this.nextQuestion());
       this.elements.finishBtn.addEventListener('click', () => this.finishQuiz());
       this.elements.restartBtn.addEventListener('click', () => this.restartQuiz());
       this.elements.reviewBtn.addEventListener('click', () => this.showReview());
       this.elements.backToResults.addEventListener('click', () => this.showResults());
   }

   startQuiz() {
       this.elements.results.style.display = 'none';
       this.elements.reviewSection.style.display = 'none';
       this.elements.questionContainer.style.display = '';
       this.elements.prevBtn.disabled = true;
       this.elements.nextBtn.disabled = false;
       this.elements.finishBtn.style.display = 'none';
       this.currentQuestionIndex = 0;
       this.userAnswers = new Array(this.shuffledQuestions.length).fill(null);
       this.updateQuestion();
       this.updateProgress();
   }

   updateQuestion() {
       const q = this.shuffledQuestions[this.currentQuestionIndex];
       this.elements.questionNum.textContent = this.currentQuestionIndex + 1;
       this.elements.currentQuestion.textContent = this.currentQuestionIndex + 1;
       this.elements.totalQuestions.textContent = this.shuffledQuestions.length;
       this.elements.questionText.textContent = q.question;
       this.elements.options.innerHTML = '';
       
       q.options.forEach((opt, i) => {
           const btn = document.createElement('div');
           btn.className = 'option' + (this.userAnswers[this.currentQuestionIndex] === i ? ' selected' : '');
           btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + i)}</span> ${opt}`;
           btn.addEventListener('click', () => this.selectOption(i));
           this.elements.options.appendChild(btn);
       });
       
       this.elements.prevBtn.disabled = this.currentQuestionIndex === 0;
       this.elements.nextBtn.disabled = this.currentQuestionIndex === this.shuffledQuestions.length - 1;
       this.elements.finishBtn.style.display = this.currentQuestionIndex === this.shuffledQuestions.length - 1 ? '' : 'none';
   }

   selectOption(i) {
       const q = this.shuffledQuestions[this.currentQuestionIndex];
       this.userAnswers[this.currentQuestionIndex] = i;
       
       // Tüm seçeneklerin stilini sıfırla
       const options = this.elements.options.children;
       for (let option of options) {
           option.classList.remove('selected', 'correct', 'incorrect');
       }
       
       // Seçilen seçeneği işaretle
       options[i].classList.add('selected');
       
       // Doğru/yanlış kontrolü yap
       if (i === q.correct) {
           options[i].classList.add('correct');
       } else {
           options[i].classList.add('incorrect');
           // Doğru cevabı da göster
           options[q.correct].classList.add('correct');
       }
       
       // Açıklamayı göster
       this.showExplanation(q.explanation);
       
       this.updateProgress();
   }

   showExplanation(explanation) {
       // Mevcut açıklamayı kaldır
       const existingExplanation = this.elements.options.parentNode.querySelector('.explanation');
       if (existingExplanation) {
           existingExplanation.remove();
       }
       
       // Yeni açıklama ekle
       const explanationDiv = document.createElement('div');
       explanationDiv.className = 'explanation';
       explanationDiv.innerHTML = `<strong>Açıklama:</strong> ${explanation}`;
       this.elements.options.parentNode.insertBefore(explanationDiv, this.elements.options.nextSibling);
   }

   prevQuestion() {
       if (this.currentQuestionIndex > 0) {
           this.currentQuestionIndex--;
           this.updateQuestion();
           this.updateProgress();
       }
   }

   nextQuestion() {
       if (this.currentQuestionIndex < this.shuffledQuestions.length - 1) {
           this.currentQuestionIndex++;
           this.updateQuestion();
           this.updateProgress();
       }
   }

   updateProgress() {
       const answered = this.userAnswers.filter(a => a !== null).length;
       const percent = ((this.currentQuestionIndex + 1) / this.shuffledQuestions.length) * 100;
       this.elements.progress.style.width = percent + '%';
   }

   finishQuiz() {
       this.elements.questionContainer.style.display = 'none';
       this.elements.results.style.display = '';
       this.showResults();
   }

   showResults() {
       this.elements.results.style.display = '';
       this.elements.reviewSection.style.display = 'none';
       let total = 0, org = 0, env = 0, gap = 0;
       
       this.shuffledQuestions.forEach((q, i) => {
           if (this.userAnswers[i] === q.correct) {
               total++;
               if (q.section === 'organizational') org++;
               if (q.section === 'environmental') env++;
               if (q.section === 'gap') gap++;
           }
       });
       
       this.elements.totalScore.textContent = `${total}/${this.shuffledQuestions.length}`;
       this.elements.percentage.textContent = `${Math.round((total / this.shuffledQuestions.length) * 100)}%`;
       this.elements.orgScore.textContent = `${org}/30`;
       this.elements.envScore.textContent = `${env}/30`;
       this.elements.gapScore.textContent = `${gap}/30`;
   }

   showReview() {
       this.elements.results.style.display = 'none';
       this.elements.reviewSection.style.display = '';
       this.elements.reviewContent.innerHTML = '';
       
       this.shuffledQuestions.forEach((q, i) => {
           const div = document.createElement('div');
           div.className = 'review-item';
           const isCorrect = this.userAnswers[i] === q.correct;
           const userAnswer = this.userAnswers[i] !== null ? q.options[this.userAnswers[i]] : 'Cevaplanmadı';
           
           div.innerHTML = `
               <div class="review-question">${i + 1}. ${q.question}</div>
               <div class="review-answer ${isCorrect ? 'correct' : 'user-incorrect'}">
                   Senin cevabın: ${userAnswer}
               </div>
               <div class="review-answer correct">
                   Doğru cevap: ${q.options[q.correct]}
               </div>
               <div class="review-explanation">${q.explanation}</div>
           `;
           this.elements.reviewContent.appendChild(div);
       });
   }

   restartQuiz() {
       this.shuffledQuestions = shuffleArray(questions);
       this.startQuiz();
   }
}

window.addEventListener('DOMContentLoaded', () => {
   new QuizApp();
});