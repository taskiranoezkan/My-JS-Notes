//DESTRUCTURİNG VE SPREAD
//Objelerde Ve Dizilerde kullanabileceğimiz mekanizmalardır


//Destructuring-->Şeklini bozma
//Spread-->Dağılma,yayma
//Rest-->Kalan, geri kalanın tamamı


//Destructuring
//Dizilerin ve objeleri unpack etmek için yani çıkarmak için ve farklı bir değişkene atamak için kullanılır
//APİ'lerle çalışırken kullanılır genelde API'dan JSON formatında obje gelir ve bunu istediğmiz elemanı alırken objeden ya da diziden onun için kullanılır

//Normalde
const numbers = [10, 11, 12, 13, 14, 15, 16]
console.log(numbers[0])//10
console.log(numbers[1])//11

//Destructuring ile
const [nummber1, nubmer2] = numbers //Köşeli parantez diziden eleman aldığımız için kullanıldı ayrıca dizi olduğundan isimlendirme bize kalmış
console.log(nummber1)//10
console.log(nubmer2)//11



const [...numbersson] = numbers//Tüm elemanlarını alır burada problem yok
console.log(numbersson)

const [elem1, ...gerikalan] = numbers //Gayet mantıklı bir şekilde çalıştı
console.log(elem1)
console.log(gerikalan)

//Şimdilik bilmiyorum rest ya da spread operatörünü kullanmak istedim yalnız olmadı amacım son elamanı desuctruction ile almaktı
// const [...hepsi,soncu]=numbers  HATA VERİR
// AMA BÖyle yapıldığını öğrendim
/*
const arr = [1, 2, 3, 4, 5];
const [, , , , lastElement] = arr;
console.log(lastElement); // 5
*/


//ŞU KISIM ÇOK ÖNEMLİ BENİM İÇİN DAHA ÖNCE BİR ALGORİTMA SORUSUNDA KARŞIMA ÇIKTI
// İç içe dizilerdeki elemanları farklı değişkenlere atmak ve unpack etmek istersek bunu kullanırız
const stack = [
    ['HTML', 'CSS', 'JAVASCRİPT'],
    ['PHP', 'MYSQL', 'NODEJS']
]
const [frontend, backend] = stack
console.log(backend)

//Dizinin içindeki dizideki elemana ulaşmak için
const [a, b, c] = frontend
console.log(a, b, c)


//ikinci yol genel olarak bu kullanılır
const [[firstTech, secondTech], backendo] = stack
console.log(firstTech) //HTML alır
console.log(secondTech) //CSS alır
console.log(backendo[0]) //PHP alır


//eğer bir değeri es geçmek iatiyorsak virgül(,) kullanırız
const diller = [
    ['HTML', 'CSS', ['JAVASCRİPT', 'REACT', 'REACT NATİVE']],
    ['PHP', 'MYSQL', 'NODEJS']
]
const [[, , [, , fir]], bacend] = diller
console.log(fir)
console.log(bacend)





//NOT::Eğer dizinin içinde değerler undefined ise varsayılan bir değeri de destructuring yaparken kullanabilriz
const names = ['Özkan', undefined, 'Gökhan', 'Oktay']
let [first, second = 'Özcan', , fourty] = names
console.log(second)
//NOT::null değer olunca yapmaz 
console.log(names)//Orijinal dizi bozulmadı


//Dizideki tüm elemanlar unpack yapılamaz yani yapmamak lazım  
const didi = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const [sifir, , iki, ...rest] = didi
console.log(rest)
console.log(sifir, iki)




//Destructuring during iteration : Yineleme sırasında şeklini bozma
const ulkeler = [['Türkiye', 'Ankara'], ['Irak', 'Erbil'], ['Finlandiya', 'Helsinki'], ['İtalya', 'Roma'], ['Fransa', 'Paris'], ['Azerbaycan', 'Bakü'], ['Bulgaristan', 'Sofya'],]

for (const ulkeleer of ulkeler) {
    console.log(ulkeleer)
}





for (const country of ulkeler) {
    console.log(`Ülke: ${country[0]}-Başkent:${country[1]}`)
}
console.log('****************************************************')
for (const [contryy, capitl] of ulkeler) {
    console.log(`Ülke: ${contryy}-Başkent:${capitl}`)
}


//BURAYI ANLAMADIM AMA NEDENİNİDE ANLAMDIM ama şöyle bir anlamı olabilir eğer ki const[first,second,third] şeklinde kullanılmayıp da const first,second,third şeklinde olsaydı bu bize fullstack dizisinin alt dizilerini iterate etmeye yarayacaktı.
// lakin burada ilk dediğimiz gibi kullanılması her alt dizininin ilk elemanlarına denk getiriyor.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'REACT'],
    ['NODE', 'EXPRESS', 'MONGODB'],
    ['HTTP', 'SMTP', 'FTP']
]
for (const [first, second, third] of fullStack) {
    console.log(first, second, third)
}
//Burada react hiç yazılmayacak çünkü döngüde first olarak önce html sonra node yazılır ve devam eder sonrası malum işte




//OBJELERDE DESTRUCTURİNG YAPMA
//Objelerden bir property'i farklı bir değişkene aktarmak istediğmizde bu sefer dikkat etmemiz gereken yer  key ismi ne ise onun aynısını yazmak gerek 
const user =
{
    name: 'Özkan',
    surname: 'Taşkıran',
    age: 23,
    isMarried: false,
    pets:
    {
        cats: ['Pısik'],
        dog: ['Zıngo']
    }
}

const { surname } = user //Property'nin key'i ile değer alınabilir zorunlu
console.log(surname)
//surname yerine herhangi bir değişken adı kullanılırsa undefined döner ona göre 



//Renaming during structuring-->Yeniden adlandırma
const { name: isim } = user //Artık isim ile ulaşacağım property de halen  name diye geçiyor sadece çağırırkene
console.log(isim)

//Eğer key bulunmazsa varsayılan değer olarak dönmesi
const { name, adana = 'Adana' } = user
console.log(adana)
user.adana = 'Ceyhan'


user.eleman = 'Eleman yok'
const { name: nav, adana: Adana, eleman } = user
console.log(nav, Adana, eleman)




//Normalde
function multiply(num1, num2) {
    return num1 * num2
}
console.log(multiply(10, 10))

//peki ya numberslar dizi olsaydı
const numb = [10, 10]
function multiply2(numb) {
    return numb[0] * numb[1]
}
console.log(multiply2(numb))



//farklı bir durum desuctrcting ve dizi de kullanımı garip bir şey tekrar bakılabilirse iyi olur
const numbb = [10, 10]
function multiply3([numbe1, numbe2]) {
    return numbe1 * numbe2
}
console.log(multiply3(numbb))





const ben = {
    name: 'Özkan',
    surname: 'Taşkıran',
    age: 23,
    isMarried: false,
    pets:
    {
        cats: ['Pısik'],
        dog: ['Zıngo']
    }
}

function showUserInfo() {
    return `Merhaba ben ${ben.name} ${ben.surname} ${ben.age} yaşındayım. ${ben.pets.cats.length} tane kedim var ve adı ${ben.pets.cats[0]}`
}
console.log(showUserInfo(ben))




function showUserInfo1({ name, surname, age, pets }) {
    return `Merhaba, ben ${name} ${surname},${age} yaşındayım ve ${pets.cats.length} kedim var onun da adı ${pets.cats[0]}`
}
console.log(showUserInfo1(ben))



/*
Konuya uygun olan ve alt hatırlatma için :Destructuring
const {pets:{cats:kedi,dog}} = ben
console.log(kedi)
console.log(dog)
*/

function showUserInfo3({ name, surname, age, pets: { cats: kedi, dog } }) {
    return `Merhaba, ben ${name} ${surname},${age} yaşındayım ve ${kedi.length} kedim var onun da adı ${kedi} ayrıca ${dog.length} köpeğim var o da ${dog}`
}

console.log(showUserInfo3(ben))




//NoT::Rest operatörü burada da kullanıllır
const brnn = {
    name: 'Özkan',
    surname: 'Taşkıran',
    age: 23,
    isMarried: false,
    pets:
    {
        cats: ['Pısik'],
        dog: ['Zıngo']
    },
    skills: ['PHP', 'HTML', 'JAVASCRİPT'],
    hobbies: ['Bicycle', 'Reading', 'Walking']
}


function showUserInfo4({ name: nm, surname: srnm, age: agg, pets: { cats: ct, dog: dg }, ...otherd }) {
    return `Merhaba, ben ${nm} ${srnm},${agg} yaşındayım ve ${otherd.skills} biliyorum ve de ${otherd.hobbies} hoşlanığım şeylerdir `
}
console.log(showUserInfo4(brnn))


//dibin dibi
function showUserInfo5({ name: nm, surname: srnm, age: agg, pets: { cats: ct, dog: dg }, skills: [skill1, ...othersSkills], ...otherd }) {
    return `Merhaba, ben ${nm} ${srnm},${agg} yaşındayım ve ${skill1} konusunda iyiyim lakin ${othersSkills} alanında gelişmem lazım `
}
console.log(showUserInfo5(brnn))





//NOT::Desuctrucor operatörü kullandıktan sonra kalan elemanları bir dizi olarak almak istersek rest operatörü kullanılır
//spread ve rest aynı 



// Arrow fonksiyonda da kullanımı mevcuttur 





// DESCTRUCTURİNG
// "Function Destructuring" (fonksiyon yıkımı), JavaScript'te bir fonksiyonun parametrelerini daha kolay ve esnek bir şekilde almak için kullanılan bir özelliktir.
// Destructuring, bir nesne veya dizi içinden spesifik özellikleri veya elemanları çıkararak, bu değerleri ayrı değişkenlere atama yapma işlemidir.
// Fonksiyon yıkımı, fonksiyonun argümanlarına yapılan özel bir syntax kullanarak yapılır.
// Bu sayede, argümanlar daha açık bir şekilde belirtilebilir ve bu özellik, özellikle karmaşık fonksiyonlarda daha düzenli ve okunabilir kod yazmamıza yardımcı olur.
// Fonksiyon yıkımını iki türlü kullanabiliriz: nesne yıkımı ve dizi yıkımı.



// Nesne Destructuring:
// Nesne yıkımı, fonksiyon parametreleri olarak gönderilen nesne içinden belirli özellikleri çıkararak kullanmamızı sağlar.

function printPersonInfo({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

const person = {
    name: 'John',
    age: 30,
    country: 'USA'
};

printPersonInfo(person); // Sonuç: "Name: John, Age: 30"

//Tüm parametreleri varsayılan değerler ile çağırmak istersek
printPersonInfo({})





//   Dizi Destructuring:
//   Dizi yıkımı, fonksiyon parametreleri olarak gönderilen diziden belirli elemanları çıkararak kullanmamızı sağlar.
function printNames([firstName, lastName]) {
    console.log(`First Name: ${firstName}, Last Name: ${lastName}`);
}

const namees = ['John', 'Doe'];

printNames(namees); // Sonuç: "First Name: John, Last Name: Doe"


//Tüm parametreleri varsayılan değerler ile çağırmak istersek
printNames([])






//! Enes Bayram'dan alınan kısım

// DESTRUCTION ARRAYLERDE

//todo: NORMALDE BU ŞEKİLDE YAPARDIK

let langs=['c#','C++','Java','Javscript','Python']

let lang1,lang2,lang3,lang4,lang5

lang1=langs[0]
lang2=langs[1]
lang3=langs[2]
lang4=langs[3]
lang5=langs[4]


console.log(lang1,lang2,lang3,lang4,lang5)


//todo:DESTRUCTION İLE 

let [langs1,langs2,langs3,langs4,langs5]=langs
console.log(langs1,langs2,langs3,langs4,langs5)

// index numaraları ile değerleri sırasıyla verilen değişkenlere setler 





const calculate = (a,b)=>{

    const topla= a+b;
    const cikar= a-b;
    const carp= a*b;
    const bol= a/b;

    const array = [topla,cikar,carp,bol]

    return array;

}
 
// Calculate metodu bir dizi döner o yuzden de böyle yazılabilir.

let [x,y,z,q]=calculate(10,2)

console.log(x,y,z,q)






// DESTRUCTION OBJELERDE


//todo: NORMALDE BU ŞEKİLDE YAPARDIK

const personn={
    fn:'Enes',
    ln:'Bayram',
    salary:5000,
    age:23
}

let isimm,soyisimm,maass,yass

isimm=personn.fn
soyisimm=personn.ln
maass=personn.salary
yass=personn.age

console.log(isimm,soyisimm,maass,yass)


//todo: DESTRUCTION İLE

//! İlk akla gelen yol bu olur ama yanlıştır bu yol çünkü EŞLEŞME yapamaz nedeni ise objenin key-value şeklinde çalışmasıdır.
let {is,soyis,mas,ya}=personn
console.log(is,soyis,mas,ya) //Hepsi undefined döner

// Peki nasıldır doğrusu
let  {fn,ln,salary,age}=personn
console.log(fn,ln,salary,age)

// Peki objedeki isimler ile değilde farklı key isimleri ile kullanmak isersek nasıl yapıcaz
let {fn:iss,ln:soyss,salary:slry,age:ys}=personn
console.log(iss,soyss,slry,ys)



// Spread operatörü::<Dilimlemek anlamındadır.
function add(a,b,c,d){
    console.log(a+b+c+d)
}

add(10,20,30,40)

// Farzedelim ki bir dizinin elemanlarını fonksiyona parametre olarak geçirmek istiyoruz
let dizis=[11,21,31,41]

add(dizis[0],dizis[1],dizis[2],dizis[3])



add(...dizis) // Bunun mantığı dizis[0],dizis[1],dizis[2],dizis[3]
   
//Üç nokta bir fonksiyonun belirsiz sayıda argümanı kabul etmesini sağlar.
function adde(...dizis) {
    let total = 0;
    for (let num of dizis) {
        total += num;
    }
    return console.log(total);
}

adde(...dizis)

// ÖRNEK
const dill=['C#', 'Java']
const dilll=['Javascript', 'Python']
// İki diziyi birleştirmek istediğimizi varsayarsak 
// Normalde
const dillerr=[dill,dilll]
console.log(dillerr)
// Ya da 
const dil=[dill[0],dill[1],dilll[0],dilll[1]]
console.log(dil)

// Rest Operatörü ile (YANİ SPREAD OPERATÖRÜ DEMEK ÇÜNKÜ İKİSİ ARASINDA PEK BİR FARK YOK YAPTIĞI İŞLER FARKLI)
const di=[...dill, ...dilll]
console.log(di)



// !NOT:: Bir fonksiyonda parametre olarak da kullanılabilir. Yukarıda kullanılmış hali mevcut.

// DESTRUCTION ile kullanımı
const nums=[1,2,3,4,5,6,7,8,9]

let [t,k,...kalanlar]=nums
console.log(t,k)
console.log(kalanlar)


// Örnek Hamallık Normalde DİZİ KOPYALAMA
const dd=['Kemal','Hasan','Murat','Salih']
const dd1=[]

dd1[0]=dd[0]
dd1[1]=dd[1]
dd1[2]=dd[2]
dd1[3]=dd[3]


console.log(dd1)


// Spread Operatörü ile 
let dd2=[]
dd2=[...dd]
console.log(dd2)