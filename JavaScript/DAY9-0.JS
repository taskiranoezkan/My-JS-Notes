//HATIRLATMA::JAVASCRİPT CALLBACK FONKSİYONLARI
//Asenkron programlama da kullanılan bir fonksiyon türüdür,aslında normal bildiğimiz fonksiyondur
//callback fonksiyonları başka fonksiyonlara parametre olarak gönderilebilir
//javascript'de asenkron programlama sayesinde örneğin bir EventListener kullanığımızda programımız bu EventListener'in oluşmasını beklemez ve diğer kodlarını çalıştırmaya devam eder.


let merhaba = function () {
    console.log('Bu bir callback')
}

//SetTimeOut::Belli bir saniyeden sonra çalışmaya başlayan kodlar
setTimeout(merhaba(), 3000)//3 saniye sonra fonksiyon gelecek -->merhaba şeklinde yazınca da çalışıyor fonksiyon aç kapa yapılmazssa yani
console.log('naber')//asenkron çalıtığını kontrol etme

//SetTimeOut fonksiyonunu Anonymous fonksiyon olarak yazma
setTimeout(function () {
    console.log('ne oluyok la', "BU KISIM 30 SANİYE SONRA ÇALIŞACAKTIR.")
}, 30000) //BURASI NORMALDE 3 saniiye ama 30 saniyeye çektim aşağıda sıkıntı yaratmasın


//BU KISIM ÇALIŞMASI İÇİN BUTONA TIKLANMASI GEREK
//Butona event atayarak tıklandığında çalışan bir şey ki eğer öyle olmasa kod satır satır geleceği için arayüz bekleyecekti
let buton = document.getElementById("btn")
buton.addEventListener("click", () => {
    console.log('Butona Tıklandı la Haberin olsun')
    alert('Butona Tıklandı!')
})
console.log("ne haber lan")
//burada asenkron bir durum söz konusu eğer ki öyle olmasaydı event'ın gerçekleşmesini bekleyecektik ki o da arayüzün belli bir süre sonra donduğunu faredectik



// Bu kısım bence önemli çünkü önceki aşamada eleman.toUpperCase()yazıp alt satırda da ydizye pushlamıştım o kullanım yanlıştı
let dizi = ['AHMET', 'MEHMET', 'MUSA', 'Fevzi', 'Çemşit', 'Mustafa', 'Abbas', 'Murat', 'Tolga']
let ydizi = []
dizi.forEach((eleman) => {
    ydizi.push(eleman.toUpperCase())
})
console.log(ydizi)



dizi.map((element) => {
    ydizi.push(element.toLocaleLowerCase())
})


ydizi.map(ele => {
    ele.toUpperCase()
    if (dizi.includes(ele)) {
        ydizi.pop(ele)
    }
})
console.log(ydizi)






//NOT:: Bu tür high order fonksiyonlarda tooltip kullanmak fonksiyonun ne işe yaradığını ve hangi parametreleri alddığını söyler KOLAYLIK SAĞLAR
// TOOLTİP::Yazılan bir şey için açıklama olan kısım 

//High order fonksiyonlar genelde dizi.fonksiyonismi olarak mı kullanılırlar
//
//evet, genellikle yüksek mertebeden fonksiyonlar, bir dizi üzerinde çalışan fonksiyonel programlama yöntemlerinin bir parçası olarak dizi.fonksiyonismi şeklinde kullanılır. 
// Bu şekilde kullanıldığında, bir dizi üzerindeki her bir elemana uygulanan işlemleri kolayca gerçekleştirmek için kullanılırlar.
//
//örneğin, aşağıdaki dizi fonksiyonları yüksek mertebeden fonksiyonlara örnek olarak verilebilir:
//
//map(): Bir dizi üzerinde döngü yaparak her bir elemana belirli bir işlem uygular ve işlem sonucunu yeni bir dizi olarak döndürür.
//filter(): Bir dizi üzerinde döngü yaparak belirli bir koşulu sağlayan elemanları yeni bir dizi olarak döndürür.
//reduce(): Bir dizi üzerinde döngü yaparak bir akümülatör değeri ile her bir elemana belirli bir işlem uygular ve sonuç olarak tek bir değer döndürür.

//forEach(): Bir dizi üzerinde döngü yaparak her bir elemana belirli bir işlem uygular. 
//(Döngü sonucunda yeni bir dizi oluşturulmaz, bu yüzden forEach, tam anlamıyla yüksek mertebeden bir fonksiyon olarak kabul edilmez.)

//bu fonksiyonlar, bir dizi üzerindeki elemanlara uygulanacak işlemleri temsil eder ve bu işlemler yüksek mertebeden fonksiyonlar aracılığıyla kolayca gerçekleştirilebilir.

// FOR-EACH
// Kısa kullanım
let dizicik = [1, 2, 3, 4, 5, 6, 7]
let tota = 0
dizicik.forEach(num => tota += num)
console.log(tota)





//filter fonksiyonu kullanırken sonucu yenidizi adlı bir diziye eklemek istiyorsunuz.
// Ancak, filter fonksiyonu kendi içinde bir dizi döndürür ve bu dizi, filtrelenen elemanları içerir.
// Dolayısıyla, filter fonksiyonu sonucunu direk olarak yenidizi dizisine atamalısınız.
// Bu örnekte de olduğu gibi filtreleme index numarası 2 ile tam bölünen sayıları yeni bir değişkene atıyor
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num, index) => index % 2 === 0);

console.log(evenNumbers); // [2, 4]



// REDUCE() FONKSİYONU

// JavaScript'te reduce() fonksiyonu, bir diziyi tek bir değere dönüştürmek için kullanılan bir yüksek mertebeden bir dizi fonksiyonudur.
// Dizideki her öğeyi birleştirir, toplar veya başka bir işlemi gerçekleştirerek sonuç olarak tek bir değer üretir.

// reduce() fonksiyonunun genel sözdizimi şu şekildedir:
// array.reduce(callback[, initialValue]);
// array: İşlem yapılacak olan dizi.
// callback: Her bir öğe üzerinde çalışan ve sonuç değerini güncelleyen fonksiyon.
// initialValue (isteğe bağlı): İlk değer olarak kullanılacak başlangıç değeri. Eğer belirtilmezse, dizi ilk öğeden başlayarak işlem yapar.
// callback fonksiyonu, dört farklı parametre alır:

// callback(previousValue, currentValue, currentIndex, array)
// previousValue: Önceki adımda döndürülen değer (başlangıç değeri veya bir önceki adımda hesaplanan değer).
// currentValue: Şu anki işlemdeki dizi öğesi.
// currentIndex (isteğe bağlı): Şu anki işlemdeki dizi öğesinin indeksi.
// array (isteğe bağlı): reduce() fonksiyonuna verilen orijinal dizi.
// reduce() fonksiyonu, her bir dizi öğesi üzerinde döner ve callback fonksiyonunu çağırır. callback fonksiyonu, her adımda previousValue değerini günceller ve sonuç olarak yeni bir değer döndürür.
// İlk adımda başlangıç değeri olarak initialValue kullanılır veya başlangıç değeri belirtilmemişse, dizi ilk öğeden başlayarak işlem yapar.

// İşlem tamamlandığında, reduce() fonksiyonu sonuç değerini döndürür.

// Örnek kullanım:
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((total, current) => total + current, 0);
// console.log(sum); // 15
// Bu örnekte, numbers dizisi üzerinde reduce() fonksiyonu kullanılarak toplama işlemi gerçekleştirilir. Başlangıç değeri olarak 0 belirtilmiştir. Her adımda, total değeri güncellenerek mevcut değer ile toplanır.
// Sonuç olarak, 15 elde edilir.
// reduce() fonksiyonu çok çeşitli işlemlerde kullanılabilir, örneğin dizideki en büyük veya en küçük değeri bulmak, diziyi birleştirmek, ortalama hesaplamak gibi.
//İhtiyacınıza göre callback fonksiyonunu uygun şekilde tanımlayabilirsiniz.

//REDUCE-->Azalmak ,küçültmek 
// Dizideki tüm öğeleri bir işlevden geçiriyor ve sonunda diziyi tek bir değere dönüştürüyor
//Reduce iki tane zorunlu paramtere iki tane de opisyonel parametre içeriyor

let difi = [1, 2, 3, 5]

difi.reduce(function (acc, number) {
    return acc + number
}, 5)



// İlk parametre yukarıda ki örnekte total değerini tutan parametree genelde acc deniliyor adına
// İkinci parametre işlem yapılan öge genelde currentValue olarak adlandırılrır
// Üçüncüsü currentValue'ların indis değeri
// Ve son parametre reduce uygulanan dizinin kendisi

// array.reduce(function(accumulator, currentValue, currentIndex, arr), initialValue)


let basket = [
    {
        name: 'İphone-8',
        price: 7000
    },
    {
        name: 'Macbook-Pro',
        price: 27000
    },
    {
        name: 'Apple-Watch',
        price: 5000
    },
    {
        name: 'Airpods-2',
        price: 3000
    }
]


// yukarıdaki ürünlerin fiyatını topluyor
let sum = basket.reduce((acc, currentValue) => acc += currentValue.price, 0)
console.log(sum)




// birden 10 a kadar rastgele sayı olusturup d adındaki diziye atıyor
let d = []
for (let i = 0; i <= 10; i++) {
    let degisken = Math.floor(Math.random() * 11)
    d.push(degisken)
}

// redunce ile rastgele oluşan dizideki değerleri ve indis değerleriini toplar
console.log(d)
let sonuc = d.reduce((acc, currentValue, currentIndex) => acc += (currentValue + currentIndex), 0)
console.log(sonuc)






// BU ÖRNEK MUAZZAM DERECE GÜZEL BENCE
// Dizi d eaynı olan isimler var ve her ismin kaç kere geçtiğini bu şekilde bulmamıza olanak sağlıyor
// eğer acc de isim var ise değerini boş bir obje olarak başlayan yerden 1 artırıyor yoksa ismi ekleyip değerini 1 yapıyor


let names = ['Özkan', 'Mahmut', 'Mehmet', 'Hüseyin', 'Ali', 'Osman', 'Mustafa', 'Murat', 'Özkan', 'Musa', 'Musa', 'Ali', 'İsa', 'İsa']



let countedNames = names.reduce((acc, name) => {
    if (name in acc) {
        acc[name]++
    } else {
        acc[name] = 1
    }
    return acc
}, {})


console.log(countedNames)




// BU DA MUAZZAM BİR ÖRNEK DAHA
// ÜRÜNLERİ MARKAYA GÖRE FİLTRELEME DE KULLANILABİLRİ
// TÜM ÜRÜNLER ÜZERİNDE ÜRÜN MARKASI ADINDA OLUŞTURULAN KEY ÜZERİNDEN EĞER ÜRÜN VARSA ACC DE ÜRÜNÜ EKLER YOKSA ÜRÜÜN MARKASINI EKLER ÖYLE DEVAM EDER
// AYRICA ACC Yİ DE BOŞ BİR OBJE OLARAK OLUŞTURMASI İNCE NOKTALARDAN BİRİ


const products = [
    {
        name: 'Ürün1',
        brand: 'Apple'
    },
    {
        name: 'Ürün2',
        brand: 'Samsung'
    },
    {
        name: 'Ürün3',
        brand: 'Apple'
    },
    {
        name: 'Ürün4',
        brand: 'Apple'
    },
    {
        name: 'Ürün5',
        brand: 'Samsung'
    }
]

let group = 'brand'

let gpro = products.reduce((acc, product) => {
    let key = product[group]
    if (!acc[key]) {
        acc[key] = []
    }
    acc[key].push(product)
    return acc
}, {})

console.log(gpro)




// TEk tek döndüğü postların taglarını acc değişkenine atıyor
let posts = [
    {
        title: 'Post 1',
        tag: ['Php', 'Javascript']
    },
    {
        title: 'Post 2',
        tag: ['html', 'css']
    },
    {
        title: 'Post 3',
        tag: ['bootstrap', 'tailwind']
    },
    {
        title: 'Post 4',
        tag: ['react', 'react native']
    },
    {
        title: 'Post 5',
        tag: ['java', 'c#']
    },

]
const alltags = posts.reduce((acc, post) => [...acc, ...post.tag], [])
console.log(alltags)









//Verilen parametreye göre id üreten fonksiyon
//10 kere tekrarlansın istedeim fakat uğraşmadığımdan yapamadım
let base = 'ABCDEFGHİJKLMNOPRSTUVYZXWQabcdefghijklmnoprstuvyzxwq0123456789'
function randoGeneratorId(params) {
    let randomIndex
    let idd = []
    let id = ''
    for (let i = 0; i < params; i++) {
        randomIndex = Math.floor(Math.random() * base.length); //!Burada Math.random() fonksiyonu bize 0-1 arasında bir sayı döndürür.
        id += (base[randomIndex])
    }
    idd.push(id)
    return idd
}

console.log(randoGeneratorId(8))
console.log(randoGeneratorId(7))
console.log(randoGeneratorId(6))
console.log(randoGeneratorId(5))




//! Enes Bayram Asenkron Programlama Kısmı
//! Asenkron Kullanımı Yönetilebilirliği Zorlaştırır.
// İlerlemeyi kolaylaştırır Senkron ve asenkron programlama . React ve diğer kütüphanelerde kullanılır
// Senkron programlama da her şey sıra ile çalışır. Bir işin sırası dolmadan diğer işe girişmez.
// Asenkron programlama da ise işler eş zamanlı çalışır. Zamandan kazanç sağlar kod verimliliği sağlar. uygulama kullanılabilirliği sağlar.
// Kullanımı başlangıç seviye için kullanımı kolay olsa da ileri seviyede sorun olabiiliyor bazen



selamla();
console.log('Enes')
console.log(23)
console.log('Bayram')



function selamla() {
    console.log('Selam')
}

selamla();


//! NOT: JAVASCRİPT senkron çalışan bir programlama dilidir.
//! Javascript bazı durumlarda asenkron çalışır.
/*
1-Timing İşlemlerinde-->SetTimeOut, SetInterval
2-Eventlar--> click, klavye enter, inputa değer girilmesi
3-HTTP Request-->Rest API, HTTP İsteklerinde kullanılır. En sık kullanım alanı.JS de WEB APİ kısmındaki her şey asenkrondur. FETCH APİ de asenkron çalışır. EN ÖNEMLİSİ BUDUR.
*/

//!NOT::setTimeOut ile geciktirme yaşatırız. Sanki bir HTTP isteği atılmış ve iki saniye bekle der gibi...

console.log('Cristiano Ronaldo')

setTimeout(() => {
    console.log('Bir Süre geçti!');
}, 1000)

console.log('Lionel Messi')

//Normalde beklenen sıra ile çalışmasıdır ancak asenkron işlem olduğundan dolayı setTimeOut 1 saniye sonra çalışacaktır.
//Bu arada işlemler milisaniye cinsinden dönüyor , 1000 derken 1 saniye demek istedik.
//Senkron çalışamn kodlar asenkronu beklemez.


// KONUDAN BAĞIMSIZ.
//! Belli bir sürede tekrar edecek kodlar için setInterval() kullanılır 
// setInterval(()=>{
//     console.log('babcık babacık');
// },5000)



//! ASENKRON YAPILARI YÖNETMEK İÇİN CALLBACK YAPILARINI VE ECMASCRİPT İLE GELEN PROMİSE'LERİ VE ONLARDAN DA KULLANIŞLI OLAN ASYNC AWAİT YAPILARINI KULLANARAK ASENKRON YAPILARI SENKRON YAPILARA ÇEVİRİYORUZ.


// ASENKRON PROBLEMİ ÇÖZÜMÜ İÇİN ÖNCE CALLBACK KULLANILACAK
// jsonplaceholder diye bir site var json formatında veri akışı için bir kaynak
// rest Api'yi backendçiler yazar.
// normalde bir servise istek atılınca (HTTP) bu işlemin ne kadar sürede cevap döneceği bilinmez o yüzden setTimeOut kullanılması sıkıntı yaratır.


const users = [
    {
        ID: 1,
        post: 'Enes Post 1'
    },
    {
        ID: 1,
        post: 'Enes Post 2'
    },
    {
        ID: 2,
        post: 'Betül Post 1'
    },
    {
        ID: 2,
        post: 'Betül Post 2'
    },
    {
        ID: 3,
        post: 'Hakan Post 1'
    },
    {
        ID: 3,
        post: 'Hakan Post 2'
    },
    {
        ID: 3,
        post: 'Hakan Post 3'
    },
    {
        ID: 4,
        post: 'Musa Post 1'
    },
]

// 1- User ID bulunacak
// 2- Postları almak için user ID kullanımmı

// Bunlar daha sonra HTTP istekleri ile rest Api'ler yardııyla alıncak

// BURASI NORMALDEHATA VERİR ÇÖZÜMÜNÜ AŞAĞIDA YAPACAZ O YÜZDEN DE YORUMA ALINDI
// Asenkrondan Önce
// function getUserId() {
//     setTimeout(() => {
//         //servise gidilecek
//         return 3;
//     }, 1000)
// }



// function getPostByUserId(userId) {
//     //gerçek bir rest api'ye istek atılacak
//     console.log(userId) // Burada görebiliriz ki iki donksiyon eş zmanlı olduğundan console.log() userId'yi undefined olarak görür.
//     setTimeout(() => {
//         users.forEach((user) => {
//             if (user.ID == userId) {
//                 console.log(user.post)
//             }
//         })
//     }, 500)
// }



// let userId = getUserId();
// getPostByUserId(userId)


//! İki Metod da asenkron çalıştığından dolayı userId almaya şansımız olmadı o ve undefined döndü bu yüzden de postları alamadık yani çünkü userID'yi alamadık ki.
// Bu da asenkron problemlerine yol açar. Bazı rest Api'ler çok geç cevap verbiliyor. bu durumları tahmin edemiyoruz. bu da asenkron problemlerine yol açıyor.
// Normalde bizim isteğimizde bir istek yapılıp sonucu beklenmeli gelen cevaba göre hareket edelim deriz.
// bunu yapmak için callbackler, promiseler veya async awaitler vardır. en ilkeli callback bu callbackler de calbackk hell'e yol açar.

console.log('-------------------------------------------------')

// CALLBACK NEDİR?
function getName() {
    //Servisten isim almak
    setTimeout(() => {
        console.log('Enes');
    }, 1000)
}



function getSurname() {
    setTimeout(() => {
        console.log('Bayram');
    }, 500)
}

getName();
getSurname();

// Bilgiler servisten ne kadar süre ile dönecek bilmediğimizden böyle bir kullanım asenkron problemine yol açar.
// ilkin callback'ler sonra promise'lar ve son olarak async await görecez.
// Pek kullanılmaz callback'ler 

// Callback:: Bir fonksiyonu bir fonksiyona parametre olarak geçerek asenkron yapıyı senkron yapıya çevirecez.
// Normalde bu iki işlem birlikte 1 saniye döncekken bu yöntemle 1.5 saniye sürecek bu da küçük bir problrm olarakk gözükse de aslında büyük problemdir.

// ! CALLBACK ANLAM OLARAK DA GERİ ÇAĞIRMA ANLAMINDADIR



function getName1(callback) {
    setTimeout(() => {
        console.log('EMRAH');
        callback();
    }, 1000)
}



function getSurname1() {
    setTimeout(() => {
        console.log('BAYRAM');
    }, 500)
}

getName1(getSurname1);  //buaray dikkat edilmeli çağırım yapılırken getSurname1() şeklinde yazmadık.




console.log('------------------------------')
console.log('BUNDAN SONRA BURADA OLAYI SİMÜLE ETMEYE ÇALIŞTIK')




function getName2(callback) {
    setTimeout(() => {
        //BU verinin web servisten gedliğini düşünğrsek
        let isim = 'TAYFUN'
        callback(isim);
    }, 1000)
}



function getSurname2(isim) {
    //BU verinin web servisten gedliğini düşünğrsek
    let soyisim = 'BAYRAM'
    setTimeout(() => {
        console.log(isim, soyisim);
    }, 500)
}

getName2(getSurname2);  //buaray dikkat edilmeli çağırım yapılırken getSurname1() şeklinde yazmadık.





//!: Metodlaştırmadan direkt arrow fonksiyon olarak kullanılması yapılabilir bu da callback hell'e yol açar.
// Kısacası callback içinde callback şeklinde bir çalışma oluyor ve bu kullanım eski kodlar da kullnımı mevcut.


//TODO: Callback Hell İçin Örnek


function getNm(callbackk) {
    setTimeout(() => {
        //BURADA İSİM WEB AP'DEN GELİYOR GİBİ DÜŞÜN
        let is = 'JASON'
        callbackk(is);
    }, 300);
}

function getSrnm(is, callbac) {
    setTimeout(() => {
        //BURADA SOYİSİM WEB AP'DEN İSME GÖRE GELİYOR GİBİ DÜŞÜN
        let Srname = 'HOLDER'
        callbac(Srname);
    }, 700);
}


function getAge(is, Srname, callbak) {
    setTimeout(() => {
        //BURADA YAS WEB AP'DEN İSİM VE SOYİSİME GÖRE GELİYOR GİBİ DÜŞÜN
        let age = 23
        callbak(age);
    }, 5000)
}


getNm((is) => {
    getSrnm(is, (Srname) => {
        getAge(is, Srname, (age) => {
            console.log(is, Srname, age)
        })
    })
})


// TOTALDE 6 SANİYE GEÇİYOR AMA BU KULLANIM PEK TAVSİYE EDİLMİYOR 





// CALLBACK PROBLEMİ OLAN ÖRNEĞİN ÇÖZÜMÜ
// Asenkrondan Önce
function getUserId(kallbak) {
    setTimeout(() => {
        //servise gidilecek
        let userId =3
        kallbak(userId)
    }, 1000)
}



function getPostByUserId(userId) {
    //gerçek bir rest api'ye istek atılacak
    setTimeout(() => {
        users.forEach((user) => {
            if (user.ID == userId) {
                console.log(user.post)
            }
        })
    }, 500)
}

getUserId(getPostByUserId)




//!NOT::Birbirinden bağımsız olaylarda mesela çekilen verilerin birbiri ile bağlantısı yoksa iki olayı da senkron yaparsak sıkıntı olur 
//!NOT::Birbiri ile bağımlı olan olaylarda yani bir tanesinden gelen veri diğerinde kullanılacak ise senkron yapılması gerekiyor 

//Bağımlılık yoksa asenkron
//Bağımlılık varsa senkron
