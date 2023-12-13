// DOM-3 Olaylar
// Event Listeners ==> element seçilip yapılır.
// Yaygın html eventler onclic, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onload
// Bu olay dinleme metodlarını herhangi bir dom objesine ekelyebiliyoruz.
// Farklı html elementlerini dinlemek için addEventLsitener() metodunu kulllanırız.
// Bu addEventListener() metodu iki parametre alır. Birinci paramtere dinleyeceğimiz olayın adı ve ikinci paramtere olarak da bir callback fonksiyonu alır.
// Parametre olarak alınan e bize bir obje dönderir.


const button = document.getElementById('btn')

button.addEventListener('click', e => {
    alert(e)
    console.log(e)
})

button.addEventListener('click', function (e) {
    button.style.color = 'black'
    button.style.fontSize = '25px'
    button.style.backgroundColor = 'yellow'
})


// Click 
// Elemana tıklanma olayını takip eder
// Element seçilip öyle devam edilir.
// isTrusted::Gerçekten kulllanıcı tarafından mı tıklandı.

// JS Tarafında olmdan da olayları takip edebiliriz.

// Başına on getirilince bütün eventları alırız.
/*

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id='btn' onclick="console.log('Tıklandı')"">
        
    </button>
</body>
</html>

*/


// JS tarafından bir fonksiyon bile çağrılabilir.

//NOT:: Bir kaç farklı şekilde bu olaylar takip edilebilinir.
button.onclick = e => console.log('Tıklanmış')



// Double Click
// İki kere tıklandığında

// Mouseenter
// Fare üstüne gelince 

// button.addEventListener('mouseenter',e=>{
//     console.log(e)
//     alert('aaah üstüme geldi')
// })

// Mousemove 
// button.addEventListener('mousemove',e=>{
//     alert('Bi sabit dur yaa')
//     console.log(e)
// })
// Fare üstünde hareket edince



// En çok kullanılan eventlar
// click
// dblclick
// mouseenter
// mouseleave
// mousemove
// mouseover
// mouseout
// input
// change
// blur 
// keydown
// keyup
// keypress
// onload

// NOT:: Hata durumunda e.target.src ile resim değişikliği sağlanabilir.
/*

img.addEventListener('error',e=>{
    e.target.src='./path'
})

*/

const name = document.getElementById('name')
name.addEventListener('input', e => {
    console.log(e.target.value)
})
// İnput, keyup, keypress, keydown ile kullanılablir. Genelde input kullanılır.



// Dianamik olarak renk değişimi
const inputColor = document.getElementById('input-color')
inputColor.addEventListener('input', e => {
    document.body.style.backgroundColor = e.target.value;
})


// NOT::selectBox'un değişimi change metodu ile dinlenir


// Radio, Form, ChoiceBox ile ilgili kısımlar mevcut 

// Blur ile odak kaybolduğunda hata mesajları ve kırmızı uyarı verilmesi vardır



// Tuşlara basılınca ki olayları dinlemek ve yön tuşlarına basılınca olcakları yazdırmak
document.body.addEventListener('keydown', e => {
    console.log(e)
    console.log(e.key)
})



// NOT::Asla ama asla ezber yok!!




// İnput Eventları
// onblur, onchange, onfocus, onselect, onsubmit, onreset, onkeydown, onkeypress, onkeyup, 
// Mouse Eventları
// onmouseover/onmouseout, onmousedown/onmouseup, onmousemove/onmouseout
// Click Eventları
// onclick, ondblclick
// Load Eventları
// onload, onerror, onunload, onresize



// function changeTitle(){
//     document.querySelectorAll('.card-title'[1].textContent='Todo başlığı Değişti!')
// }
// clearButton.addEventListener('click', changeTitle)
// NOT::Eğer burada changeTitle() şeklinde yazarsak sıkıntı çıkar. Tıklanma beklenmeden başlık değişir.

// Event çalıştıtıldığında bir Event objesi vardır bunu yaparken parametre olarak e alır yani değişir de
// genelde eventin target objesi kullanılır. Type da kullanılır textContent de kullanılabilir ya da src bilr kullanılır 
// Keyler var hangi tuşa tıklanmas olayını takip eder.



// Mouse Eventları
// DOMContentLoaded :: Sayfanın yüklenmesini kontrol eder
// Load document ile değil window ile yapılır. window.addEventListener('load', ()=>{console.log('çalıştı')})


// mouseover üstüne geldiğinde çalışır.
// mouseout elementin üzerinden ayrılınca çalışır.


// mouseenter ve mouseover arasında spesifik farklar var
// Eğer elemetin içindeki elementlere gelince çalışmasını istersek mouseover aksi takdirde mouseenter

// mouseleave ile hedefteki elementin dışına çıklınca çalışır.





// KLAVYE EVENTLARI


// Keypress 
// document.addEventListener('keypress', run)
// function run(e) {
//     console.log(e)
    // console.log(e.key)
     // console.log(e.keyCode)
     // console.log(e.which)
// }
// NOT :: Dezavantajlıdır. Klavyeden sadece harfleri ve sayıları alır 





// Keydowm
// NOT:: Keypress ile aynıdır. Tek fark diğer tüm tuşlar da da çalışır.

// document.addEventListener('keydown', run)
// function run(e) {
//     console.log(e)
     // console.log(e.key)
     // console.log(e.keyCode)
     // console.log(e.which)
// }
// 


// Keyup 
// NOT :: Keydown ile aynıdır ama tek fark bu keyup elimizi tuştan çektikten sonra çalışır.
// document.addEventListener('keyup', run)
// function run(e) {
//     console.log(e)
     // console.log(e.key)
     // console.log(e.keyCode)
     // console.log(e.which)
// }
// 






// EXAMPLE
// Kullanıcı istenmeyen bir tuşa bastığında onu engellemek istersek ne yaparız
// Bu örnekte sayfayı yenilemesin istiyoruz (f5)
document.addEventListener('keydown',run)

function run(e) {
    if(e.keyCode==116){
        alert('Sayfa Yenileme Kapalı!')
    }
    // NOT::if kullanılmadan e.preventDefault(); ile de yapılabilir.
}



// İnput Eventları
// focus, blur, copy, paste, cut, select


// NOT :: Klavye eventları da input eventları olarak kullanılabilir.

// Focus input'un içine girilince blur ise input'tan çıkılınca


// Copy İnput'un içindeki değeri kopyalarken çalışır.

// Paste input'a bir şey yapıştırılırken çalışır.

// Cut input'tan bir şey kesilirken çalışır.
 
// Select input'a bir şey seçilirken çalışır.

