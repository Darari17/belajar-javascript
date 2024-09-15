const asyncOne = () => {
  setTimeout(() => {
    console.log("function ONE is done");
  }, 3000);
};

const asyncTwo = () => {
  setTimeout(() => {
    console.log("function TWO is done");
  }, 1000);
};

const asyncThree = () => {
  setTimeout(() => {
    console.log("function THREE is done");
  }, 2000);
};

asyncOne();
asyncTwo();
asyncThree();
