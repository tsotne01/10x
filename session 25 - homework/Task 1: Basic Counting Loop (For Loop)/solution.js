// Story:
// The evil sorcerer has trapped you in a dungeon with a magical countdown lock. To escape, you need to write a JavaScript function that counts down from n to 1. If you succeed, the lock will open, and you’ll be free!
// Instructions:
// Write a function countDownFrom(n) that prints numbers from n to 1 using a for loop.
// Example:
// countDownFrom(5); // Output: 5, 4, 3, 2, 1


function countDownFrom(n){
    for(let i = n;i>0;i--){
        console.log(i)
    }
}


countDownFrom(5);
