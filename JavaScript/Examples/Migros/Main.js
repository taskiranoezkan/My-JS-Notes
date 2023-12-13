let mesaj = `
Migros'a Hoşgeldiniz.
Money Kartınız Var Mı

1-Evet
2-Hayır

`;

const urunler = [
    {
        urunIsmi: 'Süt',
        fiyat: 15
    },
    {
        urunIsmi: 'Peynir',
        fiyat: 150
    },
    {
        urunIsmi: 'Calgon',
        fiyat: 75
    },
    {
        urunIsmi: 'Yağ',
        fiyat: 175
    }
]

let sonuc = confirm(mesaj)
let odenecekTutar;
if (sonuc) {
    let isim = prompt('Adınız')
    let soyİsim = prompt('Soyisminiz')

    const musteri = new Musteri(isim, soyİsim, sonuc, urunler)
    odenecekTutar = musteri.hesapla()
    alert(`Müsteri bilgileri: ${isim} ${soyİsim} Ödenecek Tutar : ${odenecekTutar}`)

} else {
    const musteri = new Musteri(null, null, sonuc, urunler)
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar: ${odenecekTutar}`)
}


