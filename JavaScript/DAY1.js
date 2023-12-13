//DAY---1
//NOT::Bazen Javascript noktalı virgül kullanımı gerektirmez bazen de kullanılmaması hata verir

//JAVASCRİPT  PROJEYE 3 FARKLI ŞEKİLDE İNLİNE İNTERNAL VE EXTERNAL OLMAK ÜZERE FARKLI ŞEKİLDE PROJEYE DAHİL EDİLİR
//genelde head önce okunur javascripte fark etmez ama css için

console.log("Hello World!", "Merhaba Dünya")
console.log('')
console.log("")
console.log(`buranın içine değişken yazılabilir ${navigator} şeklinde  Değişken kullanılacağı zaman bu şekilde kullanılır`)

//Matematiksel işlemler de kullanılabilir
console.log(5 * 5)

//İLKEL VERİ TÜRLERİ
// number,strings , boolean, undefined, null, symbol float number da olabilir
// bir değişkene değer ataması yapılmamışsa undefined olur
// ve de herhangi bir değer döndürmeyen fonksiyon undefined döner
// null boş değer anlamındadır

// Veri Türlerini Kontrol Etmek için typeof Kullanılır
//VERİ TÜRLERİ
console.log(typeof 'prototurk')
console.log(typeof 8)
console.log(typeof true)
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof 5.4)

/*Çoklu Yorum*/
//tekli Yorum

//DEĞİŞKENLER
//Var,let ya da const ile anahtar kelimeleri kullanılarak değişken tanımlaması yapılır
//Değişebilen değerler let ile
//Sabit değişken için const 
//var pek kullanılmıyor artık fonksiyonların kapsam durumlarında kullanılabilir

//Değişken adlandırma genelde camelCase kullanılır
//first-name, 1_num, num_#_1 GEÇERSİZ olanlar $ veya _ başa gelebilir
let Name = "Necmi";
console.log(Name);
const pi = 3.14;
console.log(pi)  //pi=5.14
let a = 5, b = 6, c = 7
console.log(a + b + c) //18

let isim = 'özkan', //Tek let ile isimlendirme yapılabilir
    yas = '22',
    dtarih = '30.12.1999',
    isMarried = false;

console.log(isim, yas, dtarih)



//Değişkene sonradan atama yapıldığı için değeri değişmiş olacaktır. Yani değer güncellenmiş olacaktır
let ad = 'Özkan'
console.log(ad)
ad = 'Mahmut'
console.log(ad)








//!BETTER COMMENTS EKLENTİSİ İLE YAPILIYOR BUNLAR
 //TODO:
 //!
 //?
 //* 
 ////--->Üstü çizili yapar


