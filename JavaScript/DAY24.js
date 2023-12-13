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
function prepareURL(url,id){
    if(url !==null){
        return url;
    }
    return `${url}?postId=${id}`;
}


// yorumları almak
function getComments(url,id){
    let newURL=prepareURL(url,id)
    const xhrr = new XMLHttpRequest();
    xhrr.addEventListener('readystatechange',()=>{
        if(xhrr.readyState===4 && xhrr.status===200){
            console.log(JSON.parse(xhrr.responseText)) //BURADA DÖNEN VERİ STRİN BİZ BUNU JSON FORMATINDA ALMAK İÇİN PARSE ETTİK
        }
    })

    xhrr.open("GET", newURL)
    xhrr.send()
}

getComments("https://jsonplaceholder.typicode.com/comments",null)




// NOT:: AJAX Kullanrak karşı taraffın verilerini kendi tarafımıza çektik. AJAX ara katmandır. eskidir.




function getData(url){
    const xhr= new XMLHttpRequest();
    xhr.addEventListener("readystatechange",()=>{
        if(xhr.status==200 && xhr.readyState==4){
            console.log(JSON.parse(xhr.responseText))
        }
    })
    xhr.open("GET",url)
    xhr.send();
}


getData("https://jsonplaceholder.typicode.com/users")








