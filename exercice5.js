function reverseString(str) {
    return str.split('').reverse().join('');
}

let text = prompt("Enter a string:");

console.log(reverseString(text));
