// A pirate captain needs help finding treasure! Convert an array of directions into a list of formatted instructions using `map()`.
// Example input: `['left', 'right', 'forward']`
// Expected output: `['Move left', 'Move right', 'Move forward']`

const directions = ['left', 'right', 'forward'];

console.log(directions.map((dir)=> "Move ".concat(dir)));
