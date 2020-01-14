const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const geo = require("./routes/geo.routes");
const morgan = require("morgan");

app.use("/geo", geo);

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
