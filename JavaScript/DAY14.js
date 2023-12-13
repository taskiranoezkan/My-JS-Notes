// Error Handling--->Hata Yönetimi
// Javascript de bir değişkenin depoladığı değerin tipinin ne olduğunu belirtemiyoruz
// Javascript kullanıma bağlı olarak bunu anlar ama belirtmesini biz yapamıyoruz


// Javascript de tıpkı python ve javadaki gibi run time da oluşan hataları yakalamak için try-catch finally block mekanizması vardır


try {
    // Hata vermesini beklediğmiz kodu buraya yazarız hata olmasa çalışmaya devam eder bu arada
} catch (error) { // Buradaki error da hatanın içeriğini depolar
    // Hata oluşursa ne yapacağımızı da buraya yazarız
}
finally{
    // Her iki ihtimalde de çalışacak kod buraya yazılır. Hatanın olup olmamasına bakılmaksızın buraya çalışacak kodlar yazılır
}

//TRY::Hata verecek şüpheli kodlar buraya. Yürütme esnasında hata alabileceğimiz kodları test etmemizi sağlar
// CATCH::Bir hata meydana geldiğinde kod yazmamızı sağlayan blok nurasıdır
// Catch bloğu paramtere içerebilir
// Hata mesajını loglamak ya da kullanıcıyı bilgilendirmek için kullanılır error kısmı
// FİNALLY::Hata olup olmamasına bakılmaksızın yürütülecek kodları bu kısıma yazarız




// let firstName='Özkan'
// let lastName='Taşkıran'
// let fullName=firstName + " " + surname
// Referans Error alırız bu kısımda



let fullName
try {
    let firstName='Özkan'
    let lastName='Taşkıran'
    fullName=firstName + " " + surname
} catch (error) {
    console.log(error.name)
    console.table(error)
}
// Kapsam olayı burada da geçerli
console.log(fullName) 

// NOT::Özür dilerim, yanlış bir bilgi verdim. console.log ve console.table'ı ayrı ayrı kullanırsanız, hata nesnesini tablo formatında konsola çıkaramazsınız. 
//console.log kullanımında daha basit bir hata mesajı görüntülenirken, console.table kullanımında hatanın ayrıntıları tablo formatında görüntülenir.
// Bu nedenle, hata nesnesini tablo formatında görmek için console.table'ı kullanmanız gerekmektedir.


// Syntax Error tüm proje kodalrının durmasına yol açar ona göre

// THROW::FIRLATMAK ANLAMINA GELİR .HATA FIRLATMAK İÇİN KULLANILIR KULLANUCIYA



let fullName1
try {
    let firstName='Özkan'
    let lastName='Taşkıran'
    fullName1=firstName + " " + lastName
    throw 'Öylesine bir hata'
} catch (error) {
    console.log(error.name)
    console.table(error)
}




// Error sınıfını başlatıp hata fırlatabiliriz nasıl mı 
let fullName2
try {
    let firstName='Özkan'
    let lastName='Taşkıran'
    fullName2=firstName + " " + lastName
    throw new Error('Qardaş Hatan var')
} catch (error) {
    console.log(error.name)
    console.table(error)
}



let yas=prompt('Kaç Yaşındasın')
try {
    if (yas>24) {
        throw new Error('Bu kadar yaşlanmış olamazsın')
    }
} catch (error) {
    alert('Yaşlanmışsın beee')
    console.log(error.message)
}

// Hata Türleri
// ReferenceError::Hatalı bir referans işlemi varsa lastName diye bir değişken yokken kullanmak gibi

// SyntaxError::Yazım dili ile alakalı bir durum * yerine X kullanmak çarpma işlemi için... Geri kalan kodlar da çalışmaz syntaxError da

// TypeError::Değiş tuttuğu tiple değişken ile uygulamaya çalıştığımız işlem uyuşmuyorsa alınan hatadır