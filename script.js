const formLogin = document.querySelector('.login form');

formLogin.addEventListener('submit', (event) => {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    // Este if es para hacer una simulación, si se colocan estas credenciales "inicia sesión", de lo contrario
    // suelta la alerta de abajo
    if (usuario === 'admin' && contrasena === '12345') {
     
        window.location.href = 'principal.html';
    } else {

        alert('Usuario o contraseña incorrectos');
    }
});
