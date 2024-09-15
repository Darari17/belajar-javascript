const x = 5;
const y = 3;

// equal to (ngecek value aja)
const equalTo = x == y;
console.log(equalTo);

// strict equal to (ngecek value dan tipe data)
const strictEqual = x === y;
console.log(strictEqual);

// not equal
const notEqual = x != y;
console.log(notEqual);

// strict not equal
const strictNotEqual = x !== y;
console.log(strictNotEqual);

// greater than
const greater = x > y;
console.log(greater);

// less than
const less = x < y;
console.log(less);

// greater than equal
const greater2 = x >= y;
console.log(greater2);

// less than equal
const less2 = x <= y;
console.log(less2);

// and (semua harus true suapaya output jadi true)
const and1 = true && true; // -> output rue
const and2 = true && false; // -> output false
console.log(and1, and2);

// or (salah satu ada true maka output true)
const or1 = true || false; // -> output true
console.log(or1);
