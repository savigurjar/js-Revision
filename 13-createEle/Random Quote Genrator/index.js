const Quote = [
    "Do what you can, with what you have, where you are.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Your limitation—it’s only your imagination.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream bigger. Start smaller. Act now.",
    "Believe you can and you’re halfway there.",
    "It always seems impossible until it’s done.",
    "Small progress each day adds up to big results."
]





function quoteGenrator() {

    const root = document.getElementById("root");
    const para = document.querySelector('p');

    const btn = document.querySelector('button');

    btn.addEventListener("click", (event) => {

        const index = [Math.floor(Math.random() * Quote.length)];
        para.textContent = Quote[index]
        root.appendChild(para);
    })

}
quoteGenrator()
// setInterval(quoteGenrator,1000)



