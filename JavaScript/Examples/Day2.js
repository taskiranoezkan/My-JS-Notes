let challange='30 Days of javascript'

console.log(challange.length)
console.log(challange.toUpperCase)
console.log(challange.toLowerCase)
console.log(challange.substr(0,7))
console.log(challange.substring(0,7))
console.log(challange.includes('script'))
console.log(challange.split(' '))
console.log(challange.replace('javascript','python'))
console.log(challange.charAt(15))
console.log(challange.charCodeAt(15))
console.log(challange.indexOf('of'))
console.log(challange.lastIndexOf('of'))
console.log(challange.match('a'))

let a='10',
    b=10
console.log(a===b ? true : 'eşit değil')

console.log(parseFloat(9,81)==10)

let variable1='jargon'
let variable2='python'

console.log(variable1.includes('on')&& variable2.includes('on'))

console.log(Math.floor((Math.random()*101)))

let j='javascript'
console.log(j[Math.floor(Math.random()*j.length)])



let degisim='Kemal Kılıçdaroğlu Türkiye\'in 13.Cumhurbaşkanı Olacaktır ve cumhurbaşkanı olarak ülkeye demokrasi getirecektir. Herkes 13.Cumhurbaşkanı olan Kemal Beye hoşgeldiniz sayın Cumhurbaşkanı desin bakim'
console.log(degisim.match(/Cumhurbaşkanı/gi))
degisim1=degisim.replaceAll('Cumhurbaşkanı','başkan')
console.log(degisim1)



//BURASI GERÇEKTEN GÜZEL BİR ÖRNEK REGEXLERDE TEKRAR BAKILMALI 
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let pattern=/[%,@,#,$,&,;]/gi
let sonuc=sentence.replace(pattern,'')
console.log(sonuc)





let metin = 'Verilen bir metin içerisindeki en sık tekrar eden harfi bulan bir algoritma nasıl tasarlanır?'
let dizi=metin.split('')
let tekrar=0
for(let i=0;i<dizi.length;i++) {
    for(let j=0;j<dizi.length;j++) {
        if(dizi[i].match(dizi[j])) {
            tekrar++
        }
    }
    if(Math.max(tekrar))
    console.log('en çok tekrar eden',dizi[i])
}