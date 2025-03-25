// Hard (1 Exercise)
// 12. The Enchanted Mirror – Higher-Order Functions
// Story:
// In a hidden chamber of a mystical castle, there is an Enchanted Mirror that speaks only in uppercase letters. The mirror allows visitors to ask one question, but it transforms their words before answering.
// Your task is to write a higher-order function that takes a message and a transformation function, then applies the transformation before returning the mirror’s reply.
// Instructions:
// Write a function magicMirror(message, transformFunction).
// Inside magicMirror(), apply the transformFunction to message.
// Return:
// "The mirror says: [transformed message]".
// Call magicMirror("Will I be rich?", str => str.toUpperCase()).
// Example Output:
// this mirror says: Will I be rich
// 💡 Hint: A higher-order function is a function that takes another function as an argument or returns a function. Here, magicMirror() allows different transformations to be applied to messages.


function magicMirror(str,transformFn){
    console.log("The mirror says:",transformFn(str));
}


magicMirror("BRBRBRBRbrbr!",(s)=>s.toUpperCase());