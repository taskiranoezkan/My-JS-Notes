//SCOPE(KAPSAM)
//DEĞİŞKENLER LET,CONST VE VAR İLE TANIMLANIR
//EĞER LET,CONST VE VAR KULLANILMAZSA OTOMATİK OLARAK WİNDOW SCOPE OLUR
//ERİŞİM AÇIK OLAN PENCERDE HERHANGİ BİR YERDEN ERİŞİLEBİLİR OLUR

//Window-Scope
a = 'JavaScript'
b = 41
function oyle() {
    console.log(a, b)
    if (true) {
        console.log(a, b)
    }
}
console.log(a, b)
oyle()




//Global olarak tanımlanan değişken aynı dosyada her yerden erişilebilir.


//Global-Scope 
let aa = 'Python'
let bb = 55
function oylee() {
    console.log(aa, bb)
    if (true) {
        console.log(aa, bb)
        let ab = 'Solidity'//Scope dolayısı ile sadece if blokları içinde erişilebilir bunun nedeni let ile bu kapsamda tanımlanmış olmasıdır
    }
}
console.log(aa, bb)
oylee()


//başka bir örnek 
{
    let deneme = 'test'
    console.log(deneme)
}
//Burada kod blok kapsamı dışında olduğundan deneme adlı değişkene erişemem


//NOT::var ile tanımlanan değişkenler function scope'dur yani functionlarda tanımlama var ile yapılırsa erişmek kod blokları dışında imkansız fakat if,for gibi bloklarda var ile tanımlama yapılırsa blok dışında erişmek mümkündür
for (var i = 0; i < 7; i++) {
    console.log(`İ=${i}`)
}
console.log(`Bu kapsam dışında erişildi İ=${i}`)//VAR sinsi bir şeydir let veya const kullan 






//OBJECT(NESNE)
//Her şey bir obje olabilir ve objelerin özellikleri vardır ve de özelliklerin değerleri vardır
//Objeler key-value iklisi halinde olur genelde const ile tanımlanırlar
//NOT::Normalde süslü parantez blok gösterir fakat bir değişkene bir değer olarak atanınca bu obje olduğunu gösterir

//Boş Obje Oluşturma
const obje = {}
console.log(obje)

const person =
{
    ad: 'özkan',
    soyad: 'taşkıran',
    yas: 23,
    sifat: 'bilgisayar mühendisi',
    yetenekler:
        [
            {
                alan: 'web',
                dil: 'html',
                seviye: 'orta',
                deneyim: 2
            },
            'JavaScript',
            'Java',
            'MySql'
        ],
    hobiler: ['Futbol Oynamak', 'Yürüyüs Yapmak', 'Uyumak'],
    aile: {
        anaAdi: 'Meltem',
        babaAdi: 'Haluk',
        kardesler:
            [
                {
                    ad: 'Yusuf',
                    yas: 29
                },
                {
                    ad: 'Kemal',
                    yas: 25
                },
                {
                    ad: 'Hasan',
                    yas: 21
                },
                {
                    ad: 'Arda',
                    yas: 14
                },
                {
                    ad: 'Tuncay'
                    , yas: 14
                }
            ]
    },
    arkadaslar:
        [
            {
                ad: 'faik cem',
                soyad: 'güler',
                yas: 22,
                sifat: 'bilgisayar mühendisi',
                sehir: 'Antakya'
            },

            {
                ad: 'onur',
                soyad: 'tümkaya',
                yas: 22,
                sifat: 'bilgisayar mühendisi',
                sehir: 'Antakya'
            },
            {
                ad: 'Sedat',
                soyad: 'barlin',
                yas: 22,
                sifat: 'bilgisayar mühendisi',
                sehir: 'Antalya'
            },

            {
                ad: 'halil ibrahim',
                soyad: 'içten',
                yas: 24,
                sıfat: 'bilgisayar mühendisi',
                sehir: 'adana',
                ilgi_alani:
                {
                    'Web':
                    {
                        ilgilenen_hoca: 'yakup',
                        vasfi: 'Bölüm başkanı',
                        yas: 50,
                    },
                    'Ağlar': '',
                    'Yazılım': '',
                    'Photoshop': '',
                    'farklı ilgiler':
                        [
                            'kadınlar',
                            'tik-tok',
                            'facebook',
                            {
                                motorlar: 'En büyük ilgi alanı'
                            }
                        ]
                }
            }
        ],
    ekipmanlar:
    {
        telefon:
        {
            marka: 'Xioami Redmi Note-8',
            fiyat: '1500 TL',
            özellik: 'Herhangi bir halta yaramıyor'
        },
        bilgisayar:
        {
            marka: 'Asus',
            özellik: ['i-5 11400H', '16GB RAM', '3050 Ekran Kartı', ',512 GB SSD'],
            fiyat: '15000 TL',
            icindekiler:
                [
                    {
                        Java: 'Eclipse',
                        Python:
                            [
                                'vs-code',
                                'spyder',
                                'jupyter Notebook',
                                {
                                    atom: 'buda kullanılabilir fakat ben kullanmıyorum',
                                    dezavantaj:
                                        [
                                            'çok yüksek boyut', 'Kullanıcı dostu olmayan arayüz', 'Geç açılma'
                                        ]
                                }
                            ]

                    }
                ]
        }
    },
    isMarried: false,
    'telefon numarası': '05316000212',
    getFullName: function () {
        return `${person.ad} ${this.soyad}`//This ile person'un aynı şey olduğunu kanıtlamak istedim
    },
    getFullName2: () => `${person.ad} ${person.soyad}`,
    title: 'Developer',
    country: 'türkiye'
}
console.log(person)

//Nesneden değerlere erişmek bu iki farklı yolla mevcut
console.log(person.ad)


//Eğer ki key boşluklu bir ad ise köşeli parantez kullanmak gerek
//Diğer özelliklere de bu şekilde erişilebilir
console.log(person['telefon numarası'])
console.log(person['hobiler'])


//key 'in altında ki özellikler obje ya da array ise nasıl erişilir
console.log(person.aile.kardesler[2])



//Tam istediğmiz örnek oldu diyebiliriz
//Eğer ki key boşluklu bir ad ise köşeli parantez kullanmak gerek demiştik
console.log(person.arkadaslar[2].ilgi_alani['farklı ilgiler'][0])



//eğer ki key name finamik olacaksa da köşeli parantez kullanırız
let keyName = 'yas'
console.log(person[keyName])


//NOT::this en basit tabiri ile objenin kendisidir yani person. ile erişebildiğimiz propertieslere this. ile de erişebiliriz
console.log(person.getFullName())
//getFullName() fonksiyonu nesnenin bir metodudur
//this anahtar kelimesi objenin kendisini referans eder propertieslere ulaşmak için this kullanırız


//NOT::ARROW FONKSİYONLARINI OBJE METODU OLARAK KULLANAMIYORUZ,ARROW FONKSİYON İÇİNDE THİS WİNDOW'U REFERANS ALIR OBJEYİ ALMAZ O YÜZDEN
console.log(person.getFullName2())
//BU DURUMUN ÇÖZÜMÜ THİS ANAHTAR KELİMESİ YERİNE OBJE ADINI KULLANMAK OLUR




//OBJELER MUTABLE'DİR YANİ DEĞİŞTİRİLEBİLİRDİRLER,MODDİFİYE EDİLEBİLİRLER
//person.ad='özcan'
//console.log(person)


person.yetenekler.push('React')
person.yetenekler.push('C#')
person.isMarried = true

console.log(person)


person.getPersonInfo = function () {
    let enSonYetenek = this.yetenekler.splice(0, this.yetenekler.length - 1).join(',')
    let sonYetenek = this.yetenekler.splice(this.yetenekler.length - 1)[0] //this.yetenekler.at(-) de son yeteneği almamızı sağlardı

    let yeteneks = `${enSonYetenek} and ${sonYetenek}`
    let fullName = this.getFullName()
    let durum = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${yeteneks} }`

    return durum
}
console.log(person.getPersonInfo())

//Eğer bir dizimiz varsa ve biz onun sonuncusunu and ile bağlamak istersek
// Intl.ListFormat() constructor diye bir şey var

const formatter = new Intl.ListFormat('tr', {
    style: 'long',
    type: 'conjunction'
});

//OBJECT METHODS
//Objeyi manipüle etmek için bir sürü farklı metod vardır

//object assign
//orijinal objeyi bozmadan objeyi kopyalamaya yarar bir değere atanırsa yeni objeye de ulaşılır
Object.assign({}, person)

let newPerson = person //Bu referanslı kopyalamaya girer
console.log(person)
newPerson.ad = 'Gökhan'
console.log(person)


//Referanssız kopyalama
let newk = Object.assign({}, person)
console.log(person)
newk.ad = 'Murat'
console.log(person)


//başka bir yol ama denemek lazım
let newl = { ...person }
newl.ad = 'Özcan'
console.log(newl)


//objedeki keyleri almak 
console.log(Object.keys(person))

//objedeki valueları almak
console.log(Object.values(person))


//key-value ciftini almak bu array olarak döner
console.log(Object.entries(person))


for (let [key, val] of Object.entries(person)) {
    console.log(`KEY: ${key}-VALUE:${val}`)
}



//herhangi bir property olup olmadığını kontrol etmek
console.log(person.hasOwnProperty('country'))


//mutable olan objeyi immutable yapmak istersek
Object.freeze(person)
person.ad = 'Özkan'
console.log(person)



//yeni bir şey ekleyemiyoruz ama var olanı guncelleyebiliyoruz
Object.seal(person)

person.ad = 'Özkan' //bir kere yukarıda frezze yaptık ondan değişmez
person.yetenekler.push('c++')
person.ilce = 'iskenderun'//normalde burayı ekleyemeyecek ki olmayacak zaten

console.log(person)

//bir dizinin son elemanını almak
let array = [4, 7, 11, 10, 8, 12, 17, 21, 23]
console.log(array.at(-1))




//Set typeOf kullanılınca obje olarak dönüyor gariptir
console.log('******************************************')

//Burası Obje Oluyor
const isimler = (['Ahmet', 'Mehmet', 'Ali', 'Furkan'])
console.log(isimler)
console.log(typeof isimler)

console.log('******************************************')

//Burası String Oluyor ve son değeri alıyor
const isimle = ('Ahmet', 'Mehmet', 'Ali', 'Furkan', 'Faik')
console.log(isimle)
console.log(typeof isimle)

console.log('******************************************')

//Burası obje oluyor ve ilk değerin elemanlarını iterate ediyor
const isimciler = new Set('Sedat', 'Furkan')
console.log(isimciler)
console.log(typeof isimciler)

console.log('******************************************')

//Burası da obje oluyor ve teker teker elemanlarını iterate ediyır
let değisken = '78546564687328'
const setcik = new Set(değisken)
console.log(setcik)
console.log(typeof setcik)




// BURASI OBJELER İÇİN ÖNEMLİDİR
// console.log(person.name); // Özelliğe erişebiliriz (dot notation)
// console.log(person["age"]); // Özelliğe erişebiliriz (bracket notation)
// console.log(person.sayHello()); // Davranışı (metodu) çağırabiliriz


function merhaba(isim) {
    return console.log('merhabalar ' + isim)

}

merhaba('özkan')