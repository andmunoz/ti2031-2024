function calcularFactorial(n) {
    let fact = 1; // Definimos el neutro multiplicativo
    for (let i = 2; i <= n; i++) {
      fact *= i;
    }
    return fact;
}

/* let x = window.prompt('Ingrese el n a calcular');
let n = parseInt(x);
if (isNaN(n) || n < 0) {
  window.alert('No se calcular el factorial de ' + x);  
}
else {
  let total = calcularFactorial(n);
  window.alert(n + '! = ' + total);
} */

/* FUNCION QUE CALCULA A + B */
function sumar(a, b) {
  return a + b;
}

/* FUNCION QUE OBTIENE LOS PARAMETROS Y MUESTRA EL RESULTADO */
function calcular() {
  let a = document.getElementById('a').value;
  a = parseInt(a);
  let b = document.getElementById('b').value;
  b = parseInt(b);
  if (isNaN(a) || isNaN(b)) {
    window.alert('Ambos valores deben ser números');
    return;
  }
  let suma = sumar(a, b);
  document.getElementById('resultado').value = suma;
}