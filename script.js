let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '';
}

function append(value) {
    display.innerText += value;
}

function square() {
    let value = parseFloat(display.innerText);
    if (!isNaN(value)) {
        display.innerText = value * value;
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText.replace('%', '/100'));
    } catch (error) {
        display.innerText = 'Error';
    }
}
