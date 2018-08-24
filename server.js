module.exports =function socketIo(io){
    socketIo.io = io;
    this.connection = function(id,name){
        socketIo.io.sockets.broadcast('newConnection',{username:name,id:id});
    };
    this.emitMessage = function(username,message){
        socketIo.io.sockets.broadcast('message',{username:username,message:message});
    }
}
