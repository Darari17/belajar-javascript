// Buatlah sebuah class bernama CarFulll  yang memiliki properti merek, tahunPembayaranPajak, mesin, dan harga. Kemudian juga memiliki method getPajak yang mengembalikan biaya pajak berupa harga mobil dikali dengan 2,5 %.

// Kemudian buatlah class yang merupakan turunan dari class CarFull dengan nama class SuratKendaraan.

// Testcase :  jika objek mobil bernama myMobil dibuat dari class SuratKendaraan dengan nama Toyota, tahun 2016, mesin 1500,harga 300000000. Maka  nilai pajak 7500000.

class CarFull {
  constructor(merek, tpp, mesin, harga) {
    this.merek = merek;
    this.tahunPembayaranPajak = tpp;
    this.mesin = mesin;
    this.harga = harga;
  }

  getPajak() {
    return `biaya pajak sebesar ${harga * 0.025}`;
  }
}

class SuratKendaraan extends CarFull {
  constructor(merek, tpp, mesin, harga) {
    super(merek, tpp, mesin, harga);
  }
}

const myMobil = new SuratKendaraan("Toyota", 2016, 1500, 300_000_000);

console.log(myMobil);
