
// let a = 10;
// const b = 20;
// var c = 30;

// console.log(this.c)
// console.log(this.a)

// In browser (script): this.c → 30, this.a → undefined.
// In Node: both undefined.

// console.log(this) //{}
// Top-level this inside a file is not the global object, but {} (an empty object, because Node uses modules).

// "use strict"
// function greet() {
//     console.log(this)
// }
// greet()

// instrict mode --- undefined

// In non–strict mode:
// When you call a plain function (greet()), this defaults to the global object.

// Browser → window

// Node → global

// In strict mode:
// this inside a plain function call does not default to global.
// Instead, it stays as undefined.

// in arrow function
// let obj = {
//     name: "sv",
//     meet: () => {
//         console.log(this);
//     }
// }
// obj.meet()
// In browser (non-module) → window

// In Node (module) → {} (empty object)


let obj = {
    name: "sv",
    meet: function() {
    const you = () => {
      console.log(this);
    };
    you();
  }
}
obj.meet() //{ name: 'sv', meet: [Function: meet] }
// console.log(window===this) //true in browser
