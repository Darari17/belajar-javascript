// Berikut adalah list Handphone Samy,

// a. Processor: "Ex 2100"
//    Type: "S21 Ultra"
//   Variant: RAM: 12,Internal: 256 dan RAM: 16, Internal:512
//   Tahun: 2021

// b. Processor: "SD 8 Gen 1"
//   Type: "S22 Ultra"
//   Variant:RAM: "12", Internal:"256" dan RAM: "12",Internal:"512"
//   Tahun: 2022

// c. Processor: "SD 8 Gen 2 for Galaxy"
//   Type: "S23 plus"
//   Variant:RAM: "8", Internal:"256" dan RAM: "8",Internal:"512"
//   Tahun: 2023

// d. Processor: "SD 8 Gen 2 for Galaxy"
//     Type: "S23 Ultra"
//     Variant:RAM: "12", Internal:"256" dan RAM: "12",Internal:"512"
//     Tahun: 2023

// Jika  data diatas disimpan dalam sebuah variabel, bernama handPhone, maka buatlah method bernama getProcessorWithRAM8 untuk mengambil list procesor yang memiliki variant RAM 8 kemudian me return list nya.

const handPhone = [
  {
    Processor: "Ex 2100",
    Type: "S21 Ultra",
    Variant: [
      { RAM: 12, Internal: 256 },
      { RAM: 12, Internal: 256 },
    ],
    Tahun: 2021,
  },
  {
    Processor: "SD 8 Gen 1",
    Type: "S22 Ultra",
    Variant: [
      { RAM: 12, Internal: 256 },
      { RAM: 12, Internal: 512 },
    ],
    Tahun: 2022,
  },
  {
    Processor: "SD 8 Gen 2 for Galaxy",
    Type: "S23 Plus",
    Variant: [
      { RAM: 8, Internal: 256 },
      { RAM: 8, Internal: 512 },
    ],
    Tahun: 2023,
  },
  {
    Processor: "SD 8 Gen 2 for Galaxy",
    Type: "S23 Ultra",
    Variant: [
      { RAM: 12, Internal: 256 },
      { RAM: 12, Internal: 512 },
    ],
    Tahun: 2023,
  },
];

const getProcessorWithRAM8 = () => {
  const x = [];

  handPhone.forEach((i) => {
    i.Variant.forEach((ram) => {
      if (ram.RAM === 8) {
        x.push(i.Processor);
      }
    });
  });
  return x;
};

console.log(getProcessorWithRAM8());

// penjelasan dari function getProcessorWithRAM8:

// 1. const x = yaitu menyediakan variabel yang berisi array kosong, yg akan diisi nanti
// 2. variable handphone di looping menggunakan forEach yang mempunyai parameter i, yang dimana i akan mengambil setiap object dari array of object variable handphone
// 3. lalu i mengambil sebuah property Variant dan melakukan sebuah looping menggunakan forEach yang mempunyai parameter ram.
// 4. lalu, dibuat if dengan kondisi jika Ram === 8 maka:
// 5. object yang berisikan sesuai dengan kondisi diatas, maka property prosesor akan di push kedalam variable x
// 6. lalu mengembalikan variable x yang sudah diisi sebelumnya.
// 7. console.log function getProcessorWithRAM8
