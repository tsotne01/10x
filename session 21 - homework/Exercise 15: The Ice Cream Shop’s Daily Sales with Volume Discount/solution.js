const conePrice = 8;
const sundaePrice = 4;
const conesSoldToday = 200;
const sundaesSoldToday = 250;


const coneEarnings = conePrice *conesSoldToday;
const sundaeEarnings = sundaePrice * sundaesSoldToday;
let totalEarnings = coneEarnings + sundaeEarnings;

console.log(`Total earnings before discount: ${totalEarnings}`)
if(totalEarnings > 1000){
    console.log(`The amount of discount applied: ${totalEarnings*0.05}`)
    totalEarnings*=0.95;
    console.log(`Final total daily earnings after discount: ${totalEarnings}`)
}else{
    console.log(`The amount of discount applied: 0`)
    console.log(`Final total daily earnings after discount: ${totalEarnings}`)
}