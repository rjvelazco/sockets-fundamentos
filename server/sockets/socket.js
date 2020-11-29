const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    // Enviar un evento
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        // broadcast -> Propiedad de todo los clientes
        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         res: 'TODO SALIO BIEN'
        //     });
        // } else {
        //     callback({
        //         res: 'TODO SALIO MAL!!!!!!!!!'
        //     })
        // }
    });
});