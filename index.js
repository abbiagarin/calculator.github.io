// simple calculation

function calculate() {
  const operation = prompt(
    "Please input in the math operation you would like to complete:\n1 for Addition\n2 for Subtraction\n3 for Multiplication\n4 for Division\n\n"
  );

  if (operation == 1 || operation == 2 || operation == 3 || operation == 4) {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));

    let result;
    if (operation == 1) {
      result = num1 + num2;
      alert(`${num1} + ${num2} = ${result}`);
    } else if (operation == 2) {
      result = num1 - num2;
      alert(`${num1} - ${num2} = ${result}`);
    } else if (operation == 3) {
      result = num1 * num2;
      alert(`${num1} x ${num2} = ${result}`);
    } else if (operation == 4) {
      result = num1 / num2;
      alert(`${num1} / ${num2} = ${result}`);
    }
  } else {
    alert("Invalid operation!Select a valid option");
  }

  let text;
  const input = confirm("Do you want to calculate again!");
  if (input == true) {
    text = calculate();
  } else {
    text = alert("Cancel is pressed. See you later!");
  }
}

calculate();
