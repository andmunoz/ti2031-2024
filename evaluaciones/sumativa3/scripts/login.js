function login() {
    document.getElementById('login-form').style.display = 'none';
    let nickname = document.getElementById('nickname');
    localStorage.setItem('nickname', nickname.value);
    document.getElementById('show-nickname').innerText = nickname.value;
    document.getElementById('welcome-message').style.display = 'block';
}

function logout() {
    document.getElementById('welcome-message').style.display = 'none';
    document.getElementById('nickname').value = '';
    localStorage.removeItem('nickname');
    document.getElementById('login-form').style.display = 'block';
}

function checkLogin() {
    if (localStorage.getItem('nickname')) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('show-nickname').innerText = localStorage.getItem('nickname');
        document.getElementById('welcome-message').style.display = 'block';
    }
}