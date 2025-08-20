// const obj = {
//   name: "tae",
//   account_balance: 7,
// };
// console.log(obj.name); //tae
// console.log(obj["account_balance"]); //7

// second method
// const person = new Object();
// person.name = "sv";
// person.age = 21;

// console.log(person);//{ name: 'sv', age: 21 }

// delete person.age;
// console.log(person);//{ name: 'sv' }

// third
// class people {
//   constructor(na, a, acc) {
//     (this.name = na), (this.age = a), (this.account_num = acc);
//   }
// }
// let ppl1 = new people("v", 29, 7);
// let ppl2 = new people("sv", 21, 13);
// console.log(ppl1, ppl2); //people { name: 'v', age: 29, account_num: 7 } people { name: 'sv', age: 21, account_num: 13 }

// const obj = {
//   name: "hannie",
//   age: 29,
// };
// console.log(Object.keys(obj)); //[ 'name', 'age' ]
// console.log(Object.values(obj)); //[ 'hannie', 29 ]
// console.log(Object.entries(obj)); //[ [ 'name', 'hannie' ], [ 'age', 29 ] ]
// array return krege

const obj1 = {
  name: "hannie",
  age: 30,
};
const obj2 = {
  na: "v",
  a: 29,
};
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);  //{ name: 'hannie', age: 30, na: 'v', a: 29 }

// split operator
// const obj4 = { ...obj1, ...obj2 };
// console.log(obj4) //{ name: 'hannie', age: 30, na: 'v', a: 29 }
