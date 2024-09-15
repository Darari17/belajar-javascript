const asyncSum = (a, b, callback) => {
  setTimeout(() => {
    let result = 0;
    result = a + b;

    console.log("Done Sum");

    callback(result);
  }, 1000);
};

const asyncMultiply = (a, b, callback) => {
  setTimeout(() => {
    let result = 0;
    result = a * b;

    console.log("Done Multiply");

    callback(result);
  }, 1000);
};

const displayResult = (result) => {
  console.log(`Your result is ${result}`);
};

// sum
asyncSum(4, 5, (totalSum) => {
  displayResult(totalSum);
});

// multiply
asyncMultiply(4, 5, (totalMultiply) => {
  displayResult(totalMultiply);
});

// disini total sum dijadikan sebuah parameter untuk multiply
asyncSum(4, 5, (totalSum) => {
  asyncMultiply(totalSum, 3, (totalMultiply) => {
    displayResult(totalMultiply); // dan seterusnya. ini yang akan menjadi callback hell
  });
});

// ada juga yang nama nya callback hell, yang dimana semakin banyak callback yang saling tunggu, callback semakin nested(bersarang)
