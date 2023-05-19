const SerialPort = require("serialport");
const express = require("express");

const app = express();
const port = new SerialPort("COM3", { baudRate: 9600 });

let isRelayOn = false;

app.get("/toggle", (req, res) => {
  isRelayOn = !isRelayOn; // Инвертируем флаг состояния реле

  const command = isRelayOn ? "1" : "0"; // Определяем команду в зависимости от состояния
  port.write(command, err => {
    if (err) {
      console.log("Error on write: ", err.message);
      res.status(500).send("Failed to toggle relay.");
    } else {
      console.log(`Relay is ${isRelayOn ? "ON" : "OFF"}`);
      res.send(`Relay is ${isRelayOn ? "ON" : "OFF"}`);
      //  res.redirect("https://example.com/new-route");
    }
  });
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080.");
});
