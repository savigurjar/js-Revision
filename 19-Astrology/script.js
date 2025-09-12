

const zodiac = [
    { sign: "Capricorn", symbol: "♑", start: [12, 22], end: [1, 19] },
    { sign: "Aquarius", symbol: "♒", start: [1, 20], end: [2, 18] },
    { sign: "Pisces", symbol: "♓", start: [2, 19], end: [3, 20] },
    { sign: "Aries", symbol: "♈", start: [3, 21], end: [4, 19] },
    { sign: "Taurus", symbol: "♉", start: [4, 20], end: [5, 20] },
    { sign: "Gemini", symbol: "♊", start: [5, 21], end: [6, 20] },
    { sign: "Cancer", symbol: "♋", start: [6, 21], end: [7, 22] },
    { sign: "Leo", symbol: "♌", start: [7, 23], end: [8, 22] },
    { sign: "Virgo", symbol: "♍", start: [8, 23], end: [9, 22] },
    { sign: "Libra", symbol: "♎", start: [9, 23], end: [10, 22] },
    { sign: "Scorpio", symbol: "♏", start: [10, 23], end: [11, 21] },
    { sign: "Sagittarius", symbol: "♐", start: [11, 22], end: [12, 21] },
];

const complement = [
  "You have a radiant energy that lights up the room.",
  "Your creativity inspires those around you.",
  "A calm presence follows you wherever you go.",
  "You have an unshakable sense of determination.",
  "Your curiosity opens doors to new adventures.",
  "You bring joy to people in subtle, meaningful ways.",
  "Your insight often surprises even yourself.",
  "You have a natural elegance in all you do.",
  "Your laughter is infectious and uplifting.",
  "You handle challenges with grace and patience."
];

const prediction = [
  "A new opportunity will soon present itself.",
  "Unexpected change brings exciting growth.",
  "Collaboration leads to a rewarding outcome.",
  "A small risk will yield great reward.",
  "Your intuition guides you to the right choice.",
  "A moment of reflection brings clarity.",
  "Positive energy surrounds you this week.",
  "Someone from your past may reappear.",
  "A hidden talent will soon surface.",
  "Patience will lead to a satisfying result."
];


function getZodiac(month, day) {
    for (let z of zodiac) {
        const [startmonth, startday] = z.start;
        const [endmonth, endday] = z.end;

        if (month === startmonth && day >= startday || month === endmonth && day <= endday) {
            return z;
        }
    }
}

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log("submitted")

    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value;
    // console.log(name,dob)

    if (!dob) return;

    const date = new Date(dob); //string to date object

    const z = getZodiac(date.getMonth() + 1, date.getDate() + 1) // find the correct zodic object for the date 0based index esliye +1

    console.log(z);

    //  Update orb
    document.querySelector(".orb").innerHTML = `<div class="halo"></div>${z.symbol}`;

    const index = Math.floor(Math.random()*complement.length);
    const fmsg = complement[index];
    const index2 = Math.floor(Math.random()*prediction.length);
    const pmsg = prediction[index2]


    // Update parchment
    document.querySelector(".parchment").innerHTML = `
      <h3 style="margin:0,serif;color:var(--accent-gold)">
        ${name ? `Hello, ${name}` : "Welcome, Stargazer"}
      </h3>
      <p style="margin:10px 0 0; ">
        Your sun sign is <strong>${z.sign}</strong> ${z.symbol}.
      </p>
      <p style="margin:10px 0 0;font-size:1rem">
        ${z.sign} carries cosmic energy guiding your journey.<br> ${fmsg} <br> ${pmsg}
      </p>
      <div class="constellation" style="margin-top:12px" aria-hidden="true"></div>
    `;
});

document.querySelector("form").addEventListener("reset", () => {
    document.querySelector(".orb").innerHTML = `<div class="halo"></div>♈`;
    document.querySelector(".parchment").innerHTML = `
      <h3 style="margin:0;color:var(--accent-gold)">Welcome, Stargazer</h3>
      <p style="margin:10px 0 0">Submit your details through the portal. This parchment will hold your sun-sign summary and a small constellation sketch.</p>
      <div class="constellation" style="margin-top:12px" aria-hidden="true"></div>
    `;

})

