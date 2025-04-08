// Story:
// You’re a spy decoding a secret message. The message is encrypted in reverse, and you need to use a while loop to decode it.
// Instructions:
// Write a function reverseString(str) that reverses a string using a while loop.
// Example:
// reverseString("Hello"); // Output: olleH


function reverseString(string){
    let last = string.length - 1;
    let reversedStr = "";
    while(last >= 0){
        reversedStr+=string[last];
        last--;
    }
    return reversedStr;
}

console.log(reverseString("Hello"));
