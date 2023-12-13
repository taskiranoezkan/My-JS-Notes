//? HTML5 WEB STORAGE
//?  Web Storage(local storage ve local storage) cookies' oranla daha yeni bir html5 API
//?  HTML'ten önce uygulama verileri cookies'larda tutulmaktaydı her bir server requestleri de
//?  Web storage çok daha güveni ve de çok dah büyük dataları localde yani yerelde tutmamıza olanak sağlar
//?  Normalde cookies'lar localde dururken sessions'lar sunucu da tutulur
//?  Web storage da ise mevzu aynı cookies ve sessions'ta tutulabilen veri bu sefer tarayıcı localinde tutulur
//?  Çok temel şeyleri tutmak mantıklıdır ama özel şeyleri tutmak mantıklı değildir
//?  Oturum açarken kullanıcının tokenini local storage da tutmak mantıklıdır çunkü token zaten kullanıcıya aittir
//?  Veri depolama limiti bir çok tarayıcı için cookies başına 4 kb 
//?  Bu web storage ise en az 5 mb'ye kadar veri tutabilir ve bunu server'a transfer etmiyor
//?  Local storage ile session storage arsında ki fark session storage aktif oturum kapandıktan sonra oradaki veriler kaybolur
//?  Local storage ile session storage arasında kullanım olarak fark yoktur aynı tarz kullanım yani
//?  Öte yandan local storage'a depolanacak veri key - Value çiftleri şeklinde depolanmak zorundadır
//?  ANAHTARLAR VE DEĞERLER HER ZAMAN STRİNG OLMAK ZORUNDA
//?  Objeler veya İnteger Keyler local Storage'a verildiğinde otomatik olarak stringe dönüştürülür
//?  SESSİON STORAGE VE LOCAL STORAGE KULLANIM AÇISINDAN AYNI OLDUĞUNDAN DOALYI BU DERSTE LOCAL STORAGE ÜZERİNDEN DEVAM EDEİLİCEKTİR
//?  ARALARINDA Kİ TEK FARK İSE TARAYICI KAPATILINCA SESSİON STORAGE DA Kİ VERİLER KAYBOLACAKTIR SESSİON==OTURUM DEMEK
//?  Bir başka sekmeden de verilere erişilebilriz
//?  Farklı tarayıcılar arasında aynı dataya erişemiyoruz tıpkı cookisler gibi
//?  setItem(), getItem(), removeItem(), clear() ve key() olmak üzere beş tane methodu var bu web storage'ın/? 
//?  Geçici veri depolamak için
//?  Alışveriş sepetinde olan ürünler vs
//?  Offline olarak da kullanılabilir
//?  Güncellenmeyecek bir veri için bir API'dan veri gelince burada depolanabilir
//?  Resimleri bile base64 formatında tutabiliriz
//?  Oturum doğrulama için kullanılabilir//

//console.log(localStorage)
//? METODLAR
//? localStorage.clear()
//? localStorage.getItem()
//? localStorage.key()
//? localStorage.length
//? localStorage.setItem()
//? localStorage.setItem()//


//localStorage.setItem('name','Özkan')
//console.log(localStorage)
//? localStorage.setItem() kısmı kaldırılsa da localStorage da veriler kalmaya devam edecektir//

//? localStorage.name ile de erişebiliyoruz
//console.log(localStorage.name)//

//? Ama daha mantıklısı şu yoldur
//console.log(localStorage.getItem('name'))//

//? Local storage uzunluk içinde
//console.log(localStorage.length)//

//? Remove item ile o key'e sahip veri silinecktir
//localStorage.removeItem('name')//

//? Sadece keyleri almak istersek
//localStorage.key(0)//
//
//

//? HERHANGİ BİR VERİ KAYBI YAŞAMAMAK ADINA VERİLER DİZİ VE OBJECT ÜZERİNDEN GİDECEM
//? BU TÜR VERİLER LOCAL SRORAGE ALINIRKEN STRİNG HALİNDE ALINIYORDU HATIRLARSAK
//? EE JSON DA VERİLERİ STRİNG HALİNDE BİR FORMATA DÖNÜŞTÜRÜYORDU
//? O ZAMAN PARSE VE STRİNGİFY BURADA KULLANILŞABİLİR//

//let names=['Özkan','Faik Cem','Onur','Sedat','Halil İbrahim']//

//localStorage.setItem('names',names)
//console.log(localStorage.getItem('names')) // Veri dizi formatında fakat burada string görünüyor
//localStorage.setItem('isimler',JSON.stringify(names))
//console.log(JSON.parse(localStorage.getItem('isimler'))) // Tekrardan dizi halinde kullanabilmemiz için bu formata ihtiyac vardır//

//? BU İKİ ÖRNEK ARSINDA FARK YOKTUR
//let user = {name : 'Özkan',surname : 'Taşkıran'}//

//localStorage.setItem('usser',user)
//console.log(localStorage.getItem('usser'))  //Ancak, bir JavaScript nesnesi (object) bir stringe dönüştürülürken, varsayılan olarak "[object Object]" olarak temsil edilir.
//localStorage.setItem('usser',JSON.stringify(user))
//console.log(JSON.parse(localStorage.getItem('usser'))) // Tekrardan obje halinde kullanabilmemiz için bu formata ihtiyac vardır//
//
//

//? OBJE VE DİZİ FORMATINA GERİ DÖNEBİLMEK ADINA PARSE METODU KULLANILMAIDIR VE AYRICA VERİLERİN FORMAATIININ DEĞİŞMEMESİ ADINA WEB STORAGE'A DEPOLARKEN STRİNGİFY KULLANILMALIDIR//

//localStorage.clear()


let basket = JSON.parse(localStorage.getItem('basket')) || []  //Local storage da basket varsa parse et dönder yoksa boş dizi dönder

let products = [
    {
        id: 1,
        title: 'MackBook Pro 2022',
        price: 40000
    },
    {
        id: 2,
        title: 'Keychron K6',
        price: 100
    },
    {
        id: 3,
        title: 'NupHy Halo65',
        price: 150
    },
]


function saveTostorage() {
    localStorage.setItem('basket', JSON.stringify(basket))
}


function addBasket(productId) {
    const basketIndex = basket.findIndex(b => b.productId == productId)
    if (basketIndex > -1) {
        basket[basketIndex] = {
            ...basket[basketIndex],
            amount:basket[basketIndex].amount += 1
        }
    } else {
        basket.push(
            {
                productId,
                amount: 1
            })
    }
    basket.push(productId)
    saveTostorage()
}


// function removeBasket(productId) {
//     const item = basket.find(p=>p.productId==productId)
//     if(item){
//         if (item.amount==1) {
//             basket = basket.filter(id => id !== productId)
//         }else{
//             basket = basket.map(i=>{
//                 if(i.productId==productId){
//                 i.amount -=1
//             }
//         })
//         saveTostorage()
//      }
//     }
// }

// function totalPrice() {
//     return basket.reduce((prev, basket) => {
//         const product = products.find(p => p.id == basket.productId)
//         return prev += (product.price * basket.amount)
//     }, 0)
// }



// addBasket(3)
// console.log(totalPrice())



//! BİR DAHA BAK BU ÖRNEĞE





// localStorage tarayıcı depolanmasıdır.
// sessionStorage de aynısıdır 
// en belirgin farkları sessionStorage tarayıcı veya pc kapandığında veriler silinir
// Window objesinin içerisinde bulunur ikisi de window. demeden kullanılması mümkündür
// Değer ekleme
sessionStorage.setItem('350','Enes')
// Key-Value çifti şeklinde çalışır
sessionStorage.setItem('351','Serkan')
sessionStorage.setItem('352','Sercan')
sessionStorage.setItem('353','Sevcan')

// Değer silme 
sessionStorage.removeItem('351')

// Değer alma
sessionStorage.getItem('350') //Eğer key yoksa null döner
if (sessionStorage.getItem('352')==null) {
    console.log('Değer Yoktur loo')
}

// sessionStorage da  ki tüm değerleri siler
// sessionStorage.clear();

//! :: sessionStorage ve localStorage'a eklenen değerler string olarak eklenir.
// Nümerik tipler de string olarak eklenir
// Arraylar de string şeklinde saklanır


let names=['Ali','Ayşe','Elif','Veli']
sessionStorage.setItem('names',names)
console.log(sessionStorage.getItem('names')) //Ali,Ayşe,Elif,Veli

//TODO: Bunun önüne geçmek için değerleri storage'a verirken JSON formatında verebiliriz. Alırken de JSON format dönüşümü ile veri tipini koruruz.
let namess=['HAKAN','GÖKHAN','SERKAN','MUSA']
sessionStorage.setItem('NAMES', JSON.stringify(namess))

console.log(JSON.parse(sessionStorage.getItem('NAMES')))

//TODO::HERHANGİ BİR VERİ TÜRÜNÜ DEPOLAR FAKAT DEPOLANIRKEN STRİNG TÜRÜNDE DEPOLAR BUNA DİKKAT VE DE BU JSON KULLANILARAK GİDERİLEBİLRİR.

// LOCAL STORAGE  
// sessionStorage'tan hiç bir farkı yoktur. Window objesinin altında yer alır.
let kul={
    name:'Özkan',
    email:'tskrn@gmail.com',
    pass:'tskrn'
}

localStorage.setItem('Kullanıcı',JSON.stringify(kul))
console.log(JSON.parse(localStorage.getItem('Kullanıcı')))

let kul1=kul;
kul1.name='Sercan'
kul1.email='srcn@gmail.com'
kul1.pass='sercan35'



localStorage.setItem('Kullanıcı1',JSON.stringify(kul1))
console.log(JSON.parse(localStorage.getItem('Kullanıcı1')))



//!KOD İÇERİDEN OKUNUR EĞER İÇ İÇE FONKSİYON VARSA DİKKAT EDİLMELİ