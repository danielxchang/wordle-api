const express = require("express");

const wordRoutes = require("./routes/words");

const app = express();

app.use(bodyParser.json());

app.use(wordRoutes);

app.listen(8000);
