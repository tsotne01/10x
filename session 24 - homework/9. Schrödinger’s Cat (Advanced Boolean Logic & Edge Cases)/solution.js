// 9. Schrödinger’s Cat (Advanced Boolean Logic & Edge Cases)
// Story: Schrödinger’s Cat is in a box, but until observed, it is both alive and dead. Can JavaScript express this paradox?
// Task: Write a function schrodingerCat(state1, state2) that:
// Returns true if state1 and state2 are both truthy or both falsy.
// Returns false otherwise.
// Example:
// console.log(schrodingerCat("alive", "dead")); // true
// console.log(schrodingerCat(10, undefined)); // false
// console.log(schrodingerCat(1, "yes")); // true
// console.log(schrodingerCat("cat", 0)); // false

const schrodingerCat = (state1, state2) => Boolean(state1) === Boolean(state2);



console.log(schrodingerCat("alive", "dead")); // true
console.log(schrodingerCat(10, undefined)); // false
console.log(schrodingerCat(1, "yes")); // true
console.log(schrodingerCat("cat", 0)); // false
