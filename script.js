// CALCULATOR SCRIPT

const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function appendOperator(input) {
    const operators = ['+', '-', '*', '/'];
    const lastchar = display.value.slice(-1);

    if (operators.includes(lastchar)) {
        display.value = display.value.slice(0, -1) + input;
    } else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
function updateButtons() {
    const lastchar = display.value.slice(-1);
    const isOperator = ['+', '-', '*', '/'].includes(lastchar)

    document.querySelectorAll('.operator-btn').forEach(btn => {
        btn.disabled = isOperator;
    });
}