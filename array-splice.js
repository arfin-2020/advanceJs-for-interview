const students = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = students.slice(2, 8);
const result = students.splice(2, 8, 89, 48, 59);
// console.log(result);
// console.log(students);
const together = students.join(" ");
console.log(together);