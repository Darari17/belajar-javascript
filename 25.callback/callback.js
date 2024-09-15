const asyncOne = (callback) => {
  setTimeout(() => {
    console.log("function ONE is done");

    callback();
  }, 3000);
};

const asyncTwo = (callback) => {
  setTimeout(() => {
    console.log("function TWO is done");

    callback();
  }, 1000);
};

const asyncThree = () => {
  setTimeout(() => {
    console.log("function THREE is done");

    // callback();
  }, 2000);
};

asyncOne(() => {
  asyncTwo(() => {
    asyncThree();
  });
});
