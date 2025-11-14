function display(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    let result = document.getElementById('result').value;
    try {
        document.getElementById('result').value = eval(result);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function clearScreen() {
    document.getElementById('result').value = '';
}
