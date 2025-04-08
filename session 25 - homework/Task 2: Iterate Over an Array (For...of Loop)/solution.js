// Story:
// You’re a chef preparing a fruit salad for a royal banquet. The king has given you a list of fruits, and you need to display each one on a golden platter. Use a for...of loop to print each fruit from the array.
// Instructions:
// Write a function printArrayElements(arr) that prints each element of an array using a for...of loop.
// Example:
// printArrayElements(["Apple", "Banana", "Cherry"]); // Output: Apple, Banana, Cherry



function printArrayElements(array){
    for(let item of array){
        console.log(item);
    }
}

printArrayElements(["Apple", "Banana", "Cherry"]);
