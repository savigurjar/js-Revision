const form = document.querySelector('form');
// const ori_ans = [
//     "BTS", "C++", "Seoul", "React", "Mars"
// ]
// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const data = new FormData(form);

//     const answer = Array.from(data.values())
//     console.log(answer)

//     let result = 0;
//     for (let i = 0; i < answer.length; i++) {
//         if (answer[i] == ori_ans[i]) result++;
//         console.log(result)
//     }

//     const out = document.createElement('p');
//     out.innerHTML = `${result} out of 5`

//    form.appendChild(out)



// })

const ori_ans = {
    q1: "BTS",
    q2: "C++",
    q3: "Seoul",
    q4: "React",
    q5: "Mars"
}

form.addEventListener("submit", (event) => {
 
    event.preventDefault()

    const data = new FormData(form);
    console.log(data)
    let result = 0;
    for (const [key, value] of data.entries()) {
        if (ori_ans[key] === value) result++
    }
    const out = document.createElement('p');
    out.style.marginTop = "10px"
    out.style.textAlign = "center"
    out.innerHTML = `${result} out of 5`

    form.appendChild(out)

})