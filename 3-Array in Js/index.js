// const arr = [2, 3, 4, "sv", true];

// console.log(arr.length); //5
// console.log(arr[3]); //sv
// console.log(arr.at(-1)); //true ,  take negative positive index

// const newarr = arr;
// console.log(newarr == arr); //true

// const newarr = structuredClone(arr);
// console.log(newarr == arr); //false

// arr.push(30);
// console.log(arr); //[ 2, 3, 4, 'sv', true, 30 ]

// arr.pop();
// console.log(arr); //[ 2, 3, 4, 'sv' ]

// arr.unshift(12);
// console.log(arr); //[ 12, 2, 3, 4, 'sv', true ]

// arr.shift();
// console.log(arr); //[ 3, 4, 'sv', true ]

// delete arr[1];
// console.log(arr); //[ 2, <1 empty item>, 4, 'sv', true ]

/* -----------------------;*/

// const arr = [2, 3, 4, "sv", true, 12, 4];

// console.log(arr.indexOf(4)); //2
// console.log(arr.lastIndexOf(4)); //6

// console.log(arr.slice(2, 5)); //[ 4, 'sv', true ]

// console.log(arr.splice(2, 6)); //[ 4, 'sv', true, 12, 4 ]
// console.log(arr.splice(2, 0, 30));
//   2,    3,    30, 4,
//   'sv', true, 12, 4
// ]

// console.log(typeof arr.toString()); //string

// console.log(arr.join("%")); //2%3%4%sv%true%12%4

// let arr1 = [12, 30];
// let arr2 = [13, 7];
// let arr3 = [10, 4];
// let arr4 = arr1.concat(arr2, arr3);
// console.log(arr4);  //[ 12, 30, 13, 7, 10, 4 ]

// arr1.push(arr2);
// console.log(arr1); //[ 12, 30, [ 13, 7 ] ]

// 2d array
// let arr2d = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// console.log(arr2d); //[ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
// 2d into 1d
// console.log(arr2d.flat()); //[ 1, 2, 3, 4, 5, 6 ]

// let arr3d = [
//   [1, 2, [5, 7], 3],
//   [4, 5, [7, 9], 6],
// ];
// console.log(arr3d); //[ [ 1, 2, [ 5, 7 ], 3 ], [ 4, 5, [ 7, 9 ], 6 ] ]

// 3d into 1d
// console.log(arr3d.flat(2));
/*[
  1, 2, 5, 7, 3,
  4, 5, 7, 9, 6
]*/

// new way
// let newway = new Array(1, 3, 4, 5);
// console.log(newway); //[ 1, 3, 4, 5 ] not recommended

// let newway = new Array(3); //it will take as size
// console.log(newway); //[ <3 empty items> ]

// let abc = [1, 3, 54, 6];
// console.log(Array.isArray(abc)); //true
