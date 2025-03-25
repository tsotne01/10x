// 11. Batman’s Secret Identity – Function Closures
// Story:
// Gotham City’s criminals are desperately trying to uncover Batman’s true identity. But Bruce Wayne is smart—he has stored his identity inside a function closure, making it impossible to access unless called correctly.
// Your task is to create a function that hides Batman’s identity inside it and only reveals it when called properly.
// Instructions:
// Create a function batman().
// Inside batman(), create another function that returns "I am Batman!".
// Return the inner function from batman().
// Store the result of batman() in a variable and call it.
// Hint:
// 👉 Closures allow functions to “remember” the variables from their parent function, even after the parent function has executed.


function person(name){
    return ()=> console.log(`I'm ${name}`)
}

const batman = person("Batman");

batman();