// SINIFLAR
// Javascript nesne yönelimli bir programlama dilidir
// Javascript de her şey bir objedir yani nesnedir ve özellikleri,metodlarıyla birlikte
// Bir obje oluşturmak için sınıf oluşturulur
// Classlar objenin davranışını belirler ve ayrıca obje sınıfı temsil eder
// Sınıfı bir kere oluşturduğumuz da istediğmiz herhangi bir yerde objesini oluşturabiliyoruz
// sınıftan bir obje üreltildiğinde buna sınıf örneklemesi denir
// Sınıflar birden fazla objeyi olulturmamızı sağlar bu da bize kod tekrarını azaltmayı sağlar

// Defination a classes
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// Class Instantiation-->Sınıf Örnekleme
// Bir Sınıftan obje üretmek
const person = new Person()
console.log(person)


// Classın constructor metodunda bazı değerler geçebiliriz
// constructor bir yerleşik fonksiyondur her classta kullanılabilir
// Henuz başlarken özellikleri tanımlamamızı sağlar constructor

const kisi = new Person('Özkan', 'Taşkıran')
console.log(kisi)




// THİS DEDİĞMİZ ŞEY CLASS'I TEMSİL EDER
// METOD EKLENDİĞİNDE METODA ULAŞMAK İSTERSEK THİS.METOD_ADI İLE ULAŞACAZ
// AYNI ŞEKİLDE DEĞİŞKENLERE ULAŞMAK İSTEDİĞMİZDE DE AYNISI GEÇERLİ
class ev {
    constructor(adres, sahip, anahtar) {
        this.adres = adres
        this.sahip = sahip
        this.anahtar = anahtar
    }
}





// Normal obje tekti ama classlarda çokludur
// Bu ifade, normal objelerin tekil olduğunu, yani bir tane objeyi temsil ettiğini ve sınıfların ise birden çok objeyi temsil edebildiğini ifade ediyor.
//Normal bir obje, özellikleri ve metotlarıyla birlikte tek bir varlık veya örneği temsil eder. Örneğin, bir kişiyi temsil eden bir obje oluşturabilirsiniz.
// ÖRNEK
const mine = {
    ad: 'Özkan',
    soyad: 'Taşkıran',
    yas: 23,
    fullName: function getFullName() {
        return `${this.ad} ${this.soyad}`
    }
}
console.log(mine.fullName())
//--------------------------------------------------------
class Birisi {
    constructor(name, surname = 'Taşkıran') {
        this.name = name
        this.surname = surname
    }
}
//--------------------------------------------------
const biri = new Birisi('Özkan', 'Taşkıran')
console.log(biri)
//--------------------------------------------------
const baskBiri = new Birisi('Faik Cem', 'Güler')
console.log(baskBiri)
//-------------------------------------------------
//Eğer ki ikinic parametrre verilemzse yukarıda otomatik olarak Taşkıran alacak
const baskaBirisininBirisi = new Birisi('Gökhan')
console.log(baskaBirisininBirisi)
//-------------------------------------------------



//  Constructor yerleşik bir class fonksiyonudur
// Varsayılan değerlemeler ile class yapısından obje oluşturmak mümkündür




// Sınıflarda Method kullanımı örnek
class myClass {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    calculateArea() {
        return this.width * this.height
    }
}

const myObje = new myClass(5, 10)
console.log(myObje.calculateArea())
//Sınıflarda Method kullanımı örnek


// Başka bir örnek
class İnsan {
    constructor(ad, soyad, yas, ulke, sehir) {
        this.ad = ad
        this.soyad = soyad
        this.yas = yas
        this.ulke = 'Türkiye'
        this.sehir = sehir
    }
    konus(meslek) {
        // Eğer konus() metodu içerisinde this.meslek = meslek yerine sadece meslek = meslek şeklinde bir atama yaparsanız, meslek değişkeni yerel bir değişken olarak tanımlanır ve sınıfın diğer yöntemleri veya özellikleri tarafından erişilemez hale gelir.
        this.meslek = meslek
        return `Merhaba benim adım ${this.ad} ${this.soyad} ve${this.yas} yaşındayım ve de ${this.ulke}'in ${this.sehir} şehrinde yaşıyorum ve son olarak ${meslek}'yım`
    }
}
const insan1 = new İnsan('Özkan', 'Taşkıran', '23', 'Türkiye', 'Ankara')
const insan2 = new İnsan('Özcan', 'Taşkıran', '25', undefined, 'Ankara')
const insan3 = new İnsan('Gökan', 'Taşkıran', '21', 'Türkiye', 'Ankara')


console.log(insan1.konus('Developer'))
console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*')
console.log(insan2.konus('Tıbbi Labaratuvar'))
console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*')
console.log(insan3.konus('Öğrenci'))
console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*')
// Başka bir örnek




// Constructor da değilde bir method yardımıyla  değer vermek
// BU method sıradan olabileceği gibi yalnız değer atamak için olan setter ve değer almak için olan getter da olabilir
// BAşına get gelince getter set gelince setter olur
// Get nesneden değere ulaşmamızı sağalr
// Private değişkenlere ulaşmak için kullanılır genelde o zan getter kullanılır
class Evlat {
    constructor(ad, soyad, yas, ulke, sehir) {
        this.ad = ad
        this.soyad = soyad
        this.yas = yas
        this.ulke = 'Türkiye'
        this.sehir = sehir
        this.skills = []
    }

    set setSkills(skill) {
        this.skills.push(skill)
    }


    get getSkills() {
        return this.skills
    }

    appendSkill(skill) {
        this.skills.push(skill)
    }

}
const evlat = new Evlat('John', 'Jack', 23, undefined, 'Ankara')
console.log(evlat.getSkills) //get metodu ile tanımlanan fonksiyon parantezler ile çağrılmak zorunda değildir 




const evlat2 = new Evlat()
evlat2.setSkills = 'Javascript'
// evlat2.setSkills('Solidity') Bu şekilde kullanım set için geçerli değil ama farklı yol olarka bi alt satır
evlat2.appendSkill('HTML')
console.log(evlat2.getSkills)



// CLASSTA FONKSİYONLARIN BİRBİRLERİ İLE HABERLEŞMESİ
class Cocuk {
    constructor(ad, soyad, cinsiyet, kilo, boy) {
        this.ad = ad
        this.soyad = soyad
        this.cinsiyet = cinsiyet
        this.kilo = kilo
        this.boy = boy
    }
    getFullName() {
        return `${this.ad} ${this.soyad}`
    }

    getPersonalInfo() {
        return `${this.getFullName()} cinsiyeti ${this.cinsiyet} ${this.kilo} kilo ve ${this.boy} boyunda`
    }
}
const cocuk1 = new Cocuk('Oktay', 'Taşkıran', 'Erkek', '65', '160 cm')
console.log(cocuk1.getPersonalInfo())





// STATİC KEYWORD
// Static keywordu ile statik method oluşturuyoruz
// Statik metodları çalıştırmak için classı başlatmaya gerek yok
// static, JavaScript'te bir sınıfın özelliği veya metodu olarak tanımlanabilen bir anahtar kelimedir.
// static anahtar kelimesi, sınıfın örneği oluşturulmadan doğrudan sınıfın kendisi üzerinden erişilebilen öğeleri tanımlamak için kullanılır.
// static öğeler, her örneğin ayrı ayrı kopyasını almazlar, bu nedenle sınıfın tüm örnekleri tarafından paylaşılırlar.
// static öğelere sınıfın kendisi üzerinden erişilebilir. Sınıfın bir örneği oluşturmadan doğrudan sınıf adıyla erişebilirsiniz.
// Bu şekilde, static özelliklere ve metotlara sınıfın örneği oluşturmadan erişebilirsiniz. static öğeler, sınıf düzeyinde genel bir durumu takip etmek veya sınıfa özgü işlevleri gerçekleştirmek için kullanılabilir.

// İnheritance ::Miras almak
// Bir class oluşturuyoruz ve özellikleri başka classtan miras alırken kullanırız


class Teacher extends Person {
    // Bütün Person classına ait 
}
// Alt sınıf, miras aldığı özellikleri kullanabilir ve gerektiğinde bunları genişletebilir veya değiştirebilir. 
//Yani, alt sınıf, üst sınıfın sahip olduğu değişkenleri ve metodları kullanabilir ve yeni değişkenler ve metodlar ekleyebilir.


class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Student extends Human {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying...`);
    }
}

const student1 = new Student("John", 18, 12);
console.log(student1.name); // John
console.log(student1.age); // 18
console.log(student1.grade); // 12
student1.greet(); // Hello, my name is John
student1.study(); // John is studying...



// Yukarıdaki örnekte, Person sınıfı name ve age adında iki değişken ve greet adında bir metot tanımlar. Student sınıfı Person sınıfını miras alır ve bunlara ek olarak grade adında bir değişken ve study adında bir metot tanımlar.
// super() anahtar kelimesi kullanılarak Person sınıfının constructor'ı alt sınıfın constructor'ında çağrılır ve name ve age değerleri aktarılır.

//Sonuç olarak, Student sınıfı hem Person sınıfının özelliklerine hem de kendi özelliklerine sahip olur ve hem Person sınıfının metotlarını hem de kendi metotlarını kullanabilir.

//Miras, nesne tabanlı programlamada önemli bir kavramdır ve JavaScript'te de kullanılabilir. Miras yoluyla sınıflar arasında ilişki kurulabilir ve kodun tekrar kullanılabilirliği ve yapısal düzeni sağlanabilir.


// NOT::JavaScript'te, ECMAScript 2015 (ES6) sürümüyle birlikte class yapısına private değişkenlerin eklenmesi sağlandı.
// Private değişkenler, sadece sınıf içinde erişilebilir ve dışarıdan erişilemez.
// Bu, verilerin sınıfın içindeki özel bir alanında saklanmasına olanak tanır ve dışarıdan değiştirilemez.
//private değişkenler, önek olarak # sembolünü kullanarak tanımlanır. İşte bir örnek:



// OVERRİDE METHODS 
//JavaScript'te, "override" (üzerine yazma) terimi, bir alt sınıfın üst sınıfın metodunu değiştirmesi anlamına gelir.
//Miras alınan sınıfta (üst sınıf) tanımlanan bir metot, alt sınıf tarafından aynı isimle ve farklı bir implementasyonla yeniden tanımlanabilir.
//Alt sınıf, aynı isme sahip bir metot tanımladığında, bu metot üst sınıfta tanımlanan metodu geçersiz kılar ve alt sınıfın implementasyonu çalışır.
//Bu durumda, üst sınıftaki metot yerine alt sınıftaki metot kullanılır.
//Bir metodu override etmek, metodu yeniden tanımlamak veya üzerine yazmak anlamına gelir.
// Alt sınıfta override edilen metot, aynı isme ve imza (parametre listesi) sahip olmalıdır
//Bu şekilde, alt sınıf, üst sınıftan miras aldığı metodu kendi ihtiyaçlarına göre değiştirerek, farklı bir davranış sağlayabilir.

class Animal {
    speak() {
        console.log("Animal is speaking.");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Meow!");
    }
}

const animal = new Animal();
animal.speak(); // Animal is speaking.

const cat = new Cat();
cat.speak(); // Meow!

// Yukarıdaki örnekte, Animal sınıfı speak() adında bir metot tanımlar. 
//Cat sınıfı, Animal sınıfını miras alır ve aynı isme sahip speak() metotunu override ederek kendi implementasyonunu sağlar.
//Bu nedenle, cat.speak() ifadesi "Meow!" çıktısını verirken, animal.speak() ifadesi "Animal is speaking." çıktısını verir.
//Override etmek, sınıflar arasındaki ilişkiyi güçlendirir ve polimorfizm (çok biçimlilik) prensibine olanak sağlar.
//Bu sayede, aynı metot adıyla farklı sınıfların farklı davranışlar sergilemesi mümkün olur.






//SUPER KULLANIMI
//JavaScript'te super, alt sınıfta (türeyen sınıf) üst sınıfın (miras alınan sınıf) özelliklerine veya metotlarına erişmek için kullanılan bir referanstır. 
//super kelimesi, alt sınıf içinde kullanıldığında, üst sınıfın constructor'ını çağırmak veya üst sınıftaki bir metodu çağırmak için kullanılır.

//super kelimesi, aşağıdaki durumlarda kullanılır:
//1-)Constructor içinde: Alt sınıfın constructor'ı içinde super() çağrısı yapılır. Bu, üst sınıfın constructor'ını çalıştırır ve alt sınıfın özelliklerini ve işlemlerini düzenlemek için kullanılır.
//class ChildClass extends ParentClass {
// constructor() {
//    super(); // Üst sınıfın constructor'ını çağırır
// Alt sınıfa ait diğer özellikler ve işlemler
//}
//}

//2-)Metot içinde: Alt sınıfta, üst sınıfta tanımlanmış bir metodu override ediyorsanız, super kullanarak üst sınıftaki metodu çağırabilirsiniz
//. Böylece, alt sınıfın eklediği işlemlerle birlikte üst sınıfın metodu da çalışır.
//class ChildClass extends ParentClass {
// overriddenMethod() {
//    super.overriddenMethod(); // Üst sınıftaki metodu çağırır
// Alt sınıfa ait diğer işlemler
//}
//}


//super kullanmamak durumunda, alt sınıfın üst sınıfın özelliklerine veya metotlarına erişimi olmaz 
//veya alt sınıfın kendi tanımladığı özellikleri veya metotları ile aynı isimde bir üst sınıf özelliği/metodu varsa, çakışma ve hatalar meydana gelebilir.


//Örneğin, super kullanmadan bir alt sınıfın constructor'ını tanımlarsak, üst sınıfın constructor'ı çağrılmaz ve üst sınıfa ait başlatılması gereken özellikler atlanır:
//class ChildClass extends ParentClass {
// constructor() {
// Üst sınıfın constructor'ı çağrılmaz
// Alt sınıfa ait özellikler
// }
//}



//   Bu durumda, alt sınıfın özellikleri veya metotları, üst sınıfın özelliklerine veya metotlarına erişemediği için beklenmeyen davranışlara neden olabilir.

//Özet olarak, super, alt sınıfta üst sınıfa ait özelliklere ve metotlara erişmek için kullanılır.
// Doğru şekilde kullanıldığında, sınıf mirasını düzgün bir şekilde uygulamak ve üst sınıfın özelliklerini veya metotlarını alt sınıfta kullanmak için önemlidir.

// ALT SINIFTA ÜST SINIFTAN EZMEK İSTEDİĞMİZ FONKSİYONLARA ULAŞMAK İÇİN SUPER.FONKSİYON_ADI İLE ULAŞILABİLİR




//! Enes Bayram'dan alınan kısım

//TODO::OOP-- Nesne Yönelimli Programlama
// ES6 ile Nesne yönelimi kazandı diyebiliriz.
// JS tam anlamıyla yani NODEJS ile yapılan kısım OOP oluyor ama JAVA'daki gibi karışık ve tam anlamıyla OOP değil
// gerçek hayattaki nesneleri bilgisayarın anlayacağı bir şekilde dile getirilmesi
// Araba bir nesnedir ve nesnenin özellikleri, fonksiyonları(rengi, durumu,ismi ,üretimi vb.) mevcut
// İşlevlerin soyutlanması OOP ile mümkündür.

//! Class Yapısı içinde 1-Özellikler   2-Yapıcı Metod   3-Functions


// CLASS YAPISI
class Insan {
    /*
    1-Özellikler THİS. İLE GÖSTERİLEN KISIMLAR --PROPERTY ÖZELLİK DEMEK  
    2-Yapıcı Metod CONSTRUCTOR KENDİSİ
    3-Functions(Ekstra Fonksiyonlar) SHOWİNFO KISMI
     */

    constructor() { // constructor yapıcı metod
        console.log('Yapıcı Metod Çalıştı')
    }
}

// Nesne türetmek
const insan = new Insan();

// Insan() Insan sınıfının constructor'udur
// Bir sınıftanb bir nesne oluşturulunca ilk olarak yapıcı metod çalışır.



// constructor nedir?
// Yapıcı metod fonksiyondur parametre alabilir
class Humans {
    constructor(isim, soyisim, yas, maas) {
        this.isim = isim;        //This ile bu sınıfta bir değişken oluştur demek istiyor ve parametre olarak gelen veri bu class değişkenine atanıyor Bu özellik kapsamına girer.
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas = maas;
    }

    showInfo() {
        console.log(`Isim : ${this.isim} Soyisim : ${this.soyisim} Yas : ${this.yas} Maas : ${this.maas}`)
    }
}

// Constructor yardımı ile nesne türetilirken değer ataması yapıldı
const human1 = new Humans('Enes', 'Bayram', 23, 1000)
human1.showInfo()


// NOT*::Bir sınıftan özelliklere veya işlevlere ulaşmak istersek OBJE oluşturup nokta(".") ile erişmeye çalışırız.
// Her nesne kendine özgü değerler ve işlevler alır yani kendi referansını tutar. 

// !Nesne üretildikten sonra nokta ('.') ile özelliklere veya fonskiyonlara ulaşırız. New İle nesne oluşturulur.
const human2 = new Humans('Betül', 'Çınar', 25, 12000)
human2.showInfo()

// !ENES BAYRAM YOUTUBE'DA DEBUGGER İLE ANLATIM MEVCUT VİDEO 96


console.log('----------------------------------------------------')


//! STATİC ANAHTARI KULLANMAK
// STATİC  DURAĞAN DEĞİŞMEYEN GİBİ BİR ANLAMI VAR
// BAZI DEĞİŞKENLERİ VEYA BAZI METODLARI STATİC OLARAK TANIMLADIĞIMIZDA CLASSTAN NESNE TÜRETMEDEN DİREKT SINIF İSMİ ÜZERİNDEN ERİŞİM SAĞLAYABİLİYORUZ

class Matematik {
    topla(a, b) {
        console.log(a + b)
    }

    static cikar(a, b) {
        console.log(a - b)
    }

    carp(a, b) {
        console.log(a * b)
    }

    bol(a, b) {
        console.log(a / b)
    }
}

// Normalde fonksiyonlara ve özelliklere erişmek için nesne türetmek lazımdı
const m = new Matematik();

// NOT: Bizler normalde constructor tanımlamadık ama default olarak coğu programlama dili constructor oluşturur bizim yerimize

m.topla(true, false)
// Fonksiyona parametre alırken türün any olması herhangi bir türü kabul ettiğini gösterir ilerde TypeScript gördüğümüz zaman bunu dikkate alındığını göreceğiz.
m.topla(10, 5)



// m.cikar(9,7) 
// Not:Static türündeki fonskiyon ya da özelliğe nesne oluşturarak erişemiyoruz.
//! PEKİ NASIL ERİŞECEZ 
Matematik.cikar(9, 7)
// STATİC İSE DİREKT CLASS İSMİ ÜZERİNDEN ERİŞEBİLİYORUZ


// Bu Şeklide de erişim sağlayamıyoruz çünkü static method değilidir topla fonksiyonu
// Matematik.topla(7,8)

//!Sonuc olarak static ise className üzerinden static değilse obje oluşturarak erişecez

//TODO: Peki Bunu Nerede Kullanıyoruz?
// Bir fonskiyon ya da özellik static ise CLASS'a static değilse OBJE'ye özgüdür.


// Nesne Türetmek Maliyetlidir Normalde RAM bellekte yer tutar bunlar kontrol kısımlarında kullanılıyor genelde  date işlemlerinde string işlemlerinde
class stringUtil {
    static isNull() {

    }

    static getCharLength() {

    }

}



//! NOT:: Static olanlar class'a aittir mesela maaş güncellemesi yaparsak aynı departmandaki herkes için aynı artış sağlanmak istenirse static maas güncellemesi yapılabilir.




class Humancik {

    static lans = 10;

    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    writeInfo() {
        console.log(`My name is ${this.firstName} ${this.lastName} my salary ${this.salary} and  i know ${Humancik.lans} languages`)
    }
}


//!Sonuc olarak static ise className üzerinden static değilse obje oluşturarak erişecez lans da erişme şeklimiz farklıdır dikkat edilirse
const h1 = new Humancik('Enes', 'Bayram', 10_000);
h1.writeInfo()





console.log('----------------------------------------------------')






//! INHERİTANCE(MİRAS ALMA) KAVRAMI
// Bazı classlar bazı classları miras alır miras aldıkları classın içindeki metodları veya özellikleri sanki kendi içinde tanımlanmış gibi kullanabiliyorlar.
// Bir çok sınıf olabilir bir projede ve bu classların ortak özellikleri olabiliyor. Inheritance ile fazla kod yazmayı engelliyoruz. Aksi takdirde her özelliği her sınıf için yazmak zorunda kalmış olurduk
// Miras alınan sınıftan bir nesne türetirken üst sınıf alt sınıfı handle(yakalayabiliyor) edebiliyor.
// Javascript OOP yapısı desteklemiyor normalde ama JS de anlamamız gereken şey üst sınıfta yaz miras alınan sınıfta kullan

class Persons {
    firstName = 'Enes'

    write() {
        console.log('Persons Write', this.firstName)
    }
}


const pers = new Persons();
pers.write();



// Herkes bu person sınıfına girebilir örnek olarak öğrenci, öğretmen, mühendis vs.
class student {
    firstName = 'Enes'
}
//!BURADA HAMALLIK VAR HER SINIF İÇİN BUNU YAPAMAYIZ

//!:KOD TEKRARINDAN KAÇININ



// Persons u miras alırsak özellikler ve metodlar miras alınır

//! NOT :: Extends keywordu ile miras alınır yani  demek istediğimiz şey her Student bir Persons'tur.


class Students extends Persons {

    write() {
        console.log('Studens Write', this.firstName)
        super.write() //SUPER  İLE MİRAS ALINAN SINIFI TEMSİL EDİYORUZ
    }

}


const st1 = new Students();
st1.write()



//!NOT::this içinde çalıştığımız sınıfı temsil ediyorken super miras aldığımız sınıfı temsil ediyor.


console.log('----------------------------------------------------')


//İnheritance ile gelen kelimeler
//! THİS, SUPER VE SUPER()

// this : içinde çalıştığımız sınıfı gösterir
// super : üst sınıfı gösterir
// super() : üst sınıfın constructor'ını gösterir.


class Prs {

    constructor(firstName) {
        this.firstName = firstName;
    }

    write() {
        console.log(this)
    }
}

const prs1 = new Prs('HAKAN');
console.log(prs1.firstName)
prs1.write()




// Her sınıf oluşturulduğunda sınıf kendisini Object sınıfından extends eder. O yüzden bir çok method kullanılabilir durumda oluyor.
// Kapsam olayları ile this window objesini de gösterebiliyor 

console.log('----------------------------------------------------')


class Prsn {

    firstName = 'MUSA'
    write() {
        console.log(this.firstName)
    }
}


class Stdnt extends Prsn {
    write() {
        super.write();
    }
}

const stdnt1 = new Stdnt();
stdnt1.write()





console.log('----------------------------------------------------')





//! NOT:: Tekrardan constructor tanımlamadan super anahtar kelimesi ile atama yapabiliyoruz üzerinde çalıştığımız class'a 
//! NOT:: Miras alan her sınıf miras aldığı sınıfı doldurmaya çalışıyor ve dolunca da kullanmaya çalışıyor 

class Prsnn{
    constructor(fn,ln,sl){ // Burada veriler alınıp yazılan method yardımı ile işlendi 
        this.fn=fn;
        this.ln=ln;
        this.sl=sl;
    }

    writeInfo(){
        console.log(this.fn, this.ln, this.sl)
    }
}


class stdntt extends Prsnn{
    constructor(fn,ln,sl){ //gelen veriler burada super() ile alınıp miras alınan class'ın constructoruna  gönderildi yani class beslendi
        super(fn,ln,sl)
    }

    writeInfo(){
        super.writeInfo()
    }
}



class Engineer extends Prsnn{
    constructor(fn,ln,sl){
        super(fn,ln,sl)
    }

    writeInfo(){
        super.writeInfo()
    }
}


const stdntt1 = new stdntt('ENES','BAYRAM',10_000); // Burada alınan verileri stdntt classından elde edilen stdntt1 objesi ile class constructoruna yönlendirdik
stdntt1.writeInfo()


const engineer = new Engineer('Meral', 'Aysun', 14_000)
engineer.writeInfo()

//!NOT::İnheritance amacı ortak özellik ve metodları toplayıp alt sınıflara miras bırakmasıdır.
//!NOT::super() ile üst sınıfı besliyoruz.


