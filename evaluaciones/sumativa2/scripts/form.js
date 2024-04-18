function sendForm(form) {
    let name = document.getElementById('form_name').value;
    if (!name) { 
        alert('No olvides dejarnos tu nombre!');
        return false;
    }
    document.getElementById('contact_name').innerText = name;
    let email = document.getElementById('form_email').value;
    if (!email) { 
        alert('No olvides dejarnos tu e-mail!');
        return false;
    }
    document.getElementById('contact_email').innerText = email;
    let game = document.getElementById('form_game').value;
    if (!game) { 
        alert('No olvides decirnos en qué tipo de juego te interesas!');
        return false;
    }
    document.getElementById('contact_game').innerText = game;
    document.getElementById('form').style.display = 'none';
    document.getElementById('gift').style.display = 'block';
    return false;
}