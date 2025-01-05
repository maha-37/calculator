const btns = document.querySelectorAll(".btn");
const display = document.querySelector("#display");

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let value = e.target.textContent;
        if (value === "c") {
            display.value = "";
        }
        else if (e.target.id === "remove") {
            display.value = display.value.slice(0, -1);
        }
        else if (value === "=") {
            try {

                display.value = eval(display.value.replace("x", "*"));
            } catch {
                display.value = "Error";
            }
        }
        else {
            display.value += value;
        }
    });
});




