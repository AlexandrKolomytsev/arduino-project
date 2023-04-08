var http = require('http');
var fs = require('fs');
var index = fs.readFileSync( 'public/index.html');

var SerialPort = require('serialport');
const parsers = SerialPort.parsers;

const parser = new parsers.Readline({
    delimiter: '\r\n'
});

var port = new SerialPort('COM3',{
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

port.pipe(parser);

var app = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});
console.log( 'server' );
var io = require('socket.io')(app);

io.on('connection', function(socket) {
    console.log( 'socket' );
    socket.on('lights',function(data){

        console.log( data, 'server' );

        port.write( data.status );

    });

});

app.listen(8081);
