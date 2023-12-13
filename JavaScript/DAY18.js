// Promise::Söz vermek
// Promise Javascriptte asenkron işlemleri yönetmek için kullanılır
// Asenkron işlemlerin başarsız olunca başarsızlık nedenlerini başarılı olunca da değerlerini alıyoruz
// Senkron işlemlerin aksine asenkron işlemlerde bize dönen değer promise'dir
// bu promise 3 farklı değer alır

// Pending::Başlangıç Durumu ne olumlu ne de olumsuz
// Fullfield::operasyon başarılı
// Rejected::İşlemde bir problem oluşmuş


// Başlangıçta işlem pending de ve işlem başarılı olursa fullfield durumuna geçer ve biz bu fullfield durumunda değeri almak istersek then() diye bir metodumuz vardır
// Aynı şekilde bir hata olunca hatayı almak için catch() metodu kullanılır


// Promise'i anlamak için öncelikle callback'leri anlamamız gerekir
const doSomething = callback => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JAVASCRİPT']
        callback(`It did not go well`, skills)
    }, 2000);
}


const callback = (err, result) => {
    if (err) {
        return console.log(err)
    } else {
        return console.log(result)
    }
}

doSomething(callback)

// Callback Hell ::Callback cehennemi demek bu fazla if else yapısı olmasıyl alakalı bir durum





// Promise constructor
// promise oluşturmak için new Promise() sınıfı kullanılmaktadır

// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('işlem başarılı')
//     },2000)
//     // resolve('işlem başarılı')
//     // reject('bir hata oluştu')
// })


// promise.then((data)=>{
//     console.log(data)
// }).catch(()=>{
//     console.warn(err)
// })



// SONUÇ OLARAK PROMİSE BİZE BİR SÖZ VERİR, İŞLEM BAŞARILI İSE RESOLVE İŞLEM BAŞARISIZ İSE REJECT METODUNU ÇAĞIRACAĞIMIZI SÖYLÜYORUZ
// BU PROMİSE HER ZAMAN YA THEN DE YA DA CATCH  DE YAKALANIYOR BİZ RESOLVE VE REJECT ETTİĞİMİZ SÜRECE



// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject('işlem başarısız')
//     },2000)
//     // resolve('işlem başarılı')
//     // reject('bir hata oluştu')
// })

// promise.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.warn(err)
// })







// Fetch API::HTTP istekleri almamızı sağlıyor




const API_URL = 'https://jsonplaceholder.typicode.com/posts'


// console.log(fetch(API_URL))



// fetch(API_URL).then(res=>console.log(res))

// fetch(API_URL).then(res=>res.json()).then(data=>console.log(data)).catch(err=>console.log(err))




// ASYNC AND AWAİT
// Bir fonksiyonun başına async gelince o fonksiyon promise'a dönüşür



// async function getPosts() {
//     const response = await fetch(API_URL)
//     const data = await response.json()
//     console.log(data)
// }
// getPosts()




// Async ve await kullandığımız da hataları da try-catch blokları ile yakalarız


async function getPosts() {
    try {
        const response = await fetch(API_URL)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
getPosts()






// async olunca fonksiyon promise olur
// async ve await birlikte çalışırlar

// async ve await ise promise olan işlemlerde öncelikli olarak işlem yapmammızı sağlar




// FARKLI VİDEO
// Promise Callback'lerin alternatifidir
// Callback yerine promise'ları kulllanıp bu asenkron yapıları senkron yapılara çevirerek yönetecez
// PROMİSE :: Söz demek

// Promise istek atılır oradan veri beklenir
// İstek işlenmeye başlanınca pending : Bekleme
// fullfield : İşlem başarılı DİĞER ADI RESOLVE'DUR
// rejected : Reddedildi

// NOT::PROMİSE İLE İLGİLİ FOTOĞRAF VAR GÜZEL ANLATIYOR
// Başarılı ve başarısız olunca then() veya catch() metodları ile bunları yakalarız
// Resolve() Metoduna verilen parametreyi then() metodu ile Rejected() fonksiyonuna verilen parametreyi(yani hatayı) de catch() metodu ile yakalarız


// Promise Objesi başlatma
let myPromise = new Promise((resolve, rejected) => {
    resolve('Response dönerse')
    rejected('Hata dönerse')
})

myPromise.then().catch()



let check = true

const promise1 = new Promise((resolve, reject) => {
    if (check) {
        resolve('Promise Başarılı')
    } else {
        reject('Promise Başarısız')
    }
})

// Promise'ın 3 farklı durumu vardır
// HANDLE :: Halletmek
// Promise'i yakalamak
// Promisi handle edip then ve catch metodları ile yöneteceğiz



let check1 = true
function createPromise() {
    return new Promise((resolve, reject) => {
        if(check1) {
            resolve(`Promise'de herhangi bir sikinti yoktur`)
        } else {
            reject('Sıkıntı büyük')
        }
     })
}

createPromise().then((respon)=>{
    console.log(respon)
}).catch((err)=>{
    console.log(err)
}).finally((final)=>{
    console.log('Her zaman çalışır ')
})


// ASENKRON YAPILARI SENKRON YAPILARA ÇEVİRMEK İÇİN KULLANIRIZ : CALLBACKLERİN ALTERNATİFİ VEYA BİR ÜST HALİ DE DENEBİLİR


// ÖRNEK  PROMİSE + XMLHTTPREQUEST


// Promise.all --->

function readUser(url){
    return new Promise((resolve,reject)=>{
        const xml = new XMLHttpRequest();
        try {
            xml.addEventListener("readystatechange", ()=>{
                if(xml.readyState===4 && xml.status===200){
                    resolve(JSON.parse(xml.responseText))
                }
            })
        } catch (error) {
            reject(error)
        }
        xml.open("GET",url);
        xml.send();
    })
}


readUser("DAY16usersJSON.json")
.then((response)=>console.log(response))
.catch((error)=>console.log(error))








const p1=Promise.resolve('birinci promise başarılı')
const p2=Promise.resolve('iirinci promise başarılı')
const p3=new Promise((resolve,reject)=>{
    resolve("üçüncü promise başarılı")
})

const p4=Promise.reject('Hata var reis')



// Promise.all
// bütün promisler başarılı ise then'e girer en az bir tanesi başarısız ise catch'e girer 
Promise.all(p1,p2,p3)
.then((res)=>console.log(res))
.catch((err)=>console.log(err))

// Tüm promise'leri kontrol etmek istediğimizde kullanıırız





// then içinde farklı bir yerde de farklı api'ya istek atıp zincir halinde kullanabiliriz















