// Agus memiliki sebuah mobil dengan spesifikasi berikut:
// Merek: Toyota ,
// Nama: Rush,
// Mesin 1500,
// Harga 200.000.000,
// Tahun 2023.

// Jika gaji Agus menjadi Rp30.000.000 maka Agus membeli mobil dengan spesifikasi:
// Merek: Toyota ,
// Nama: Ayla,
// Mesin 1200,
// Harga 150.000.000,
// Tahun 2027.

//  Jika gaji Agus menjadi Rp 50.000.000 maka Agus membeli mobil dengan spesifikasi
// Merek: Toyota ,
// Nama: Fortuner,
// Mesin 2000,
// Harga 500.000.000,
// Tahun 2027.

// Buatlah function bernama beliMobil yang memiliki 1 buah parameter yaitu gaji dan di dalamnya buatlah sebuah variable objectMobil sebagai output. Tentukan mobil yang dapat dibeli sehingga ketika function tersebut dipanggil akan mencetak informasi objectMobil setelah naik gaji. selain daripada itu Agus tidak membeli mobil baru.

// sesuai yang expected challenge
const beliMobil = (gaji) => {
  if (gaji === 50_000_000) {
    return {
      Merek: "Toyota",
      Nama: "Fortuner",
      Mesin: 2000,
      Harga: 500_000_000,
      Tahun: 2027,
    };
  } else if (gaji === 30_000_000) {
    return {
      Merek: "Toyota",
      Nama: "Ayla",
      Mesin: 1200,
      Harga: 150_000_000,
      Tahun: 2027,
    };
  } else {
    return {
      Merek: "Toyota",
      Nama: "Rush",
      Mesin: 1500,
      Harga: 200_000_000,
      Tahun: 2023,
    };
  }
};

console.log(beliMobil(500_000_000));

// best practice
const practiceBeliMobil = (gaji) => {
  if (gaji >= 50_000_000) {
    return {
      Merek: "Toyota",
      Nama: "Fortuner",
      Mesin: 2000,
      Harga: 500_000_000,
      Tahun: 2027,
    };
  } else if (gaji >= 30_000_000) {
    return {
      Merek: "Toyota",
      Nama: "Ayla",
      Mesin: 1200,
      Harga: 150_000_000,
      Tahun: 2027,
    };
  } else {
    return {
      Merek: "Toyota",
      Nama: "Rush",
      Mesin: 1500,
      Harga: 200_000_000,
      Tahun: 2023,
    };
  }
};

console.log("dibawah ini hasil dari best practice nya: ");
console.log(practiceBeliMobil(500_000_000));
