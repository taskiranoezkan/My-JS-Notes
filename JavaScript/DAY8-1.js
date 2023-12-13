//DAY--8
//OBJELER ve SCOPE(KAPSAM) OLAYI
//SCOPE::Değişkene nereden nasıl erişebilriz, nerede oluşturursak nerede erişemeyiz gibi durumlara scope denir
/* Değişkenlerin kapsamları Window, Global, Local olabilir*/
/*let,const veya var anahtar kelimeleri ile tanımlanmamış bir değişkenin kapsamı window'dur */

//Window Scope::Bu pencere de her yerde erişebiliriz
//window scope tekrar bakılmalı burası garip 
a='JavaScript WindowScope'//window.a
b=101//window.b
function letsLearnWindowScope(){
    console.log('aşağıda Fonksiyon çağrıldığı için ilk bura gelecek',a,b)
    if(true){
        a='java'
        b=54
        console.log('burası yazılacak mı',a,b)
        let hgs=555
    }
}
letsLearnWindowScope()
console.log('İlk tanımlama için yazılmış fakat erişim mümkün olduğundan değişti değerler',a,b)
window.hgs=784
console.log(hgs)
//Her türlü erişim mümkün gibi görünüyor AYNI GİBİ GLOBAL SCOPE İLE




//Global Scope
//Değişken bir fonksiyonun içinde tanımlanırsa Local Scope olur eğer fonksiyonun dışında tanımlanırsa Global Scope olur. Tüm fonksiyonlar kendi içinde yeni bir Scope oluşturur.
//Bir dosyaya JavaScript kodu yazmaya başladığınızda Global kapsamdasınız demektir. Bir JavaScript dosyasında yalnızca bir Global Scope vardır
//Global kapsam içindeki değişkenlere başka bir kapsamda erişilebilir ve değiştirilebilir.
//Eğer ki if bloğunun içinde ki değişkenler let veya const kullanılmadan tanımlansaydı 
//let veya const ile tanımlanabilir
let c='JavaScript GlobalScope'
let d=10
function letsLearnGlobalScope(){
    console.log(c,d)
    if(true){       //let kullanılsaydı blok içinde erişebilirdik
         c='Python' //Eğer bu iki değişken let öneki ile tanımlansaydı local scope olurdu ve sadece burada değer alırdık
         d=100      //yani sadece burada erişim sağlayabilirdik
        console.log('nere la bura',c,d)
    }
}
letsLearnGlobalScope('Fonksiyon ne yapar',c,d)
console.log('ilk tanımlama için yazılmıs ama global scope olduğundan değer değişti',c,d)



//LOCAL SCOPE
//Belli bir kapsam içind erişimi mümkün olan değişkenler local değişkenlerdir
let e='Özkan'
let f=23
function letsLearnLocalScope(){
    console.log(e,f)
    if(true){
        let e='ÖZKAN'//Local olarak tanımlandığı için global olarak yukarıda tanımlanan değişkenlerden farklıdır
        let f=32
        console.log(e,f)
    }
}
letsLearnLocalScope()
console.log(e,f) //yukarıda global olarak tanımlanan değişkenleri yorum satırına alsak burada hata verir çünkü local olarak tanımlanan e ve f değişkenlerine ulaşamayız




//NOT::Chrome console da sadece global değişkenlere erişebiliyoruz 
let le='Let'//global
{
    let el='LET' //local
}






//NOT::var öneki sadece function da local scope onun dışında global scope
function vaar(){
    var g='İSTE'
    console.log(g)
}
//console.log('Burada değişken yazılmayacak',g)
//Hata verir o yuzden yorumlandı




if(true)
{
    var h='iste'
    console.log(h)
}
console.log('Burada yazılacak cunku function değil',h)


//Var olarak tanımlandığı için blok dışında erişim mümkün o yüzden sıkıntı çıkarır that so let kullanılmalı
//var kullanmamaya önem verilmeli peki ya const olsa :) artırma olmazdı
//var yerine let olsa blok dışında ki console.log(u) hata verir çunkü local olarak tanımlanmıştı
for(var u=0;u<=5;u++){
    console.log('u',u)
}
console.log(u)

//NOT::let veya const ile tanımlanan değişkenlerin kapsamı aynıdır tek fark yeniden atama da oluyor const ile oluşturulan değişkenler değiştirilmez veya yeniden tanımlanamaz









/*OBJECT-OBJE-NESNE*/
//Her şey bir obje olabilir ve objelerin özellikleri vardır ve özelliklerin de değerleri vardır 
//key-value şeklinde çalışırlar
//bir değişkene {} bu şekilde tanımlama yapılırsa obje olur onun dışında blok ifade eder
//Objeler içlerinde farklı veri tipleri bulundurabilirler ve key-value şeklinde çalışırlar
//Öyle ki obje içinde obje tanımlamak bile mümkündür

const user={}//boş obje oluşturma

console.log('Boş Objem',user)

const ben={
           ismim:'Özkan',
         soyadim:'Taşkıran',
           yasim:23,
        memleket:'Doğubeyazıt',
           bolum:'Computer Engineer',
       isMarried:false,
          skills:
        [
            'HTML',
            'Python',
            'Java',
            'javascript'
        ],
       'öz kardeslerim'://Burada eğerki ayrı ayrı yazmasaydım tırnak içinde yazmam gerekmezdi
        [
           {
              isim:'Özcan',
              soyisim:'Taşkıran',
             'evli mi':false,
              meslek:'Laborant'
            },
            {
               isim:'Gökan',
               soyisim:'Taşkıran',
               'evli mi':false,
               meslek:'Öğrenci'
            }          
        ],
        pc_objem:
        {
            marka:'Asus',
            islemci:'i5-11400H',
            ekrankartı:'RTX-3050',
            klavye:'RGB',
            agirlik:2000,
            'gereksiz özellik':['15.500 TL','800 $','750 £']
        },
        telefon:'xioami-redmi note-8',
        test:
        {
            deneme :'şaka lan'
        },
        'en garip arkadas':
        {
            name:'Hasan',
            surname:'Nas',
            'takma ad': 'Haso',
            'tuttuğu takım':
            {
                isim:'fenerbahçe',
                sampiyon:19,
                renk:'sarı-lacivert'
            },
            yas:22,
            özelliik:'uykucu'
        },
        getFullName : function() {
            return `${this.ismim} ${this.soyadim}`
        },
        getFullName2:()=>`${ben.ismim} ${ben.soyadim}`
    }

console.log(ben)


let getPc = () => {
    let keys=Object.keys(ben.pc_objem)
    let values=Object.values(ben.pc_objem)
    for (let i = 0; i < Object.keys(ben).length; i++) {
    console.log(`key:${keys[i]}-->value:${values[i]}`)        
    }
}
getPc()
//objeden değerlere erişmek için nokta('.') kullanılır
console.log(ben.ismim)
console.log(ben.memleket)
//Eğer ki key boşluk gibi özel bir karakter içeriyorsa [""],[''] kullanılmalı
//Boşluk veya özel karakter içermese bile yine de [""],[''] kullanılabilir
console.log(ben.skills[2])
console.log(ben["öz kardeslerim"][1])
console.log(ben.pc_objem["gereksiz özellik"])
console.log(ben["öz kardeslerim"])
console.log(ben.test.deneme)
console.log(ben["en garip arkadas"]["tuttuğu takım"].renk)
console.log(ben['soyadim'])
console.log(ben.pc_objem.marka)



//THİS İFADESİ OBJENİN METODLARINDA OBJENİN ÖZELLİKLERİNE ULAŞMAK İÇİN KULLANILMAKTADIR
//THİS OBJE İÇİNDE OBJECTNAME. İSE OBJE DIŞINDA OLAN YERLERDE OBJE ÖZELLİKLERİNE ULAŞMAK İÇİN KULLANILMAKTADIR. 


//Dinamik olarak bir değere atanırsa obje özelliklerinden biri kullanım yine [] ile sağlanır
let key='skills'
console.log(ben[key])
// NOT::Önemlidir bence tayfun erbilen de dedi ki dinamiklik için let keyName='keyadı' ile dinamik olarak değişkene ulaşabiliriz console.log(user[keyName]) keyName = 'age' olsa dinamiklik sağlanır





//getFullname ben objenin içindeki bir fonksiyon biz bunu objenin metodu olarak adlandırıyoruzz
//obje-function ilişkisi 
//this kavramı::Aslında objenin kendisidir obejnin özelliklerine erişmek için kullanılır. Genelde objenin metodlarında kullanılması tavsiye edilir.
console.log(ben.getFullName())


//NOT::arrow fonksiyonlarını obje metodu olarak kullanamıyoruz çünkü arrow'un içinde this objenin kendisini referans almak yerine windowu referans alır
//Arrow'un içinde this kavramı yoktur ama this yerine ben objenin adını kullanırsam da olur nasıl mı
console.log(ben.getFullName2())
// Fonksiyonun içinde kullanıldığı için nasıl mı sorusunun cevabıdır





/*setting new key for an object */
//yeni bir key nasıl tanımlanır//
//obje mutable'dir değiştirilebilirler değer güncellemesi de yapılabilir
//yeteneğe React eklenmesi
ben.skills.push('React')
console.log(ben.skills)
console.log(ben)
ben.title='student'
ben.country='Turkey'
console.log(ben)





person={}
//OBJEYE YENİ BİR ÖZELLİK EKLEMEK İSTERSEK
person.yeniOzellik = 'değer';
person['yeniÖzellik']='değer'
console.log(person)



/////////////////////////////////////////////////
/**34.dakikadan */
//Eğer ki son eleman için and ve gibi bir ek getirilmek istenirse formatter gibi bir şey kullanabilriz
//new Intl.ListFormat('tr',{style: 'long',type: 'conjuction'})

console.log(ben.skills)
ben.getPersonInfo = function() {
    let skillsWithoutLastOne=this.skills.splice(0, this.skills.length-1).join(',')
    let lastSkill = this.skills[this.skills.length-1]//=this.skills.at(-1) diye bir metod var sonuncuyu alır aynı işi yapar
    console.log(lastSkill)
    let skil=`${skillsWithoutLastOne} and ${lastSkill}`
    console.log(skil)
    let durum = `${this.getFullName()} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skil}`
    return durum
}
console.log(ben.getPersonInfo())

//OBJECT METHODS
//Bir objeyi manipüle etmek için methodlar bulunur
//orijinal objeyi bozmadan objeyi kopyalamak için object.assign({},ben)

let newBen=ben //Bu referanslı kopyalamak oluyor
console.log(ben)
newBen.ismim='Mahmut'
console.log(ben)


let newBen2=Object.assign({},ben)
let newBen3={...ben}//bu şekilde de oluyor yani referanssız kopyalama
console.log(ben)
console.log(newBen2)




//objedeki keyleri almak istersek
console.log(Object.keys(ben))

//objedeki valueleri döndürmek
console.log(Object.values(ben))


//objedeki key ve valueları birlikte almak istersek fakat bunlar arry olarak döner
console.log(Object.entries(ben))


for(let [key,val] of Object.entries(ben)) {
    console.log(key,val)//console.log(`Key=${key}-Value=${val}`) şeklinde de olurdu
}


//bir özelliğin olup olmamasını kontrol etme
console.log(ben.hasOwnProperty('country'))

//mutable olan objeyi immutable yapmak obejenin içindekiler değiştirilemez
Object.freeze(ben)


//yeni bir şey ekleyemyiyoruz ama değerleri güncellemek mümkün
//silmek de mümkün değil
Object.seal()

