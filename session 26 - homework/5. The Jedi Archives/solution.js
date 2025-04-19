// Create an array of Jedi names and search for 'Yoda' using the `find()` method. If found, return ‘Master found!’
// Example input: `['Luke', 'Obi-Wan', 'Yoda', 'Anakin']`
// Expected output: `'Master found!'`
const jediNames = ['Luke', 'Obi-Wan', 'Yoda', 'Anakin'];

jediNames.find((val)=> val === "Yoda") && console.log("Master found!");