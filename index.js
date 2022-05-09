// Intializing App
var app = require('express')()
var http = require('http').createServer(app)

var io = require('socket.io')(http,{cors:{
    origin:'http://localhost:3000',
    methods: ["GET","POST"]
}})

const PORT = 8080

const STATIC_CHANNELS = ['kelltontech', 'es6classes']

http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})

io.on('connection', (socket) => {
    // Socket Object it helps to send specific messages to the 
    // new connected client
    console.log('new client connected')
    socket.emit('connection',null)
})