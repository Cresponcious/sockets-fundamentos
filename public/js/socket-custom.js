var socket = io();

// escuchar
socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Se perdió la conexión al servidor');
});

//Para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Andrés',
    mensaje: 'Hola Shoros'
}, function(resp) {
    console.log('respuesta server', resp);
});

//Escuchar info
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
})