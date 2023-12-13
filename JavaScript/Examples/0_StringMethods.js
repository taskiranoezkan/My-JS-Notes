//NOT::search(), indexof() metodunda olduğu gibi aramaya başlanacak olan indeks numarasını almaz.
//NOT::indexof() metodu regular expression ifadelerini almaz.
//NOT:: slice() metodu ile substring() metodunun farkı; substring()'^da negatif indeks kullanamıyoruz.

//charAt(), belirtilen dizinden karakteri döndüren bir yöntemdir.
//Bir dizideki karakterler soldan sağa dizine alınır. İlk karakterin indeksi 0'dır ve stringName adlı bir dizgedeki son karakterin indeksi stringName.length – 1'dir.
//Sözdizimi
//Karakteri belirli bir dizinde bulmak için aşağıdaki sözdizimini kullanın.
//string.charAt(index);


//Javascript dersleri serimizin bu bölümünde javascript string metotları nedir ve nasıl kullanılır,öğrenelim.
//
//Javascript String Metotları
//Javascript string nesnesi ile hazır olarak gelen bir çok kullanışlı string metodu vardır.
//
//Javascript string metotlarına tanımladığımız string karakter dizisi üzerinden ulaşırız.
//
//Aşağıdaki javascript string metotlarını sırasıyla öğrenelim;
//
//String concat()
//String indexof() ve lastindexof()
//String search()
//String toUpperCase() ve toLowerCase() 
//String trim()
//String slice()
//String substring()
//String substr()
//String replace()
//String split()
//String concat()
//Javascript concat() metodu ile string concatenation yani string birleştirme yapabiliriz.
//
//var adsoyad = ad.concat(' ',soyad);  //Sadık Turan
//Orginal string verisi üzerinde bir güncelleme yapılmaz çünkü javascript' de string veriler immutable yani değiştirilemez. Concat örneğimizde ad ile soyad değişkenini birleştirip yeni bir string verinin içerisine kopyalıyoruz.
//
//String indexof() ve lastindexof() Metodu
//String indexof() metodunu karakter dizisinde arama yapmak için kullanıyoruz.
//
//string indexof() metodu parametre olarak gönderdiğimiz karakterin ilgili string dizisi içinde ilk geçtiği index bilgisini gönderir. 
//
//Eğer aranan ifade bulunamazsa -1 değeri gelir.
//
//Karakter dizilerinin ilk karakteri 0' dan başlar.
//
//var kurs = "Modern Javascript Dersleri: Baştan Sona Javascript Programlama";
//var result = kurs.indexOf("Javascript"); // result: 7
//Javascript, karakter dizisi içerisinde ilk olarak 7.indeks de bulunur.
//
//** lastindexof() metodu ise son bulunan karakterin indeks numarasını gönderir.
//
//var kurs = "Modern Javascript Dersleri: Baştan Sona Javascript Programlama";
//var result = kurs.lastindexOf("Javascript"); // result: 40
//Javascript, karakter dizisi içerisinde 2 defa bulunur ve lastindexof() en son bulduğunun indeks numarasını gönderir.
//
//** indexof() ve lastindexof() metotları ikinci parametre olarak aramanın başlanmak istediği indeks numarasını alabilirler.
//
//var kurs = "Modern Javascript Dersleri: Baştan Sona Javascript Programlama";
//var result = kurs.indexof("Javascript",10); // result: 40
//indexof() metoduna gönderilen 10 parametresi ile 10.indeks den itibaren arama yapılır dolayısıyla ilk Javascript bulunmaz ikinci bulunur.
//
//String search()
//String search() metodu da indexof() metodu gibi karakter dizisi içinde arama yapıp bulduğu karakterin indeks numarasını döndürür.
//
//var kurs = "Modern Javascript Dersleri: Baştan Sona Javascript Programlama";
//var result = kurs.search("Javascript"); // result: 7
//** search() ile indexof() metodunun farkı ise;
//
//search(), indexof() metodunda olduğu gibi aramaya başlanacak olan indeks numarasını almaz.
//indexof() metodu regular expression ifadelerini almaz.
//String toUpperCase() ve toLowerCase() 
//Javascript transform metotlarından toUpperCase() metodu ile karakter dizisini büyük harfe, toLowerCase() ile küçük harfe çevirebiliriz.
//
//var str1 = "Hello World!"; 
//var str2 = str1.toUpperCase();  // HELLO WORLD!
//var str3 = str1.toLowerCase();  // hello world!
//String trim()
//trim() metodu ile karakter dizisinin başındaki ve sonundaki boşluk karakterlerini sileriz.
//
//var greeting="   Hello World!    ";
//alert(greeting.trim()); // Hello World!
//String Parçalama Metotları
//Javascript' de bir karakter dizisi içinde belli aralıktaki karakterleri alabiliriz. String parçamak için kullanabileceğimiz 3 tane string metodu vardır.
//
//String slice()
//String substring()
//String substr()
//String parçalama metotların sırasıyla öğrenelim.
//
//String slice()
//slice() metoduna başlangıç ve bitiş indeksi vererek aralıktaki karakter dizisini alabiliriz.
//
//var str = "Mazda,Opel,Toyota";
//var result = str.slice(6, 10); // Opel
//7.indeksten başlar ve 10' e kadar alır. Son indeks numarası dahil olmaz.
//
//** Başlangıç ve bitiş indekslerini negatif olarak da verebiliriz. En sağdaki karakter -1 ile başlar.
//
//var str = "Mazda,Opel,Toyota";
//var result = str.slice(-11,-7); // Opel
//slice() metoduna bitiş indeksini vermezsek sona kadar alır.
//
//var str = "Mazda,Opel,Toyota";
//var result = str.slice(6); // Opel,Toyota
//String substring()
//slice() metodun olduğu gibi substring() metoduyla başlangıç ve bitiş indeksi vererek aralıktaki karakter dizisini alabiliriz.
//
//** slice() metodu ile substring() metodunun farkı; substring()'^da negatif indeks kullanamıyoruz.
//
//var str = "Mazda,Opel,Toyota";
//var result = str.slice(6, 10); // Opel
//** slice() metodunda olduğu gibi bitiş indeksini vermezsek sona kadar alır.
//
//String substr()
//substr(), slice() ve substring() gibi string parçalama işlemlerinde kullanılır ancak diğer metotlardan farkı ikinci parametre başlangıçtan itibaren alınacak karakter sayısını temsil eder.
//
//var str = "Mazda,Opel,Toyota";
//var result = str.substr(6,4); // Opel
//** ikinci parametre göndermezsek karakter dizisinin sonuna kadar alır.
//
//String replace()
//replace() metodu ile belirtilen bir string bilgiyi başka bir string bilgi ile güncelleyebiliriz.
//
//var str = "Mazda,Opel,Toyota";
//var result = str.replace("Mazda","Renault"); // Renault,Opel,Toyota
//** replace() metodu bulduğu ilk karakteri istenen karakter ile günceller.
//
//String split()
//Karakter dizisini belirtilen karakterden parçalara ayırarak bir dizi oluşturur.
//
//var adsoyad= "Sadık Turan";
//result = adsoyad.split(" "); 
//Boşluk karakterinden böler ve geriye bir dizi gönderir.
//
//result[0] dediğimizde "Sadık",
//
//result[1] dediğimizde ise, "Turan" bilgisi gelir.
//
//var str = "Mazda,Opel,Toyota";
//result = str.split(",");
//
// result[0]  => Mazda
// result[1]  => Opel
// result[2]  => Toyota