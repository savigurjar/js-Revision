// const container = document.getElementById('first');
// container.style.color = "Brown"

document.body.style.backgroundColor = "#250D15";
document.body.style.color = "white";

function CountDown() {
    const second = document.getElementById("second");

    const date1 = new Date();
    const date2 = new Date("2028-07-14T00:00:00");

    const date = date2 - date1;

     if (date<= 0) {
    document.querySelector(".day").innerHTML = "It's time! 🎉";
    document.querySelector(".time").innerHTML = "";
    return;
  }

    const days = Math.floor(date / (1000 * 60 * 60 * 24));
    const hours = Math.floor(date / (1000 * 60 * 60) % 24)
    const minutes = Math.floor(date / (1000 * 60) % 60)
    const seconds = Math.floor(date / (1000) % 60)

    document.querySelector(".day").innerHTML = `${days} days`;
    document.querySelector(".time").innerHTML = `${hours}h ${minutes}m ${seconds}s <br> to go`;

}
setInterval(CountDown, 1000)


