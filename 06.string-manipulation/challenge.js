//* Buatlah code  untuk memanipulasi string dalam variabel stringMethode yang dapat merubah sebuah string "Enigma Bootcamp Keren" menjadi "Awesome is Enigma Bootcamp, MANTAP!"

let enigma = "Enigma Bootcamp Keren";
let kata = "Mantap!";

let editEnigma = enigma.slice(0, 15);
let editKata = kata.toUpperCase();

// kedua nya sama saja
let stringMethode = `Awesome is ${editEnigma}, ${editKata}`;
let stringMethode2 = `Awesome is ${enigma.slice(0, 15)}, ${kata.toUpperCase()}`;

console.log(stringMethode);
console.log(stringMethode2);
