const createKTP = (age = 0) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age < 17) {
        reject("ERROR: age not old enough"); // ketika gagal
      } else {
        resolve("valid! creating KTP"); // ketika sukses
      }
    }, 3000);
  });
};

createKTP(15)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("checking process is done...");
  });

// .then itu nge handle resolve
// .catch itu nge handle reject
// .finally itu untuk memastikan sebuah proses dieksekusi setelah promise selesai baik sukses atau gagal
