const date = new Date()
//yerlrişk olan obje 
//başlatmak objeyi bu şekildedir
//Date.now()

let year = date.getFullYear(), //Yıl döndürecek
    month = date.getMonth(), //Sayı olarak değer alır aylar[5] aşağıda olan şeyS
    day = date.getDay(), //Sayı oalrak değer alır
    hour = date.getHours(), //saat alınacak
    minute = date.getMinutes(), //dakika alıncaka
    second = date.getSeconds() //saniye alınır
console.log(`${year} yılı ${month} ayı ${day} günü ${hour} satinde ${minute} dakikasında ve ${second} saniyesinde oradaydım`)



//30 ocak 20223, Pazar ,12:00:53

let aylar = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık']
let days= ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumaertesi']


let humanReadableDate = `${day} ${aylar[month]} ${year}, ${days[day]} ${hour}:${minute}:${second}`
console.log(humanReadableDate)


let sonuc = confirm('onaylıyor musun')
Date.now()