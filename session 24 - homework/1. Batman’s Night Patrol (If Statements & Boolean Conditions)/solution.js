// 1. Batman’s Night Patrol (If Statements & Boolean Conditions)
// Story: Gotham City is in danger, but Batman only patrols if the Bat-Signal is on.
// Task: Write a function batmanPatrol(signalOn) that:
// Logs “Batman is on patrol!” if signalOn is true.
// Logs “Gotham is quiet tonight.” if signalOn is false.
// Example:
// batmanPatrol(true);  // Output: "Batman is on patrol!"
// batmanPatrol(false); // Output: "Gotham is quiet tonight."


const batmanPatrol = (signaiIsOn)=>{
    signaiIsOn ? console.log("Batman is on patrol!") : console.log("Gotham is quiet tonight.");
    
}

batmanPatrol(false);
batmanPatrol(true);