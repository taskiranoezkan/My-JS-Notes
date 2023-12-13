// js de promise async ve awaitleri detaylı ve anlaşılır ayrıca örnekler vererek anlatırmısın
// ChatGPT
// Elbette! JavaScript'te Promise, async/await ve bu kavramların nasıl çalıştığına dair ayrıntılı bir açıklama yapabilirim.

// Promise:
// Promise, asenkron işlemleri yönetmek için kullanılan bir yapıdır. Bir işlemin tamamlanması veya başarısız olması durumunda geri dönülecek bir sonuç veya hata döndürmek için kullanılır. Bir Promise nesnesi, başarılı sonuçları temsil eden resolve fonksiyonu ve hataları temsil eden reject fonksiyonu ile oluşturulur.
// Örnek:

// javascript
// Copy code
// const myPromise = new Promise((resolve, reject) => {
//   // Asenkron bir işlem gerçekleştir
//   // İşlem başarılıysa resolve fonksiyonunu çağır
//   // İşlem hatalıysa reject fonksiyonunu çağır
//   setTimeout(() => {
//     const randomNumber = Math.random();
//     if (randomNumber < 0.5) {
//       resolve(randomNumber);
//     } else {
//       reject(new Error('Sayı 0.5\'ten büyük oldu.'));
//     }
//   }, 2000);
// });

// // Promise'i kullanma
// myPromise
//   .then(result => {
//     console.log('Başarılı:', result);
//   })
//   .catch(error => {
//     console.log('Hata:', error.message);
//   });
// Yukarıdaki örnekte, myPromise adında bir Promise oluşturuyoruz. setTimeout fonksiyonu ile 2 saniye sonra rastgele bir sayı üretiyoruz. Eğer sayı 0.5'ten küçükse, resolve fonksiyonunu çağırarak Promise'i başarılı bir şekilde tamamlıyoruz. Eğer sayı 0.5'ten büyükse, reject fonksiyonunu çağırarak Promise'i hatalı bir şekilde tamamlıyoruz.

// Promise'i kullanırken .then() ile başarılı sonuçları işleyebilir ve .catch() ile hataları yakalayabiliriz.

// async/await:
// async/await, Promise'leri daha okunabilir ve senkron bir şekilde kullanmamızı sağlayan bir JavaScript sözdizimidir. async işlevler asenkron işlevleri tanımlamak için kullanılır ve await ifadesi, bir Promise'nin sonucunu beklemek için kullanılır.
// Örnek:

// javascript
// Copy code
// function waitAndPrint(message, milliseconds) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(message);
//     }, milliseconds);
//   });
// }

// async function printMessages() {
//   try {
//     const message1 = await waitAndPrint('İlk mesaj', 2000);
//     console.log(message1);
    
//     const message2 = await waitAndPrint('İkinci mesaj', 1000);
//     console.log(message2);
    
//     const message3 = await waitAndPrint('Üçüncü mesaj', 1500);
//     console.log(message3);
//   } catch (error) {
//     console.log('Hata:', error.message);
//   }
// }

// printMessages();
// Yukarıdaki örnekte, waitAndPrint adında bir fonksiyon oluşturuyoruz. Bu fonksiyon, belirtilen süre sonra verilen mesajı Promise olarak döndürüyor.

// printMessages adında bir async fonksiyon tanımlıyoruz. Bu fonksiyon, await ifadesiyle waitAndPrint fonksiyonunu çağırarak asenkron olarak mesajları bekliyor ve sırayla konsola yazdırıyor. try-catch bloğu ile hataları yakalayabiliyoruz.

// Sonuç olarak, printMessages fonksiyonunu çağırarak mesajları sırayla yazdırabiliyoruz. await ifadesi sayesinde, bir işlem tamamlanana kadar kodun beklemesini sağlayabiliyoruz.

// Bu şekilde, Promise, async/await ve ilgili kavramları JavaScript'te kullanabilir ve asenkron işlemleri daha kolay yönetebilirsiniz.