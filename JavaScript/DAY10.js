//SET VE MAP
// BURADA BAHSİ GEÇEN MAP İLE HİGH ORDER FONKSİYON OLAN MAP FARKLI ŞEYLERDİR

// TANIM::::::
//set ve map array ve object'e benziyor
//SET::Set'in array'den farkı her bir elemanının unique olması gerektiğidir
//MAP::Map'in object'ten farkı key'lerinin istediğimiz herhangi bir veri türünde oluşturabiliyor olmamız



//SET
//set öğeler bütünüdür,sadece unique(benzersiz) elemanlar içerir

//Boş set oluşturma,ayrıca set küme de demek küme işlemleri de yapılıyor yani
const isim = new Set() //S harfi büyük olmalı
console.log(isim)

//Array'den Set oluşturma
let dd=['Özkan', 'Özcan', 'Gökan', 'Sevkan', 'Oktay','Oktay']
const names = new Set(dd)
console.log(names)

// Setten array oluşturma Spread ile olur ve de Array.form ile de olur
let nane=[...names]
console.log(nane)



//Set'tekrarlanabilen bir nesnedir ve biz her bir elemanı iterate edebiliriz Tekrarlanabilen derken iterate edilebilen
const dil = [
    'Kürtçe',
    'Türkçe',
    'İngilizce',
    'Arapça',
    'Fince',
    'Peştuca',
    'Fransızca',
    'İtalyanca',
    'İspanyolca',
    'Kürtçe'
]
const setOfDil = new Set(dil)
console.log(setOfDil)

for (const dilo of setOfDil) {
    console.log('dil:', dilo)
}



//Set'in içinde array olmadığından elemanları iterate edemedik BUAYA DİKKAT EDİLMELİ
let dill = new Set('Fince', 'Arapça', 'Hintçe') //set böyle parametre almaz PARAMETRE OLARAK İTERATE EDİLEBİLİR BİR PARAMETRE ALIR
for (let dillo of dill) {
    console.log(dillo)
}

//forEach ile kullanımı
setOfDil.forEach((d) => console.log(d))



//filter, map yüksek mertebe fonksiyonları kullanılamaz set değilde dizi olması beklenir çözüm vardır
const isimler = new Set(['Ahmet', 'Mehmet', 'Ali', 'Furkan'])
console.log(isimler);
console.log(typeof isimler);
//names.map(name=>console.log(name));//Hata Verceek
//çözümü eğer noktalı virgül koymazsak yine hata verecek
//isimler diziye dönüştürmek gerek rest operatörü yardımıcı oluyor
[...isimler].map(name => console.log('Ad', name))



// HİGH ORDER FONKSİYONLAR SET İLE KULLANILMIYOR DİZİYE DÖNÜŞMEK GEREKTİRİYOR
let set = new Set(['Özkan', 'Özcan', 'Gökan', 'Sevkan', 'Oktay', 'Özkan', 'Oktay'])
console.log(set);
//Burası kullanılmaz
// set.map((name)=>console.log(name));

// Çözümü nooktalı virgül unutulmamalı yoksa çalışmaz yani set array dönüşümü yapılmalı
[...set].map(name => console.log(name));
// Bu iksi aynı işi yapcaktır
set.forEach(name => console.log(name))




//SET Metodları
//Set'e yeni bir eleman eklemek için add metodu kullanılabilir
const fr = new Set()
fr.add('Musa')
fr.add('İsa')
console.log('Eklendikten sonra', fr)

console.log(typeof fr)
console.log(fr)
fr.forEach(nam => console.log(nam))

const navs = ['Oktay', 'Okay', 'Sevkan', 'Serkan', 'Musa', 'Jhoney']

const navsSet = new Set()

for (let nav of navs) {
    navsSet.add(nav)
}
console.log(typeof navsSet, navsSet)




//NOT::set boyutu length ile alınamaz bunun için size diye bir şey vardır
console.log(navsSet.size)




//Set'ten bir eleman silmek
navsSet.delete('Musa')//Büyük harf duyarlıdır
console.log(navsSet)




//Set'in elemanı mı değil mi
console.log(navsSet.has('Okay')) 




//Set'in tüm elemanlarını silmek
navsSet.clear()
console.log(navsSet)




navsSet.add(15)
console.log(navsSet)
navsSet.add(15)//unique olduğundan ekleme yapmadı
console.log(navsSet)


//tekrarlayan isimler var uniqe bir şey elde ediyoruz ve bu set ile oluyor sonrasında diziye çeviriyoruz
let ca=['Özkan','Mahmut','Mahmut','Özkan','Gökhan','Özcan'];
console.log(new Set(ca));

console.log([...new Set(ca)]);



const diller = [
    'Türkçe',
    'İngilizce',
    'Arapça',
    'Kürtçe',
    'Fince',
    'Çince',
    'Arapça',
    'Türkçe',
    'İngilizce',
    'İngilizce',
    'İngilizce',
    'Türkçe'
]

const dilSet = new Set(diller)
console.log(dilSet)

const counts = []

for (const l of dilSet) {
    const filtDiller = diller.filter((lng) => lng === l)//burası dizi döndürür o yüzden aşağıda uzunluğu alınır
    console.log(filtDiller)
    counts.push(
        {
            lang: l,
            count: filtDiller.length
        })
}
console.log(counts)

console.log(dilSet.size) //SETİN BOYUTUNU ALMAK İÇİN SİZE KULLANILIDI

//KÜMELERİN BİRLEŞİMİ (UNİON OF SETS)
const A = [1, 2, 3, 4, 5, 6]
const B = [6, 5, 4, 3, 2, 1, 9, 8, 7]

const union = [...A, ...B]
const unionSet = new Set(union)
console.log(unionSet)



//KÜMELERİN KESİŞİMİ (İNTERSECTİON OF SETS)
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let b = [9, 8, 7, 6, 5]

let aa = new Set(a)
let bb = new Set(b)

let c = a.filter((num) => bb.has(num))
let cc = new Set(c)
console.log(cc)

//KÜMELERİN FARKI
let aaa = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let bbb = [9, 8, 7, 6, 5]

let aaaa = new Set(a)
let bbbb = new Set(b)

let ccc = aaa.filter((num) => !bbbb.has(num))
let cccc = new Set(ccc)
console.log(cccc)


//NOT::: SET() METODUNDA GET YOKTUR


//--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--

//MAP
//Obje de key olarak sadece String ya da sembol veriliyordu burada istediğmiz veri türünü verebiliriz
//set(key,value),get(key),has(key),delete(key),clear(),size() metodları kullanılabilir



//Boş map oluşturma
const map = new Map()
console.log(typeof map)
console.log(map)


//Map'e eleman ekleme
map.set('name', 'tayfun')
map.set(0, 'Ahmet')
console.log(map)
console.log(map.get('name'))//Altta bahsedilecek
console.log(map.get(0))


//dediğimiz gibi key olarak farklı veri türleri tutabilir
const mapp = new Map()
mapp.set(true, 'bool1')
mapp.set(false, 'bool2')
mapp.set('str', 'String')
mapp.set(1, 'number')
console.log(mapp)
// Değerleri almak için mapp.get(key)

//Map'in boyutu 
console.log(mapp.size)//4 Dönecek


const mapi = new Map()
mapi.set(true, 'bool1')
mapi.set(false, 'bool2')
mapi.set('str', 'String')
mapi.set(1, 'number')
mapi.set('1', 'sayıcıl')


console.log(mapi)
console.log(mapi.get('1'))// Key isimi boolean ise direkt yazılır string ise tırnak içinde yazılır
console.log(mapi.size)//Buradaki size bir fonksiyon değildir kullanımı karıştırılmamalı şöyle yazmamalıyız size()



//NOT::Obje de kabul ediliyor gibi durabilir ama öyle değil obje de key string olarak depolanır
const obj={}
obj['1']='Ahmet'
obj[1]='Mehmet'//bu ve üsttekini eşit saydığı için yani iki key de aynı şey string yani
obj[true]='True'
obj['true']='True'
console.log(obj)



//Key olarak obje kullanan map
const özkan = {
    name: 'Özkan',
    age: 23
}
const özcan = {
    name: 'Özcan',
    age: 25
}
const gökhan = {
    name: 'gökhan',
    age: 21
}

const mapo = new Map()
mapo.set(özkan, 123)//Key'ler obje olacak burada
mapo.set(özcan, 321)
mapo.set('gökhan',213)//Bu kısım obje olarak alınmayacak haberimiz olsun

console.log(mapo)
console.log(mapo.size)

console.log(mapo.get(özkan))//obje gönderildi value değerine ulaşmak için



//OBJE İLE ALAKALI BİR DURUM
// özkan.surname='taşkıran'
// for (const keys of mapo.keys()) {   //Referans alıyor
//     console.log(keys)
// }





//her map.set cağrısı map'in kendisini döndürür bu yüzden chain olarak çağırmak mümkündür
mapo.set('Musa', 100)
    .set('Can', 200)

console.log(mapo)



//Map'i iterate etmek
//3 farklı yolu vardır map.keys(),map.values(),map.entries()
console.log(mapp.keys())
console.log(mapp.values())
console.log(mapp.entries());

//mapp.keys().forEach(v=>console.log(v));//Hatalı kullanım mapp.keys()'in diziye dönüştürülmesi gerek
[...mapp.keys()].forEach(v => console.log(v))//Bir üsttekine noktalı virgül eklemek gerek


let mape = new Map()
mape.set('Özcan',25)
    .set('Gökha',21)
    .set('Özkan',23)
    .set('Neriman',29)
    
console.log(mape)
for (const key of mape.keys()) {
    console.log('Key:',key)
}
//Valuelar aynı şekilde de iterate edilebilri mapin kendisi de   




// let mapl=new Map(projeAlice,98521)
// console.log(mapl)
// BURASI GEÇEN KARŞILAŞTIĞIM BİR DURUM ÇOK ÖNDMELİDİR
// MAP'E ELEMAN ATARKEN BU ŞEKLİDE YAPILMAZ NASIL MI YAPILIR
let mapl=new Map([['projeAlice',95821],['projeMarry','87537'],[15492,'projeClark']]) //
console.log(mapl)
console.log(mapl.get('projeAlice'))





//Objeden map oluşturma
const musa = {
    name: ['Musa', 
        'Yavşak'
    ],
    telefon: [
        {
            ev: '053456872',
            is: '055415488'
        }
    ]
}

const mapa=new Map()
const mappp = new Map(Object.entries(musa))
console.log(mappp)
console.log(mappp.get('name'))








//Map'ten obje'ye dönme
const m = [
    ['name', 'Metin'],
    ['surname', 'Toğcu']
]

console.log(Object.fromEntries(m))
console.log(Object.fromEntries(m.entries()))

//İkisi de aynı işi yapıyor arada bir hatırlamak gerek o yüzden tekrar bakılmalıdır





// BU KISIM BİRAZ KAFA KARIŞTIRICI TEKRAR TEKRAR BAKILABİLİR
// const tayfun = {
//     name :'tayfun',
//     surname : 'erbilen'
// }

// const serdar = {
//     name :'Özkan',
//     surname : 'taşkıran'
// }


// const maph=new Map(
//     [
//         [
//             'name','tayfun'
//         ],
//         [
//             'surname','erbilen'
//         ]
//     ]
// )
// console.log(maph.get(name))

// Maph yapısı yukarıdaki tayfun objesi ile aynı şey  
// const mpa = new map(Object.entries(serdar))
// Bu şekilde ile dönüşüm işlemi yapılır

// Yukarıdaki kod parçasında, maph adında bir Map nesnesi tanımlanmıştır.
// Map nesnesi, JavaScript'te bir anahtar-değer koleksiyonunu temsil etmek için kullanılır.
// Map nesnesi, oluşturulurken bir dizi (Array) parametresi alır.
// Bu dizi, içinde anahtar-değer çiftlerinin bulunduğu alt dizilerden oluşur.
// Her bir alt dizi, [anahtar, değer] şeklinde bir formata sahiptir.






/*
Obje'den Map Oluşturma:
Bir objeyi temel alarak bir Map oluşturmak için Object.entries() yöntemini kullanabiliriz. Bu yöntem, objenin her bir anahtar-değer çiftini içeren bir dizi döndürür. Bu diziyi Map yapısına dönüştürebiliriz.

Örnek:

javascript
Copy code
const obj = { key1: 'value1', key2: 'value2', key3: 'value3' };
const map = new Map(Object.entries(obj));
console.log(map);



Map'ten Obje Oluşturma:
Bir Map'ten bir obje oluşturmak için Object.fromEntries() yöntemini kullanabiliriz. Bu yöntem, Map'in her bir anahtar-değer çiftini içeren bir dizi döndürür. Bu diziyi objeye dönüştürebiliriz.

Örnek:

javascript
Copy code
const map = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']
]);
const obj = Object.fromEntries(map);
console.log(obj);

*/




//!Enes Bayram'dan  Alınan Kısım
// Array'lerin bir alternatifidir. Bir dizi türüdür mapler
// Farkı key-value çifti ile çalışırlar

const map1 = new Map(); //NEW keywordu çok önemlidir. Map oluşturmak için kullanılır OOP ile ilgildir.
map1.set(true,'Doğru')
map1.set(5,'String')
map1.set([1,2,3],{fn:'Enes',ln:'Bayram'})
//! NOT:: Map'e değer setlerken key-value çiftinin veri tipi herhangi bir veri tipinde olabilir

//Değer atamak için set metodu kullanılır

const map2 = new Map()

map2.set(34,'İstanbul')
map2.set(35,'İzmir')
map2.set(6,'Ankara') //06  veya  01 yazınca hata veriyor. Başında 0 olması hata sebebi
map2.set(1,'Adana')


//Değer almak için get metodu kullanlır
//Bu arada get bir değeri return eder

console.log(map2.get('06'))


// Map'in içinde ne kadar değer var
// SİZE kullanılır 

value = map2.size;

//  Bu arada size bir property dir yani metod değil parantez kullanılmadı


// Map içinden değer silmek
// Delete ile yapılır
map2.delete()


// Map'in içinde değer sorgulama
// True veya False döner. Aranan key de bir değer varmı
map2.has(35)



// Map üzerinde dönmek For Of ile Dönebiliriz

for(let value of map2){
    console.log(value)  //Buradaki value Dizi Döner 
}

// O yüzden burada dizi şeklinde key-value çiftini aldık. 
// Ezber yok Desctruction mantığını kullandık yani
for( let [key, value] of map2){
    console.log(key,value)
}



// Keys Metodu iile Map'in Keyleri alınır.

const keys=map2.keys()
console.log(keys)

// keys.forEach ile dönemiyoruz. Çünkü bu bir Array değil
// Array.from() ile çözülebilir

let kys=Array.from(map2.keys())
kys.forEach(key=>console.log(key))


// Value'ları nasıl Alacaz Peki
// get metodu bana key'i ver sana value'yu dönerim der 
kys.forEach(key=>console.log(key, map2.get(key)))


// Sadece Value'ları istersek
for(let value of map2.values()){
    console.log(value)
}


// ? MAP'ten ARRAY'e ÇEVİRMEK
const array = Array.from(map2) //BURADA ARRAY İÇİNDE ARRAY VAR OLUR
console.log(array)

// ARRAY DÖNÜŞÜMÜ YAPILINCA OLAN
const arr=[
    [34,'İstanbul'],
    [35,'İzmir'],
    [6,'Ankara'],
    [1,'Adana']
]

array.forEach((deger)=>{
    console.log(deger)
})

// Sadece Key'ler içinde dönmek aynı örnekten ya da Value'ları 
// Value'lar için 0 yerine 1 yazmak yeterli olur çünkü dizi index mantığına göre her bir eleman olan dizinin 0.indexi key 1.indexi value olur.

array.forEach((deger)=>{
    console.log(deger[0])
})


// ARRAY'den MAP'e ÇEVİRMEK
const myMap = new Map(arr)
console.log(myMap)




// !DİKKAT EDİLMESİ GEREKEN BİR KONU
//* Key Olarak verilen referans tipleri ram bellekte farklı yerler olarak algılanması yüzünden Undefined dönen yerler olur. Nasıl mı?
//* Referans tip dediğmiz obje de olabilir dikkat edilmesi gereken bir diğer husus.
map2.set([1,2,3],'Array')
console.log(map2.get([1,2,3])) //Burası UNDEFİNED döner DİKKAT

// Çözüm nasıl peki 
let dKey=[1,2,3]
map2.set(dKey,'ARRAY')
console.log(map2.get(dKey))






// NOT::MAPLAR GENELDE OBJELERE DAHA YAKIN İKEN SETLER GENELDE ARRAYLARE DAHA YAKIN KULLANIM SAĞLAR.
// SET ZATEN KÜME DEMEK
// DİZİLERİN ALTERNATİFİDİR.Bir DEğeri yalnız bir kere tutar.


// MAP İLE AYNI KULLANIMI SUNAR SADECE BİR DEĞERİ TEK BİR KERE TUTAR UNİQUE OLARAK YANİ



// SETLER

const seet = new Set();

seet.add('Enes')
seet.add(true)
seet.add(3.14)
seet.add(7)
seet.add({username:'Enes',password:'enes123'})
seet.add([1,2,3,4,5])

// Size ile boyutu alınır
console.log(seet.size)
seet.add(true)
seet.add(3.14)
console.log(seet.size)


// delete ile değer silinir.
seet.delete('Enes')
console.log(seet.size)


//!ÇOK ÖNEMLİ::REFERANS TİPLER SİLİNMESİ YUKARIDAKİ GİBİ YAPILMAZ.
seet.delete([1,2,3,4,5]) // SİLMEZ
console.log(seet.size) 

//has ile bir değerin varlığı sorgulanır
console.log(seet.has('Enes'))

// For- Of Döngüsü
for(let value of seet){
    console.log(value)
}

// Set - Array Dönüşümü
const values = Array.from(seet)

values.forEach(e=>{
    console.log(e)
})


// Array - Set Dönüşümü
let ar=[1,2,3,'Enes',{f:'Ali',p:123},[9,8,7,6],1,2,3,4,5]
const seat=new Set(ar)

// Aynı Değerleri Bİr kere Alacak
console.log(seat)




