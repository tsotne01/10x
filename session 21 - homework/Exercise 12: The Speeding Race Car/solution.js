const speedLimit = 150;

let carSpeed = 20;

carSpeed+=25;


console.log(`Current Speed ${carSpeed}`)
if(carSpeed > speedLimit){
    console.log("Speed Warning: You are going too fast!")
}else{
    console.log("Speed is okay")
}
