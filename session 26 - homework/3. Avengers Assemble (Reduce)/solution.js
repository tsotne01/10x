// The Avengers need funding. Use the `reduce()` method to sum up the total budget required for each Avenger’s mission.
// Example input: `[ {hero: 'Iron Man', budget: 5000}, {hero: 'Hulk', budget: 2000} ]`
// Expected output: `Total budget: 7000`


const avengers = [ {hero: 'Iron Man', budget: 5000}, {hero: 'Hulk', budget: 2000} ];

const totalBudget = avengers.reduce((acc,cur)=> acc + cur.budget,0);

console.log(totalBudget);