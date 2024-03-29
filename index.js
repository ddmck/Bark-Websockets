var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('<p>Hi</p>');
});

app.get('/update_todos', function(req, res){
  io.emit('updateTodos/' + req.query.userid);
  res.end();
})

io.on('connection', function(socket){
  console.log('a user connected');
  
  socket.on('disconnect', function(socket){
    console.log('a user disconnected');
  });
});

http.listen(2020, function(){
  console.log('listening on *:2020');
});