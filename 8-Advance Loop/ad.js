let obj = {
  name: "hannie",
  age: 29,
  occuption: "singer",
};

// for (key in obj) {
//   //   console.log(key); //name age  occuption
//   console.log(key, obj[key]);
// }
// name hannie
// age 29
// occuption singer

let obj2 = Object.create(obj); //prototype , obj ka clone
(obj2.money = 700), (obj2.id = "sv");

// console.log(obj2); //{ money: 700, id: 'sv' }

// console.log(Object.keys(obj2)); //[ 'money', 'id' ] inherit ki keys nhi krega show

// but in for in loop we can do
// for (let key in obj2) {
//   console.log(key);
// }
// money
// id
// name
// age
// occuption

// console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// {
//   value: 'hannie',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// we can create also
// Object.defineProperty(obj, "age", {
//   value: 29,
//   writable: true,
//   enumerable: false,
//   configurable: true,
// });
// obj.age = 30;
// console.log(obj); //{ name: 'hannie', age: 30, occuption: 'singer' }
// console.log(obj); //{ name: 'hannie', occuption: 'singer' } -> but age is hidden because enumerable = false

console.log(Object.getOwnPropertyDescriptor(Object.prototype, "str"));
// {
//   value: [Function: toString],
//   writable: true,
//   enumerable: false,
//   configurable: true
// }
Object.defineProperty(obj, "toString", {
  value: "toString",
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(obj); //{ name: 'hannie', age: 29, occuption: 'singer', toString: 'toString' }
