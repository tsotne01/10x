let livingRoomHasGhost = false;
let kitchenHasGhost = true;
const isHouseSafe = !livingRoomHasGhost && !kitchenHasGhost;
if(isHouseSafe){
    console.log("The house is safe! No ghosts in the Kitchen or Living Room.")
}else{
    console.log("Danger! The house is NOT safe. Ghosts detected!")
}