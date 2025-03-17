const spell1 = 200;
const spell2 = 50;
const spell3 = 20;

if(spell1 > spell2 && spell1 > spell3){
    console.log(`Spell One is strongest: ${spell1}`)
}else if(spell2 > spell1 && spell2 > spell3){
    console.log(`Spell Two is strongest: ${spell2}`)
}else if(spell3 > spell2 && spell3 > spell1){
    console.log(`Spell Three is strongest: ${spell3}`)
}