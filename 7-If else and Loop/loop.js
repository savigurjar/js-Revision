// for (let i = 0; i < 20; i++) {
//   console.log(`count is :${i}`);
// }

// i is the block scope

// a is global scope
// let a = 30;
// if (a >= 12) {
//   console.log("a is smart");
// } else {
//   console.log("not enought");
// }

let obj = {
  name: "jh",
  age: 29,
  occuption: "singer",
};
// let val = Object.values(obj);
// for (let i = 0; i < val.length; i++) {
//   console.log(val[i]);//// jh 29 singer
// }
let key = Object.keys(obj);
for (let i = 0; i < key.length; i++) {
  console.log(key[i]); //name age occuption
}
