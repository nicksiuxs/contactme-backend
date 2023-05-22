const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const { dbConnection } = require("./database/config");

const app = express();

dbConnection();

app.use(express.static("public"));

app.use(bodyParser.json());
app.use("/api/auth", require("./routes/auth"));

app.listen(process.env.PORT, () => {
    console.log("Servidor corriendo en puerto", process.env.PORT);
});
