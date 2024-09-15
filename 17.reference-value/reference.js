// pass by reference
// Pass by reference digunakan untuk tipe data non-primitif (seperti objek dan array). Perubahan di dalam fungsi akan memengaruhi objek asli di luar fungsi.
const user1 = {
  username: "naruto",
  age: 28,
};

const user2 = user1;
user2.username = "sasuke";

console.log(user1);

// pass by reference berisi tipe data:
// object
// array
// function
