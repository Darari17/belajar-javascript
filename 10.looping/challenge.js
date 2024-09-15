let rows = 5;

for (let i = 1; i <= rows; i++) {
  let str = "";

  for (let j = i; j < rows; j++) {
    str += "_";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    str += "#";
  }
  console.log(str);
}
