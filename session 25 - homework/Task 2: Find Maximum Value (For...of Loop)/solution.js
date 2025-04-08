// Story:
// You’re a treasure hunter searching for the most valuable gem in a cave. The gems are stored in an array, and you need to find the one with the highest value. Use a for...of loop to solve this.
// Instructions:
// Write a function findMaxValue(numbers) that finds the maximum value in an array using a for...of loop.
// Example:
// findMaxValue([10, 20, 5, 30]); // Output: 30

function findMaxValue(array) {
  return array.sort((a, b) => b - a)[0];
}

console.log(findMaxValue([10, 20, 5, 30]));

