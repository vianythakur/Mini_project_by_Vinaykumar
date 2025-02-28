let previousResult = null; // Stores the previous result for ANS functionality

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === 'Error' || display.value === 'Infinity') {
        display.value = ''; // Clear error messages before appending new input
    }
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        if (isNaN(result) || !isFinite(result)) {
            display.value = 'Error'; // Handle division by zero or invalid operations
        } else {
            previousResult = result; // Store the result for ANS functionality
            display.value = result;
        }
    } catch (error) {
        display.value = 'Error';
    }
}

function usePreviousResult() {
    if (previousResult !== null) {
        appendToDisplay(previousResult.toString());
    }
}

// Add event listeners for keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter', 'Backspace', 'Delete', 'c', 'C'];

    if (validKeys.includes(key)) {
        event.preventDefault(); // Prevent default behavior for valid keys
        if (key === 'Enter') {
            calculateResult();
        } else if (key === 'Backspace') {
            deleteLast();
        } else if (key === 'Delete' || key === 'c' || key === 'C') {
            clearDisplay();
        } else {
            appendToDisplay(key);
        }
    }
});