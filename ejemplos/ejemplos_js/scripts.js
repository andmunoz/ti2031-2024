let nombre = null;

nombre = window.prompt('Ingresa tu nombre');

console.log('Hola ' + nombre);
console.log(nombre + ' es ' + typeof(nombre));

let edad = window.prompt('Ingresa tu edad');
let nacionalidad = window.prompt('Ingresa tu origen');

let persona = {
    nombre: nombre,
    edad: edad, 
    nacionalidad: nacionalidad
}

console.log(persona);

let personas = ['Juan', 'Diego', 'María', 'Pedro', 'Fabiola'];
let n = window.prompt('Selecciona un número de 1 a 5');
console.log('La persona seleccionada es ' + personas[n-1]); 

personas[10] = 'Roberto';
console.log(personas);
