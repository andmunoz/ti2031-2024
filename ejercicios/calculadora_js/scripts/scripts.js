function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function potencia(x, n) {
    return x ** n;
}

function inversoAditivo(x) {
    return -x;
}

function inversoMultiplicativo(x) {
    return 1/x;
}

function factorial(x) {
    if (x == 0) return 1;
    return x * factorial(x - 1);
}

function escribirNumero(n) {
    let screen = document.getElementById('pantalla').value;
    document.getElementById('pantalla').value = screen + n;
}

function operadorUnario(op) {
    let x = document.getElementById('pantalla').value;
    let res = 0;
    switch (op) {
        case 'C':
            res = '';
            break;
        case '-x': 
            res = inversoAditivo(parseFloat(x));
            break;
        case '1/x':
            res = inversoMultiplicativo(parseFloat(x));
            break;
        case 'x!':
            x = parseInt(x);
            if (isNaN(x) || x < 0) res = 'Error';
            else res = factorial(x);
            break;
    }
    document.getElementById('pantalla').value = res;
}

function operadorBinario(op) {
    let screen = document.getElementById('pantalla').value;
    if (op != '=') {
        if (op == '2^')
            document.getElementById('pantalla').value = op + screen;
        else 
            document.getElementById('pantalla').value = screen + op;
        return;      
    }
    let pos = -1;
    let operador = '';
    if (screen.indexOf('+') >= 0) {
        pos = screen.indexOf('+');
        operador = screen.substring(pos, pos + 1);
    } else if (screen.indexOf('-') >= 0) {
        pos = screen.indexOf('-');
        operador = screen.substring(pos, pos + 1);
    } else if (screen.indexOf('*') >= 0) {
        pos = screen.indexOf('*');
        operador = screen.substring(pos, pos + 1);
    } else if (screen.indexOf('/') >= 0) {
        pos = screen.indexOf('/');
        operador = screen.substring(pos, pos + 1);
    } else if (screen.indexOf('^') >= 0) {
        pos = screen.indexOf('^');
        operador = screen.substring(pos, pos + 1);
    } 
    if (pos == -1) {
        document.getElementById('pantalla').value = 'Error';
        return;      
    }
    let a = screen.substring(0, pos);
    let b = screen.substring(pos + 1);
    console.log(a + '(' + operador + ')' + b);
    let res = '';
    switch(operador) {
        case '+':
            res = sumar(parseFloat(a), parseFloat(b));
            break;
        case '-':
            res = restar(parseFloat(a), parseFloat(b));
            break;
        case '*':
            res = multiplicar(parseFloat(a), parseFloat(b));
            break;
        case '/':
            res = dividir(parseFloat(a), parseFloat(b));
            break;
        case '^':
            res = potencia(parseFloat(a), parseFloat(b));
            break;
        }
    document.getElementById('pantalla').value = res;
}