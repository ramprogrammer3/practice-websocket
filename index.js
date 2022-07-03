const express = require("express")
const app = express()
const port = 8080
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})
io.on("connection",(socket)=>{
    console.log(`user connected `)
    socket.on("msg",(userName,userMessage)=>{
        io.emit('msg',userName,userMessage)
    })
    socket.on("deleteMessage",(id)=>{
        io.emit('deleteMessage',id)
    })

})

http.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})