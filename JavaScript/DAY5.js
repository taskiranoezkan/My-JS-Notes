//DAY--5
//DİZİLER
//Dizilerin içinde objeler de tutulabilir.Objelerin içinde de array tutulabilir bu arada.
//Boş dizi tanımalama
const dizii = Array()
const diziii = []

// ! Çoğu programlama dilinde genelde tek tip veri tipinde değerler alır


//stringlerde kullanılan length dizilerde de kulllanılabilir Ortak  built-in fonksiyonalrdandır
let ogr = ['Özkan', 'Taşkıran', '30.12.199', 23]
console.log(ogr.length)


//Stringden dizi oluşturmak
//split() kullanılarak array oluşturmak mümkündür-->elemanları teker teker diziye eleman olarak atar
let nav = 'Özkan'
console.log(nav.split(''))

//Dizi elemanlarına index kullanılarak ulaşabiliriz .İndex derken fonksiyon değil 
//Son elemana length-1 ile ulaşılır
console.log(nav.split('').indexOf('Ö'))


//Farklı veri  türleri de içerebilir
//diziler non-primitivedirler bu yuzden değiştirilebilirler
let dzi = ['Özkan', 'Taşkıran', '30.12.1999', 'Doğubeyazıt']
console.log(dzi)
dzi[3] = 'Ankara'
console.log(dzi)

//Dizi indexleri sıfırdan başlar
let meyve = ['Portakal', 'Elma', 'Kivi', 'Muz']
console.log(meyve[0])


//Diziler Mutable olduğundan const ile tanımlansa da indexler kullanılarak değerleri değiştirilebilir
const ale = [1, 2, 3, 455, 6, 78, 9]
ale[3] = 4
ale[4] = 5
ale[5] = 6
ale[6] = 7
ale[7] = 8  //Eğer ki dizinin uzunluğu belli ise fakat yeni eleman eklenirse de ekleme işlemi yapılır
console.log(ale)


//Boş ve eleman sayısı belli olan bir dizi oluşturmak istersek
let d = Array(5)

//bu diziyi static(değişmeyen) bir değerle doldurmak istersek
let dd = Array(8).fill('X') //Tüm elemanları X olur
console.log(dd)

//iki diziyi birleştirmek istediğimzide concat metodu kullanılır
let ddd = [5, 7, 8, 9, 6]
let dddd = [1, 2, 3, 4, 0]

console.log(dd.concat(ddd), 'dd', ddd)

console.log(ddd.concat(dddd)) // dddd,yenidizi de olabilirdi
console.log(dddd.concat(ddd, ['A', 'B'])) //yeni elemanlarda eklendi birleştirme yapılırken
console.log(dddd.concat(ddd, 10, 11, 12)) //dizi olarak birleştirme yapmaya da gerek yok illaki bu şekilde de ekleme yapılıyor ayrıca iki farklı dizi de birleştirilebilir , kullanıalrak

//dizi uzunlugu diziadı.length ile alınır
//diziadı.indexOf('') arayacağımız şeyi ararız hangi indexte olduğuna bakılır eğer yoksa -1 döner
//dizinin içinde istedğimiz elemanın bulunup bulunmadığını if else ile ve ternary operatörü ile kontrol edebiliriz
//içermemesi -1 demektir
//dizinin en son indexini almak istedğimizde lastIndexOf kullanabilriz
//dizinin içinde aradığımız değerin olup olmamasını includes() metodu ile de yapabilriz ama bu true ya da false döndürecektir.Büyük harfe duyarlıdır

//JAVASCRİPTTE HER ŞEY DOĞAL OLARAK BİR OBJEDİR O YÜZDEN ARRAY SORGULAMASI YAPILMAK İSTENİRSE İS ARRAY KULLANILIR
console.log(typeof ddd) //bunun sonucu obje olarak gözükecek
console.log(Array.isArray(ddd)) //True ya da false döndürecek olan bu


// ! Örnek
// let diziornek=[5] //buna bakılmaksızın eklesen ekleniyor ------> diziornek adında bir dizi oluşturulur ve bu dizi, [5] şeklinde tek bir elemana sahip olur.
// let letali=prompt('lütfen isim bilgisi girin')
// diziornek.push(letali)
// let soyisim=prompt('lütfen soyisim Bilgisi gir')
// diziornek.push(soyisim)
// let yas=prompt('lütfen yas Bilgisi gir')
// diziornek.push(yas)
// let memleket=prompt('lütfen memleket Bilgisi gir')
// diziornek.push(memleket)
// let egitim=prompt('lütfen eğitim Bilgisi gir')
// diziornek.push(egitim)
// let boy=prompt('lütfen boy Bilgisi gir')
// diziornek.push(boy)

// console.log(diziornek)//örnek for ile de yapılırdı



//Bir diziyi string'e çevirmek mümkündür toString ile
let aa = ['Ankara', 'İstanbul', 'Antalya']
console.log(aa.toString().split(',').join('')) // stringe çevirdik sonra virgülden parçaladık ve sonra birleştirdik

console.log(aa.toString()) //Ankara,İstanbul,Antalya
console.log(aa.toString().split(',')) //['Ankara','İstanbul','Antalya']
console.log(aa.toString().split(',').join('')) //AnkaraİstanbulAntalya
//console.log(aa.toString().join(',')) // Bu çalışmaz niye çünkü join bir dizi metodudur


//Bir dizi elemanlarını istediğmiz karakterlere göre birleştirmek mümkündür
let fd = ['Özkan', 'Mehmet', 'Metin', 'Kemal']
console.log(fd.join())
console.log(fd.join(''))
console.log(fd.join(' '))

//SLİCE :: Dilimlemek
//Bir dizinin bir index aralığını almak, slice son indexi almaz
let gg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(gg.slice(0, 4))

//SPLİCE :: Eklemek
//splice() metodu ile kaçıncı indisten kaça kadar silinecek ve yerlerine ne yazılacak
let hh = [1, 4, 7, 8, 5, 2, 9, 6, 3]
console.log(hh.splice(0, 3, 0, 0, 0))
console.log(hh)

//Push() metodu ile bir dizinin sonuna eleman ekleyebiliyoruz
let ankara = [1, 2, 3, 4, 5]
console.log(ankara)
ankara.push('Yakup')
console.log(ankara)
//Unshift() ile de dizinin başına eleman ekleyebiliriz Push() ile yaptığımız işi yapıyor

//pop() metodu ile son değeri siler fakat silerken gösterir de yani onu bir değişkene atabiliriz
let ff = ['Ahmet', 'Halil', 'Jack', 'Jerome']
cikan = ff.pop()
console.log(ff)
console.log(cikan)
//Shift() Metodu ile baştan çıkarabilriz bu pop() ile aynı işi yapıyor


//Dizinin elemanlarını baştan sona sıralamak için reverse kullanılır
let vv = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(vv.reverse())


//Diziyi A-Z sıralamak istersek diziadi.sort() kullanılır
let dili = [1, 7, 8, 5, 6, 1, 5, 3, 9, 10]
dili.sort()
console.log(dili)
//BURADA FARKLI BİR PROBLEM VAR 1,1,10 DİYE SIRALAMASI PROBLEM
//GENELDE BU PROBLEMİ AŞMAK İÇİN KARŞILAŞTIRMA FONKSİYONU ADI ALTINDA BİR FONSKİYON KULLANILMAKTADIR VE BUDA DOĞRU BİR ŞEKİLDE SIRALAMA YAPMAMIZI SAĞLAR

//Dizinin içinde farklı veri türleri bulunabilir dizi de buluanbilir
let ley = [1, 2, 3, 4, 5, 6, 7, 8, 9, [9, 8, 7, 6, 5, 4, 3, 2, 1], { key: 'value', key1: [7, 14, 8, 10, 11, 14, 21, 23] }]
console.log(ley[9][3])
console.log(ley[10]['key1'])
//Burası bence önemli bir konu dikkat edilmeli






let sentence = 'Facebook,Google,Apple,IBM,Oracle and Amazon are big IT companies'
let companies = sentence.split(',')
console.log(companies)
let lastElement = companies[companies.length - 1]
console.log(lastElement)
companies.pop(companies[companies.length - 1])
let twice = lastElement.split('and')
console.log(twice)
companies.push(twice[0])
let end = twice[twice.length - 1]
let amazon = end.split('are')
console.log(end)
console.log(amazon)
companies.push(amazon[0])


console.log(companies)


for (let index = 0; index < companies.length; index++) {
    if (companies[index].includes('oo')) {
        console.log(`${companies[index]} şirketi çift o içeriyor`)
    }
    else {
        console.log(companies[index])
    }
}




//TODO: BİR METİNDEKİ EN SIK TEKRAR EDEN HARFİ BULAN ALGORİTMA

let word = 'Galatasaray(futbol takımı),GalatasaraySporKulübününSüperLigdemücadeleedenfutboltakımıdır.GalatasaraySporKulübüneaitolanGalatasaraySportifAnonimŞirketi,kulübünfutboltakımınınsahibidir.GalatasaraySporKulübünün1997yılındaşirketleşmesürecinegirmesininardındankurulmuştur.'

let tekrar = 0;
let maxTekrar = 0;
let enSikTekrarEdenHarf = '';

for (let i = 0; i < word.length; i++) {
    let currentHarf = word[i];
    let currentTekrar = 0;

    if (currentHarf !== ' ') {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === currentHarf) {
                currentTekrar++;
            }
        }

        if (currentTekrar > maxTekrar) {
            maxTekrar = currentTekrar;
            enSikTekrarEdenHarf = currentHarf;
        }
    }
}

console.log('En çok tekrar eden harf:', enSikTekrarEdenHarf);






//TODO: Verilen bir dizideki  sayıların toplamını bulan algoritma
let dizi = [1, 7, 9, 5, 2, 2, 44, 55, 778, 152]
let toplam = 0
for (let i in dizi) {
    toplam += dizi[i]
}
console.log(`Toplam ${toplam}`)




//TODO: Bir dizideki tek sayıları bulan algoritma

let diiz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
let tek = []
for (let i in diiz) {
    if (diiz[i] % 2 != 0) {
        tek.push(diiz[i])
    }
}
console.log(`Dizideki tek sayılar: ${tek}`)




//TODO: verilen stringin tersini bulan algoritma
let str = 'Verilen bir stringin tersini bulan bir algoritma nasıl tasarlanır'

let dizz = str.split('')
let ters = []
for (let i = dizz.length - 1; i > 0; i--) {
    ters.push(dizz[i])
}

let tersIfade = ters.join('')
console.log(tersIfade)



//TODO: Verilen bir dizideki en büyük ve en küçük sayıları bulan bir algoritma nasıl tasarlanır?

let de = [7, 2, 65, 502, 78, 58, 0, 79, 8929, 29, 0.22156]

let min = de[0]
let max = de[0]

for (let i = 0; i < de.length; i++) {
    if (de[i] > max) {
        max = de[i]
    }
    if (de[i] < min) {
        min = de[i]
    }
}
console.log(`max sayı: ${max} ve min sayı: ${min}`)


//TODO: Verilen bir cümledeki kelime sayısını bulan bir algoritma nasıl tasarlanır?


let wo = 'Verilen bir cümledeki kelime sayısını bulan bir algoritma nasıl tasarlanır?'

let dl = wo.split(' ')
console.log(dl.length)


//TODO: Verilen bir dizideki tekrar eden sayıları bulan bir algoritma nasıl tasarlanır?

let ldt = [1, 1, 2, 1, 4, 5, , 7, 88, 8, 55, 7, 7, 77, 77, 7, 7, 7, 7]
let tekrarEdenler = []

for (let i = 0; i < ldt.length; i++) {
    if (tekrarEdenler.includes(ldt[i])) {
        continue; // Eğer eleman zaten tekrar edenler listesinde varsa, diğer adımları atla
    }

    for (let j = i + 1; j < ldt.length; j++) {
        if (ldt[i] === ldt[j]) {
            tekrarEdenler.push(ldt[i]);
            break; // Tekrar eden bir elemanı bulduğunda iç döngüyü sonlandır ve bir sonraki elemana geç
        }
    }
}

console.log("Tekrar eden sayılar:", tekrarEdenler);







//TODO: Bir dizideki çift sayıları bulan algoritma

let dizl = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
let cift = []
for (let i in diiz) {
    if (diiz[i] % 2 == 0) {
        cift.push(diiz[i])
    }
}
console.log(`Dizideki çift sayılar: ${cift}`)









//TODO: Bir dizideki tek ve en buyuk sayıyı bulan algoritma

let fg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
let enbvt = -Infinity; // En büyük tek sayıyı tutacak değişkeni en küçük değerle başlatıyoruz

for (let i = 0; i < fg.length; i++) {
    if (fg[i] % 2 !== 0) { // Tek sayıları kontrol ediyoruz
        if (fg[i] > enbvt) {
            enbvt = fg[i]; // Daha büyük bir tek sayı bulunduğunda enbvt değerini güncelliyoruz
        }
    }
}
console.log(`Dizideki en büyük tek sayı: ${enbvt}`);






//TODO: Verilen bir metindeki en uzun kelimeyi bulan bir algoritma nasıl tasarlanır?

let metin = 'Verilen bir metindeki en uzun kelimeyi bulan bir algoritma nasıl tasarlanır?'

let kelimeler = metin.split(' ')

let enuzunkelime = kelimeler[0]

for (let i = 0; i < kelimeler.length; i++) {
    if (kelimeler[i].length > enuzunkelime.length) {
        enuzunkelime = kelimeler[i]
    }
}
console.log(`en uzun kelime : ${enuzunkelime}`)



//ENES BAYRAM'dan alınan kısımlar 

// Birden fazla değeri bir arada tutabilmek
// ekleme çıkarma ekrana yazdrıma gibi bir çok işlem yapılabilri
// ArrayIndexOutOfBounded hatası diğer dillerde alınır (js de yok undefined döner)
// son index::diziAdi.length-1
// Üstüne yazma::diziAdi[index]='Yakup'
// Farklı veri tiplerinde dizi:: let dizi=[1,'değer',null,undefined]
// Farklı dizi oluşturma tarzı:: let diziAdi=new Array()
// dizi içinde dizi de bir veri yapısı olarak olabilir:::let diziAdi=['string',2,0.5,['yeniDizi'],{key:'value'}]

// Dizi tanımlama 
let dizi1 = new Array()
dizi1[0] = 'Özkan'

let dizi2 = []
dizi2[0] = 'Özkan'

let dizi3 = ['Özkan']


// JS de dizilerde obje veri tipindedir
console.log(typeof dizi1)



// Dizilerde dönmek istersek for while do while hepsi kullanılabilir
// Ama diziler için olan ve resmen onun için oluşturulmuş bir yapı vardır FOR EACH

// Dizilerde for each kullanılması gerekir diyor adam
// Kullanımı :: diziAdi.foreach(function(değişken){console.log(değişken)})

let isimler = ['Özkan', 'Kemal', 'Metin', 'Mehmet']

// isimler.forEach((name)=>console.log(name)) NOT::Arrow function ile kullanılması
// Tüm elemanlarını iterate ediyor
isimler.forEach(function (name) {
    console.log(name)
})


// Normal for döngüsü ile yapılmış hali
for (let i = 0; i < isimler.length; i++) {
    console.log(isimler[i])
}

// While döngüsü ile yapılmış hali
let sayac = 0
while (sayac <isimler.length ) {
    console.log(isimler[sayac])
    sayac++
}

// Dizi Metodları

/*

PUSH::Dizinin sonuna eleman ekler , ayrıca dizinin uzunluğunu döner.
UNSHİFT::Dizinin başına eleman ekler , eleman sayısını geriye döner.

POP::Dizinin sonundan eleman siler , silinen elemanı döner.
SHİFT::Dizinin başından eleman siler , baştan silinen elemanı  döner.

SPLİCE(index,index)::Eleman eklemek ve silmek için kullanılır. NOT::İKİ UCU BİRLEŞTİRMEK GİBİ BİR ANLAMI VAR TÜRKÇE DE. ELEMAN SİLMEDEN DE İSTEDĞİMİZ YERE ELEMAN EKLEMEK İSTEDİĞMİZDE KULLANABİLİRİZ.

TOSTRİNG::Diziyi string'e çevirmek için kullanılır. Dizinin string halini döner
JOİN::Diziyi string'e çevirir. Farkı ise araya eleman ekleyebiliriz.

CONCAT::Dizileri birleştirmek için kullanılır.
SLİCE(DİLİMLEMEK)::Diziyi istenilen yerden bölüp yeni bir dizi oluşturur.
LENGTH::Dizinin uzunluğunu verir.
REVERSE::Dizinin elemanlarını ters çevirmek.
SPLİT(BÖLMEK)::Belirli bir ifadeye göre bölüp diziye çevirmek.
İNDEXOF::Elemanın index numarasını verir.
İNCLUDES::Verilen elemanı içeriyor mu ona bakar.

*/
// NOT::JAVASCRİPT'TE DİZİLER OBJE VERİ YAPISINDADIR.ASLINDA HER ŞEY OBJE VERİ YAPSINDADIR.

let arabalar=['BMV','TOYOTA','RENAULT','MERCEDES','PORCHE']

// Return olarak dizinin yeni uzunluğunu döndüğünden alabiliriz bu uzunluğu :: let diziUzunluk=arabalar.pusj('FORD')
// Bu Return eden dizi fonksiyonları yukarıda tanımlanması verilmiştir. Ayrıca tooltip olarak bu özellikler geliyor kullanmak lazım.
arabalar.push('OPEL') // Sona ekler.
arabalar.unshift('HYUNDAI') // Başa ekler.
arabalar.pop() // Sondan siler.
arabalar.shift() // Baştan siler.
arabalar.splice(0,0,'RANGEROVER') //İKİ PARAMETRELİ DE KULLANILABİLİR BAYAĞI HOŞ BİR METOD
arabalar.toString() // Diziyi string'e çevirir.
arabalar.join('-') // Dizinin elemanlarını aldığı parametre ile birleştirerek string'e çevirir.
arabalar.concat() //İki diziyi birleştirmek için kullanılır. 
arabalar.slice(2) //birinci parametresi kesmek istediğimiz elamanın indeksi, ikinci parametresi ise nereye kadar(dahil değil) keseceğimizi ifade ediyor. Alınan değerden sonrasını dizi olarak döner. Tooltip ile okunup ona göre devam etmeli
arabalar.length //Özelliktir aslında. Uzunluğunu verir dizinin.
arabalar.reverse() //Orijinal diziyi bozar dikkat edilmeli.
// arabalar.split(',') //Alınan parametreye göre string bir ifadeyi bölü diziye çevirir. Orijinal string'i bozmaz
arabalar.indexOf() // Eleman varsa index'ini döner yoksa -1 döner
arabalar.includes() // Eleman varsa true yoksa false döner.

console.log(arabalar)












