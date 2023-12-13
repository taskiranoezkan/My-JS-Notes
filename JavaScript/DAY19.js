// Closure
// javascript bir fonksiyonun içinde başka bir fonksiyon oluşturmamıza izin veriyor
// Eğer iç fonksiyon dış fonksiyonun değişkenlerine erişip kullanıyorsa buna CLOSURE denir
// Fonksiyon fonksiyon döndürüyor o yuzden çağırırken normal fonksiyon  çağırı gibi çağırıdırz

// function Outer(){
//     let count=0
//     function İnner() {
//         count++
//         return count;
//     }
//     return İnner;
// }

// const inner = Outer()

// console.log(inner())
// console.log(inner())
// console.log(inner())
// console.log(inner())




// İKİ TANE İNNER FONKSİYON YANİ İKİ TANE CLOSURE

function counter(){
    let count=0
    function up(){
        count++
        return count;
    }
    function down(){
        count--
        return count;
    }
    return {
        up:up,      //!Burada parantez kullandım ama saçma oldu sonra bak nedeni parantez kullanınca fonksiyon çağrılmış olu
        down:down   //!Burada parantez kullandım ama saçma oldu sonra bak nedeni parantez kullanınca fonksiyon çağrılmış olur
    }
}

//TODO:Bu kodun çalışma mantığı çok hoş çünkü return ettiği değer bir obje ve obje olmasına karşın fonksiyonun içindeki iki fonksiyondan nesneler içeriyor CLOSURE YAPISI
/*
function counter(){
    let count=0
    function up(){
        count++
        return count;
    }
    function down(){
        count--
        return count;
    }
    return {
        up,     //!Bu şekilde de kullanım mümkünmüş
        down    //!Bu şekilde de kullanım mümkünmüş
    }
}
*/

let count = counter()
console.log(count.down())
console.log(count.down())
console.log(count.down())
console.log(count.down())
console.log(count.up())
console.log(count.up())
console.log(count.up())
console.log(count.up())
console.log(count.up())




// Asabenah'ın yaptığı gibi de çalışır mantık doğru ama  yukarıda çağırıp değişkene atmış biz aşağıda yani console da çağırıyoruz
/*

function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)

*/


















