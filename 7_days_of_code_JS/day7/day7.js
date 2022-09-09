const teclado = document.querySelector('.calculadora');
const display = document.querySelector('.tela');

teclado.addEventListener('click', evento =>{
    if (evento.target.matches('button')) {
        const tecla = evento.target;
        const action = tecla.dataset.action;
        const displayedNumber = display.textContent;
        const previousKeyType = teclado.dataset.previousKeyType;

        if (!action) {
            if (displayedNumber === '0' || previousKeyType === 'operator') {
                display.textContent = tecla.textContent;
                teclado.dataset.previousKeyType = 'number';
            } else {
                display.textContent = displayedNumber + tecla.textContent;
            };
        };
        if (action === 'decimal') {
            if (!displayedNumber.includes('.')) {
                if (previousKeyType === 'operator') {
                    display.textContent = '0.';
                } else {
                    display.textContent = displayedNumber + '.';
                };
            };
            teclado.dataset.previousKeyType = 'decimal';
        };
        if (
            action === 'soma' ||
            action === 'subtracao' ||
            action === 'divisao' ||
            action === 'multiplicacao'
        ) {
            const firstValue = teclado.dataset.firstValue;
            const operator = teclado.dataset.operator;
            const secondValue = displayedNumber;
            if (firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate') {
                display.textContent = calculate(firstValue, operator, secondValue);
            };
            teclado.dataset.firstValue = display.textContent;
            teclado.dataset.operator = action;
            teclado.dataset.previousKeyType = 'operator';
        };
        if ( action === 'calculate') {
            let firstValue = teclado.dataset.firstValue;
            const operator = teclado.dataset.operator;
            let secondValue = displayedNumber;
            if (firstValue) {
                if (previousKeyType === 'calculate') {
                    firstValue = displayedNumber;
                    secondValue = teclado.dataset.modValue;
                };
                display.textContent = calculate(firstValue, operator, secondValue);
            };
            teclado.dataset.modValue = secondValue;
            teclado.dataset.previousKeyType = 'calculate';
        };
        if (action === 'clear') {
            display.textContent = '0';
            teclado.dataset.firstValue = '';
            teclado.dataset.modValue = '';
            teclado.dataset.operator = '';
            display.textContent = '0';
            teclado.dataset.previousKeyType = 'clear';
        };
    };
});

const calculate = (n1, operator, n2) => {
    switch(operator) {
        case 'soma':  
            return parseFloat(n1) + parseFloat(n2);
        case 'subtracao':
            return parseFloat(n1) - parseFloat(n2);
        case 'divisao':
            return parseFloat(n1) / parseFloat(n2);
        case 'multiplicacao':
            return parseFloat(n1) * parseFloat(n2);
    };    
};