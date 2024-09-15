// Buatlah sebuah fungsi dengan nama hitungTotal untuk menghitung total pembelian yang  menerima sebuah array objek produk yang berisi nama, harga, dan jumlah yang dibeli. Didalamnya harus ada pengecekan apakah setiap data produk yang dibeli memiliki ketiga propertinya. Jika validasi berhasil, fungsi harus mengembalikan promise dengan value total pembelian yang didapat dari harga dikalikan jumlah. Jika tidak, fungsi harus menolak promise dengan pesan error  Data Produk tidak valid

const hitungTotal = () => {
  return new Promise((resolve, reject) => {
    let result = 0; // sebuah result untuk total pembelian

    // menggunakan looping for..of untuk array object
    for (let obj of produk) {
      // ini validasi nya, jika bukan object dari ketiga properti tsb, maka akan di reject
      if (!obj.nama || !obj.harga || !obj.jumlah) {
        reject("Data Produk tidak valid"); // ketika gagal
      }
      result = result + obj.harga * obj.jumlah; // total pembelian
    }
    resolve(result); // ketika sukses maka menghasilkan result
  });
};

const produk = [
  { nama: "Kemeja", harga: 80, jumlah: 2 },
  { nama: "Selendang", harga: 20, jumlah: 13 },
  { nama: "Jeans", harga: 150, jumlah: 12 },
];

hitungTotal(produk)
  .then((result) => {
    console.log(`Total pembelian: ${result}`);
  })
  .catch((err) => {
    console.log(err);
  });
