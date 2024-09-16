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

// yang ini juga bisa...

let a = 5;

for (let i = 0; i <= a; i++) {
  let b = "";

  for (let j = i; j < a; j++) {
    b += " ";
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    b += "*";
  }

  console.log(b);
}
