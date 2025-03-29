// 4. Jedi Training – Default Parameters
// Story:
// Master Yoda is training young Padawans, but some of them don’t have assigned strength levels yet. He needs your help to set their default power level if they don’t provide one!
// Instructions:
// Create a function trainJedi(name, strength = 50).
// Return "Jedi Name has Strength Power" (e.g., "Luke has 100 Power").
// Call it with "Luke", 100 and "Rey" (without strength).


const trainJedi = (name, strength = 50) => `${name} Has ${strength} Power`;


console.log(trainJedi("tsotne",69696969696969));