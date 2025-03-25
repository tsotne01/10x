
// Story:
// Thanos is about to snap his fingers, but before he does, he needs to check if he has all six Infinity Stones. However, since he keeps his stones hidden inside a secret function, his assistants can’t access the stones directly!
// Your task is to write a function that holds the number of Infinity Stones inside it and allows another function inside it to access this number.
// Instructions:
// Create a function snapFingers().
// Inside snapFingers(), declare a variable stones = 6.
// Inside snapFingers(), define another function checkStones() that logs: "Thanos has 6 stones. The universe trembles!"
// Call checkStones() inside snapFingers() to verify the stones before snapping.
// Hint:
// 👉 This exercise tests function scope: checkStones() should be able to access stones even though it’s declared inside another function.


function snapFingers(){
    let stones = 6;
    function checkStones(){
        console.log(`Thanos has ${stones} stones. The universe trembles!`)
    }
    checkStones();
}

snapFingers();
