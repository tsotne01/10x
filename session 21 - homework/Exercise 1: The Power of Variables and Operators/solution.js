

let gandalfMagicPower = 200;
let dumbledoreMagicPower = 200;

console.log("========================");
console.log(`Gandalf Magic Power is: ${gandalfMagicPower}`);
console.log(`Dumbledore Magic Power is: ${dumbledoreMagicPower}`)

console.log("Changing magic power");
gandalfMagicPower += Math.random() * 30
dumbledoreMagicPower -= Math.random() * 30

console.log(`New Power levels`);
console.log(`Gandalf Magic Power is: ${gandalfMagicPower}`);
console.log(`Dumbledore Magic Power is: ${dumbledoreMagicPower}`)
console.log(`${gandalfMagicPower >  dumbledoreMagicPower ? "Gandalf is Stronger!" : "Dumbledore is Stronger!" }`);
gandalfMagicPower == dumbledoreMagicPower && console.log("They Have equal Magic power");

console.log("========================");




