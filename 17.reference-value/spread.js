// spread operator

// object
const user1 = {
  username: "naruto",
  age: 28,
};

const user2 = {
  title: "hokage",
  ...user1,
};

console.log(user1);

// array
const fruits = ["mangga", "jeruk", "apel"];
const fruits2 = ["semangka", "salak"];

const buah = [...fruits];
buah[0] = "durian";

const buah2 = [...fruits, ...fruits2]; //menggabungkan

console.log(fruits);
console.log(buah);
console.log(buah2);

// Spread operator (...) adalah fitur di JavaScript yang digunakan untuk menyebarkan elemen-elemen dari array atau properti dari objek ke dalam kumpulan elemen atau objek baru. Operator ini sangat berguna untuk menyalin atau menggabungkan array dan objek, serta mempermudah pemrosesan nilai-nilai dalam struktur data yang kompleks.

// 1. menyebarkan element array atau properti object
// 2. menggabungkan array
// 3. menyalin array dan object
