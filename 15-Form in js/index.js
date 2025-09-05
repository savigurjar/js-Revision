const from = document.querySelector('form');

// from.addEventListener("click",(event)=>{
//     // console.log(event.target)
//     console.log(event.target.value)
// })

// from.addEventListener("submit",(event)=>{
//     // console.log(event.target)
//     console.log(event.target.value)
// })
// from.addEventListener("input",(event)=>{
//     // console.log(event.target)
//     console.log(event.target.value)
// })
// from.addEventListener("change",(event)=>{
//     // console.log(event.target)
//     console.log(event.target.value)
// })
// from.addEventListener("dbclick",(event)=>{
//     // console.log(event.target)
//     console.log(event.target.value)
// })


from.addEventListener("submit", (event) => {
    event.preventDefault(); //submit krne ke bad refresh mhi hoga

    const first = document.getElementById("first").value;
    const second = document.getElementById("second").value;
    const third = document.getElementById("third").value;

    const result = document.getElementById("result");
    result.innerHTML = `
    ${first} i'm good girl
  `;


})