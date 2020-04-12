//set up the server
var app = require('http').createServer()
var io = module.exports.io = require('socket.io')(app)

//set port to specified varible in env file, if it exists 
//or set to default 3231
const PORT = process.env.PORT || 3231

const SocketManager = require('./SocketManager')

//what to do when we get to a connection --> 
io.on('connection', SocketManager)

app.listen(PORT, ()=>{
    console.log("Connected to port: " + PORT); 
})