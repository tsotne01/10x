

const healthPotionPrice = 30;
const manaPotionPrice = 30;

let cost = 0;
console.log("Customer Want's to buy 1 health potion and 2 mana potion");
console.log("calculating");
cost = healthPotionPrice + 2 * manaPotionPrice;

if(cost > 50){
    cost = cost *0.8
    console.log("Applied 20% discount")
}

console.log(`Total cost is: ${cost} Golden Coins`)