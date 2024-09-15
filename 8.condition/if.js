const price = 100;
const payment = 100;

if (payment > price) {
  console.log(`kembalian anda sebesar ${payment - price}`);
} else if (payment === price) {
  console.log("terima kasih uang and pas");
} else {
  console.log(`uang anda kurang ${payment - price}`);
}
