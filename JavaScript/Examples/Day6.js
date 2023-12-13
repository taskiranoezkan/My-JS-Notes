//JavaScript'te bir diziyi referanssız kopyalamak için bazı yöntemler vardır. İşte bu yöntemlerden birkaçı:
//
//Spread Operatörü kullanarak kopyalama:
//javascript
//Copy code
let originalArray = [1, 2, 3, 4, 5];
let copiedArray = [...originalArray];
//Spread operatörü, bir dizinin tüm elemanlarını ayrı ayrı çıkararak yeni bir dizi oluşturur. Bu şekilde, kopyalanan dizi referanssız olur.
//
//Array.from() yöntemini kullanarak kopyalama:
//javascript
//Copy code
let originalArray1 = [1, 2, 3, 4, 5];
let copiedArray1 = Array.from(originalArray1);
//Array.from() yöntemi, bir dizi veya iterable nesne kullanarak yeni bir diziyi oluşturur. Bu yöntemle yapılan kopyalama da referanssızdır.
//
//Array.prototype.slice() yöntemini kullanarak kopyalama:
//javascript
//Copy code
let originalArray2 = [1, 2, 3, 4, 5];
let copiedArray2 = originalArray2.slice();
//slice() yöntemi, bir dizinin belirli bir bölümünü alarak yeni bir dizi oluşturur. İlk ve son parametreleri belirtmediğinizde, tüm diziyi kopyalar. Bu şekilde yapılan kopyalama da referanssızdır.
//
//Bu yöntemlerin her biri, orijinal dizinin elemanlarını kopyalayarak yeni bir dizi oluşturur. Bu yeni dizi, orijinal diziden bağımsız bir şekilde kullanılabilir.








// NOT::Rest Parametresi
// Rest Parametresi, fonksiyonlara sınır sayısı olmadan parametre geçmemize olanak verir ve bizim isteğimiz harici kalan tüm öğeleri bir dizide toplar.
// 1. Rest Parametresi, geriye kalan tüm değişkenleri toplar bu yüzden fonksiyonun son parametresi olmalı
// 2. Bir fonksiyonda sadece bir Rest Parametresi olabilir




// NOT::Spread Operatör
//Spread Operatörü; String, Array veya Object değişmezlerini genişletmemize yardımcı olur.