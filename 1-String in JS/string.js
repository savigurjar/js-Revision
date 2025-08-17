// const nu = 10;
// nu = 11;  //error
// console.log(nu)

// let nu = 10;
// nu = 11;  //error
// console.log(nu)

// const obj = {
//     id:30,
//     bal: 700
// }
// obj.id = 12; //heap memory
// console.log(obj)

// const obj = {
//     id:30,
//     bal: 700
// }
// obj = obj2; error

let str = "hello coder army";
let str2 = "hello coder army";
let str3 = `hello coders `; // latest way

// let msg = "wo shi $aini";
// console.log(msg); //wo shi $aini

// let msg =
//   "Discover video games on the best website for free online games! \nPoki works on your mobile, tablet, or computer. No downloads, no login. Play now!";
// console.log(msg);

// let special = "Baka";
// console.log(special[2]) //k
// console.log(special.toLowerCase()); //baka
// console.log(special.toUpperCase()); //BAKA
// console.log(special.length); //4

// searching in string
let hero = "hello ji kaise ho";
// console.log(hero.indexOf("ho")); //15
// console.log(hero.lastIndexOf("o")); //16
// console.log(hero.includes("ji")) //true

// extracting in string
let news = "hello Don";
// console.log(news.slice(0, 4)); //hell
// console.log(news.substring(-2, 4)) //does not take negative index

// replacing content
let us = "hii how are you";
// console.log(us.replace("how", "who")); //hii who are you
// console.log(us.replaceAll("hii how are you", "knichiwa daijob desu"));
// console.log(us.split("! ")); //[ 'hii how are you' ] return in array

let we = " hii yu";
// console.log(we.trim()); //hii yu without front and last space

let newway = new String("hello ji");
console.log(newway); //[String: 'hello ji'], new =  heap memory
