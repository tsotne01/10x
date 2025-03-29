// 3. One Piece Bounty Calculator – Return Values
// Story:
// Luffy just defeated a powerful enemy, and the World Government has increased his bounty! But he’s too busy eating meat to do the calculations. Can you help him figure out his new bounty?
// Instructions:
// Create a function calculateBounty(currentBounty, increase).
// It should return the new bounty after the increase.
// Call it with 1_500_000_000, 500_000_000 and log the result.


const calculateBounty = (currentBounty, increase) => currentBounty + increase;

console.log(calculateBounty(1_500_000_000, 500_000_000))