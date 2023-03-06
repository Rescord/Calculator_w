let a = ''; //Первое число
let b = ''; //Второе число
let sign = ''; //Производимая операция
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];
const action = ['+', '-', 'x', '/']
const out = document.querySelector('.Panel p'); 

function clearAll () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.reset-all').onclick = clearAll;

document.querySelector('.buttons2').onclick = (event) => {
    if(!event.target.classList.contains('btn'))return; // Нажат не div с классом btn
    if(event.target.classList.contains('reset-all')) // Нажата кнопка reset-all
    console.log('test');

    out.textContent = ''; 
    const tap = event.target.textContent;
    if(digit.includes(tap)) {  
        if(b === '' && sign === ''){
        a+=tap;
        console.log(a, b, sign);
        out.textContent = a;
        }
        else if(a!=='' && b!=='' && finish) {
    }
    else {
        b+= tap;
        out.textContent = b;
    }
    console.log(a, b, sign);
    return;
}
    if(action.includes(tap)) {
        sign = tap;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
}
}