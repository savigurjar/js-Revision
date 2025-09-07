const form = document.querySelector("form");

const footballQuiz = [
    {
        question: "Which country won the FIFA World Cup in 2018?",
        answer: "France",
        options: ["Brazil", "Germany", "France", "Argentina"]
    },
    {
        question: "Who is known as 'CR7'?",
        answer: "Cristiano Ronaldo",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Neymar", "Kylian Mbappé"]
    },
    {
        question: "Which club has won the most UEFA Champions League titles?",
        answer: "Real Madrid",
        options: ["Barcelona", "Real Madrid", "AC Milan", "Liverpool"]
    },
    {
        question: "What is the maximum number of players a team can have on the field?",
        answer: "11",
        options: ["10", "11", "12", "9"]
    },
    {
        question: "Which country hosted the 2014 FIFA World Cup?",
        answer: "Brazil",
        options: ["Russia", "South Africa", "Brazil", "Germany"]
    },
    {
        question: "Who won the Ballon d'Or in 2021?",
        answer: "Lionel Messi",
        options: ["Cristiano Ronaldo", "Robert Lewandowski", "Lionel Messi", "Karim Benzema"]
    },
    {
        question: "Which country has won the most World Cups?",
        answer: "Brazil",
        options: ["Germany", "Italy", "Argentina", "Brazil"]
    },
    {
        question: "Which position primarily defends the goal?",
        answer: "Goalkeeper",
        options: ["Forward", "Midfielder", "Goalkeeper", "Defender"]
    },
    {
        question: "Who is the all-time top scorer in FIFA World Cup history?",
        answer: "Miroslav Klose",
        options: ["Ronaldo Nazário", "Miroslav Klose", "Pelé", "Lionel Messi"]
    },
    {
        question: "Which club is nicknamed 'The Red Devils'?",
        answer: "Manchester United",
        options: ["Liverpool", "Manchester United", "Arsenal", "Chelsea"]
    },
    {
        question: "How many minutes is a standard football match (excluding extra time)?",
        answer: "90 minutes",
        options: ["80 minutes", "90 minutes", "100 minutes", "120 minutes"]
    },
    {
        question: "Who is known as 'The Egyptian King' in football?",
        answer: "Mohamed Salah",
        options: ["Mohamed Salah", "Mohammed Elneny", "Ahmed Hegazi", "Mohammed Aboutrika"]
    },
    {
        question: "Which country won the first-ever FIFA World Cup in 1930?",
        answer: "Uruguay",
        options: ["Argentina", "Brazil", "Uruguay", "Italy"]
    },
    {
        question: "Which footballer is famous for the 'Hand of God' goal?",
        answer: "Diego Maradona",
        options: ["Pelé", "Lionel Messi", "Diego Maradona", "Zinedine Zidane"]
    },
    {
        question: "Which Italian club won Serie A in the 2020-2021 season?",
        answer: "Inter Milan",
        options: ["Juventus", "AC Milan", "Inter Milan", "Napoli"]
    },
    {
        question: "Who holds the record for the most goals in a single La Liga season?",
        answer: "Lionel Messi",
        options: ["Cristiano Ronaldo", "Lionel Messi", "Luis Suárez", "Karim Benzema"]
    },
    {
        question: "Which African country reached the World Cup quarterfinals in 1990?",
        answer: "Cameroon",
        options: ["Nigeria", "Cameroon", "Senegal", "Egypt"]
    },
    {
        question: "Which English club is nicknamed 'The Gunners'?",
        answer: "Arsenal",
        options: ["Chelsea", "Manchester City", "Arsenal", "Tottenham Hotspur"]
    },
    {
        question: "Who won the UEFA Euro 2016?",
        answer: "Portugal",
        options: ["France", "Germany", "Portugal", "Spain"]
    },
    {
        question: "Which player is famous for the 'Panenka' penalty?",
        answer: "Antonín Panenka",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Antonín Panenka", "Zinedine Zidane"]
    }
];

const ori_ans = {};
function randomQuestion() {


    const data = new Set();

    while (data.size < 5) {
        const index = Math.floor(Math.random() * footballQuiz.length)
        data.add(footballQuiz[index])
    }
    return [...data]

}

const problem = randomQuestion();
problem.forEach((obj, index) => {
    const div_ele = document.createElement("div");
    div_ele.className = "question";

    // question add
    const para = document.createElement("p");
    para.textContent = `Q${index + 1}.${obj.question}`
    div_ele.appendChild(para);

    ori_ans[`q${index + 1}`] = obj.answer

    obj.options.forEach((value) => {

        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `q${index + 1}`;
        input.value = value;

        label.appendChild(input);
        label.appendChild(document.createTextNode(value))

        div_ele.appendChild(label);
        div_ele.appendChild(document.createElement("br"))

    })
    form.appendChild(div_ele);

})

const button = document.createElement("button");
button.type = "submit";
button.className = "submit-btn";
button.textContent = "Submit"

form.appendChild(button);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    let result = 0;
    for (const [key, value] of data.entries()) {
        if (ori_ans[key] == value) {
            result++;
        }
    }

    let out = document.querySelector("#result");
    if (!out) {
        out = document.createElement("p");
        out.id = "result";
        out.style.marginTop = "10px";
        out.style.textAlign = "center";
        form.appendChild(out);
    }
    out.innerHTML = `${result} out of 5`;
})


