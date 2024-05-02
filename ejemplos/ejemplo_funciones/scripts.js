function calcularFactorial(n) {
    let fact = 1; // Definimos el neutro multiplicativo
    for (let i = 2; i <= n; i++) {
      fact *= i;
    }
    return fact;
}

/* let x = window.prompt('Ingresa el n a calcular su factorial');
let n = parseInt(x);
if (isNaN(n) || n < 0) {
    window.alert('No puedo calcular el factorial de ' + x);    
}
else {
    let total = calcularFactorial(n);
    window.alert(n + '! = ' + total);
} */

/* FUNCION QUE ES LLAMADA POR EL BOTON */
function calcular() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    a = parseInt(a);
    b = parseInt(b);
    if (isNaN(a) || isNaN(b)) {
        window.alert('Ambos valores deben ser números');
        return; // No prosigue la función, se termina!
    }
    let suma = sumar(a, b);
    document.getElementById('resultado').value = suma;
}

/* FUNCION QUE SUMA a Y b */
function sumar(a, b) {
    return a + b; 
}