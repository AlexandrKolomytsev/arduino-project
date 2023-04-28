const http = require("http");
const SerialPort = require("serialport");
const Readline = SerialPort.parsers.Readline;
const axios = require("axios");
const port = new SerialPort("COM3", {
  baudRate: 9600,
  dataBits: 8,
  parity: "none",
  stopBits: 1,
  flowControl: false,
});

// Отправка запроса на Arduino
port.write("get_temperature");

// Обработка ответа от Arduino
let dataTemp = 0;
const parser = port.pipe(new Readline());
parser.on("data", data => {
  console.log(data);
  dataTemp = data;
});

setInterval(() => {
  console.log(dataTemp, "dataTemp");
  axios
    .post("https://arduino-back-production.up.railway.app/users", {
      dataTemp: dataTemp.trim(),
    })
    .then(function(response) {})
    .catch(function(error) {});
}, 2000);

/*const server = http.createServer((req, res) => {
    if (req.url === '/temp') {
        // отправляем ответ клиенту
        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        });
        res.end(dataTemp);
    } else {
        // отправляем ответ клиенту, если путь не '/temp'
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
    }
});

server.listen(3000, () => {
    console.log('Server started on port 3000');
});*/
