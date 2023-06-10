const http = require("http");
const SerialPort = require("serialport");
const Readline = SerialPort.parsers.Readline;
const axios = require("axios");
const express = require("express");


const app = express();
let isRelayOn = false;

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
  dataTemp = data.replace('\r', '').split(',');
});

setInterval(() => {
  console.log(dataTemp, "dataTemp");
  axios
    .post("https://arduino-back-production-ae97.up.railway.app/temp", {
    //.post("http://localhost:3000/temp", {
      dataWetness: dataTemp[0],
      dataTemp: dataTemp[1],
    })
    .then(function(response) {})
    .catch(function(error) {});
}, 2000);

// переключатель лампочки
setInterval(() => {
  axios
      .get("https://arduino-back-production-ae97.up.railway.app/bulb")
      .then(function(response) {
        console.log(response.data.bulbOn, 'response')
        let isRelayOn = !response.data.bulbOn
        const command = isRelayOn ? "1" : "0"
        port.write(command, err => {
          if (err) {
            console.log("Error on write: ", err.message);
          }
        });
      })
      .catch(function(error) {});
}, 1200);

app.listen(8080, () => {
  console.log("Server is listening on port 8080.");
});
