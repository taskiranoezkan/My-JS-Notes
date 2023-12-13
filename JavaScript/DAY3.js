//DAY---3

//Booleans :: True ya da false olabilirler genelde karşılaştırma ifadelerinde kullanılır

let isLightOn=true
let isRaining=false
let trueValue=5>4 //true
let falseValue=5<4 //false

console.log(trueValue)

//True olan Değerler
/*
Tüm sayılar pozitif ve negatif olan sıfır hariç
Tüm stringler boş string hariç ""
Boolean kendisi de true
*/

//False olan değerler
/*
0
0n
null
undefined
NaN
False booleanlar
Boş stringler
*/

let name 
console.log(name)
//Değişken oluşturup değer atamazsak değer undefined olur
//Fonksiyon değer döndürmezse de undefined olur


//OPERATÖRLER
/* 
= Değer atama
+=, x+=y, x=x+y  aynı şeyler Toplama
-x, x-=y, x=x-y  Çıkarma
*= Bunlar için de geçerli
/=
%= Mod alma
**= Kare alma
*/


//KARŞILAŞTIRMA OPERATÖRLERİ
/*
== değer eşit mi
=== type olarak da eşit mi 
!= eşit değiil mi
!== veri türü ile birlikte eşit değil mi
<,>,>=,<= Büyüktür,küçüktür vs.
*/

//MANTIKSAL OPERATÖRLER
/*
&&--->ve
||--->ya da
!--->değil   !(4>3)
*/


//ARTIRMA-AZALTMA OPERATÖRÜ
let count=6
count++ , ++count
count-- , --count




//TERNARY OPERATÖRÜ
/*
Koşul yazmamızı sağlar,Tek satırda koşul yazmamızı sağlar
KOSUL ? TRUE ise Burası :DEĞİLSE burası
5<4 ? 'True yazılacak kısım' :'False olacak kısım'
*/

// 5<6 ? console.log('Doğrudur') : console.log('senin matematiğini seveyim')
// let isleme=prompt('Lütfen size vereceğimiz işlemin cevabını yazın','Bizce 20 olmalı  5*4')
// isleme==20 ? console.log('tebrikler') : console.log('senin mat bilgini seveecekler')
// console.log(isleme==20 ?'Helal lan amk':'senin amk')

//ÖNCELİK OPERATÖRÜ
/*
Öncelik çarpma bölme şeklinde ilerler,eğer ki biz işlem önceliğini başka trafa çekmek istersek parantez kullanıcaz
parantez kullanımıı olmalı eğer öncelik isteniyorsa
(5>4 && 6>5) && 8>7 gibi gibi
*/




//WİNDOW METODLARI
alert()//--->şeklinde kullanılır
//Uyarı kutusu çıkarır
//alert('mesajımız')


//WİNDOW PROMPT
prompt('Bir sayı gir','Default değer')
//prompt() kullanıcıdan input almak için


//WİNDOW CONFİRM
confirm('Emin Misin?')
//Onay kutusu
//confirm dersek ture cancel dersek false döner

let isDelete=confirm('Silmek isediğinize emin misin')
console.log(
isDelete ? 'Silme işlemi başarılı' : 'Silme işlemi iptal edildi'
)

//TARİH OBJELERİ
// getFullYear()//-->4 digit yıl
// getMonth()//-->0-11 Arası aylar ocak 0 olur
// getDate()//-->1-31 arası gün verir
// getHours()//-->Saat
// getMinutes()//-->Dakika
// getSeconds()//-->Saniye
// getMiliseconds()//-->Milisaniye
// getTime()//--> 1 ocak 1970'ten itibaren geçen zamanaı saniye olarak veriri
// getDay()//--> Haftanın günü 0-6 arası

//ZAMAN OBJESİ OLUŞTURMA
const datte = new Date() //-->obje başlatma, date türü non-primitive olduğundan karşılaştırma mümkün değil

//Bu ikisi aynı işi yapıyor yani obje başlatmadan kullanım milsaniye cinsinden hesaplma yapar 1970 li bir tarihten itibaren
console.log(datte.getTime()/31536000000 )
console.log(Date.now())







// NEW KEYWORDU NESNE YÖNELİK PROGRAMLAMA DA KULLANILIR

// DATE Kullanımı
// window.Date()

let tarihh = new Date();
console.log(tarihh) //tarihi yazdırıorız

//Get Metodları terihin içinden değerleri almak için kullanılır 

console.log(tarihh.getTime()) //1 ocak 1970'ten itibaren geçen zamanaı saniye olarak veriri
console.log(tarihh.getFullYear()) //4 karakter olarak yılı alır
console.log(tarihh.getDate()) //Ayın kaçıncı gününü alır
console.log(tarihh.getDay()) //Haftanın gününü alır
console.log(tarihh.getHours()) //Saati alır
console.log(tarihh.getMinutes()) //dakikayı alır
console.log(tarihh.getMonth()) //Ayı alır ama 0. index ocak olarak başlar
console.log(tarihh.getSeconds()) //Saniyeyi alır

console.log(tarihh.toLocaleDateString()) //11.08.2023 tarih formatında değer döner

console.log(tarihh.toLocaleTimeString()) //15:37:25 şeklinde saat dakika hesabında değer döner

console.log(tarihh.toLocaleString()) //11.08.2023 15:38:22 şeklinde değer döner tarih ve saat birleşmiş hali



//Set Metodları terihe yeni değerler atamak için kullanılır 

console.log(tarihh)
tarihh.setDate(13) //Ayın 13 une geldik
console.log(tarihh)


console.log(tarihh)
tarihh.setHours(18) //saati akşam 6 yaptık
console.log(tarihh)
 

console.log(tarihh)
tarihh.setMonth(11) //Aralık oldu
console.log(tarihh)


console.log(tarihh)
tarihh.setMinutes(55) //Dakikayı 55 yaptık
console.log(tarihh)



// BURASI KULLANIŞLI KESSİNLİKLE KULLANMAK LAZIM
//Güncel Tarihin Üzerinden 2 Saat ileriye gitmek
// DİNAMİK OLARAK DEĞER ATAMAK İÇİN KULLANILIR
console.log(tarihh)
tarihh.setHours(tarihh.getHours()+3)
console.log(tarihh)


// Tarihi stringe çevirmek
// Normalde Türü objedir 
tarihh.toString()


// Spesifik olarak tarih atayabiliriz obje olacak yin
// Hiç bir şey vermeseke güncel tarihi alır
let tarih = new Date(1999,11,30,17,51,33)
console.log(tarih)






//KENDİME HATIRLATMA
//Sayıları numaraları stringe çevirirken toString() kullanılır fakat sayınınn başında sıfır varsa farklı algılıyor
const numara=5316000212
console.log(numara.toString())
console.log(typeof numara)


//Hatırladığım kadarıyla prompt'dan bir veri alırken string olarak alıyordu onu dönüştürme işlemleri kullanaarak işlem yapabiliyorduk
let deger=prompt('Lütfen bir sayı gir:')
console.log(typeof deger) //String olmalı ama obje dönüyor
// Number ile dönüştürme işlemlerini yaparız
