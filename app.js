let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");
let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerText;

    if (value === "AC") {
      expression = "";
      display.value = "";
    } 
    else if (value === "=") {
      try {
        expression = eval(expression).toString();
        display.value = expression;
      } catch {
        display.value = "Error";
        expression = "";
      }
    } 
    else {
      expression += value;
      display.value = expression;
    }
  });
});
