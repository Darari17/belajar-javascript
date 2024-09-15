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
