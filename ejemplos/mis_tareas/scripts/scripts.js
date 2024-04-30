let miCurso = null;

function guardarTarea() {
    let curso = document.getElementById('curso').value;
    let seccion = document.getElementById('seccion').value;
    if (miCurso == null) {
        miCurso = {
            curso: curso,
            seccion: seccion,
            tareas: [],
            actualizacion: new Date()
        };
    }
    let nombre = document.getElementById('tarea').value;
    let descripcion = document.getElementById('descripcion').value;
    let entrega = document.getElementById('entrega').value;
    let tarea = {
        nombre: nombre,
        descripcion: descripcion,
        entrega: entrega
    };
    miCurso.tareas[miCurso.tareas.length] = tarea;
    miCurso.actualizacion = new Date();
    document.getElementById('tarea').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('entrega').value = '';
    console.log(miCurso);
}