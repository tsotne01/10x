// Story:
// You’re a wizard casting a spell to create a magical shield. The spell requires you to repeat an incantation n times. Use a do...while loop to ensure the spell is cast correctly.
// Instructions:
// Write a function repeatString(str, n) that repeats a string n times using a do...while loop.
// Example:
// repeatString("Hello", 3); // Output: HelloHelloHello

function repeatString(string,num){
    if(num == 0) return;
    let n = 0;
    let str;
    while(n < num){
        str+=string;
    }

    return str;

}