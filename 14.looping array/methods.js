const users = ["farid", "rhamadhan", "darari"];

// contoh forEach
users.forEach((username, index) => {
  if (username.length < 6) {
    console.log(`username under 5 characters: ${username}`);
  }
  console.log(
    `username: ${username} | index: ${index} | jumlah karakter: ${username.length}`
  );
});

// find
const findUserName = users.find((username) => {
  return username.length === 5;
});

console.log(findUserName);

// dan lain lain, silakan cek dokumentai method array
