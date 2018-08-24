
module.exports = function(io){
    // io.on('data', function(socket){
    //     console.log('a user connected');
        
    //     // var clientIp = socket.request.connection.remoteAddress;

    //     // console.log(clientIp);
    //   });
    io.sockets.on('connection', function(socket){        
        console.log('a user connected');
    });
    io.sockets.on('data',()=>{
        console.log('some data received');
    });
    // io.on('data', function(socket){
    //     console.log('user disconnected');
    // });
}