// JavaScript'de, stringler ve diziler arasında ortak kullanılan bazı yaygın built-in (dahili) fonksiyonlar vardır. Bu fonksiyonlar, hem stringleri hem de dizileri işlemek ve manipüle etmek için kullanılabilir. İşte ortak kullanılan bazı built-in fonksiyonlar:

 // Hem stringlerde hem de dizilerde bulunan bir özelliktir. Stringlerde, bu özellik, stringin uzunluğunu döndürür. Dizilerde ise, bu özellik, dizideki elemanların sayısını verir.
// var myString = "Merhaba dünya!";
// var myArray = [1, 2, 3, 4, 5];

// console.log(myString.length); // Sonuç: 14
// console.log(myArray.length); // Sonuç: 5

indexOf()//: Hem stringlerde hem de dizilerde kullanılabilir. Stringlerde, belirtilen alt dizinin (substring) başlangıç dizinini döndürür. Dizilerde ise, belirtilen öğenin dizindeki ilk indeksini döndürür.
// var myString = "Merhaba dünya!";
// var myArray = [1, 2, 3, 4, 5];

// console.log(myString.indexOf("dünya")); // Sonuç: 8
// console.log(myArray.indexOf(3)); // Sonuç: 2

slice()//:Hem stringlerde hem de dizilerde kullanılır. Stringlerde, belirtilen başlangıç ve bitiş indeksleri arasındaki alt dizeyi (substring) alır. Dizilerde ise, belirtilen başlangıç ve bitiş indeksleri arasındaki alt diziyi döndürür.
// var myString = "Merhaba dünya!";
// var myArray = [1, 2, 3, 4, 5];

// console.log(myString.slice(0, 7)); // Sonuç: "Merhaba"
// console.log(myArray.slice(1, 4)); // Sonuç: [2, 3, 4]


toUpperCase() .toLowerCase()//: Stringlerde kullanılır. toUpperCase(), stringi büyük harflere dönüştürürken toLowerCase(), stringi küçük harflere dönüştürür.
// var myString = "Merhaba dünya!";

// console.log(myString.toUpperCase()); // Sonuç: "MERHABA DÜNYA!"
// console.log(myString.toLowerCase()); // Sonuç: "merhaba dünya!"


concat()//: Hem stringlerde hem de dizilerde kullanılır. Stringlerde, bir veya daha fazla stringi birleştirir. Dizilerde ise, iki diziyi birleştirir.
// var str1 = "Merhaba";
// var str2 = "dünya!";
// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];

// console.log(str1.concat(" ", str2)); // Sonuç: "Merhaba dünya!"
// console.log(arr1.concat(arr2)); // Sonuç: [1, 2, 3, 4, 5, 6]
// Bu fonksiyonlar, stringleri ve dizileri işlemek için sıklıkla kullanılan bazı temel built-in fonksiyonlardır. Bu listede olmayan daha birçok built-in fonksiyon da bulunmaktadır. JavaScript'in zengin bir standart kütüphanesi olduğu için, belirli bir ihtiyaca yönelik çeşitli built-in fonksiyonları kullanabilirsiniz.




