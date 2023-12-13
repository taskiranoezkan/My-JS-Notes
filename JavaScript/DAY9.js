//HİGHER-ORDER FUNCTİONS--->Daha yüksek mertebe fonksiyonlar

//Yüksek mertebe fonksiyonlar parametre olarak başka bir fonksiyonu alan ve/veya sonuç olarak başka bir fonksiyonu dönen fonksiyonlardır
//Parametre olarak geçilen fonksiyonlara callback denir


//CALLBACK
const callback = number => number**2

function cube(callback,number){
    return callback(number)*number
}

console.log(cube(callback,3))




//High-Order fonksiyonları geriye de değer olarak fonksiyon döndürebilir
//RETURNİNG FUNCTİON
const a = s1 =>{
    const b = s2 =>{
        const c = s3 =>{
            return s1+s2+s3
        }
        return c
    }
    return b
}
console.log(a(5)(10)(20))//a fonksiyonuna 5 değerini ata ve a fonksiyonunun içindeki b fonksiyonuna 10 değerini ata ve  a fonksiyonunun içindeki c fonksiyonuna 20 değerini ata ve bu değerleri topla link::https://www.youtube.com/watch?v=2XbR9ENE7BA&t=316s
//javascript frameworklerinde kullanılactır


//For each metodu callback fonksiyonu alır
//Dizideki her bir elemanı iterate etmemye yarar
// forEach metodu callback alabildiğinden dolayı high order fonsksiyondur CALLBACK ALAN FONKSİYONLAR HİGH ORDER'DIR


//Bir örnek daha
function call(t,k){
    function all(m,n){
        console.log(t+k+m+n)
    }
   all(5,3)//console.log(akp(5,5))//return akp
}
call(700,4)
//NOT::return fonksiyonu ise ve parametre verilmemiş ise fonksiyon çağırılırken chp(4,4)(4,4) şeklinde çağırılmalı aksi takdirde return yerine parametreli fonksiyon yazılmalı ve değer verilmeli akp(5,5) gibi







const numbers=[1,3,5,7,9,11]
let total=0
numbers.forEach(number =>total += number)
console.log(total)
//forEach parametre olarak bir fonksiyon alıyor bu fonksiyon normal olarak da yazılabilir o yüzden forEach fonksiyonu High-Order fonksiyonudur
//forEach(function(number){total += number}) şeklinde de olabilirdi
/*BU ŞEKİLDE DE OLABİLİR
let calculate = number =>total += number
numbers.forEach(calculate)
*/




//SETTİNG TİME - ZAMAN AYARLAMA
//JavaScript'te bazı olayları belli bir zaman aralığında çalıştırabildiğimiz gibi belli bir zamanda çalışacak şekilde de planlayabiliyoruz
/**
 setInterval::Belli aralıklarla çalışacak olan fonksiyonumuz bir kod bloğunu her 5 saniyede çalışacak şekilde ayarlayabiliriz örnek olarak
 setTimeOut::Tek seferlik çalışacak olan fonksiyonumuz bir kod bloğunu şuandan 10 saniye sonra çalışacak şekilde ayarlayabiliriz örnek olarak
 */

//syntax setInterval
function say(){
    console.log('Set Interval Çalışıyor')
}
//setInterval(say,1000)



//syntax setTimeOut
function soyle(){
    console.log('Set Time Out Çalıştı')
}
setTimeout(soyle,5000) //setTimeout(soyle(),1000) şeklinde de olmalı 



//NOT::setInterval'i iptal etmek için clearInterval
//NOT::setTimeOut'U iptal etmek için clearTimeOut

//CLEARINTERVAL ÖRNEK
function zaman(){
    console.log('zaman geçiyor')
}


const interval=setInterval(zaman,1000)


setTimeout(function(){
    clearInterval(interval)
    console.log('zaman durdu')
},5000)



//CLEARSETTİMEOUT ÖRNEK
const timeout=setTimeout(function(){
    clearInterval(interval)
    console.log('zaman durdu')
},5000)

setTimeout(()=>{
    clearTimeout(timeout)
    console.log('timeout işlemi iptal edildi')
},3000)



//FONKSİYONEL PROGRAMLAMA
//JavaScript'in son versiyonunda bize tanıtılan yerleşik metodlar vardır bunlar bizim karmaşık problemlerimizi çözmeye yarar
//Tüm yerleşik metodlar callback alır yani parametre olarak bir fonksiyon alır
//forEach,map,filter,reduce,find,every,some ve sort bunlardan bazılarıdır




//FOREACH::Her bir dizi elemanını iterate etmek için kullanılır
//forEach(element,index,arr) :: iterate edilen eleman,indexi ve dizinin tamamı

let dizi=[5,4,3,2,1]
let toplam=0
let hesap=function(sayi,index){
    toplam +=(sayi+index)
    return toplam
}
dizi.forEach(hesap)
console.log(toplam)
//Bu şeklide de olurmuş
/*
let dizi=[5,4,3,2,1]
let toplam=0
dizi.forEach(function(sayi){
    toplam+=sayi
    return toplam
})
console.log(toplam)
*/
let toal=0
let dede=[0,1,2,3,4,5,6,7,8,9]
dede.forEach((num,index)=>{
   toal+=(num+index)
})
console.log(toal)


// forEach döngüsü senkron bir döngü olduğu için setTimeout içindeki işlevin çalışması beklenmeden hemen gerçekleşecektir. Bu durumda 10 saniye (10000 milisaniye) bekleme süresi göz ardı edilecek ve toplama işlemleri hemen gerçekleştirilecektir.
// Eğer belirli bir süre sonra toplam sonuçları adım adım konsola yazdırmak istiyorsanız, setTimeout içinde forEach döngüsünü kullanmamalısınız.
setTimeout(dede.forEach((num,index)=>{
    toal+=(num+index)
    console.log(toal)
}),10000)



//MAP::Dizinin her bir elemanı için;parametre olarak verilen (callback) fonksiyonu cağırır ve fonksiyonda belirtilen işlemlere göre yeni bir dizi(array) oluşturur.
//Map-->Son dizi bükücü, dizi elemanlarını modifiye etmeye yarar
 
const numbers2=numbers.map(number=>number*2)
console.log(numbers2)



//FİLTER::Belli kriterlere göre filtreleme yapar
const numbers3=numbers.filter(number=>number>3 && number<9)
console.log(numbers3)




//REDUCE::Dizimi tek bir değere dönüştürmek için kullanılır
//Örneğin bir sayı dizisinin toplamını hesaplamak için kullanılır
//Callback fonksiyonu akümülatör alıyor paramtere olarak,current şimdiki değeri alır ve opisyon olarak varsayılan değeri alır ve de geriye tek değer döndürür
//Başlangıç değeri vermek iyi olur yoksa eğer ki dizi boş ise hata alırız

const numbers4=numbers.reduce((oldvalue,currentValue)=>oldvalue+currentValue,0)
console.log(numbers4)




//EVERY::Dizideki tüm öğelerin belirtilen koşula uygun olup olmadığını test eder. Testi geçemeyen ilk öğede metod geriye false döndürür ve işlemi durdurur. Eğer tüm öğeler testi geçerse geriye true döner.
let user=[
    {
        id:1,
        name:'özkan',
        surname:'taşkıran',
        age:23,
        gender:1
    },
    {
        id:2,
        name:'özcan',
        surname:'taşkıran',
        age:25,
        gender:1
    },
    {
        id:3,
        name:'Mustafa',
        surname:'göktürk',
        age:18,
        gender:1
    },
    {
        id:4,
        name:'gizem',
        surname:'bulut',
        age:22,
        gender:2
    },
    {
        id:5,
        name:'Melehat',
        surname:'Kaya',
        age:19,
        gender:2
    }
]

const evry=user.every(user=>user.gender===1)
console.log(evry)




//SOME::Every ile aynı mantıkta çalışır fakat tek bir tanesinde aradığımız koşul geçerli ise bile true döner
const som=user.some(user=>user.gender===1)
console.log(som)



 


//FİND::Koşula uyan ilk elemanı döner
const number5=numbers.find(number=>number>=3)
console.log(number5)
//NOT::Bazen istediğmiz koşula uyan elemanın hangi indekste olduğunu öğrenmek isteriz bu durumda findIndex kullanılır









//SORT::Karşılaştırmak üzere iki değeri karşılaştırma fonksiyonuna gönderir ve karşılaştırma sonucunda negatif, sıfır ve pozitif değerine göre sıralama yapar
//Büyükten küçüğe ya da küçükten büyüğe sıralama yapmak için kullanılır
//Varsayılan olarak sıralayacağı elemanları string'e çevirir bu da tabi stringlerde işe yararken sayılarda işe yaramaz
//Eğer sayıları sırlamaya çalışırsak sadece sort koyarak hata alırız
//Bu metod orijinal array'i de değiştirir ona göre dizimizi sort yapmadan önce kopyalamak tavsiye edilir

const names=['Ahmet','Berat','Ali','Akın','Cem','Bekir']
names.sort()
console.log(names)


// const numaralar=[5,8,6,21,1,2,6,7,9]
// numaralar.sort().
//! console.log()//Hatalı sıralama 21 sırası yanlış sebep stringe çevirdiği için



//!Küçükten büyüğe
// numaralar.sort(function(a,b){
//     return a-b
// })
// console.log(numaralar)




// !Büyükten küçüğe
// numaralar.sort(function(a,b){
//     return b-a
// })
// console.log(numaralar)






let users=[
    {
        id:2,
        name:'özkan',
        surname:'taşkıran',
        age:23,
        gender:1
    },
    {
        id:1,
        name:'özcan',
        surname:'taşkıran',
        age:25,
        gender:1
    },
    {
        id:5,
        name:'Mustafa',
        surname:'göktürk',
        age:18,
        gender:1
    },
    {
        id:4,
        name:'gizem',
        surname:'bulut',
        age:22,
        gender:2
    },
    {
        id:3,
        name:'Melehat',
        surname:'Kaya',
        age:19,
        gender:2
    }
]


//!Gene sıralama mantığı ama önemlis
//! Burası bence çok önemlidir
users.sort((a,b)=>a.id-b.id)
console.log(users)















































