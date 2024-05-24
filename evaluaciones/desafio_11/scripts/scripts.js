let notas = [
    { estudiante: 'Jaime Núñez', puntajes: [1, 2, 3, 3, 2, 1, 0, 1, 2, 3, 2, 1] },
    { estudiante: 'Daniela Pérez', puntajes: [1, 2, 3, 3, 2, 1, 1, 1, 2, 3, 2, 1] },
    { estudiante: 'Marcela Zúñiga', puntajes: [1, 2, 3, 3, 2, 1, 3, 1, 2, 3, 2, 1] },
    { estudiante: 'David Besnier', puntajes: [1, 2, 3, 3, 2, 1, 2, 1, 2, 3, 2, 1] },
    { estudiante: 'Luis González', puntajes: [1, 2, 3, 2, 2, 1, 0, 1, 2, 3, 2, 1] },
];

function calcularNota(puntaje, maximo, exigencia) {
    let puntajeAprobacion = maximo * exigencia;
    let nota = 1;
    if (puntaje >= puntajeAprobacion) {
        nota = 3 * (puntaje - puntajeAprobacion) / (maximo - puntajeAprobacion) + 4;
    }
    else {
        nota = 3 * puntaje / puntajeAprobacion + 1;
    }
    return Math.round(nota * 10) / 10;
}

function actualizarTabla() {
    let body = document.getElementById('notas');
    body.innerHTML = '';

    notas.forEach(function(item, index) {
        let total = 0;
        let htmlPuntajes = '';
        let p = 1;
        for(let puntaje of item.puntajes) {
            htmlPuntajes += '    <td><input type="text" id="p' + p + '_' + (index + 1) + '" size="1" value="' + puntaje + '" /></td>';
            total += puntaje;
            p++;
        }
        body.innerHTML += '<tr>' + 
                          '    <td>' + (index + 1) + '</td>' + 
                          '    <td>' + item.estudiante + '</td>' + 
                          htmlPuntajes + 
                          '    <td>' + total + '</td>' + 
                          '    <td>' + calcularNota(total, 36, 0.6) + '</td>' + 
                          '    <td>' + 
                          '        <button type="button" onclick="actualizarEstudiante(' + index + ')"><i class="fas fa-pen"></i></button>' + 
                          '        <button type="button" onclick="eliminarEstudiante(' + index + ')"><i class="fas fa-trash"></i></button>' + 
                          '    </td>' + 
                          '</tr>';
    });
}

function limpiarFormulario() {
    document.getElementById('estudiante').value = '';
    for (let i = 1; i <= 12; i++) {
        document.getElementById('p' + i).value = '';
    }
}

function agregarEstudiante() {
    let estudiante = document.getElementById('estudiante');

    let registroNota = {
        estudiante: estudiante.value, 
        puntajes: []
    }

    for (let i = 1; i <= 12; i++) {
        let p = document.getElementById('p' + i);
        registroNota.puntajes.push(parseFloat(p.value));
    }

    notas.push(registroNota);
    
    actualizarTabla();
    limpiarFormulario();
}

function eliminarEstudiante(index) {
    notas.splice(index, 1);
    actualizarTabla();
}

function actualizarEstudiante(index) {
    let registroNota = notas[index];
    registroNota.puntajes = [];

    for (let i = 1; i <= 12; i++) {
        let p = document.getElementById('p' + i + '_' + (index + 1));
        registroNota.puntajes.push(parseFloat(p.value));
    }

    actualizarTabla();
}