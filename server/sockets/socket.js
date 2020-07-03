const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    // Escuchar cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);


        /*
        if (mensaje.usuario) {
            callback({
                respuesta: 'TODO OK'
            });
        } else {
            callback({
                respuesta: 'Y PAH´ DRAMA'
            });
        }
*/


    })


})