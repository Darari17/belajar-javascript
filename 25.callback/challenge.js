// Buatlah empat function dengan nama find1 yang akan dieksekusi setelah 1 detik, find2 yang akan dieksekusi setelah 1 detik, find3 yang akan dieksekusi setelah 1 detik, dan find4 yang akan dieksekusi setelah 1 detik.  Tiap function nya mencetak kata console log (nama function).

// Kemudian buatlah pemanggilan callback function dimana function find4 adalah function pertama yang dipanggil, function find2 adalah function kedua yang dipanggil, function find1 adalah function ketiga yang dipanggil, function find3 adalah function terakhir yang dipanggil.

const find1 = (cb) => {
  setTimeout(() => {
    console.log("consoloe log find1");

    cb();
  }, 1000);
};

const find2 = (cb) => {
  setTimeout(() => {
    console.log("consoloe log find2");

    cb();
  }, 1000);
};

const find3 = () => {
  setTimeout(() => {
    console.log("consoloe log find3");
  }, 1000);
};

const find4 = (cb) => {
  setTimeout(() => {
    console.log("consoloe log find4");

    cb();
  }, 1000);
};

find4(() => {
  find2(() => {
    find1(() => {
      find3();
    });
  });
});
