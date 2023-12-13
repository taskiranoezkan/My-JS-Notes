//REGULAR EXPRESSİONS--->Düzenli İfadeler
//Düzenli ifadeler ya da kısltma olarak Regex küçük bir programlama diliymiş
//Verideki deseni bulmamıza yarayan küçük bir dilimiş
//JavaScript'e özgü bir şey değil
//Ne için kullanılır::Farklı veri türlerinde bizizm desenimizin olup olmadığını kontrol etmek için kullanırız
//JavaScript'te regex'i kullanmak için ya regex constructor'unu yani regex classını kullanabiliriz ondan türetebiliriz ya da bir regex deseni oluşturmak için iki tane slash(//)
//sonuna istersek flag denilen bir bayrak koyabiliriz bu opitional bir şey yani seçenek 
//Bayraklar::g,i,m,s,u,or,y::arama tipini belirler::global,case insensetive,multline

//Regular Expressions iki parametre alır bir tanesi gerekli ve opsiyonel olan bayrak
//aranan desen text olabilir ona benzer bir şey de olabilir


// REgex:::bilinmeyeni bulmak

//1.YOL
//Regex Constructor İle Model Oluşturma
let model='Love'
let regEx=new RegExp(model)
let rego=new RegExp('love','gi')


//Bayrak eklemeli 
let flag='gi'
let regEx1=RegExp(model,flag)//let regEx=new RegExp('Love',flag)



//2.Yol Regex deseni ile model oluşturmak
let rege = /love/gi


// Regexin altında builtin fonksiyonlar var bunlar yerleşik fonksiyonlar olarak adlandırılır

// test()::içerisinde geçip geçmediğni true veya false olarak değer döner 
let kufur=/salak/
let comment = 'sen salak mısın kanka'
console.log(kufur.test(comment))


// match():::Eşleşenleri almak istersek, match bir array döndürür eşleşenlerle ilgili olarak, Tamamını dönürmüyor eğer flag koyarsak hepsini döndürür

let com='I love javascript and love world '
let pat=/love/ig
console.log(com.match(pat))

// search():::Eğer bulursa indexini bulamazsa da -1 döner ilk bulduğunun indexini döner
console.log(com.search(pat))




// replace():::Bir textin içindekileri belli bir desenle değiştirebilriz
// Dik çizgi veya
const txt='Python is the most beatiful language that a human begin has ever created.\
I recommend python for a first programmin language'

matchReplaced=txt.replace(/Python|python/g,'JavaScript')
// matchReplaced=txt.replace(/(P|p)ython/g,'JavaScript') şeklinde de olabilir ama python yazıp i flagini kullanmak yeterdi
console.log(matchReplaced)




// NOT::Replace ile regex birlikte kullanılırken g flagi ile işlem hallaedilmeli eğer ki  regex yoksa replaceAll metodu  da aynı işi yapar


// [a-c]-->a veya b veya c
// [a-z]-->a dan z ye latin harfler
// [A-Z]-->A dan Z ye latin harfler
// [0-3]-->0 veya 1 veya 3
// [0-9]-->0 dan 9 a kadar
// [A-Za-z0-9]-->A dan Z  ye kadar olan veya a dan z ye kadar olan veya 0 dan 9 a kadar olan herhangi bir karakter



let str = 'Ben 23 yaşındayım ve 1999 yılında doğdum'
console.log(str.match(/[0-9]/g))
// \ ile yani back slash ile karakterden kaçınmak

// \d ile stringin içindeki sayılar ile eşleşecek
// \D ile sayı dışında bütün elemanalrı içercek

// . ile herhangi bir karakter \n karakteri hariç  dışında

// ^ şununla başlar örnek olarak r'^love'

// r'[^abc]' a veya b veya c ile başlamayan
let firstName='1tayfun'
console.log(/^[a-z]/.test(firstName)) //harf ile mi başlıyor
console.log(/^[a-z]+$/.test(firstName)) //harf ile mi başlıyor ve de harf ile mi bitiyor
console.log(/^[a-z0-9]+$/.test(firstName)) //harf ile mi başlıyor ve de harf ile mi bitiyor ve de sayılar da devreye girer
console.log(/^[a-z0-9 ]+$/.test(firstName)) //harf ile mi başlıyor ve de harf ile mi bitiyor ve de sayılar da devreye girer ve de boşluk karakteri de

//NOT:: Nokta da eklenebilir

// + bir ya da daha fazlasını temsil ediyor 


// $ Şununla biter dermektir


// * Hiç olmayadabilri ya da oladabilir birden fazla

// ? ya hiç yok ya da bir tane var opisyonel olmasını sağlar

// \b Kelime sınırlayıcı


//{3} 3 karakterli bir şwy ile eşleşir

// {3,} en az üç karakterli

// {3,8} üç ile sekiz karakterli olanlar ile eşleşiyor

// | ya şu ya bu demek

// () grupları yakalamak için kullanılıyor



let star = 'Ben 23 yaşındayım ve 1999 yılında doğdum'
console.log(star.match(/\d+/g)) 
console.log(star.match(/\d{2}/g)) 

// \b de boundry diye bir şey var bakılması gerekmez ama geçiyor yani
// console.log(star.match(/\b\d{2}\b/g)) 
// console.log(star.match(/\b\d{2,4}\b/g)) 



// Square Bracket
let cons='Apple techlonogies very most and popular but apple is expensive'
console.log(cons.match(/[A|a]pple/g)) // veya işareti olmasa da oluyor


// ? için örnek
let name='Tayfun'
console.log(/a?n$/.test(name))
// a oladabilir olmayadabilir opisyonel yani



// Period(.)
const pattern = /[a]./g
const tct='Apple and banana are fruits'
const matches=tct.match(pattern)

console.log(matches)


// zero or more times(*)

const tvt = 'I am sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail'
const patt = /[Ee]-?mail/g
console.log(tvt.match(patt))





// Not :: ^ ve $ varsa kessin eşleşme olması beklenir


//Kullanıcı ismi geçerliliği 
function is_valid_variable(str){
    console.log(/^[a-z_]+$/i.test(str))
}

is_valid_variable('tskrn_ozkan')



// Groups

let date = '2023-06-13'
let match=date.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/)
console.log(match.groups)
 



