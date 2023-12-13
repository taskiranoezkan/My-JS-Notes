// Writing Clean Code--->Temiz Kod Yazmak
// javascript stil klavuzu sayesinde nasıl temiz kod yazılır.


// Yazılan kod çalıştığı sürece nasıl yazıldığının bir önemi yok
// Ama ekiple birlikte çalışınca bu sorun çıkartır

// kendi kurallarımızı oluşturabileceğimiz gibi var olan stil klavuzlarına da bakabiliriz

// Airbnb Stil Klavuzu ---> En popüler olan
// Javascript Standart Stil Klavuzu --->Airbnb kadar popüler değil ve noktalı virgül kaldırılmış
// Google Stil Klavuzu--->Bakılmamış bakılabilir



// Javascript Kodlama Kuralları
// Ekip halinde geliştirilirken okunabilirliği artırabilir
// Bakımı kolay hale getirir
// İsimlendirme kurallarını gösterir

// camelCase Yazım tarzı
let benimAdimTayfun = 'Tayfun'

// snake_case Yazım tarzı
let benim_adim_tayfun = 'Tayfun'

// kebap-case
// let benim-adim-tayfun = 'Tayfun'
// NOT :: Bu case çalışmıyor


// stringler için tek tırnak yaygınlaşıyor
// noktalı virgül kullanılmıyor ama arada sıkıntı çıkıyor dikkat edilmeli
// regular function yerine arrow functionlar kullanılıyor ama this parametresi bunlarda yok dikkat edilmeli
// objenin son elemnaıına virgül konmaz
// a+=1 şeklinde kullanımlar kullanılıyor


let firstName = 'Tayfun'
// Sabitler büyük harfle yazılır
let PI = 3.14


// diziler isimlendirilirken coğul isimler kullanılır
let sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Duruma göre ne zaman arrow fonksiyon kullanılması bilinmeli

// tek satırda döndürme işlemleri yapılabilir
// değişkene atanan fonksiyonlar sıkllıkla kullanılır


// Döngülerde ekstradan for of veya for in döngüleri mevcut kullanıldığında şaşırma
// FOR-İN
// Bu döngü nesnenin özelliklerini (property) saymak veya numaralandırmak için kullanılır.
// Döngü her döndüğünde, nesnenin her bir özelliği üzerinde işlem yapabilirsiniz. Döngü sırasında dönen değer, özelliğin adı (property name) olacaktır.
// Objelerde keyleri iterate ederken de for-in döngüsü kullanılır.
// console.log(person[key]) de dersek for-in döngüsünde valueları alırız.


// FOR-OF
// Bu döngü, diziler, haritalar, setler, dize gibi iterable (döngülenebilir) nesnelerin elemanlarını üzerinde gezinmek için kullanılır
// Dizileri iterate ederken for of döngüsü kullanılır.

// Okunaklı kod yazmak gerek
// for(let i=0;i<=10;i++){console.log(i)} ---->Okunaklı Kod Değildir. 


// Her zaman objeleri const ile oluşturmak tavsiye edilir.


// Fazla if-elseif-else oluşturmak yerine ternary operatörü kullanılabilir.
let isRaining = true
const rainStatus = isRaining ? 'Yağıyor' : 'Yağmıyor' //Değişkene değer atanırken kullanıyormuş tayfun erbilen


// sınıflar isimlendirilirken camelCase yerine bütün kelimelerin baş harfi büyük yazılır.




// ENES BAYRAM'DAN ALINAN KISIM
// Template Literals --->ALT GR + İKİ KEZ NOKTALI VİRGÜL


// Normalde
function write(fn, ln) {
    console.log("isim:" + fn + "soyisim:" + ln)
}
write('Enes', 'Bayram')


// Template Literals Kullanarak
function yazdir(fn, ln) {
    console.log(`İsim:${fn} Soyisim:${ln}`)
}
yazdir('Enes', 'Bayram')

// Alt alta yazmak istersek de algılar
// function yazdir(fn, ln) {
//     console.log(
//         `
//           İsim:${fn} 
//           Soyisim:${ln}
//         `
//     )
// }
// yazdir('Enes', 'Bayram')



// TODO::Genelde Asenkron Programlama da sık sık kullanılır.

function getUserById(userID){
    fetch("http://localhost:8080/users/5")
}
getUserById(8)



// Burada 5 yazılan yere kullanıcı ID gelecek fakat bu ID sürekli olarak statik olarak 5 i alır . biz dinamiklik sağlamak istiyoruz
// Eski yöntemle 5 yerine +userID yazarız. FAkat parametre sayısı artınca + 'lar karışır

// Template Literals Kullanır isek
function getUserById(userID){
    fetch(`http://localhost:8080/users/${userId}`)
}
getUserById(10)

