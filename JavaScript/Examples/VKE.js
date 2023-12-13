// Beden kitle endeksi

debugger;

let kilo = prompt('lütfen kilonuzu giriniz:')
let boy = prompt('lütfen boyunuzu giriniz:')

Number(kilo)
Number(boy)

let sonuc = (kilo) / (boy * boy)

if (sonuc < 18.5) {
    alert('ideal kilonun altında'+sonuc)
}
else if(sonuc>=18.5&& sonuc<=24.9){
    alert('ideal kilonun altında'+sonuc)
}
else if(sonuc>=25&& sonuc<=29.9){
    alert('ideal kiloda'+sonuc)
}
else if(sonuc>=30&& sonuc<=39.9){
    alert('ideal kilonun çok üstünde (obez'+sonuc)
}
else if(sonuc>=40){
    alert('ideal kilonun çok üstünde(morbid obez'+sonuc)
}


// Number'a çevirme
let a=5
let b='10'

console.log(typeof (a+b ))

let c= Number('6')
console.log(typeof c,c)

// String'e çevirme
console.log((44).toString())
console.log(String(98))
let cc=55
cc.toString()


//Hata alırız Nedeni bir değeri ir sayıya dönüşütürebilri yalnız    
let rakamlar=[1,8,7,6]
let aa=Number(rakamlar)
console.log(aa)

//boolean to string
let abc=true
let acb=String(abc)
console.log(acb)

//Hata Alırız
let herf='B'
let harf=Number(herf)
console.log(harf)
