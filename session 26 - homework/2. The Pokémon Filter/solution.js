// Given an array of Pokémon with their combat power (CP), filter out Pokémon with CP less than 500 using the `filter()` method.
// Example input: `[ {name: 'Pikachu', CP: 320}, {name: 'Charizard', CP: 900} ]`
// Expected output: `[ {name: 'Charizard', CP: 900} ]`

let pokemons = [ {name: 'Pikachu', CP: 320}, {name: 'Charizard', CP: 900} ];

pokemons = pokemons.filter((pokemon)=> pokemon.CP > 500);

console.log(pokemons);
