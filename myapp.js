const express = require('express');
const app = express();
const http = require('http').Server(app);
const fs = require('fs');
var io = require('socket.io')(http);

let base = JSON.parse(fs.readFileSync('C:/Users/dima6/Desktop/VKBot-nodejs/base.json'));
console.log("Initial file: ", base);

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/main.html");
});

io.on('connection', function(socket){
  console.log('build run');
  fs.watchFile('C:/Users/dima6/Desktop/VKBot-nodejs/base.json', function(curr, prev){
    console.log('Confirm changed');
    let data = JSON.parse(fs.readFileSync('C:/Users/dima6/Desktop/VKBot-nodejs/base.json'));
    console.log('New base', data);
    io.emit('base change', data);
  })
})

http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});