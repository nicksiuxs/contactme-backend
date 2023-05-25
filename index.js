const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const { dbConnection } = require("./database/config");

const app = express();

dbConnection();

app.use(cors())
app.use(express.static("public"));
app.use(bodyParser.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/post", require("./routes/post"));

app.listen(process.env.PORT, () => {
    console.log("Servidor corriendo en puerto", process.env.PORT);
});
