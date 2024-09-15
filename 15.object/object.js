const user = {
  username: "Farid",
  age: 28,
  birthYear: 1996,
  address: {
    province: "Jawa Barat",
    city: "Sukabumi",
    postalCode: "43357",
  },
  greeting: () => {
    return "test";
  },
  intro: function () {
    // this ini hanya bisa digunakan dalam function biasa, bukan arrow function
    return `Hello, my name is ${this.username}`;
  },
};

// cari panggil nya:
console.log(user.intro());
