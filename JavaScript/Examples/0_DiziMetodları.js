//1. forEach()
//Bu metod dizi içerisindeki her eleman için fonksiyonumuzu çalıştırır.
//
//
//Eğer dönen elemanların index numarasına da istiyorsak şu şekilde kullanmalıyız;
//
//
//2. includes()
//Bu metod bir dizinin belirli bir elemanı içerip içermediğini belirler, içeriyorsa true içermiyorsa false değeri döndürür.
//
//
//3. filter()
//Bu metod belirlediğimiz bir kurala göre tüm dizi elemanlarını kontrol eder ve kuralı geçen dizi elemanlarıyla yeni bir dizi oluşturur.
//
//
//4. map()
//Bu metod bir dizide değişiklik yaparak yeni bir dizi oluşturmamıza yardımcı olur. Aşağıda ki örnekte var olan dizimizin içinde ki sayıları bir artırarak yeni bir dizi oluşturacağız. Ardından var olan dizimiz ile yeni oluşturduğumuz diziyi ekrana yazdıracağız burada ki önemli nokta eski dizimizde hiçbir değişikliğin olmadığıdır.
//
//
//Bu metodun forEach ile bir farkı olmadığını düşünebilirsiniz ancak forEach metodu ile tüm dizi elemanlarımızı döndürdüğümüzde yeni bir değişkene atamayız. Aynı örneği birde forEach ile yaparak ekran çıktılarımızı inceleyelim.
//
//
//5. reduce()
//Bu metod iki parametre alır; birinci parametre işlem gerçekleştirecek olan metodumuz ikincisi ise ilk değerimizdir. Eğer ilk değeri belirtmezsek ilk değerimiz dizimizin ‘0’ index numaralı elemanı olur.
//
//array.reduce(islemYapanMetod, ilkDeger);
//
//Hemen bunu bir örnekle inceleyelim. Örneğimizde dizimizde bulunan sayılarımızı toplayacağız.
//
//
//Yukarıdaki kod parçasında başlangıç değerimizi belirtmedik dolayısıyla ilk elemanımız array dizisinin ‘0’ index numaralı elemanıdır. Kodumuz çalışmaya başladığında array dizisinin her bir elemanı kadar islemYapanMetod isimli metodumuzu çalıştırır. Metod her çalıştığında dönen sonucu bir sonra ki metoda parametre olarak gönderir, gönderdiği değer islemYapanMetod isimli metodumuzun ilk parametresidir. Böylece bir önceki değeri bilmeye devam ederiz ve her eleman ile toplayarak tüm dizi elemanlarını toplayabiliriz. Çalışma mantığının daha iyi kavranması için ufak bir şablon çizdim.
//
//
//Aynı örneği birde başlangıç değeri vererek yapalım.
//
//
//Bu örneğimizin bir öncekinden farkı artık bir başlangıç değerinin olmasıdır. Yani artık ilk elemanımız dizimizin ‘0’ index numaralı elemanı değil bizim belirttiğimiz ‘5’ değeridir.Çalışma mantığının daha iyi kavranması için ufak bir şablon çizdim.
//
//
//6. some()
//Bu metod dizimizde bulunan elemanların en az biri belirlediğimiz kurala uyuyorsa true, hiçbiri uymuyorsa false değeri döner.
//
//
//7. every()
//Bu metod dizimizde bulunan elemanların tamamı belirlediğimiz kurala uyuyorsa true, herhangi birisi uymuyorsa false değeri döner.
//
//
//8. sort()
//Bu metod, dizinin elemanlarını artan veya azalan düzende düzenlemek / sıralamak için kullanılır.
//
//
//Burada dikkat ettiğiniz üzere sayılarda mantıklı bir sıralama yapmadı bunun için birkaç kod daha yazmamız gerekiyor.
//
//
//9. Array.from()
//Bu metod dizi oluşturmamıza yardımcı olur özellikle DOM üzerinde çalışıyorken oldukça işimize yarayabilir.
//
//
//Yukarıda ki örneğimize baktığınızda eğer biliyorsanız split() metod ile aynı şeyi yaptığını düşünebilirsiniz ve haksızda sayılmazsınız ancak baştada dediğimiz gibi daha çok DOM üzerinde çalışırken işimize yarayacaktır. Şimdide DOM üzerinde kullanımını bir örnekle inceleyelim.
//
//
//querySelectorAll ile DOM üzerinde bulunan ‘li’ elemanlarını seçtik ancak seçtiklerimiz bir dizi değil eğer bunları dizi olarak istiyorsak Array.from işte burada çok işimize yarayabilir.
//
//10. Array.of()
//Bu metod ile yeni bir dizi oluşturabilirsiniz. Eğer Array() metoduyla ne farkı olduğunu düşünüyorsanız farkı şudur; Array() metoduna tek bir parametre gönderirseniz ve bu bir sayı ise dizi oluşturulmaz gönderdiğiniz sayı boyutunda elemanları boş bir dizi oluşturulur ancak Array.of() metoduna tek bir parametre ve sayı bile gönderseniz, o elemanın bulunduğu bir dizi oluşturur. Daha iyi anlamak için aşağıda ki örneği inceleyebilirsini
//
//
//