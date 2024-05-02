const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const port = 3001;

app.use(cors());

// JSON dosyasını okuyan endpoint
app.get("/api/data", (req, res) => {
  fs.readFile("pizzas.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading pizzas.json:", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    const pizzaData = JSON.parse(data);
    res.json(pizzaData);
  });
});

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});
