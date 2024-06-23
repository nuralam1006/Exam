
// Qustion No. 01
function calculateSum(a,b){
    const num1=a;
    const num2=b;
    const Sum=num1+num2;
    return Sum
}
console.log(calculateSum(10,20));

// Qustion No. 02

function isEven(num){
if (num % 2 === 0){
return true;
} else {
return false;
}
}
const checkEven= isEven(2551);
console.log(checkEven);

// Qustion No.3

function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
const numbers = [5, 2, 9, 11, 5, 6];
console.log(findMax(numbers));

// Qustion No. 04

function reverseString(str) {
    return str.split('').reverse().join('');
}
const inputString = "Hello, world!";
console.log(reverseString(inputString));

// Qustion No. 05

function filterOddNumbers(numbers) {
    let oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            oddNumbers.push(numbers[i]);
        }
    }
    return oddNumbers;
}
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filterOddNumbers(number));

// Qustion No. 06

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const number1 = [1, 2, 3, 4, 5];
console.log(sumArray(number1));

// Qustion No. 07

function sortArray(numbers) {
    const sortedArray = numbers.slice().sort((a, b) => a - b);
    return sortedArray;
}
const number3 = [5, 2, 9, 1, 5, 6];
console.log(sortArray(number3));

// Qustion No. 08

function capitalizeFirstLetter(str) {
    if (str === '') {
        return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const inputStrings = "hello";
console.log(capitalizeFirstLetter(inputStrings));

console.log(capitalizeFirstLetter(""));



