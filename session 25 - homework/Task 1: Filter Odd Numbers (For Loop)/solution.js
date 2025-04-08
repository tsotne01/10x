// Story:
// You’re a scientist analyzing a dataset of numbers. Your task is to filter out all the even numbers to focus on the odd ones. Use a for loop to achieve this.
// Instructions:
// Write a function filterOdds(numbers) that removes all even numbers from an array using a for loop.
// Example:
// filterOdds([1, 2, 3, 4, 5]); // Output: [1, 3, 5]


function filterOdds(array){
    return array.filter((_,index)=> index % 2 === 0);
}

filterOdds([1, 2, 3, 4, 5]);

