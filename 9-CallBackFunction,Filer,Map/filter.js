const arr = [1, 12, 30, 7, 45];
// const ans = arr.filter((num) => num % 2 == 0);
// console.log(ans); //[ 12, 30 ]
// console.log(arr); //[ 1, 12, 30, 7, 45 ] orginal me change ni hoga

// const res = arr.map((num) => num * num);
// console.log(res); //[ 1, 144, 900, 49, 2025 ]

// const res = arr.map((num, index) => index * num);
// console.log(res);  // [ 0, 12, 60, 21, 180 ]

// const res = arr.map((num, index, a) => (a[index] = num * num));
// console.log(res); //[ 1, 144, 900, 49, 2025 ]
// console.log(arr) //[ 1, 144, 900, 49, 2025 ]

const ans = arr
  .filter((num) => num % 2 == 0)
  .map((num) => num * num)
  .map((n) => n / 2);

console.log(ans);
// [ 72, 450 ]

const res = arr
  .filter((num) => num % 2 !== 0)
  .map((num) => num * num)
  .map((num) => num / 3);
console.log(res);
//[ 0.3333333333333333, 16.333333333333332, 675 ]