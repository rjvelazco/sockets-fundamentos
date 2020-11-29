var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// on -> escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Enviar informacion.
socket.emit('enviarMensaje', {
    usuario: 'Rafael',
    mensaje: 'Hola Mundo'
}, function(res) {
    console.log('Respuesta server: ', res);
});

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})