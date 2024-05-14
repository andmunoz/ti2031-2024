// Declarar un arreglo VACIO
const sorteo = [];

// Llenar el arreglo
let nombre;
do {
    // Solicitamos el nombre por pantalla
    nombre = window.prompt('Ingresa un nombre (ingresa FIN para terminar)');

    // Si el nombre es válido, lo agregamos al arreglo
    if (nombre != 'FIN') {
        sorteo.push(nombre);
    }
} while (nombre != 'FIN');

// Mostramos el arreglo lleno
console.log('Arreglo: ');
console.log(sorteo);

// Ordenamos alfabéticamente
sorteo.sort();

// Mostramos el arreglo ordenado
console.log('Arreglo ordenado: ');
console.log(sorteo);

// Solicitamos cantidad de nombres a sortear
let n = parseInt(window.prompt('Cuántos nombres quieres sortear?'));

// Sacamos n nombres
for(let i = 1; i <= n; i++) {
    // Obtenemos una posición al azar dentro del arreglo
    let pos = Math.floor(Math.random()*sorteo.length);

    // Sacamos el nombre de esa posición al azar
    nombre = sorteo.at(pos);

    // Si el nombre ya salió sorteado, volvemos a hacer el sorteo
    if (nombre === undefined) {
        i--;
        continue;
    }

    // Mostramos el sorteado
    console.log('El sorteado número ' + i + ' es ' + nombre + ' (' + pos + ')');

    // Eliminamos el nombre del sorteo
    delete sorteo[pos];
}