//Console Metodları

//Console metodlarını console'a bir çıktı vermek için kullanırız yani tarayıcı konsoluna
//Document write ise çıktıyı dökümanın dökümanına yazdrımak istediğmizde kullanırız
// Her iki metod da test ve debug için kullanılır
// console metdodu en popülar olan metod
// getElementById() metodunu DOM'la etkileşime girmek istediğimizde kullanırız

// Bir API'den gelen veririnin ne olduğunu anlamaya yarar

console.log('30 Days of Javascript')


console.log('Tayfun','Erbilen','Prototürk')



// JavaScript'teki console metodlarının % işaretiyle kullanımı, özel bir biçimlendirme amacıyla kullanılır.
// Bu biçimlendirme işareti, %s, %d, %f vb. gibi yer tutuculara karşılık gelen değerleri alır ve çıktıda bu yer tutucuların yerine geçer

console.log('%d Days of Javascript',30)


// Console CSS uygulamak
console.log('%cDUR','color:red')









// console.warn()::Uyarı vermek için kullanılır

console.warn('Uyarı Mesajı')






// console.error():: Hata mesajı vermek için kullanılır
console.error('Error')

// console.table()::Tablo biçiminde vermek için kullanılır
//Dizi veya obje almalı
let names=['Özkan','Özcan','Gökhan']
console.table(names)





// console.time()::Bir işlemin ne kadar sürdüğünü kontrol eder
// console.timeEnd()::İşlemin başlama süresinden bitiş süresine kadar olan süreyi milisaniye cinsinden verir
console.time('calculate 1m array');
new Array(10e5).fill().map((value,index)=>index);
console.timeEnd('calculate 1m array');


// console.info() :: Console.log() ile aynı


// console.assert()::assert iddia demek ::Koşul yerine gelirse hiç bir şey olmaz  eğer false olursa hatayı ekrana yazar
let a=5
let b=6
console.assert(a<b, 'a b den buyuk değil')







const namelar=['Özcan','Özkan','Gökhan','Oktay','Sevkan']



const countries=[
    ['Finland','Helsinki'],
    ['Sweden','Stockholm'],
    ['Norway','Oslo']
]

const user={
    name:'Özkan',
    title:'Student',
    age:23,
    country:'Türkiye',
    city:'Ankara'
}

const user1={
    name:'Özlem',
    title:'Student',
    age:25,
    country:'Türkiye',
    city:'Ankara'
}


const user2={
    name:'Gökhan',
    title:'Student',
    age:21,
    country:'Türkiye',
    city:'Ankara'
}
console.group('Names')
console.log(namelar)
console.groupEnd()



console.group('Countries')
console.log(countries)
console.groupEnd()






console.group('Users')
console.log(user)
console.log(user1)
console.log(user2)
console.groupEnd()




// console.count() ::BİR fonksiyonunnkaç kez çağrıldığını gösterir :KAÇ KERE ÇAĞRILDIĞINI BELİRLİYOR
const test = ()=>{
    console.count('Test Called!')
}
test()
test()
test()

// console.clear()::tarayıcı konsolunu temizelemeye yarar
// console.clear()