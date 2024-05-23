let notas = [];

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

function agregarEstudiante() {
    let estudiante = document.getElementById('estudiante');
    let p1 = document.getElementById('p1');
    let p2 = document.getElementById('p2');
    let p3 = document.getElementById('p3');
    let p4 = document.getElementById('p4');
    let p5 = document.getElementById('p5');
    let p6 = document.getElementById('p6');
    let p7 = document.getElementById('p7');
    let p8 = document.getElementById('p8');
    let p9 = document.getElementById('p9');
    let p10 = document.getElementById('p10');
    let p11 = document.getElementById('p11');
    let p12 = document.getElementById('p12');

    let registroNota = {
        estudiante: estudiante.value, 
        puntajes: []
    }
    registroNota.puntajes.push(parseFloat(p1.value));
    registroNota.puntajes.push(parseFloat(p2.value));
    registroNota.puntajes.push(parseFloat(p3.value));
    registroNota.puntajes.push(parseFloat(p4.value));
    registroNota.puntajes.push(parseFloat(p5.value));
    registroNota.puntajes.push(parseFloat(p6.value));
    registroNota.puntajes.push(parseFloat(p7.value));
    registroNota.puntajes.push(parseFloat(p8.value));
    registroNota.puntajes.push(parseFloat(p9.value));
    registroNota.puntajes.push(parseFloat(p10.value));
    registroNota.puntajes.push(parseFloat(p11.value));
    registroNota.puntajes.push(parseFloat(p12.value));

    notas.push(registroNota);
    
    actualizarTabla();
    limpiarFormulario();
}

function actualizarTabla() {
    let body = document.getElementById('notas');
    body.innerHTML = '';

    notas.forEach(function(item, index) {
        let total = 0;
        let htmlPuntajes = '';
        for(let puntaje of item.puntajes) {
            htmlPuntajes += '    <td>' + puntaje + '</td>';
            total += puntaje;
        }
        body.innerHTML += '<tr>' + 
                          '    <td>' + (index + 1)+ '</td>' + 
                          '    <td>' + item.estudiante + '</td>' + 
                          htmlPuntajes + 
                          '    <td>' + total + '</td>' + 
                          '    <td>' + calcularNota(total, 36, 0.6) + '</td>' + 
                          '</tr>';
    });
    console.log(body.innerHTML);
}

function limpiarFormulario() {
    document.getElementById('estudiante').value = '';
    document.getElementById('p1').value = '';
    document.getElementById('p2').value = '';
    document.getElementById('p3').value = '';
    document.getElementById('p4').value = '';
    document.getElementById('p5').value = '';
    document.getElementById('p6').value = '';
    document.getElementById('p7').value = '';
    document.getElementById('p8').value = '';
    document.getElementById('p9').value = '';
    document.getElementById('p10').value = '';
    document.getElementById('p11').value = '';
    document.getElementById('p12').value = '';
}