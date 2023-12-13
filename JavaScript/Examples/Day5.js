// Ürün Arama Uygulaması

let urun1 = {
    isim: 'Acer Swift 1 SF113',
    kategori: 'Teknoloji',
    fiyat: 6219
}


let urun2 = {
    isim: 'Lenovo Ideapad LNV120',
    kategori: 'Teknoloji',
    fiyat: 10_000 // Bu özellik kullanılabilir durumdadır binleri simgelemek için kullanılır. 
}


let urun3 = {
    isim: 'Acer Nitro-5',
    kategori: 'Teknoloji',
    fiyat: 8.999
}


let urun4 = {
    isim: 'Asus Tuf Gaming F15',
    kategori: 'Teknoloji',
    fiyat: 15.500
}


let urun5 = {
    isim: 'Macbook Air',
    kategori: 'Teknoloji',
    fiyat: 17.999
}


let urun6 = {
    isim: 'Macbook Pro',
    kategori: 'Teknoloji',
    fiyat: 20.000
}




let urunler = [urun1, urun2, urun3, urun4, urun5, urun6]
let filtreliUrunler = []

// let arananUrun = prompt('Lütfen ürün ismi giriniz.')

function filtreliUrunleriDoldur(urunler) {
    urunler.forEach((urun) => {
        if (urun.isim.toUpperCase().includes(arananUrun.toUpperCase(), 0)) {
            filtreliUrunler.push(urun)
        }
    })
}

function filtreliUrunleriYazdir(filtreliUrunler) {
    filtreliUrunler.forEach(function (urun) {
        console.log("|" + urun.isim + "|" + urun.kategori + "|" + urun.fiyat + "|")
    })

}



// filtreliUrunleriDoldur(urunler)
// filtreliUrunleriYazdir(filtreliUrunler)



// Kitap-Raf Bulma Uygulması

let kitap1 = { isim: 'Her Şeyi Düşünme', yazar: 'Anne Bogel', fiyat: 25, raf: "1.5.RAF" }
let kitap2 = { isim: 'Hiç Bir Karşılaşma Tesadüf Değildir', yazar: 'Hakan Mengüç', fiyat: 56, raf: "2.4.RAF" }
let kitap3 = { isim: 'Insan Ne Ile Yaşar', yazar: 'Lev Tolstoy', fiyat: 34, raf: "5.5.RAF" }
let kitap4 = { isim: 'Zafer Sızlanarak Kazanılmaz', yazar: 'Haluk Tatar', fiyat: 45, raf: "3.3.RAF" }
let kitap5 = { isim: 'Şeker Portakalı', yazar: 'José Mauro de Vasconcelos', fiyat: 40, raf: "3.1.RAF" }
let kitap6 = { isim: 'Simyacı', yazar: 'Paulo Coelho', fiyat: 49, raf: "4.5.RAF" }


let kitaplar = [kitap1, kitap2, kitap3, kitap4, kitap5, kitap6]

let raf11 = { kod: '1.1.RAF', goster: false }
let raf12 = { kod: '1.2.RAF', goster: false }
let raf13 = { kod: '1.3.RAF', goster: false }
let raf14 = { kod: '1.4.RAF', goster: false }
let raf15 = { kod: '1.5.RAF', goster: false }

let raf21 = { kod: '2.1.RAF', goster: false }
let raf22 = { kod: '2.2.RAF', goster: false }
let raf23 = { kod: '2.3.RAF', goster: false }
let raf24 = { kod: '2.4.RAF', goster: false }
let raf25 = { kod: '2.5.RAF', goster: false }

let raf31 = { kod: '3.1.RAF', goster: false }
let raf32 = { kod: '3.2.RAF', goster: false }
let raf33 = { kod: '3.3.RAF', goster: false }
let raf34 = { kod: '3.4.RAF', goster: false }
let raf35 = { kod: '3.5.RAF', goster: false }

let raf41 = { kod: '4.1.RAF', goster: false }
let raf42 = { kod: '4.2.RAF', goster: false }
let raf43 = { kod: '4.3.RAF', goster: false }
let raf44 = { kod: '4.4.RAF', goster: false }
let raf45 = { kod: '4.5.RAF', goster: false }


let raf51 = { kod: '5.1.RAF', goster: false }
let raf52 = { kod: '5.2.RAF', goster: false }
let raf53 = { kod: '5.3.RAF', goster: false }
let raf54 = { kod: '5.4.RAF', goster: false }
let raf55 = { kod: '5.5.RAF', goster: false }


let raflar = [
    [raf51, raf52, raf53, raf54, raf55],
    [raf41, raf42, raf43, raf44, raf45],
    [raf31, raf32, raf33, raf34, raf35],
    [raf21, raf22, raf23, raf24, raf25],
    [raf11, raf12, raf13, raf14, raf15],

]





function rafOlustur() {
    console.clear()
    let satir = ""
    for (let i = 0; i < raflar.length; i++) {
        for (let j = 0; j < 5; j++) {
            satir += "|" + (raflar[i][j].goster ? raflar[i][j].kod : "----")
        }
        console.log(satir)
        console.log("-------------------------")
        satir = ""
    }
}


function kodBul(kitapIsmi) {
    let rafKod = null
    kitaplar.forEach(function (kitap) {
        if (kitap.isim.toUpperCase().includes(kitapIsmi.toUpperCase())) {
            rafKod = kitap.raf
        }
    })
    return rafKod;
}



function raftaGoster(rafKodu) {
    for (let i = 0; i < raflar.length; i++) {
        for (let j = 0; j < 5; j++) {
            if (raflar[i][j].kod == rafKodu) {
                raflar[i][j].goster = true
                break;
            }
        }
    }
}


// let aranan = prompt('Hangi Kitabı Arıyorsunuz?')
// let rafKodu = kodBul(aranan)

// if(rafKodu!=null){
//     raftaGoster(rafKodu);
//     rafOlustur();
// }else{
//     alert('Aradığınız kitap kütüphanemizde yoktur maaslesef!!')
// }

