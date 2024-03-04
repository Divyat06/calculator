let displayValue = "0";
let currentOperator = "";
let firstOperand = "";

function updateDisplay() {
  document.getElementById("display").innerText = displayValue;
}

function clearDisplay() {
  displayValue = "0";
  currentOperator = "";
  firstOperand = "";
  updateDisplay();
}

function appendNumber(number) {
  if (displayValue === "0" || displayValue === "Error") {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

function appendSymbol(symbol) {
  if (displayValue.slice(-1) !== symbol) {
    displayValue += symbol;
    updateDisplay();
  }
}

function calculate() {
  try {
    let result = eval(displayValue);
    if (result === Infinity || result === -Infinity || isNaN(result)) {
      displayValue = "Error";
    } else {
      displayValue = result.toString();
    }
  } catch (error) {
    displayValue = "Error";
  }
  updateDisplay();
}
function backspace() {
  if (displayValue !== "0" && displayValue !== "Error") {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === "") {
      displayValue = "0";
    }
    updateDisplay();
  }
}
