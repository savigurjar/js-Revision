// const map = new Map();
// map.set(12, 30);
// map.set("savi", "tae");
// map.set("hannie", "svii");
// console.log(map) //Map(3) { 12 => 30, 'savi' => 'tae', 'hannie' => 'svii' }

const map2 = new Map([
  ["sv", "hannie"],
  [12, 30]
]);

// console.log(map2); //Map(2) { 'sv' => 'hannie', 12 => 30 }

// for(let [key,val] of map2){
//     console.log(val)
// }
// [ 'sv', 'hannie' ]
// [ 12, 30 ]
// hannie
// 30

map2.forEach((val,key)=>{
    console.log(key ,val)
})
// sv hannie
// 12 30
