// shalow copy
// let obj1 = {
//   a: 1,
//   b: 2,
// };
// let obj2 = obj1;
// console.log(obj2); //{ a: 1, b: 2 }
// obj2.a = 12;
// console.log(obj1); //{ a: 12, b: 2 } obj1 me changes ho jayege

// deep copy
// let obj3 = structuredClone(obj1);
// obj3.a = 30;
// console.log(obj1); //{ a: 1, b: 2 } //obj1 me changes nhi honge

// nested object
const user = {
  name: "sv",
  age: 21,
  arr: [12, 30, 40, 50, 45, 67],
  address: {
    pincode: 451551,
    city: "barwani",
  },
};
// console.log(user.address.city); //barwani
// const user2 = Object.assign({}, user);
// user2.address.pincode = 452020;
// user2.name = "tae";
// console.log(user); //{ name: 'sv', address: { pincode: 452020, city: 'barwani' } } only nested values change hogi

// destructuring of an object
// const { name, age, ...obj } = user;
// console.log(user);
// console.log(obj); //{ address: { pincode: 451551, city: 'barwani' } }

// in array
// const arr = [12, 30, 40, 50 ,45,67];
// // const [ first ] = arr;
// // console.log(first); //12
// const [first, second, , ...third] = arr;
// console.log(third); //[ 50, 45, 67 ]

// if array in object
const {
  arr: [first],
} = user;
console.log(first); //12

const {
  address: { pincode },
} = user;
console.log(pincode); //451551
