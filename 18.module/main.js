// import versi commonJs
const { add } = require("./add");
const { multiply } = require("./multiply");
const { outPut } = require("./output");

let x = 5;
let y = 10;

const multiplyResult = multiply(x, y);

console.log(outPut(add(x, y))); // bisa langsung
console.log(outPut(multiplyResult)); // bisa pakai variable
