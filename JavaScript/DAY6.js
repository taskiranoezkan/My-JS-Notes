//DAY--6
//DÖNGÜLER

//For yapısı
/*for(başlangıç değeri; koşul; artırma/azaltma){} */

for (let i = 0; i <= 10; i++) {
    console.log(i + 2)
}




for (let j = 0; j <= 10; j++) {
    console.log(`${j}*${j} =${j * j}`)
}




let ddizi = ['Özkan', 'Metin', 'Kemal', 'Faik', 'Mehmet', 'Onur',]
for (let k = 0; k < ddizi.length; k++) {
    console.log(ddizi[k])
}



let df = [7, 11, 14, 13, 10, 21, 23, 12]
let t = new Array()
for (let y = 0; y < df.length; y++) {
    t.push(df[y] * 2)
}
console.log(t)



//WHİLE VE DO-WHİLE DÖNGÜSÜ
let mj = 0
while (mj <= 10) {
    console.log(mj)
    mj++
}


//do-while'ın while'dan farkı do'nun içi bir kere çalışacak
//yani kodu en az bir kere çalıştıracaz sonra koşula göre yeniden çalışıtıp çalıştırmayacağımıza karar verecex

let jm = 0
do {
    console.log('Merhaba')
    jm++
} while (jm < 2) {
}


//FOR-OF
//Diziler için for of dögüsü kullanılır
//Dizinin indexleri ile uğraşmıyoruz burada direkt değerleri alıyoruz
/*for(let sayi of dizi){console.log(sayi)} */
let idizi = [1, 2, 4, 6, 7, 9, 8, 5, 21]

for (let sayii of idizi) {
    console.log(sayii)
}


//BREAK
//döngülerde istediğimiz bir yerde sonlansın istiyorsak break kullanılır
let isimler = ['Özkan', 'Özcan', 'Gökhan', 'Sevkan', 'Oktay', 'Mahmut']
for (let l = 0; l < isimler.length; l++) {
    console.log(isimler[l])
    if (isimler[l] == 'Sevkan') {
        break
    }
}


//CONTİNUE
//continue ile de istenilen iterasyonun atlatılması sağlanır
for (let p = 0; p < isimler.length; p++) {
    if (isimler[p] == 'Serkan') {
        console.log(`${isimler[p]} es geçildi`)
        continue
    }
    console.log(isimler[p])
}




//Hemen yukarıdakinin daha güzel yapılmış hali
for (let isims of isimler) {
    if (isims == 'Sevkan') {
        console.log(`${isims} es geçildi`)
        continue
    }
    console.log(`${isims}`)
}


// SONSUZ DÖNGÜYE GİRİYOR 
// let yas=23
// do {
//     console.log('ehliyet alabilirsiniz:')
// } while (yas<=25);




let sayaccc = 1
let toplam = 0
do {
    if (sayaccc % 2 == 1) {
        toplam += sayaccc
    }
    sayaccc++
} while (sayaccc <= 20);
console.log('Toplam:', toplam)

console.log('-------------------------')

//NOT:: ARADA YENİSATIR OLARAK KULLANDIĞIMIZ GÜZEL BİR ŞEY 
let yeniSatir = "/r/n"


//Çarpım Tablosu
for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        console.log(`${i}*${j}: ${i * j}`)
        //document.writeln(`${i}*${j}: ${i*j} <br>`)
    }
    console.log('---------------------------')
}




//!Enes Bayram'dan alınan FOR OF VE FOR İN döngüleri
//!Map ve Set'ler için kullanımı mevcut

//Normalde
const arr=['Ali','Berat','Cemil','Doğan','Emre','Ferhat']

arr.forEach(function(name){
    console.log(name)
})
//?Arrow Fonksiyon ile de yapılabilir.
arr.forEach(name=>console.log(name))


//FOR-İN Döngüsü
//index verir 

for(let name in arr){
    console.log(name)
}
//her bir elemanın indexini verir elemanları yakalamak için
for(let name in arr){
    console.log(arr[name])
}

//FOR-OF Döngüsü
//Değer verir

for (let isim of arr){
    console.log(isim)
}
//her bir elemanın değerini verir indexleri yakalamak için
for(let isim of arr){
    console.log(isim, arr.indexOf(isim))
}




//TODO: GİİRİLEN SAYININ ASAL OLUP OLMAMASI
// let sa = Number(prompt('Lütfen bir sayı giriniz'))

// let sonuc = true

// for (let i = 0; i < sa / 2; i++) {
//     if (sa % i == 0) {
//         asal  değildir
//         sonuc = false
//         break;
//     }
// }

// if (sonuc) {
//     alert('sayı asaldır')
// } else {
//     alert('sayı asal değil')
// }



// TODO:BURAYI ANLAMADIM 1'DEN 100'E KADAR ASAL SAYILARI BULMAK İSTEMİŞTİM

// let durum = true
// for (let k = 0; k < 100; k++) {
//     for (let d = 0; d < k / 2; d++) {
//         if (k % d == 0) {
//             asal  değildir
//             durum = false
//             break;
//         }
//         if (durum) {
//             console.log(k+'sayı asaldır')
//         } else {
//             console.log(k+'sayı asal değil')
//         }

//     }
// }




// TODO:FAKTÖRİYEL
// let fak=Number(prompt('Faktöriyeli alıncak sayıyı giriniz:',))

// let to=1

// for (let g = 1; g <= fak; g++) {
//     to*=g    
// }
// alert(fak+'sayısının faktöriyeli'+to)



//TODO: ARMSTRONG SAYI BULMA

// let say = prompt('Kontrol etmek istediğiniz sayıyı girin');
// let so = 0;

// for (let je = 0; je < say.length; je++) {
//     so += Number(say[je]) ** 3; //Sayıyı number'a çevirerrek iş yapılmalı

// }

// console.log(so);

// if (so == say) {
//     alert('Sayı Armstrong');
// } else {
//     alert('Sayı Armstrong değil');
// }








//TODO: Harf sayısı uygulama
//TODO:charAt() metodu, bu indeks numarasına göre belirtilen konumdaki karakteri çıkarmak için kullanılır.
// let Metin = prompt('Lütfen bir metin girin')
// let Harf = prompt('Hangi harfi arayalım')

// function harfBul(Harf) {
//     let toplam = 0;
//     for (let i = 0; i < Metin.length; i++) {
//         if (Metin.charAt(i) === Harf) {
//             toplam += i
//         }
//     }
//     return toplam;
// }


// let sonuc=harfBul(Harf)
// console.log(sonuc)
// alert(`${Harf}  ${sonuc} defa geçiyor`)



//TODO:Mükemmel sayı uygulaması


// let ms = Number(prompt('Lütfen sayı girin.'))

// function mSayi(ms) {
//     let total = 0;

//     for (let i = 1; i <= ms; i++) {
//         if (ms % i == 0) {
//             total += i
//         }
//     }
//     if (total == ms * 2) {
//         alert('Sayı Mükemmel')
//     } else {
//         alert('Sayı Mükemmel değil')
//     } 
// }

// mSayi(ms);



//TODO: DECİMAL TO BİNARY
// let say = Number(prompt('Decimal sayı gir.'))


// function convert(say) {
//     let str = ''
//     while (true) {
//         str += (say % 2).toString()
//         say = Math.floor(say / 2)
//         if (say == 1) {
//             str += say;
//             break;
//         }
//     }
//     reverse(str)
// }

// function reverse(str) {
//     let binary=''
//     for (let i = str.length-1; i >= 0; i--) {
//         binary += str[i]
//     }
//     console.log(binary)
// }


// convert(say)


// TODO: Binary to Decimal
// TODO: KESSİNLİKLE NUMBER'A ÇEVİRME UNUTULMALAMLI 
// TODO: ÜST ALIRKEN İ DEĞERİ KULLANILABİLİR AMA STRİNG OLARAK ALINAN İFADENİN TERSİNE ÇEVRİLMESİ GEREKİR
// TODO: SIFIRLARIN ÇARPILMAMASI İÇİN KONTROL EDİLEBİLİR
// let sayi = prompt('sayı girin')

// function decimal(sayi){
//     let toplam=0
//     let ust=0
//     for (let i = sayi.length-1; i >= 0; i--) {
//         toplam+=(Number(sayi[i])*(Math.pow(2,ust)))
//         ust++
//     }
//     return toplam
// }

// console.log(decimal(sayi))





// JavaScript'te fonksiyonlar da birer veri tipidir. Fonksiyonlar JavaScript'te nesne olarak kabul edilir ve dolayısıyla fonksiyonlar da birer nesne veri tipidir.
//  Bu nedenle fonksiyonlar, diğer veri tipleri gibi değişkenlere atanabilir, fonksiyonlar içinde kullanılabilir ve parametre olarak geçirilebilir.

// Fonksiyonları kullanarak işlem yapmak veya üzerlerinde fonksiyon çağırımları yapmak gibi işlemler yapılabilir.
//  Örneğin, bir fonksiyonu başka bir fonksiyona argüman olarak geçirebilir, bir fonksiyonun sonucunu başka bir değişkene atayabilir veya bir fonksiyonu nesne olarak bir özellik olarak kullanabilirsiniz.

