let process = "";

const fillProcess = (e) => {
    process += e.target.textContent;
    processEl.textContent = process;
}

document.addEventListener('keydown', (e) => {
    const key = e.key;

    // List of allowed keys
    const allowedKeys = /^[0-9+\-*/.\r\n]$/;

    if (allowedKeys.test(key)) {

        process += key;
        processEl.textContent = process;

    } else if (key === 'Enter' || key === '\r' || key === '\n') {
        calculate();
    }
});


const calculate = (e) => {

    if (process.length < 1) return;

    let result = eval(process);

    resultEl.textContent = result;

    if (result.toString().length > 7 && !resultEl.classList.contains('full')) {
        resultEl.classList.add('full');
    } else if (result.toString().length > 19 && !resultEl.classList.contains('full2')) {
        resultEl.classList.remove('full');
        resultEl.classList.add('full2');
    } else if (result.toString().length <= 7 && resultEl.classList.contains('full')) {
        resultEl.classList.remove('full');
        resultEl.classList.remove('full2');
    }
}

const zero = document.querySelector('#zero').addEventListener('click', fillProcess);
const one = document.querySelector('#one').addEventListener('click', fillProcess);
const two = document.querySelector('#two').addEventListener('click', fillProcess);
const three = document.querySelector('#three').addEventListener('click', fillProcess);
const four = document.querySelector('#four').addEventListener('click', fillProcess);
const five = document.querySelector('#five').addEventListener('click', fillProcess);
const six = document.querySelector('#six').addEventListener('click', fillProcess);
const seven = document.querySelector('#seven').addEventListener('click', fillProcess);
const eight = document.querySelector('#eight').addEventListener('click', fillProcess);
const nine = document.querySelector('#nine').addEventListener('click', fillProcess);
const point = document.querySelector('#point').addEventListener('click', fillProcess);

const plus = document.querySelector('#plus').addEventListener('click', fillProcess);
const minus = document.querySelector('#minus').addEventListener('click', fillProcess);
const multiply = document.querySelector('#multiply').addEventListener('click', fillProcess);
const divide = document.querySelector('#divide').addEventListener('click', fillProcess);
const equals = document.querySelector('#equals').addEventListener('click', calculate);

const resultEl = document.querySelector('#result');
const processEl = document.querySelector('#process');
