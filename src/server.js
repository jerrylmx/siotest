const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + "/public"));
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

io.on('connection', function(socket) {
    console.log('Player connected');
});

http.listen(port, () => console.log(`Game server running on port ${port}!`));

// Server loop
setInterval(function () {
    io.emit("sync", {name: 12345});
}, 50);

