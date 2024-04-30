let ficha = null;

function guardarFormulario() {
    let nombres = document.getElementById('nombres').value;
    let apellidos = document.getElementById('apellidos').value;
    let edad = document.getElementById('edad').value;
    if (ficha == null) {
        ficha = {
            nombres: nombres,
            apellidos: apellidos, 
            edad: parseInt(edad),
            consultas: [],
            proximoControl: null
        }
    }
    let hallazgos = document.getElementById('hallazgos').value;
    let tratamiento = document.getElementById('tratamiento').value;
    let proximoControl = document.getElementById('fecha').value;
    let consulta = {
        fecha: new Date(),
        hallazgos: hallazgos,
        tratamiento: tratamiento
    }
    ficha.consultas[ficha.consultas] = consulta;
    ficha.proximoControl = proximoControl;
    console.log(ficha);
}