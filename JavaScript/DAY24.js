// ELEMENTS 
// Normalde ders bitmiştir ama Tayfun Erbilen'in eklediği kısımlar
// İsteyen Dinleyebilir 



// ENES BAYRAM'DAN ALINAN AJAX KISMI 
//!NOT::AJAX ESKİDİR ONUN YERİNE FETCH API KULLANILIR VE BAŞKA YÖNTEMLER KULLANILIR AMA BİLİNMELi


// AJAX -- Asenkron Javascript And Xml

// AJAX bir programlama dili değildir.
// Sunucudan bir istek atıp veri almak için kullanılır

// Butona basıldığında server'a gidilmesi sırasında AJAX kullanılıyor.
// Tarayıcı ve Server arasındaki bağlantıyı sağlayan yapının adıdır AJAX

// KULLANIM
// AJAX altında XMLHTTPREQUEST  adında bir obje vardır. Bundan bir nesne türeterek bunun içerisinde da readyState, status ve responseText vs. giibi değerler var.
// Biz bunu altında this.readyState==4 this.status==200 olmasına bakarız. Bunlar başarılı olmasına göre iişlem yapılır. yani responsetext alınabilir. Serverdan sonuç alabiliriz yani

// xhttp.open("GET", "ajax_info.txt", true); //!SUNUCUDAN VERİ ALINACAĞI İÇİN GET KULLANILDI POST VERİ YÜKLEMEK İÇİN KULLANILIR, NERDEN ALINACAK KISIM LİNK OLUR, TRUE OLAN KISIM ASENKRON MU SENKRON MU ÇALIŞACAK DEFAULT OLARAK ASENKRON
// xhttp.send(); //!İSTEK GÖNDER

const xhr = new XMLHttpRequest();
console.log(xhr)

// Bunun (xhr objesinin) içerisinde 3 önemli özellik var
// 1-Status::Başarılı ise 200, 403 yasak, 404 sayfa bulunamadı.
// 2-readyState::0 request atılmadı, 1 Server çalışıyor, 2 istek ulaştı, 3 istek işleniyor, 4 istek işlendi cevap hazır.
//! NOT:: Biz burada status'un 200 readyState'in 4 olmasına bakmalıyız.
// TODO:: Cevap metnini almak için responseText var 
// onReadyStateChanged::readyState değişiminde yapmak istediğimiz zaman bu event kullanılır.





// ÖRNEK:
// jsonplaceholder diye fake bir rest api var 
// rest API bir web servisidir. Http protokolü üzerinden istek atılır rest Servisinde , dönen cevap json formatındadır.

// https://jsonplaceholder.typicode.com/
// /comments?postId=1 postId= olan yorumlarını almaya yarar.


// url hazırlama (İD'nin boş olma veya olmama durumlarına göre URL dizayn edildi)
function prepareURL(url, id) {
    if (url !== null) {
        return url;
    }
    return `${url}?postId=${id}`;
}


// yorumları almak
function getComments(url, id) {
    let newURL = prepareURL(url, id)
    const xhrr = new XMLHttpRequest();
    xhrr.addEventListener('readystatechange', () => {
        if (xhrr.readyState === 4 && xhrr.status === 200) {
            console.log(JSON.parse(xhrr.responseText)) //BURADA DÖNEN VERİ STRİN BİZ BUNU JSON FORMATINDA ALMAK İÇİN PARSE ETTİK
        }
    })

    xhrr.open("GET", newURL)
    xhrr.send()
}

getComments("https://jsonplaceholder.typicode.com/comments", null)




// NOT:: AJAX Kullanrak karşı taraffın verilerini kendi tarafımıza çektik. AJAX ara katmandır. eskidir.




function getData(url) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
        if (xhr.status == 200 && xhr.readyState == 4) {
            console.log(JSON.parse(xhr.responseText))
        }
    })
    xhr.open("GET", url)
    xhr.send();
}


getData("https://jsonplaceholder.typicode.com/users")





// ENES BAYRAM'dan alınan notlar
// promise'ler DAY18.js de son kısımlarda anlatılmıştır. ama Buraya da eklendi Hatırlatma olarak


//! ENES BAYRAM'DAN ALINAN KISIM
// Promise Callback'lerin alternatifidir
// Callback yerine promise'ları kulllanıp bu asenkron yapıları senkron yapılara çevirerek yönetecez
// PROMİSE :: Söz demek

// Promise istek atılır oradan veri beklenir
// pending : İstek işlenmeye başlanınca  Bekleme
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

console.log(promise1)





// Promise'ın 3 farklı durumu vardır
// HANDLE :: Halletmek
// Promise'i yakalamak
// Promisi handle edip then ve catch metodları ile yöneteceğiz



let check1 = false
function createPromise() {
    return new Promise((resolve, reject) => {
        if (check1) {
            resolve(`Promise'de herhangi bir sıkıntı yoktur`)
        } else {
            reject('Sıkıntı büyük')
        }
    })
}

createPromise().then((respon) => {
    console.log(respon)
}).catch((err) => {
    console.log(err)
}).finally((final) => {
    console.log('Her zaman çalışır ')
})


// ASENKRON YAPILARI SENKRON YAPILARA ÇEVİRMEK İÇİN KULLANIRIZ : CALLBACKLERİN ALTERNATİFİ VEYA BİR ÜST HALİ DE DENEBİLİR


//? ÖRNEK  PROMİSE + XMLHTTPREQUEST

//! Güzel Örnek

function readUser(url) {
    return new Promise((resolve, reject) => {
        const xml = new XMLHttpRequest();
        try {
            xml.addEventListener("readystatechange", () => {
                if (xml.readyState === 4 && xml.status === 200) {
                    resolve(JSON.parse(xml.responseText))
                }
            })
        } catch (error) {
            reject(error)
        }
        xml.open("GET", url);
        xml.send();
    })
}


readUser("DAY16usersJSON.json")
    .then((response) => console.log(response))
    .catch((error) => console.log(error))





function getUsers(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () => {
            try {
                if (xhr.status === 200 && xhr.readyState === 4) {
                    resolve(JSON.parse(xhr.responseText));
                }
            } catch (error) {
                reject(error)
            }
        })
        xhr.open("GET", url)
        xhr.send()
    })
}



function getCommentss(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () => {
            try {
                if (xhr.status === 200 && xhr.readyState === 4) {
                    resolve(JSON.parse(xhr.responseText));
                }
            } catch (error) {
                reject(error)
            }
        })
        xhr.open("GET", url)
        xhr.send()
    })
}


// Birden fazla then() yapısının beraber kullanımı
getUsers("https://jsonplaceholder.typicode.com/users/3")
    .then((data) => {
        //console.log(data)
        // data.forEach(user => {
        //     console.log(user.name)
        // });
        console.log(data)
        getCommentss(`https://jsonplaceholder.typicode.com/comments/${data.id}`)
            .then((res) => {
                console.log(res)
            })
    })
    .catch((err) => console.log(err))
    .finally(() => {
        //her türlü işlem sonucu bildirimi mesela mail gönderimi
    })





// Direkt resolve'lu promise oluşturabiliriz

const p1 = Promise.resolve('birinci promise başarılı')
const p2 = Promise.resolve('iirinci promise başarılı')
const p3 = new Promise((resolve, reject) => {
    resolve("üçüncü promise başarılı")
})

// const p4 = Promise.reject('Hata var reis')



// Promise.all Anlatımı
// bütün promisler başarılı ise then'e girer en az bir tanesi başarısız ise catch'e girer 
Promise.all([p1, p2, p3,])
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

// Tüm promise'leri kontrol etmek istediğimizde kullanıırız



// then içinde farklı bir yerde de farklı api'ya istek atıp zincir halinde kullanabiliriz






// Enes Bayram'dan alınan Fetch Api Kısmı
//! NOT :: Callback() ---> Promise      Ajax(xmlhttprequest) --->  Fetch Api  
// Fetch Api :: server'a http isteği atmak için kullandığımız bir window objesi altındaki metoddur.

console.log(this.fetch)

// fetch(http isteği) ---> Promise Döner Tekrardan then ve catch ile yakalarız.





//! Not :: Burada ki Promise response olarak dönüyor o yüzden response'un altındaki json metodu  kullanılması gerekmektedir.
//! Not :: Burada iki then kullanılması tamamen fetch'in döndürdüğü response olması ile alakalı. Bize direkt data dönmüyor ilkinde response alınır sonrakinde data


function getUSer(url) {
    const promise = fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}

getUSer("DAY16usersJSON.json")





function getData(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}

getData("https://jsonplaceholder.typicode.com/albums")

//TODO :: fonsksiyon dışında kullanım sağlamak istersek fonsksiyon return etmeli ve dışarıda yönetim sağlayabilelim yukarıda kullandığımız yer oldu 





// ? Buraya kadar olan süreçte GET metodu kullanıldı yani sürekli bir REST APİ'den veri almaya çalıştık ama POST veya PUT kullanmak istersek bunu sağlayan bir Rest Api olmadığından bunu yapmak istersek nasıl yapacaz
// ? Kullanımı mevcut o yüzden anlatıldı.


function addData(url) {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "id": 2,
            "firstName": "Harun",
            "lastName": "Kızıl"
        })
    })
}


//! Yükleme yapıldıktan sonra başarılı olup olmama durmunu promise döndüğünden dolayı then ile yakalamaya çalışacaz ki burada iki then kullanımı da mevcut unutulmamalı
// JAVA VEYA SPRİNG İLE KENDİ REST APİ YAZMAMIZI SAĞLAYACAZ.

// fetch api http protokolü yüzünden javascriptin asenkron çalışmasına yol açıyor bu asenkron yapıyı da promise kullanarak süreci yönetip kullanımı kolaylaştırıyoruz.













//? ASYNC-AWAİT Enes Bayram'dan Alınan Kısım
// Bu yapı bizi promise-then zincirinden kurtaracktır.


function hello() {
    return "hello world!"
}

console.log(hello())


// Nasıl kullanılır
async function hello1() {
    return "hello world 1"
}

console.log(hello1())



// ! Bu fonksiyonun başına async gelince fonksiyon promise olarak döner
// ! Normalde bu yapıdan önce promise'lerde then ve catch ile bu yapıyı handle ediyorduk

// Butona tıklandığında ilgili post'a gidip id alınır ve id'ye göre postun yorumlarını almak istersek yapacağımız bu şekilde olurdu  BU fetch ile yapılan bir kısım ve işin içine promise giriyor. 
// const getPost = document.getElementById("getPost").addEventListener("click", () => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((response) => response.json())
//         .then((post) => {
            // Post'u aldığımızın kanıtı
//             console.log(post)
            // ilgili postu aldık posta göre id ile yorum alınması yapılması için istekte bulunuldu fetch ile ve bunun sonucunda promise döndüğünden then ve catch ile yakaladık.
//             fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//             .then((res)=>res.json())
//             .then((comments)=>console.log(comments))
//         })

// })





// ! await sadece asenkron fonksiyon tanımı yapılınca kullanılabilir. yani async anahtar kelimesi varsa ancak işe yarar
// ! kısacası bu ikisi birlikte kullanılır 
// ! Bir yerde bu yapı kullanılacaksa promise dönen yerlerde await ile beklenmesi gerekir. yoksa asenkron problemi yaşanır. altta ki satırlarda ki kodların çalışmasını önler asenkron problemi derken



// Async-await ile yapılması

// const getPost1 = document.getElementById("getPost").addEventListener("click", async () =>{
//     const resPost = await fetch("https://jsonplaceholder.typicode.com/posts/1")  // await anahtar kelimesi ile sunucuya istek atılması ve sonucun beklenmesi yapıldı türkçe de anlamı zaten bekle dönen yapı response türünde bir promise dönderir

//     console.log(resPost)
//     const post = await resPost.json()

//     const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//     const comments = await response.json()
//     console.log(comments)
// })



// ! Bı tık daha kısaltabiliriz
const getPost2 = document.getElementById("getPost").addEventListener("click", async () =>{
    const post = await (await (await fetch("https://jsonplaceholder.typicode.com/posts/1"))).json()
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json()

    console.log("POST::",post, "COMMENTS::",comments)
})





// ! NOT :: Async ile işaretleriz. Await ile bekleriz ve asenkron işlemleri senkron hale getiririz



//? --------------------------------- ASENKRON BÖLÜMÜ ÖZET----------------------------------

/* SENKRON :: Sırayla Çalışan işlem parçacıkları
 ASENKRON :: Eş zamanlı birden fazla iş yapılması 

 JAVASCRİPT SENKRON ÇALIŞAN BİR PROGRAMLAMA DİLİDİR
 BAŞTAN SONA SIRASIYLA ÇALIŞIR.

 BAZEN SENKRONDAN ASENKRONA DÖNEBİLİRİZ

//! Asenkron Çalışan Durumlar
 1-TİMİNG
 2-EVENTS
 3-HTTP REQUESTS
    3.1)XmlHttprequests
    3.2)Fetch Api
    3.3)Axios ---> react kütüphanesi kullanıldığında karşımıza çıkar

 BİZİM BU ASENKRON YAPILARI SENKRONA ÇEVİRMEMİZ LAZIM



//! Asenkron yapıları yönetmek için kullandığımız yapılar
1-Callback ---> ES6 Öncesi ---> Callback Hell sorunu vardı
2-Promise --->ES6 2015 ---> Promise then then zinciri sorunu vardı
3-Async - Await ES8 2017 





*/