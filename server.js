const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const geo = require("./routes/geo.routes");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

app.use("/geo", geo);

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

/// DB Connection

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Geo-DB connected!..."));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`The app is listening on port ${port}...`);
});
