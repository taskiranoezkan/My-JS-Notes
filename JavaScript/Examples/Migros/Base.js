class Base {


    indirimOrani = 20;


    constructor(firstName, lastName, kartVarMi, urunler) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.kartVarMi = kartVarMi;
        this.urunler = urunler;
    }

    hesapla() {

        let odenecekTutar = 0;

        if (this.urunleriKontrolEt(this.urunler)) {
            //sepet dolu
            if (this.kartVarMi) {
                //money kart var
                this.urunler.forEach(urun => {
                    odenecekTutar += (urun.fiyat * (100 - this.indirimOrani) / 100);
                });
            } else {
                //money kart yok
                this.urunler.forEach(urun => {
                    odenecekTutar += urun.fiyat;
                });
            }

        } else {
            //sepet boş
            alert('En az bir adet ürün satın almış olmalısınız!')
        }

        return odenecekTutar;
    }



    urunleriKontrolEt(urunler) {
        if (urunler != null && urunler.length > 0) {
            return true;
        }
        return false;
    }
}