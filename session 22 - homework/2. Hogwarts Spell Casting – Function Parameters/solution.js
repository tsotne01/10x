// 2. Hogwarts Spell Casting – Function Parameters
// Story:
// Hermione is dueling Draco Malfoy in a spell-casting battle. She needs a function to announce what spell she is casting. Help her write a function that properly declares her spell attacks!
// Instructions:
// Create a function castSpell(spell, wizard).
// It should return "Wizard casts Spell!", e.g., "Hermione casts Expelliarmus!".
// Call the function with "Expelliarmus", "Hermione".


const castSpell = (spell, wizard)=> `${wizard} casts ${spell}`;


console.log(castSpell("Expelliarmus","Hermione"));
