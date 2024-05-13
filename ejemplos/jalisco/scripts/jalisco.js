function jalisco() {
    let n = document.getElementById('numero').value;
    n = parseInt(n);
    console.log('Número jugado por el usuario: ' + n);
    if (isNaN(n)) {
        window.alert('Debes ingresar un número');
    } else if (n >= 1 && n <= 100) {
        let n1 = n + 1;
        console.log('Mí número a jugar: ' + n1);
        document.getElementById('respuesta').innerText = 'Ja ja ja. Te gané con el ' + n1;
    } else {
        window.alert('Eres un maldito tramposo!!!');
    }
}