
//spread ve rest operatörü aynı şey midir
//spread ve rest operatörü farklı amaçlar için kullanılan iki ayrı operatördür. İkisi de üç nokta işareti (...) kullanır, ancak kullanıldıkları bağlam ve işlevleri farklıdır.

//Spread operatörü, bir dizi veya iterable bir nesneyi ayrı ayrı elemanlar halinde genişletir veya kopyalar. Bu şekilde, bir dizi veya iterable nesnenin elemanlarını başka bir diziye eklemek, fonksiyona argümanlar olarak geçmek veya nesneleri birleştirmek gibi işlemler yapılabilir.

//const numbers = [1, 2, 3];
//const copiedNumbers = [...numbers]; // spread operatörüyle dizi kopyalama

//const array1 = [1, 2, 3];
//const array2 = [4, 5, 6];
//const mergedArray = [...array1, ...array2]; // spread operatörüyle dizileri birleştirme

//function sum(a, b, c) {
//  return a + b + c;
//}

//const numbers = [1, 2, 3];
//const result = sum(...numbers); // spread operatörüyle dizi elemanlarını fonksiyona argüman olarak geçme
//Rest Parametresi:
//Rest parametresi, bir fonksiyona geçilen değişken sayıda argümanları bir dizi olarak toplar. Bu şekilde, fonksiyon içinde argümanların işlenmesi ve kullanılması kolaylaşır.


//function sum(...numbers) {
//  let total = 0;
//  for (let i = 0; i < numbers.length; i++) {
//    total += numbers[i];
//  }
//  return total;
//}

//const result = sum(1, 2, 3, 4, 5); // rest parametresiyle değişken sayıda argümanları toplama
//Özetle, spread operatörü bir dizi veya iterable nesneyi ayrı elemanlara ayırırken, rest parametresi bir fonksiyona geçilen değişken sayıda argümanları bir dizi olarak toplar. İkisi de farklı senaryolarda kullanılır ve farklı işlevlere sahiptir.




//JavaScript'te, kendi kendini çağıran (self-invoking) fonksiyonlar, tanımlandıktan hemen sonra otomatik olarak çağrılan fonksiyonlardır. Bu tür fonksiyonlar, bir fonksiyon ifadesini parantez içine alarak ve sonuna bir çağrı operatörü () ekleyerek oluşturulur.
//
//Örnek bir kendi kendini çağıran fonksiyon:
//
//javascript
//Copy code
//(function() {
//  console.log("Kendi kendini çağıran fonksiyon");
//})();
//Kendi kendini çağıran fonksiyonların birkaç faydası vardır:
//
//Kapsama Alanı İzolasyonu: Kendi kendini çağıran bir fonksiyon, içinde tanımlanan değişkenlerin dışarıya sızmasını engeller. Bu, değişkenlerin global kapsamı kirletmesini önleyerek, çakışmalara ve hatalara neden olabilecek değişken adları çakışmalarını azaltır.
//
//Modülleme ve Namespace Oluşturma: Kendi kendini çağıran fonksiyonlar, bir modül veya bir namespace oluşturmak için kullanılabilir. İçerideki fonksiyonlar ve değişkenler, dışarıdaki koddan gizlenebilir ve sadece içerideki fonksiyonlar tarafından erişilebilir olabilir.
//
//Hızlı Çalışma: Kendi kendini çağıran fonksiyonlar, kodun bir arada gruplanmasını ve birim olarak çalışmasını sağlar. Bu şekilde, sayfa yüklendiğinde veya belirli bir olay gerçekleştiğinde hızlı bir şekilde çalıştırılabilirler.
//
//İnitialization İşlemleri: Kendi kendini çağıran fonksiyonlar, birkaç başlangıç işlemi veya yapılandırma adımının otomatik olarak gerçekleştirilmesi için kullanılabilir. Bu, özellikle bir sayfa veya uygulama yüklendiğinde yapılması gereken işlemler için kullanışlı olabilir.
//
//Kendi kendini çağıran fonksiyonlar, genellikle kodun düzenli ve organize olmasını sağlamak ve istenmeyen etkileşimleri önlemek için kullanılır. Ayrıca, modüler bir yapı oluşturmak veya başlangıç işlemlerini gerçekleştirmek için de kullanışlıdır.


function handsUp(param1,param2) {
    if(param1=2){
        console.log('iki elini de kaldır yavru')
        if(true){
            console.log(`${param2} saniye eller havada kalacak`) 
        }
    }
}
