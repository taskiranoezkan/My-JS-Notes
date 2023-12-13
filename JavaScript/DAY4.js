 //DAY---4
//KOŞULLAR
/*İf'in içinde yazılan şey true ise kod bloğu çalışır */
if(5>4){
    console.log('Bu Kod Çalışıyor')
}




if(5<4){
    console.log("True ise burası")
}
else{
    console.log("False ise burası")
}

/*else koşul true değilse çalışacak */


let reus = prompt('2+5=?','2+5')
if(reus==7){
    console.log("sonuc 7 yazıldığı için burası çalıştı")
}
else{
    console.log("sonuc 7 den farklı yazıldıgı için burası çalışacak")
}
/*ikiden fazla koşul(condition) varsa else if kullanılır */


//SWİTCH-CASE
//şartlar sağlanmazsa default'a geçecek
//kod satır satır yürütüleceği için break  kullanılmalı dafaultta kullanmaya gerek yok
//Duruma göre değişkene bir değer atanacaksa ternany kullannılabilir hayvan gibi kod yazacaksak ternarynin bir anlamı yok



let ree = prompt('8*2:?','Buraya yazın!')

switch(ree){
    case '16':
        console.log('Doğru sonuç')
    break

    case '15':
        console.log('yanlış sonuç')
    break

    case '14':
        console.log('yanlış sonuç, 2 oldu ')
    break

    case '13':
        console.log('yanlış sonuç , 3 oldu sen cahilsin amk')
    break

    default:
        console.log('Doğru yanıt veremediniz')

}

//Ternary Operatörü
console.log(reus == 7 ? 'cevap doğru ': 'yanlış cevap')

let isRaining = true
isRaining 
    ? console.log('Hava yağmurlu lütfen şemsiyenizi alınız')
    : console.log('Hava güzel babacım fazlalık yapma')















