// Story:
// You’re a treasure hunter exploring an ancient cave. The cave has n golden coins scattered around. Use a while loop to calculate the total value of all the coins.
// Instructions:
// Write a function sumNumbersUpTo(n) that calculates the sum of numbers from 1 to n using a while loop.
// Example:
// sumNumbersUpTo(5); // Output: 15 (1 + 2 + 3 + 4 + 5)



function sumNumbersUpTo(n){
    if(n < 1) return 0;
    let sum = 0;
    // for(let i = 1; i <= n;i++){
    //     sum+=i;
    // }
    let num = 1;
    while(num <=n){
        sum+=num
        num++;
    }
    return sum;
}

console.log(sumNumbersUpTo(5));


