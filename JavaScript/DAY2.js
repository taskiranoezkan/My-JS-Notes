//DAY--2

//Primitive Data Types
//--İlkel Veri Türleri--immutable değiştirilemez--Elemanları değiştirilemez
//Number,Strings,Booleans,Null,Undefined

//Non-Primitive Data Types
//Objects,Functions,Arrays
//Non-Primitive Değiştirilebilir ya da düzenlenebilir

//NOT::Primitive veri türleri değerlerine göre karşılaştırılabilir
//NOT::Non-Primitive veri türleri de referanslarına göre karşılaştırılabilir 



//Primitive Veri Türleri
let numOne = 3
let numTwo = 3
console.log(numOne == numTwo) //True--->Ayrıca primitive olduğundan değerlerine göre karşılaştırıldı

let js = 'javascript'
let py = 'python'
console.log(js == py) //False--->Aynı şekilde primitive olduğundan değerlerine göre karşılaştırma yapıldı

let lightOn = true;
let lightOff = false
console.log(lightOn == lightOff) //False--->Primitve olduğundan sebeple değerlerine göre karşılaştırıldı



let degismez = 'değişmeyecek'
degismez[0] = 'Y' //Değişmeyecek primitive veri türü olduğundan
console.log(degismez[5])




//NoN-Primitive Veri Türleri
let nums = [1, 2, 23, 4, 'b', 6, [1, 1, 1], 7] //Dizi değerleri indekslerine göre referans alır. Non-primitive olduğundan dolayıdır
console.log(nums[0])
console.log(nums)




nums[2] = 24 //Mutable olduğundan değişecek-NonPrimitive veri türü olduğundan yani
console.log(nums)




//NOT::Diziler farklı veya aynı veri türlerini tutabilir
//Dizi değerlerinin indexleri sıfırdan başlar
let diz = [1, 'String', undefined, null, true, { key: 'value' }, ['dizi']]
console.log(diz)



//NOT::Non-Primitive veri türleri değerlerine göre karşılaştırılamaz eğer değerleri aynı olsa da ilkel olmayan non-primitive olduğundan false döner.
let lt = ['a', 8],
    kg = ['a', 8]
console.log(lt == kg) //False döner
console.log(lt===kg) //false döner
console.log(lt[0]==kg[0]) // TRUE  Referanslarına göre karşılaştırıldı İLKEL OLMAYAN VERİ TÜRLERİ KARŞILAŞTIRILIRKEN BU ŞEKİLDE YAPILMASI GEREKİR


//NOT::Non-Primitive veri türleri referanslarına ,indexlerine göre karşılaştırılabilir
let numbers = [1, 2, 3]
let nums1 = [1, 2, 3]
console.log(numbers == nums1) //False
console.log(numbers[0] == nums1[0]) //True
console.log(numbers[0] === nums1[0]) //True
console.log(numbers[2] == nums1[0]) //False

//Başka bir şekilde kanıtlarsak
console.log([1, 2, 3] == [1, 2, 3]) //False olacak SEBEBİ DEĞİŞKENİN BELLEKTE AYRI YER TUTMASIDIR EĞER Kİ EŞİTLİK VERİLEREK YAPILSA YANİ NUMBERS4=nums tarzında değer eşitlemeli olursa true döner



//OBJELER NoN - Primitive  VERİ TİPİDİR--->Süslü parantez ile başlanır ve her yeni key-value için araya virgül eklenir
//Key-Value çifti ile çalışırlar
let user1 = {
    isim: 'Necmi',
    yas: 50,
}
let user2 = {
    isim: "Fevzi",
    yas: 25
}
console.log("Karşılaştırma:", user1 == user2) //False
console.log(user1.isim == user2.isim) //True olmalı eğer ki değerler aynı ise...Referanslarına göre karşılaştırma yaptım denilemez çünkü bu değer karşılaştırması olarak geçer
//Doğrusu şu olur
user3=user1
console.log(user3==user1)


//NOT::İLKEL OLMAYAYAN VERİ TÜRLERİ KARŞILAŞTIRILAMAZ SONUÇ FALSE OLUR 
let obj1={
    key:'Anahtar',
    value:'Değer'
},
    obj2={
    key:'Anahtar',
    value:'Değer'
    }

console.log(obj1===obj2) //False döner

//Nasıl eşit olur
let nums5 = [1, 2, 3, 4]
let nums6 = nums5
console.log(nums5 == nums6)//True

//Merak ettiğim konu pythonda vardı
let dizicik = [4, 8, 1]
let dizilik = dizicik
console.log(dizicik == dizilik) //true
//Referanslarına göre dediğmiz şey bunu açıkça gösteriyor




//NUMBER VERİ TÜRLERİ
//Tamsayı ve ondalıklı sayıları belirtmek için kullanırız
let age = 23
const grav = 9.81
console.log(typeof age) //Number dönmeli


//Math Objesinin Metodları
Math.PI//pi değişkeni 
Math.round()//Normal yuvarlama
Math.ceil()//tavana yuvarlama
Math.floor()//tabana yuvarlama
Math.sqrt(2)//karekök alma
Math.pow(3, 2)//üs alma 3**2 şeklinde de kullanımı mümkündür
Math.E // E değişkeni
Math.log //Logaritmasını alır
Math.sin //sin fonskiyonu
Math.cos //Cos fonksiyonu
Math.tan //tan fonksiyonu
Math.abs //mutlak değer

//Math.random() 0 ile 0,99999 arasında rastgele sayı elde eder
console.log(Math.round(5.49))
console.log(Math.max(4, 5, 6, 8, 7, 1, 0, -5))
console.log(Math.min(4, 5, 6, 8, 7, 1, 0, -5))
//Sıfırla bir arası rastgele sayı üretmek 11 ile çarpılınca sayı 1-10 arasına alınmış olacak
let sasyi = Math.floor(Math.random() * 11)
console.log(sasyi)

//STRİNGS-->Çift,tek veya backtick arasında yazılan ve değişene atanan değerler stringdir
//String Concatanation----> eski yol 
let n = 'özkan'
let s = `taşkıran`
let space = ` `
let f = n + space + s
console.log(f)
console.log(f + 23 + "yaşı\ndayım\n neler oluyor")

//Paragraf çok uzun ise \ atılır sona ve devam edilir
let para = "Kriptodaki değer algısının korunması kriptolojiye dayanır\
ve bu bakımdan günümüz para politikalarındakine benzerlik göstermez\
bu da kafa da soru işaretlerine neden olur hangisi daha güvenli diye"


//\ ile escape ederiz yani öz\kan çıktısı özan olacaktır
//Tek veya çift ile başlarsak arada kullanmamıza gerek yoktur nasıl mı 'merhabalar ben Fevzi"ın yakın arkadaşıyım'
//  \n altsatır
//  \t tab boşluk
//  \\ backslash 
//  \' tek tırnak
//  \" çift tırnak

//TEMPLATE STRİNGS İNTERPOLSTİON METHOD ES6
//Backtick ile mümkündür
//Çok satırlı dize yazımı sağlar
//metin içinde değişken kullanmamızı sağlar
let is = 'Kemal'
let so = 'Sarıyıldız'

let full = `Merhabalar ben ${is} ${so}   23    yaşındayım` //BACKTİCK KULLANILMIŞTIR
console.log(full)

let k = 5
let l = 10
let toplam = `k+l=${k + l}`
let toplama = `${k}+${l}=${k + l}`
console.log(toplam)
console.log(toplama)
console.log('*-*-*-*-*-*-*-*-*-*-*-*')



//Ternary Conditionals For JavaScript
console.log(`${l} is greater than ${k} : ${l < k}`)//True ise sol kısım false ise sağ kısım çalışacak

// birDegerlendirmeYap() ? trueIseCalistir() : falseIseCalistir();





//STRİNG METODLARI
//TANIM::Javascriptteki her şey birer objedir yani nesnedir. String primitive veri türü oduğundan değiştirilemez. String nesnesi de bir çok methoda sahiptir. 
let java = 'JavaScript'
java.length
console.log(java.length - 1) //8

let li = java[java.length - 1] //son harfe ulaşmak yani t
console.log(li) //t

let dz = ['t', 'a', 'ş', 'k', 'ı', 'r', 'a', 'n'] //Dizi de de kullanılmıştır ve bu mümkündür ortak builtin fonksiyonlar mevcuttur
console.log(dz.length)  //8
son = dz.length - 1 //7
console.log(dz[son]) //indexlere göre sıfırdan başlandığından 7.index n oluyor


//Büyük Haref çevirme toUpperCase()
//küçük Harfe çevirme toLowerCase()
let cev = java.toUpperCase()
console.log(cev)
let ce = 'KemalSunal'.toUpperCase()
console.log(ce)


// Javascript' de bir karakter dizisi içinde belli aralıktaki karakterleri alabiliriz. String parçamak için kullanabileceğimiz 3 tane string metodu vardır.
// String slice()
// String substring()
// String substr()

//SLİCE()
//metoduna başlangıç ve bitiş indeksi vererek aralıktaki karakter dizisini alabiliriz.
//var str = "Mazda,Opel,Toyota";
// var result = str.slice(6, 10); // Opel

//NOT::substring başlangıç ve bitiş parametreleri arasındaki aralığı belirler, substr ise başlangıçtan sonra kaç karakter sayılacağını belirler.




// NOT:: Parametrelerin Anlamı:
//substr(startIndex, length) //Başlangıç dizinini (startIndex) ve alınacak karakter sayısını (length) belirtir. Başlangıç dizini negatif olabilir ve dizideki son karakterden geriye doğru sayar.
//substring(startIndex, endIndex)//Başlangıç dizinini (startIndex) ve bitiş dizinini (endIndex) belirtir. Başlangıç dizini negatif olamaz ve dizideki karakterleri başlangıçtan bitişe (bitiş hariç) kadar alır.
//Negatif Başlangıç Dizini:
//substr() metodu, negatif başlangıç dizinini destekler. Negatif bir başlangıç dizini, dizinin sonundan geriye doğru karakter sayısını belirtir.
//substring() metodu, negatif bir başlangıç dizinini desteklemez. Negatif bir başlangıç dizini, 0 olarak kabul edilir.

//substr() belirli kelime indeksli kısmı alma
//substring() sonuncuyu almaz (2,4) 4.alınmıyor
let h = 'faruk'
let h1 = h.substr(2, 4)
console.log(h1) // başlangıç indexi ve kaç karakter bölecek yani kaç tane alacak. İKCE çıktısı olacak. İknci parametre verilmezse geri kalanın hepsini alır

let h_1 = 'faik'
let h_11 = h_1.substring(2, 4)
console.log(h_11) //çıktısı ik  olacak çünkü  sıfırdan başlar 2.yi almaya başlar fakat 4.yü almaz


//SPLİT()
//Karakter dizisini belirtilen karakterden parçalara ayırarak bir dizi oluşturur.
//var adsoyad= "Özkan Taşkıran";
//result = adsoyad.split(" "); 


//Split()---->Bölme Parçalama
let kim = 'Özkan Taşkıran'
let dizim = kim.split("") //Boşluğa göre bölme yapılacak ve diziye aktaracak bir değişkene aktarıp dizi halinde kullanabiliriz
console.log(kim.split(" ")) //Değer verilmezse harf harf parçalar
console.log(dizim)


// NOT :: ÇOĞU STRİNG METODU ORİJİNALİ DEĞİŞTİRMEZ AMA İSTİSNALAR MEVCUT

//trim()--->baştaki ve sondaki boşlukları siler
let j = 'taşkıran '
let u = j.split("".trim())
let pr = u.reverse()
let fr = u.join('')
console.log(fr)


//includes()--->Alt metin  stringin içinde varsa true döndürür yoksa false döndürür büyük küçük harfe duyarlıdır.
let m = 'mehmet tosun'
console.log(m.includes('tosun'))

//replace(oldsubstring,newwsubstring) değiştirme işi yapacğımız zaman kullandığımız bir fonksiyondur.
let karsilama = 'Merhaba ahmet,nasılsınız ahmet?'
let kar = karsilama.replace('ahmet', 'mehmet')
let kar1 = karsilama.replaceAll('ahmet', 'mahmut')
console.log(kar)
console.log(kar1)

//CharAt()---> indexleme mantığını kullanarak yaptığımız değiştirme işlemini yapar.CharCodeAt() ASCII koduna çevirir
// NOT :: JavaScript'deki charAt() metodu, bir dizgide (string) belirli bir indeksteki karakteri döndürür. Bu metot, bir dizgiyi belirli bir karaktere erişmek veya kontrol etmek için kullanılabilir.
let uzun = '30 günde javascript'
console.log(uzun.charAt(0), '*******')
console.log(uzun)

//indexOf()--->Bir substring alarak istediğimiz kelime ya da harfin ilk nerede geçtiğini döndürür yoksa -1 döndürür ve de harf duyarlılığı vardır
let kelime = '30 Days Of JavaScript'
console.log(kelime.indexOf('Days'))
console.log(kelime.indexOf('d'))
//lastIndexOf(')----->en son nerede geçiyorsa onu alır
//concat(substring,substring,substring)---->Birden çok substringi birleştirmek için kullanılır
//starsWith('substring')---->Eğer istediğmiz ifade ile başlıyorsa true değilse false döndürür
//endsWİth()---->Yukarıdakinin tam tersi ...... ile bitiyorsa
//search()--->substring alır ve ilk nerede geçiyorsa oranın indexini döndürür
//match()---->substring alır ve eşleşiyorsa ture döner


//Bu ikisinde(search,match) regex ifadeleri mevcut o yüzden tekrar bakılmalı.regex / ile başlar / ile biter /love/gi g global olarak arar ve i de harf duyarlılığına dikkat etme denir
//REGEX ÇOK ÖNEMLİ BİR KONU
let str = 'I love javascript but when ı said Love I wasn\'t LOve. Love is Everything and all people need to loveE '
console.log(str.match(/love/gi))


//repeat()---->tekrar et istediğimiz strinigi kaç kere tekrar et parametre olarak sayı alır
//repeat ile yapılan iş 
console.log('love'.repeat(10))

//Veri türü kontrolu ve değiştirilmesi virgül değil nokta kullanılır örenk::5.4
//String to Int
// parseInt(),Number(), Plus sign(+)
parseInt('55')
console.log(parseInt('5'))
console.log(parseInt('6.5'))

Number('46')
console.log(Number('2.1'))

console.log( + '6.7')
console.log(typeof (+'5'))//Number stringi numbera çevirmek istediğmizzde kullanılır



//String to float
//ParseFloat()---->parseInt()'in almadığı kısmı almak için
parseFloat('9.81')

//Float to int
//parseInt()--->ile devam eder


//Dikkat edilmesi gereken bir hususta , değil . kullanılmasıdır. 
console.log(parseInt("8,74"))
console.log(parseFloat(8.74))
console.log(parseFloat("8.74"))
console.log(Number('8.74'))

















// String Metodları
let kurs = 'Modern Web Geliştirme Kursu'

// CharAt()::verilen indexte olan karaklteri döner
let char = kurs.charAt(9)
console.log(char)
console.log(kurs)

// Concat()::iki stringi birleştirmeye yarar
let tarih = 2023
let sonuc = kurs.concat(' ',tarih)
console.log(sonuc)
console.log(kurs)


// İndexOF()::verilen harfin veya stringin ilk nerede başlıyorsa oranın indexini döner
let index = kurs.indexOf('W')
console.log(index)
console.log(kurs)


// lastIndexOF()::verilen harfin veya stringin en son nerede döndüğünü bulup indexini döner
let lastIndex = kurs.lastIndexOf('u')
console.log(lastIndex)
console.log(kurs)


// toUpperCase()::büyük harfe dönüştürür. Orijinali bozmaz
let buyuk = kurs.toUpperCase()
console.log(buyuk)
console.log(kurs)


// toLoweCase()::küçük harfe dönüştürür. Orijinali bozmaz
let kucuk = kurs.toLowerCase()
console.log(kucuk)
console.log(kurs)



// trim()::string'de oluşan stringleri siler. sağdan soldan olan boşlukları siler
let kurs1='          modern Web geliştirme kursu        '
let trim = kurs1.trim()
console.log(trim)
console.log(kurs1)


// slice()::verilen indexten başlar nereye kadarı alır ve sonuncuyu almaz
let slice = kurs.slice(7,10)
console.log(slice)
console.log(kurs)

// substring()::verilen indesxten başlar nereye kdar gider. sonuncuyu almaz
let substring=kurs.substring()
console.log(substring)
console.log(kurs)

// NOT::Slice ve Substring Metodları arasındaki fark negeatif değer alınabilirliğidir.
// NOT::Slice() metodu negatif indeks değerlerini alabilirken, Substring() metodu negatif indeks değerlerini kabul etme



// replace()::Yer değiştirmek gibi bir anlamı vardır. Bu işi yapar zaten. Orijinali değiştirmez ve büyük-küçük harfe duyarldıır.
let replace = kurs.replace('Modern','güncel')
console.log(replace)
console.log(kurs)

// NOT::replaceAll() metodu ile bir kaç kere tekrar eden kelimeleri de komple değiştirmek mümkündür.



// split()::Belirlemiş olduğumuz bir karaktere göre bölüp dizi yapar
let dizi = kurs.split(' ')
console.log(dizi)
console.log(kurs)


// valueOf()::Sık sık kullanılan bir metod değildir. 
// NOT::nesnenin temel değerini alarak, onu başka bir veri türüne dönüştürmek veya nesnenin temel değeri üzerinde işlem yapmak için kullanılabilir.



// startsWith()::verilen string ile başlama durumunu kontrol eder. True veya false döner. Büyük küçük harfe duyarldıır.
let start =kurs.startsWith('m')
console.log(start)
console.log(kurs)


// endsWith()::verilen string ile bitme durumunu kontrol eder. True veya false döner. Büyük küçük harfe duyarldıır.
let end = kurs.endsWith('U')
console.log(end)
console.log(kurs)


// NOT::startsWith ve endsWith metodları karakter veya kelime alabilir






// Math Objesinin Metodları
// window.Math ile ulaşılabilir
// floor zemin demek tabana yuvarlama yapar
let c=3.99
console.log(Math.floor(c))

// Ceil::Tavana yuvarlar
console.log(Math.ceil(c))

// round:: en yakına yuvarlar
console.log(Math.round(c))

// max::bir dizideki en yüksek değeri döner
console.log(Math.max(3,4,5,6,7,8,9,88))


// Bu şekilde kullanım NaN döner 
let diziler=[1,2,3,4,5,6,7,8,9,10]
console.log(Math.max(diziler))


// min::bir dizideki en düşük değeri döner
console.log(Math.min(3,4,5,6,7,8,9,9,0,0,88))

// abs::mutlak değer almaya yarar
console.log(Math.abs(-6))


// sqrt::karekök alamya yarar
console.log(Math.sqrt(57))

// pow::üs alamya yarar
console.log(Math.pow(5,2))


// PI::pi değerini alamya yarar
console.log(Math.PI)


// random::rastgele değer üretmeye yarar 0 ile 1 arasında
// 10 ile çarp ceil ile yuvarla tavana 11 ile çarp floor ile tabana yuvarla
console.log(Math.random())


// NOT::Kod en içten en dışa doğru okunur

console.log('-*-*-***-*-*-*-*-*-*')

let random=Math.random()
let carpimSonuc=random*100
let tamSonuc=Math.floor(carpimSonuc)

console.log(random)
console.log(carpimSonuc)
console.log(tamSonuc)







// Değer Ve Referans Tipler
/*
İlkel (Primitive) Veri Türleri::Değer Tipler
Belleğin yani ram'in stack bölümünde yer alırlar
String
Number
Boolean
Undefined
Null
Symbol
*/

/*
İlkel Olmayan (NoN-Primitive) Veri Türleri::Referans Tipler
Belleğin heap bölümünde yer alırlar
Obje
Array
Function
*/


















