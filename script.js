// CALCULATOR SCRIPT

const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function appendOperator(input) {
    appendToDisplay(input);
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