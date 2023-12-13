function merhaba(isim, sayi) {
    for (let i = 0; i < sayi; i++) {
        console.log(`Merhaba ${isim}`)
    }
    return `Merhaba ${isim} dedim ${sayi} kere `
}
merhaba('özkan', 5)
const a = merhaba('Özcan', 4)//değer döndüren fonksiyon bir değişkene atanabilir bunun farklı bir yazımı daha var return ettiği şey için console.log(merhaba('Gökan',3)) şeklinde de yazılabilir bu bize return değerini de getirecektir
console.log(a)

console.log(merhaba('Sevkan', 5))//hem fonksiyon çalışıyor hemde return ettiği değer de yazılıyor ilginç bir şey değişken tanımlyarak ulaşmakla aynı şey gibi 8.satırda yapılan gibi

let dizi = [5, 4, 3, 2, 1]
let toplam = 0
dizi.forEach(function (sayi) {
    toplam += sayi
    return toplam
})
console.log(toplam)









//verilen karakterlerden uzunluğu 5 olan benzersiz id üretilme algortiması

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randomIndex
let array = []


for (let index = 0; index <100; index++) {
    let id = ''
    for (let i = 0; i < 5; i++) {
        randomIndex = Math.floor(Math.random() * characters.length)
        id += characters[randomIndex]
    }
    if (array.includes(id)) {
        
    }
    else{
        array.push(id)
    }
}
console.log(array)






//Random rgb formatında değer üreten algoritma
function generateRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }
  
  const randomRGB = generateRandomRGB();
  console.log(randomRGB);
  

let string='Albania'

if(string.endsWith('ia')){
    console.log('Congurutulations string endsWith "ia"')
}


// Verilen dizideki tek sayıların karesini alan ve bunu yaparken de map ve filter kullandık
let diz=[1,3,5,7,9,11,13,15,17,19,0,2,4,6,8,10,12,14,16,18,20]

function namessiz(array) {
    let istenilen=array.map((elm)=>elm*elm).filter((elt)=>elt%2!=0)
    return istenilen
}
console.log(namessiz(diz))






