// Hogwarts needs a digital Sorting Hat! Create an array of student names and randomly assign them to one of the four houses using the `map()` method.
// Example input: `['Harry', 'Hermione', 'Ron', 'Draco']`
// Expected output: `['Harry - Gryffindor', 'Hermione - Ravenclaw', 'Ron - Gryffindor', 'Draco - Slytherin']`


const characters = ['Harry', 'Hermione', 'Ron', 'Draco'];
const houses = ["Gryffindor","Ravenclaw","Slytherin","Hufflepuff"];

const assignedHouses = characters.map((character)=> character.concat(houses[Math.floor(Math.random() * houses.length)]));

console.log(assignedHouses);