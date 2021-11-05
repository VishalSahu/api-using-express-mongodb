const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
require("dotenv/config");

app.use(express.json());

const moviesRoute = require("./routes/movies.js");
app.use('/movies', moviesRoute);


mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to database !")
);
app.listen(port);
  