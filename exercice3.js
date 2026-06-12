const values = [3, 11, 7, 2, 9, 10];

// Sum
let sum = values.reduce((acc, val) => acc + val, 0);
console.log("Sum =", sum);

// Average
function average(arr) {
    let total = arr.reduce((acc, val) => acc + val, 0);
    return total / arr.length;
}

console.log("Average =", average(values));

// Maximum and Minimum
function minMax(arr) {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    };
}

let result = minMax(values);
console.log("Minimum =", result.min);
console.log("Maximum =", result.max);
