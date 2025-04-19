// A hacker needs to process data from the Matrix. Given an array of numbers, transform each into binary format using `map()`, and then find the highest value using `reduce()`.
// Example input: `[3, 7, 15, 22]`
// Expected output (binary conversion): `['11', '111', '1111', '10110']`
// Expected output (highest value): `22`



function transformToBinary(num){
    let binary = "";
    let i = 0;
    while(num > 0){
        num -= Math.pow(2,i);
        binary+="1";
        i++;
    }
    return binary;
}

function transformFromBinary(binary){
    const b = binary.split("").reverse();
    let num = 0;
    for(let i = 0; i < b.length;i++){
        num += Number(b[i]) * Math.pow(2,i);
    }
    return num;
}

// console.log(transformFromBinary(transformToBinary(15)));

function foo(numbers){
    const binaryArray = numbers.map(number => {
        return transformToBinary(number)
    });
    console.log("Binary conversion: ",binaryArray);
    console.log("Highest Value: ",Math.max(...numbers));
}

const numbers = [3, 7, 15, 22];


foo(numbers);