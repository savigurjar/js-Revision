const calculator = document.getElementsByClassName("calculator");
const fgroup = document.getElementsByClassName("form-group");

function dahejGenerator() {
    const btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
        const education = parseInt(document.getElementById("education").value);
        const salary = parseInt(document.getElementById("salary").value) || 0;
        const job = parseInt(document.getElementById("job").value);
        const status = parseInt(document.getElementById("status").value) || 0;
        const loans = parseInt(document.getElementById("loans").value) || 0;

        // Formula
        let dahej = (education * salary) + job + status - loans;

        const result = document.getElementById("result");
        result.innerHTML = `Your Dahej ₹ : ${dahej}`;
    });
    const reset = document.getElementById("reset");
    reset.addEventListener("click", () => {
      document.getElementById("education").value = "1"; // reset to default
        document.getElementById("salary").value = "";
        document.getElementById("job").value = "50"; // default Private job
        document.getElementById("status").value = "";
        document.getElementById("loans").value = "";

        const result = document.getElementById("result");
        result.innerHTML = " ";
    })
}

dahejGenerator();
