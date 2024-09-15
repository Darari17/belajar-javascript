const asyncOne = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("function ONE is done"); // ketika sukses
    }, 3000);
  });
};

const asyncTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("function TWO is done"); // ketika sukses
    }, 1000);
  });
};

const asyncThree = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("function THREE is done"); // ketika sukses
    }, 2000);
  });
};

asyncOne()
  .then((result) => {
    console.log(result);

    return asyncTwo();
  })
  .then((result2) => {
    console.log(result2);

    return asyncThree();
  })
  .then((result3) => {
    console.log(result3);
  });

// result itu berasal dari value resolve
// .then akana tereksekusi ketika resolve kepanggil
