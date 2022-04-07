const express = require("express");
const bodyParser = require("body-parser");

const wordRoutes = require("./routes/words");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(wordRoutes);

app.listen(8000);
