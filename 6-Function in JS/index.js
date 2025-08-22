// function sum(num1,num2){
//     return num1+num2;
// }
// console.log(sum(12,30)) //42

// const fun = function mul(num1, num2) {
//   console.log(num1 * num2);
// };
// fun(12,30) //360

// const sub = (num1, num2) => num1 - num2;
// console.log(sub(30, 12)); //18

// const cube = (num) => num * num * num;
// console.log(cube(2)); //8

// const sum = function (...num) {
//   console.log(num);
// };
// sum(2, 4, 5, 6, 7); //[ 2, 4, 5, 6, 7 ]

let obj = {
  name: "tae",
  balance:7
};
// function greet(obj1) {
//   console.log(obj1.name);
// }
// or
function greet({name,balance}) {
    name = "sv"
  console.log(name,balance);
}
greet(obj); //tae 7
console.log(obj)

