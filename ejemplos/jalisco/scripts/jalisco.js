function jalisco() {
    let n = document.getElementById('numero').value;
    n = parseInt(n);
    console.log('El valor del usuario es ' + n);
    if (isNaN(n)) {
        window.alert('Debes ingresar un número');
    } else if (n >= 1 && n <=100) {
        document.getElementById('respuesta').innerHTML = 'Te gané con el <b>' + (n + 1) + '</b>. Ja ja ja'
    } else {
        window.alert('Eres un mardeto tramposo!');
    }
}