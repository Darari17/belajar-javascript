const asyncSum = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let hasil = 0;
      hasil = a + b;

      resolve(hasil);
    }, 1000);
  });
};

const asyncMultiply = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let hasil = 0;
      hasil = a * b;

      resolve(hasil);
    }, 1000);
  });
};

const main = async () => {
  // await adalah menunggu sebuah proses async samapai selesai. harus ada async
  const sumResult = await asyncSum(5, 4);
  const multiplyResult = await asyncMultiply(sumResult, 3);

  console.log(multiplyResult);
};

main();
