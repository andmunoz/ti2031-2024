// Declaramos la "tabla virtual" de prospectos
let prospectos = [];

function sendForm(form) {
    // Obtenemos el nombre del prospecto
    let name = document.getElementById('form_name').value;
    if (!name) { 
        alert('No olvides dejarnos tu nombre!');
        return false;
    }
    document.getElementById('contact_name').innerText = name;

    // Obtenemos el correo del prospecto
    let email = document.getElementById('form_email').value;
    if (!email) { 
        alert('No olvides dejarnos tu e-mail!');
        return false;
    }
    document.getElementById('contact_email').innerText = email;

    // Obtenemos la preferencia del prospecto
    let game = document.getElementById('form_game').value;
    if (!game) { 
        alert('No olvides decirnos en qué tipo de juego te interesas!');
        return false;
    }
    document.getElementById('contact_game').innerText = game;

    // Crear el nuevo prospecto
    let p = {
        nombre: name,
        email: email,
        preferencia: game, 
        mostrarHTML: function(pos) {
            return '<tr>' + 
                   '  <td>' + this.nombre + '</td>' +
                   '  <td>' + this.email + '</td>' +
                   '  <td>' + this.preferencia + '</td>' +
                   '  <td><button onclick="removeProspect(' + pos + ')">Eliminar</button></td>' +
                   '</tr>';
        }
    }
    prospectos.push(p);
    console.log(prospectos);

    // Mostramos la tabla de datos
    showTable();

    // Mostrar el contenido enriquecido para el prospecto
    document.getElementById('form').style.display = 'none';
    document.getElementById('gift').style.display = 'block';

    return false;
}

function showForm() {
    // Limpiar formulario del call-to-action
    document.getElementById('form_name').value = '';
    document.getElementById('form_email').value = '';
    document.getElementById('form_game').value = '';

    // Mostrar el formulario del call-to-action
    document.getElementById('form').style.display = 'block';
    document.getElementById('gift').style.display = 'none';
}

function showTable() {
    // Borramos el contenido de la tabla
    let body = document.getElementById('body');
    body.innerHTML = '';

    // Recorrer la "Tabla Virtual" mostrando cada registro
    for(let i = 0; i < prospectos.length; i++) {
        body.innerHTML += prospectos[i].mostrarHTML(i);
    }
}

function removeProspect(pos) {
    // Eliminamos el prospecto que está en "pos"
    prospectos.splice(pos, 1);
    console.log(prospectos);
    showTable();
}