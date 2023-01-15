//Clase 220

const socketController = ( socket ) => {

    socket.on('disconnect', () => {
        console.log( 'Cliente desconectado' )
    })           
    
    socket.on( 'enviar-mensaje', ( payload, callback ) => { //Clase 219
        
        const id = 123456;
        callback( id );

        socket.broadcast.emit( 'enviar-mensaje', payload );
        
    });
};

export {socketController}

