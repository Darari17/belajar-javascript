const createKTP = (age = 0) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age < 17) {
        reject("ERROR: age not old enough");
      } else {
        resolve("valid! creating KTP");
      }
    }, 3000);
  });
};

const main = async () => {
  try {
    const result = await createKTP(20);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

main();
