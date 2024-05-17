// Se crea glboalmente la "tabla virtual" para almacenar los prospectos
let prospectos = [];

function sendForm(form) {
    // Se obtiene y valida el nombre
    let name = document.getElementById('form_name').value;
    if (!name) { 
        alert('No olvides dejarnos tu nombre!');
        return false;
    }
    document.getElementById('contact_name').innerText = name;

    // Se obtiene y valida el email
    let email = document.getElementById('form_email').value;
    if (!email) { 
        alert('No olvides dejarnos tu e-mail!');
        return false;
    }
    document.getElementById('contact_email').innerText = email;

    // Se obtiene y valida el juego
    let game = document.getElementById('form_game').value;
    if (!game) { 
        alert('No olvides decirnos en qué tipo de juego te interesas!');
        return false;
    }

    // Se crea el objeto que contiene los datos del formulario
    let prospecto = {
        nombre: name,
        email: email,
        juego: game,
        mostrar: function(pos) {
            return '<tr>' + 
                      '<td>' + this.nombre + '</td>' + 
                      '<td><a href="mailto:' + this.email + '">' + this.email + '</a></td>' + 
                      '<td>Juegos ' + this.juego + '</td>' + 
                      '<td><button onclick="remove(' + pos + ')">Eliminar</button></td>' + 
                   '</tr>';
        }
    }
    
    // Se guarda en la "tabla virtual" junto a los otros prospectos
    prospectos.push(prospecto);
    console.log(prospectos);

    // Se muestra el mensaje de recepción y el contenido rico
    document.getElementById('contact_game').innerText = game;
    document.getElementById('form').style.display = 'none';
    document.getElementById('gift').style.display = 'block';

    refreshTable();
    return false;
}

function remove(pos) {
    if (!window.confirm('¿Está seguro de eliminar el prospecto?'));

    // Eliminamos del arreglo la posición indicada
    prospectos.splice(pos, 1);
    console.log(prospectos);

    refreshTable();
}

function refreshTable() {
    // Se muestra el contenido de la "tabla virtual" en la página
    let body = document.getElementById('body');
    body.innerHTML = '';
    for(let i=0; i<prospectos.length; i++) {
        let p = prospectos[i];
        body.innerHTML += p.mostrar(i);
    }    
}

function reload() {
    // Se limpia el formulario para agregar otro prospecto
    document.getElementById('form_name').value = '';
    document.getElementById('form_email').value = '';
    document.getElementById('form_game').value = '';

    // Se muestra el formulario nuevamente
    document.getElementById('form').style.display = 'block';
    document.getElementById('gift').style.display = 'none';
}