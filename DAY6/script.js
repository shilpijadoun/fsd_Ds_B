//apply map function.....
// let arr=[1,22,3,2,3,33,1];
// let newary=arr.map((x) => x * 2);
// console.log(newary);

// apply filter.....
// let even =arr.filter((x) => x % 2 == 0);
// console.log(even);


//reduce function......
// let sum = arr.reduce((x, y) => x + y, 0);
// console.log(sum);


// let sum = arr.filter((x) => x % 2 == 0).reduce((x, y) => x + y, 0);
// console.log(sum);
const students = [
    { name: 'alice', score: 50},
    { name: 'bob', score: 65},
    { name: 'charlice', score: 80},
    { name: 'david', score: 45},


];
let newar=students
.filter(students => students.score > 60)
.map(student => student.score * 2)
.reduce((x, y) => x + y, 0);
console.log(newar);
