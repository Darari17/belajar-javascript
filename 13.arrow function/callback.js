const function1 = (cb) => {
  return cb();
};

const function2 = () => {
  console.log("test");
};

// function2 akan menjadi callback/cb dari function1
function1(function2);
