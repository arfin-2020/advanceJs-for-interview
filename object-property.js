const emptyArray = [];
const students = [
    { id: 24, Name: "Arfin Chowdhury Arif", age: 34 },
    { id: 74, Name: " Chowdhury Arif", age: 24 },
    { id: 25, Name: " Arif", age: 64 },
];
const names = students.map(s => s.Name);
const id = students.map(s => s.id);
const idBiggerthan24 = students.filter(s => s.id > 24);
console.log(idBiggerthan24);
// console.log(id);
// console.log(names);