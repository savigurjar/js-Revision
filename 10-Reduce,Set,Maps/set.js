// const set = new Set([1, 2, 10, 4, 2, 4]);
// console.log(set); //Set(4) { 1, 2, 10, 4 }

// const set2 = new Set();
// set2.add("tae");
// set2.add(12);
// set2.add(30);
// set2.delete(12)
// console.log(set2); //Set(3) { 'tae', 12, 30 }
// Set(2) { 'tae', 30 }
// console.log(set2.size); //3
// set2.clear();
// console.log(set2); //Set(0) {}

// const user_id = ["hannie_13", "thv", "dviolet7"];
// let newUser = "thv";
// console.log(user_id.includes(newUser)); //true

// const user_id = new Set(["hannie_13", "thv", "dviolet7"]);
// let newUser = "thv";
// console.log(user_id.has(newUser)); // true

// array ko set me convert
// let arr = [12, 30, 40, 12, 10];
// const set1 = new Set(arr);
// console.log(set1); //Set(4) { 12, 30, 40, 10 }

// // set ko array me convert
// arr = [...set1];
// console.log(arr) //[ 12, 30, 40, 10 ]

// union operation
let set1 = new Set([10, 20, 30, 40, 50]);
let set2 = new Set([12, 7, 3, 10, 20]);

// let set3 = new Set([...set1, ...set2]);
// console.log(set3); //Set(8) { 10, 20, 30, 40, 50, 12, 7, 3 }

// intersection
const res = [...set1].filter((num) => set2.has(num));
console.log(res); //[ 10, 20 ]
