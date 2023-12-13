
// DOM
// html belgesi bir js nesnesi olarak yapılandırılmıştır
// her bir html elemanı farklı öelliklere sahip
// html elementlerine js ile erişebiliriiz--->Seçebilirieiz, yeni eleman oluşturabilirişz, var olanı yanına sağına soluna bir üzerine bir şey ekleyebilriz, tamamen silebilriiz
// html elemanlarını seçmek css ile seçmeye benzer
// id, classname,etiket adı, ya da diğer nitelikler kullanarak seçim yapılabilir 

// Hem eleman oluşturabilirz hemde var olan elemanlara işlem uygualayabiliriz


//TODO:Getting Eleman By Tag Name
//SYNTAX::document.getElementsByTagName()
// HTMLCollections döner
const h1=document.getElementsByTagName("h1")
console.log(h1)

//! h1 :: HTMLCollection  olduğundan foreach çalışmaz
// h1.array.forEach(element => {
//     console.log(element)
// });


// ?BU NORMALDE ÇALIŞMASI LAZIM
// [...h1].forEach(item=>{
//     console.log(item)
// });


// console.log(h1.length) ::: Bu kullanılabilir
for (let i = 0; i < h1.length; i++) {
    console.log(h1[i])
}

//TODO:Getting Eleman By Class Name

const hh1=document.getElementsByClassName("title-1")
console.log(hh1)


//TODO:Getting Eleman Query Selector 
// Eğer etiket ismi kullanılmışsa ilk döneni alır
// query selector ve query selector all içine her zaman css seçicisi yazılır
const hhh1=document.querySelector('.title-1')
console.log(hhh1)

// QuerySelectorAll ile seçilince NodeList döner ve burada dizi metodları kullanılabilir
document.querySelectorAll('.title-1').forEach(item=>console.log(item))


//TODO:Adding Attirbute
// class, src, id, style, href, form için actions bunlar birer attirbute'dir
// htnl etiketinin özelliklerini artırmak için

let aa=document.getElementById('title')
aa.style.color = 'Blue'
aa.style.backgroundColor='Yellow'
aa.title='test-baslik'
aa.className='adana'


//TODO:Adding Attirbute using setAttirbute
let sa=document.getElementById('ttl')
sa.setAttribute('style','color: blue; background-color: yellow')
sa.setAttribute('class','adana')



//TODO:Adding class using classList
// Var olan classları ezmeden yeni class ekleme işi burada yapılır
let tt=document.getElementById('tt')
// tt.className='adana' Bu şekilde var olan classları eziyoryz

tt.classList.add('Ceyhan') //Eklemek için
tt.classList.remove('Ceyhan') //Silmek için

// bir de toggle var o da yoksa ekle varsa çıkar
tt.classList.toggle('ada')






//TODO:Adding Text to HTML Element 
let degisen=document.getElementById('degisen')
degisen.textContent = 'Yeni Başlık'

//!Normalde İnsanlar Bu textContent'i İnnerHTML ile karıştırıyormuş
// Düz yazı Eklemek istersek textContent 
// HTML Etiketi eklemek istersek innerHTML

degisen.style.color='Blue'
degisen.style.backgroundColor='YELLOW'
degisen.innerHTML='YENİ DEĞER   <u>TEST</u>'



// NOT :: VAr olanı değişrteceğimizde ya da tamamen yeni bir eleman ekleyeceğimiz zaman İnenrHTML kullanırız

// ÖRNEK::
const lists=`<li>30 Günde Javascript</li>
<li>30 Günde Python</li>
<li>30 Günde C#</li>
<li>30 Günde C++</li>
<li>30 Günde Java</li>
<li>30 Günde SQL</li>
<li>30 Günde Flutter</li>
<li>30 Günde React Native</li>
<li>30 Günde PHP</li>
`
const ula=document.getElementsByTagName('ul')[0]
ula.innerHTML=lists;

//!NOT::Burada [0] kullanmazsak özelliği kullanamıyoruz. NodeList döndürdüğünden dolayı
//!NOT::O yüzden querySelector ile seçilmesi daha mantıklıdır
//!NOT::Tamamen silmek istersek ula.innerHTML='' ile yapılabilir



//TODO:Adding Style
// Adding Style Color
const tl=document.querySelectorAll('h1')
tl.forEach((item,index)=>{
    if(index%2==0){
        item.style.backgroundColor='yellow'
        item.style.color='blue'
        

    }else{
        item.style.backgroundColor='Blue'
        item.style.color='yellow'
    }
})



//!Bazı seçicilerde foreach gibi dizi metodları kullanılamıyor bu yüzden yapmamız gereken NodeList dönen seçiciler kullanılmalı
//!CSS özellikleri kullanıldığında Javascript'te camelCase kullanılıyor background-color==>backgroundColor oluyor




// let value
// value.document.domain
// value=document.location.href
// value=document.location.hostname
// value=document.location.port
// value=document.location.pathname
//  value=document.location.title
// value=document.location.href
// value =document.links.item(4).id
// value=document.links.item(4).getAttribute('class,id')
// value=document.links.item(4).classList[3]
// value=document.forms.item(1).id
// console.log(value)



//! NOT::className ile seçilen elementler dizi değildir. Bunlar Array.from(document.getElementByClassName("className")) ile diziye çevrilebilir


// Selectors(Seçiciler)
// id, className, tagName
// id::unique --->Benzersiz

// id'ye göre 
// document.getElementById('id')
// buton.getAttirbute("id")
// buton.className, buton.classList[2]
// classList dizi olarak döner -->foreach kullanılabilir
// textContent ile etiketin içindekini alır
// innerHTML ile textContent arasındaki fark innerHTML ile etiketin html özellikleri değiştirilebilir

// class'a göre
// document.getElementByClassName("className")


// tag'a göre
// document.getElementsByTagName("tagName")

// !tagName ile seçilen elementler de dizi değil. Bunlar da da Array.from(document.getElementByTagName("tagName"))


// querySelector  -  querySelectorAll
// Burada CSS ile seçer gibi seçim yapılır
// İD olunca başına '#' (diyez) className olunca '.' (nokta) ile devam edilir

// Bu seçiciler ile seçilince seçilen etiketler NodeList olarak döner
// Burada dizi metodları kullanılabilir. Tekrardan Array.from kullanmaya gerek yok

// Birden fazla kez kullanılmış ise class ismi querySelectorAll ile seçim yapılır ve NodeLİst dönen kısım burası zaten
// document.querySelectorAll()[1] --->Şeklinde aynı class'a sahip elementler arasında istenileni alabiliriz

// document.querySelectorAll("tagName") şeklinde de tagName kullanılarak da yapılabilir




//Güzel Bir Örnek Olması Açısından CSS Seçicileri Kullanılarak tek ve çift sıraya sahip liste elemanları için yapılabilir
let el=document.querySelectorAll("li:nth-child(odd")
let ee=document.querySelectorAll("li:nth-child(even")



el.forEach(el=>{
    el.style.backgroundColor="yellow"
    el.style.color="red"
    el.style.fontSize="30px"
})


ee.forEach(ee=>{
    ee.style.backgroundColor="red"
    ee.style.color="yellow"
    ee.style.fontSize="30px"
})





// STYLE ÖZELLİĞİNİ ANLAMAK
// W3 School kaynağı Javascript style properties kısmında style olarak kullanabileceğimiz özellikler var
// elemtlerin style diye özellikleri vardır.
// seçilenElemean.style.özellikAdı=''
let buton=document.querySelector('#btn')
buton.style.color='white'
buton.style.backgroundColor='red'
buton.border='50px'
buton.style.border="10px solid";

// !NOT:: Elemetler seçildikten sonra style özellikleri verilirken camelCase tarzında yazılır css de camel-case şeklindeydi



// Elementler üzerinde gezinmek

// Parent-Child İlişkisi vardır ve bu ilişki html>head>(title|meta)|body>(a|img|li)
// elementlerin içinde var olan etiketklere göre değişir
// içten dışa gitmek için parent, dıştan içe gitmek children kullanılır


// anneden çocuklara erişmek
// yakalananElement.children -->HTML COllections döner Array'e çevrrilebilir


// çocuktan anneye erişmek
// yakalananElement.parentElement


// çocuktan çocuğa erişmek
// yakalananElement.nextElementSibling
// yakalananElement.previousElementSibling













