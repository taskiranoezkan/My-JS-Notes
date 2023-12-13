//fonksiyon tanımlama
/*function isim(değişke1,değişken2...){} */

let sayi = window.prompt('Bir sayı giriniz:')
function isim() {
    if(sayi%2==0){
        console.log('Sayı Çifttir')
    }
    else{
        console.log('Sayı Tektir')
    }
    return sayi
}
let egs=isim()//Return olmasaydı undefined dönerdi
console.log(isim())
console.log(egs)


function sayH(){
    let ms='Hello World!'//local scope olduğundan kod blog içinde erişmek mümkündür
    console.log(ms)
    console.log(sayi)//global scope olduğundan erişilebilirdir
}
sayH()

//return olmayan fonksiyon varsaıylan olarak undefined döner
let undefnd=sayH()
console.log(undefnd)





//güzel örnek oldu 
function ismsoyle(namee){
    return namee
}
console.log(ismsoyle('Cem'))

let rtrn=ismsoyle('Faik')//niye çalışmadı acep ::açıklaması fonksiyon bir değer döndürüyor fakat bu değerin console'a aktarılması için ya değişkene ya da değer almış fonksiyonun ismi ile birlikte console'a aktarılması gerek that so bu ve ustteki aynı işi yapyor diyebiliriz
//fonskiyon bir değer döndürüyor ise bunu bir değişkene akatararabilirz
console.log(rtrn)





let array=[4,7,11,34,76,31,80]

function arrayTopla(dizi){
    let top=0
    for(let i=0;i<dizi.length;i++){
        top += dizi[i]
    }
    return top
}
console.log(arrayTopla(array))
//Buranın bir tık yukarısı ve aşağısı aynı işi yapıyor
let dizitoplam=arrayTopla(array)
console.log(dizitoplam)


//DİKKAT ETMEK GEREKİR Kİ NORMAL FONKSİYON DEDİK ÇÜNKÜ ARROW FONKSİYONLARDA ARGUMENTS YOK GEREK DE YOK REST OPERATÖRÜ MEVCUT
//Normal Fonksiyonda Sayısı belli olmayan parametre göndermek
//arguments adı verilen bir sihirli değişken ile sağlanır

function toplamak(){
    let toplamakk=0
    for(let q=0;q<arguments.length;q++){
        toplamakk += arguments[q]
    }
    return toplamakk
}
console.log('Toplam:',toplamak(4,5,1,6,4,10))
let son=toplamak(7,4,5,6,1,10)
console.log(son)

//Anonymous Function
//Eğer ki bir fonksiyon bir değişkene atanmış ise o fonksiyon anonymous(isimsiz) fonksiyon olarak tanımlanır:Fonksiyon değişmeyeceği için const ile tanımlanmış
const fonk = function(iisim){
     return `Merhaba ${iisim}`
}
console.log(fonk('Sevkan'))


//Expressions Functions
//Expressions fonksiyonlarda Anonymous fonksiyonlardır. 


//Self İnvoking Functions
//Kendi kendini çağıran fonksiyon bir değer döndürmek için çağrılmak zorunda olmayan fonksiyonlardır
;(function(){//Buradaki noktalı virgül olmasa hata veriyor
    console.log('Merhabalar')
})()//Çağırma işlevi burada yapılıyor 


//Bu fonksiyonun değişkene aktarılması
let helloDeBakim = (function(navv){
    console.log(`Merhabalar ${navv}`)
})('Özcan')




//ARROW FUNCTİONS
//Arrow fonksiyon, fonksiyon yazmanın bir türüdür fakat belli başlı farkları vardır,bu farklardan en belirgin olanı ok kullanılmasıdır


//Normal Fonksiyon
function merhaba(){    
}
//ARROW Fonksiyon
const merhaba1 = () => {//tek paramtere ise () yazılmasa da olur
}



const merhaba2 = namm => {//Tek bir parametre olunca parantez omasa da olur
    return `hello ${namm}`
}
console.log(merhaba2('Musa'))





const merhaba3 = naamm => `hello ${naamm}`//Tek satırda bir return işlemi varsa bu şekilde de yazılabilir
console.log(merhaba3('Ahmet'))


//Arrow Fonksiyonlarda arguments diye bir şey yok onun yerine rest operatörü vardır 
const toplama = (...sayilar) =>{
    console.log(sayilar)
}
toplama(5,8,75,99,668,6)



//Değişken ve rest operatörü kullanılırsa nasıl olacak
const toplama3 = (değisken1,...sayilar) =>{
    console.log(sayilar)
    console.log(değisken1)
}
toplama3(5,8,75,99,668,6)




//Örnek
const toplama1 = (...sayilar) =>{
    let sonuc=0
    for(let k=0;k<sayilar.length ; k++){
        sonuc += sayilar[k]
    }
    return sonuc
}
console.log(toplama1(5,8,75,99,668,6))


//NOT::REST OPERATÖRÜ NORMAL FONKSİYONLARDA DA VAR ARROW FONKSİYONUNA ÖZEL BİR ŞEY DEĞİL




//Varsayılan değerlerle fonskiyon başlatma
function multiply(num1,num2=2){//eğer diyor ikinci değer yoksa otomatik olarak 2 ile çarpsın
    return num1*num2
}
console.log(multiply(5,10))
console.log(multiply(8))




// Fonksiyon Call vs Invoke
function test(){
    console.log(`Test Fonksiyonu Çalıştı`)
}
//Çağırmak
test()

/*********************************************************** */

function Invoke(func){
    func()
}
//Çağırmak
Invoke(test)




//ÖRNEK REST YOKSA
function isimsiz(sayilarr){
    sayilarr.forEach(element => {
      console.log(element)  
    });
}
isimsiz([4,7,8,8,7])

//ÖRNEK REST VARSA
function isimli(...sayicik){
    sayicik.forEach(elemem=>{
        console.log(elemem)
    })
}
isimli(7,8,9,4,5,6,11,13,15)




