// Story:
// You’re a detective investigating a mysterious object. The object has hidden properties, and you need to uncover them using a for...in loop.
// Instructions:
// Write a function printObjectKeys(obj) that prints all the keys of an object using a for...in loop.
// Example:
// printObjectKeys({ name: "Alice", age: 25 }); // Output: name, age


function printObjectKeys(object){
    for(let key in object){
        console.log(key);
    }
}


printObjectKeys({ name: "Alice", age: 25 });



