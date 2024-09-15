// Destructuring adalah fitur dalam JavaScript yang memungkinkan kita untuk memecah struktur data seperti array atau objek menjadi variabel yang lebih kecil dan lebih mudah digunakan. Fitur ini mempercepat dan mempermudah akses data dari sebuah struktur kompleks.

// destructuring object
const user = {
  username: "farid",
  age: 28,
  job: "progammer",
  address: {
    city: "sukabumi",
    street: "jl. siliwangi",
  },
};

const { username } = user;

console.log(username);

// destructuring array
const fruits = ["leci", "jeruk", "mangga"];

const [a, b, c] = fruits; // variable berdasarkan index
const [palingSuka, ...iniSisaNya] = fruits; // bisa juga mengunakan rest/sisa nya

console.log(iniSisaNya);
