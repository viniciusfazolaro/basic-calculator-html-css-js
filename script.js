const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');
const clear = document.getElementById('clear');
const del = document.getElementById('delete');
const equal = document.getElementById('equal');
var verifyEqual = false;

clear.addEventListener('click', () => {
    result.value = '';
});

del.addEventListener('click', () => {
    result.value = result.value.slice(0, -1);
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.innerText === '+' || button.innerText === '-' || button.innerText === '*' || button.innerText === '/' || button.innerText === 'DEL'){
            verifyEqual = false;
        }

        if(verifyEqual == true){
            result.value = "";
            verifyEqual = false;
        }

        if (button.innerText !== 'C' && button.innerText !== 'DEL' && button.innerText !== '='){
            result.value += button.innerText;
        }
        
    });
});

equal.addEventListener('click', () => {
    result.value = eval(result.value);
    verifyEqual = true;
});