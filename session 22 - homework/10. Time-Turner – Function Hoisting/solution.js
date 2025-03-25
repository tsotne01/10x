// Story:
// Hermione Granger accidentally used the Time-Turner incorrectly, causing a function to be called before it is even defined. Surprisingly, JavaScript allows this!
// Your task is to write a function, call it before it’s defined, and explain why JavaScript lets this happen.
// Instructions:
// Call the function first, before defining it.
// Define a function turnBackTime() that logs "Going back in time!".
// Explain why it still works (Hint: Function Hoisting).
// Hint:
// 👉 JavaScript moves function declarations to the top of the file before executing code. This is called hoisting.


turnBackTime();

function turnBackTime(){
    console.log("Turn Back Time!")
}
