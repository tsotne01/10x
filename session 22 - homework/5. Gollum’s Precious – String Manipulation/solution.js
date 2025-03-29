// 5. Gollum’s Precious – String Manipulation
// Story:
// Gollum is obsessed with the One Ring and repeats “My precious” over and over. Write a function to make Gollum sound like his usual self!
// Instructions:
// Create a function gollumSays(phrase).
// It should return the phrase three times, separated by "... ".
// Call it with: "My precious" (output: "My precious... My precious... My precious...").

const gollumSays = (phrase)=> (phrase + "...").repeat(3);

console.log(gollumSays("hello"))