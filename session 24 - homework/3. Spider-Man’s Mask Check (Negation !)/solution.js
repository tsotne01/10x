// 3. Spider-Man’s Mask Check (Negation !)
// Story: Peter Parker can remove his mask only when he is alone.
// Task: Write a function canRemoveMask(peopleAround) that:
// Logs “Safe to remove mask!” if peopleAround is 0.
// Logs “Keep the mask on!” otherwise.
// Example:
// canRemoveMask(0);  // Output: "Safe to remove mask!"
// canRemoveMask(3);  // Output: "Keep the mask on!"

const canRemoveMask = (peopleAround) =>
  !peopleAround
    ? console.log("Safe to remove mask!")
    : console.log("Keep the mask on!");

canRemoveMask(3);
canRemoveMask(0);
