// const array = [2, 5, 3, 5, 8, 9, 10, 3];
// const emptyArray = [];

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     const result = element * element;
//     emptyArray.push(result);
// }
// console.log(emptyArray);


// const numbers = [2, 5, 3, 5, 8];

// function square(element) {
//     return element * element;
// }
// numbers.map(function(element, index, array) {
//     console.log(element, index, array);
// });

// const numbers = [2, 5, 3, 5, 8];

// function square(element) {
//     // return element * element;
// }
// const result = numbers.map(function(element) {
//     return element * element;
// })
// const result = numbers.map(x => x * x) //ai babe o lika jai 
// console.log(result);


// const numbers = [2, 5, 3, 5, 8, 9, 10, 4, 2, 25];

// const result = numbers.filter(x => x < 5)
// console.log(result);

const numbers = [2, 5, 3, 5, 8, 9, 10, 4, 2, 25];
const result = numbers.find(x => x > 5)
console.log(result);