// 8. Sorting the Sorting Hat – Callback Functions
// Story:
// The Sorting Hat at Hogwarts is about to sort new students into their houses, but it needs a helper function to determine which house each student belongs to. The Sorting Hat is an old magical object, and instead of choosing houses itself, it calls a separate function (a callback function) to decide where each student goes.
// Your job is to help the Sorting Hat by passing in a function that assigns a student to a house.
// Instructions:
// Create a function sortStudent(name, callback).
// The function should log: "Sorting [name] into..." and then call callback().
// The callback function should return a random house ("Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff").
// Call sortStudent("Harry", () => "Gryffindor") and log the result.
// Hint:
// 👉 Functions can be passed as arguments to other functions. The Sorting Hat doesn’t decide the house itself but calls another function (a callback) to do so.

function sortStudent(name,callback){
    const house = callback();
    console.log(name,house)
}


sortStudent("Harry",()=>(["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]).at(Math.floor(Math.random()*4)));
