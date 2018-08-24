const app = require('express')();
const port = process.env.port || 4000;
const bodyParser = require('body-parser');
const http = require('http').Server(app);
var io = require('socket.io')(http);
var socketServerFile = require('./server');
socketObj = new socketServerFile(io);
//console.log(socketObj.connection());
io.sockets.on('connection',(socket)=>{
  // console.log("this is socket",socket);
  console.log("user connected");
})
app.get('/page',(req,res)=>{
  let id = req.query.userid;
  let name = req.query.username;
  socketObj.connection(id,name);
  res.sendFile(__dirname+"/test.html");
});



http.listen(port,()=>{console.log(`Server is running at : ${port}`)});
