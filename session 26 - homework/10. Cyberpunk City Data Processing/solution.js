// A cyber-detective is analyzing risk levels in a futuristic city. Use multiple array methods to process the risk levels.
// 1. Use `map()` to convert each risk level to hexadecimal.
// 2. Use `filter()` to extract levels above 100.
// 3. Use `reduce()` to calculate the total risk level.
// 4. Use `find()` to locate the first risk level above 150.
// 5. Use `splice()` to remove corrupt data (risk levels below 80).
// Example input: `[99, 135, 76, 200, 150, 89]`
// Expected output:
// Hex values: `['63', '87', '4c', 'c8', '96', '59']`
// Filtered high risks: `[135, 200, 150]`
// Total risk level: `749`
// First risk above 150: `200`
// Cleaned data (after removing <80): `[99, 135, 200, 150, 89]`
const inputRiskLevels = [99, 135, 76, 200, 150, 89];

const hexadecimalRiskLevels = inputRiskLevels.map((level)=>{
    const hex = ["a","b","c","d","e","f"]

    return `${Math.floor(level / 16)}${level % 16 > 10 ? hex[level % 16 - 10] : level % 16 }`
});

const totalRiskLevel = inputRiskLevels.reduce((acc,cur)=> acc+cur,0);
const firstRiskAbove = inputRiskLevels.find((val)=> val > 150);
const filtered = inputRiskLevels.filter((level)=> level > 100);
inputRiskLevels.forEach((level,index)=> level < 80 && inputRiskLevels.splice(index,1))

console.log("Hex Values: ",hexadecimalRiskLevels);
console.log("Filtered high risks: ",filtered);
console.log("Total risk level:",totalRiskLevel);
console.log("First risk above 150: ",firstRiskAbove);
console.log("Cleaned data (after removing <80):",inputRiskLevels);


