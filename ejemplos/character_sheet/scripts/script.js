// Aquí haremos el script de Javascript
let character = {};

function agregarAtributo(idNombre, idValor) {
    // Obtener los valores del nombre y contenido del atributo
    let atributoNombre = document.getElementById(idNombre).value;
    let atributoValor = document.getElementById(idValor).value;
    console.log(atributoNombre + ' = ' + atributoValor);

    // Agregar la información al objeto character
    character[atributoNombre] = atributoValor;
    console.log(character);

    // Motrar el nuevo atributo en la tabla de datos
    let body = document.getElementById('body');
    body.innerHTML = '';
    for(atrib in character) {
        body.innerHTML += '<tr><td>' + atrib + '</td><td>' + character[atrib] + '</td></tr>';
    }
}