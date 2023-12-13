//DAY--7
//FONKSİYONLAR
/*FONKSİYON TANIMLAMA---->function functionName(){}*/
/*FONKSİYON ÇAĞIRMA---->functionName() */
//fonksiyonAdı.length ile fonksiyonun parametre sayısını öğreenebilirizi
//Call ve bind nedir bakılmalı,




// NOT::Bir fonksiyon parametre alırsa argümanları ile çağırılır
// NOT::Verileri depolamak için fonksiyon belirli bir veri türü döndürür.İnteger, dizi, fonksiyon bile döndürebilri
// NOT::Call fonksiyonu doğrudan çağırıken invoke olarak çağırmak dolaylı yoldan çağırmak anlamına gelir 
// NOT::Fonksiyon bir kaç farklı şekilde tanımlanabilir. Declaration function, Expression function, Anonymous Function, Arrow function
// NOT::Bir fonksiyon mantık olarak geriye bir şey döndürür yani parametre alır
// NOT::Bir fonksiyon geriye bir değer döndürmez ise aslında o fonksiyon undefined döndürür
// NOT::Bir fonksiyon bir değer döndürüyorsa onu bir değişkene atayabiliriz


//Görevi 10 kez hello demek olan fonksiyon
let degisken='MERHABA'
function SayHello(){
    let degisken='Merhaba'
    for(let i=0;i<10;i++){
        console.log('Hello')//Console.log(degisken) de aynı isi yapar ama Merhaba yazar KAPSAM OLAYI let ile ilgili denilebilir
    }
    // return 'merhaba'
}
SayHello() //Fonksiyon burada çağrıldı ama console da görünen kısım console.log('Hello') olan kısım olur o da 21.satır gösteriyor şuanda NEREDE ÇAĞIRISAK ÇAĞIRALIM YAPACAĞI İŞ SATIRINI GÖSTERİR
console.log(degisken)//iki farklı yerde nasıl değişken tanımlandı sorusunun cevabı fonksiyonu kapsamı ile ilgilidir

//fonksiyonlar geriye değer döndürürler ama zorunda değiller tıpkı parametre alıp almaması gibi
//geriye bir şey döndürmeyen fonksiyon undefined değer döndürür
let hello=SayHello()
console.log(hello)//undefined döndürecek varsayılan olarak BU ARADA DEĞİŞKENE ATAMA YAPILAN FONKSİYON İÇİN PARENTEZ KULLANMAK GEREKMEZ AMA ÇAĞIRIRKEN GEREKİR DEĞİŞKEN YAZDIRMA GİBİ
// Eğer fonksiyon return edeceek değeri varsa değişkene atanan fonksiyon o değer olacaktır
//fonskiyonlar parametre de alabilirler
function fonksiyon(a,b){
    return a*b
}
let total=fonksiyon(8,7)
console.log(total)
/////////////////////////////////////////////////////////
function fonksiyon1(k,l){
    let sonuc=k*l
    return sonuc
}
let tot = fonksiyon1(8,8)
console.log(tot,fonksiyon1(8,8)) //RETURN ETMESİ DEĞERİ CONSOLA YAZDIRINCA BELLİ OLUYOR
////////////////////////////////////////////////////////////
function fonksiyon2(m,n){
    let sonu=m*n
    return sonu
}
let param=8,
    param1=9
let tota = fonksiyon1(param,param1)
console.log(tota)
//NOT::Fonksiyonlar birden fazla parametre alabilirler



/*Bir Array'in elemanlarını toplayan fonksiyon */
function toplaArray(array){
    let totall=0
    for(let i=0; i<array.length; i++){
        totall += array[i]
    }
    return totall
}

let dizi =[1,2,3,4,5,6,7,8,9]
console.log(`Toplam:`,toplaArray(dizi))
console.log(`Toplam:`,toplaArray([1,2,3,4,5]))



//Normal Fonksiyonda sınırsız parametre göndermek
//parametre sayısı bılınmiyorsa bu kullanılabilir
//normal fonksiyonlarda geçerli bir durum arrow fonksiyonlarında geçersiz oluyor zaten ihtiyaç da yokmuş


//JavaScript'de arguments, bir fonksiyona geçilen argümanların bir koleksiyonunu temsil eden özel bir nesnedir.
//arguments nesnesi, fonksiyon içinde argümanlara erişim sağlar, bu sayede fonksiyonu çağıran yerdeki argümanları işleyebilirsiniz.
//arguments nesnesi, bir diziyi andıran bir yapısı olan, ancak gerçek bir dizi olmayan bir nesnedir.
// Bu nedenle, dizi üzerinde kullanılan bazı yöntemlere (push, pop, slice vb.) doğrudan erişilemez.
// Bununla birlikte, arguments.length özelliğiyle argüman sayısına erişebilir ve arguments[index] şeklinde belirli bir argümana erişebilirsiniz.



/* function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

Burada verdiğimiz her parametre arguments objesinde depolanıyor 
console.log(sum(1, 2, 3));  // Çıktı: 6
console.log(sum(4, 5, 6, 7));  // Çıktı: 22
*/

function showAllNums(){
    console.log(arguments)
}
      
showAllNums(1,2,3,4,5,6,7,8,9)
//parametre olrak verdiğimiz değerler sihirli bir arguments adlı  objede saklanıyor obje dediğimize bakma çünkü js de her şey bir objedir
function topla(){
    let son=0
    for(let g=0; g<arguments.length; g++){
        son += arguments[g]
    }
    return son
};
console.log(topla(10,20,30,40,50))

//Anonim fonksiyonlar buraya da bakılmalı
//Bir değişkene atanmış bir fonksiyon değeridir
const sayHi=function(name){
    return `Hi ${name}`
};
console.log(sayHi('Özkan'))

//NOT::Değişkene atanan fonksiyon çağırılırken parantez  kullanılmalıdır

//NOT::Fonksiyon ifadesi ve anonim fonksiyon arasındaki temel fark, adlandırma durumudur

//NOT::Expressions functionlara da bakılmalı nedir nasıl kullanılırlar
//Bu da anonim fonksiyondur
//Tek fark geriye bir şey döndürüyorsa


//Kendi kendini çağıran fonksiyonlar buraya da bakılmalı
;(function(){
    console.log('hey goerge')
})()

let sayHmm=(function(isim){
    console.log(`hmm ${isim}`)
})('Kemal')



// Arrow Fonksyonlara bakmak lazım nedir niçin kullanılır,
//Arrow fonksiyon bir değişkene aktarılması gerekiyor
//Teknik olarak anonim fonksiyon

//normal fonksiyonlarda
function merhaba(nav){
    return `hello ${nav}`
}
//Arrow yani ok fonksiyonlarda
const mrb = (nav) => {
    return `hello ${nav}`
}




//eğer tek bir parametre alıyorsa parantez kullanımına gerek yok
const mrb1 = nav =>{
    return `hello ${nav}`
}




//eğer tek değil  tekten fazla parametre alıyorsa 
const mrb2 = (nav,surname) =>{
    return `hello ${nav} ${surname}`
}
console.log(mrb2('Metin','Tekin'))


//Eğer tek satırda bir return işlemi varsa 
const mrb3 = nav => `hello ${nav}`
console.log(mrb3('Metin'))





//Arrow fonksiyonlarda arguments yok onun yerine rest operatörü kullanılır
const toplama=(...numbers)=>{
    console.log(numbers)
}
toplama(2,5,7,8,9,11)
/*
const toplama=(num1, ...numbers)=>{
    console.log(numbers)
}
toplama(2,5,7,8,9,11)
Böyle bir durumda 2 sayısı num1 değişkenine atanır geri kalan sayılar numbersa atanır
*/



//NOT::REST OPERATÖRÜ NORMAL FONKSİYONDA DA VAR
function restNormalFonksiyon(num0,...numberr) {
    console.log(num0)
    console.log(`"""""""""""""""""""""""""""""""""`)
    for (let j = 0; j < numberr.length; j++) {
        console.log(numberr[j])
    }
}
console.log(restNormalFonksiyon(1,2,3,4,5,6,7,8,9))

//varsayılan parametreler ile fonksiyon başlatma 
function multiply(num1,num2=2){
    return num1*num2
}
console.log(multiply(10))
console.log(multiply(15,8))






//call vs invoke
function test(){
    console.log('Test fonksiyonu çalıştı')
}
test()

function invoker(func){
    func()
}
invoker(test)





//call ve invoke ikiside çağırma fonksiyonlarıdır.
//call doğrudan çağırmak oluyor invoke dolaylı cağırmak
//call-->isim() şeklindedir

//execute = uygulamak
//fonksiyonun isteddiğimiz işi yapmasını istiyosak çağırmamız lazımdır
//bir fonksiyon parametre alır ve geriye bir şey döndürür bu fonksiyonun temel amacı budur diyebiliriz
//fonksiyonun kapsamı içinde süslü parantezler ile çevirilmiş alanda let ile tanımlanan özelliklere dışarıdan erişmek mümkün değildir buna fonksiyon kapsamı denir
//fonksiyonlar geriye bir şey return etmediği zaman varsayılan olarak undefined döndürür bunu anlamak için fonksiyonu bir değişkene aktarırsak ve console'a basarsak undefined döner



//NOT::KENDİME HATIRLATMA 
/*

function merhaba(isim,sayi){
    for(let i=0;i<sayi;i++){
        console.log(`Merhaba ${isim}`)
    }
    return `Merhaba ${isim} dedim ${sayi} kere `
}
merhaba('özkan',5)
const a=merhaba('Özcan',4)//değer döndüren fonksiyon bir değişkene atanabilir bunun farklı bir yazımı daha var return ettiği şey için console.log(merhaba('Gökan',3)) şeklinde de yazılabilir bu bize return değerini de getirecektir
console.log(a)

console.log(merhaba('Sevkan',5))//hem fonksiyon çalışıyor hemde return ettiği değer de yazılıyor ilginç bir şey değişken tanımlyarak ulaşmakla aynı şey gibi 8.satırda yapılan gibi

*/





//! ÇOK HOŞ BİR ŞEKİLDE YAPILMIŞ BİR FONKSİYON

// Faktöriyel hesaplayan özyinelemeli fonksiyon
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  console.log(factorial(5)); // Sonuç: 120




  //!ENES BAYRAM'dan alınan kısım

// EcmaScript ve Javascript kessinlikle aynı şey değil. EcmaScript bir standart
// Bütün tarayıcılarda çalışması için standartlık sunar.
// ES6 ile çok önemli gelişmeler yaşandı. Bunlardan en göze çarpanı Callback Hell kavramını sonlandıran PROMİSE'lar oldu.



// ARROW FUNCTİONS

// Normal fonksiyon
function yazdir(){
    console.log('Normal fonksiyon')
}
yazdir() //Çağrılması



// Arrow fonksiyon
const yazdirr = ()=>{
    console.log('Arrow fonksiyon')
}
yazdirr() //Çağrılması



// Parametreli arrow fonksiyon
const parametreli = (param)=>{
    console.log('Merhaba',param)
}
parametreli('Parametre') //Çağrılması


// Tek parametreli bir arrow fonksiyon  olunca parantez kullanmayabilriz
const tekParametreli = tekParam=>{
    console.log(tekParam)
}


// Tek satırda bir işlem gerçekleştireceksek
const tekSatirdaİslem = ()=> console.log('tek satırda işlem')


//TODO: Arrow fonksiyonlar genelde callback fonksiyonlarda kullanılır

//ÖRNEK
 const kupAl = sayi =>{ 
    return sayi*sayi*sayi 
}

console.log(kupAl(9))

// Bu örnekte return ve kıvırcık parantezler kaldırılabilir

// Normalde
document.addEventListener('click', function(){

})

// Arrow Fonksiyonlarda
document.addEventListener('click', ()=>{

})
 