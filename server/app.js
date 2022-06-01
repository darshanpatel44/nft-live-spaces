const express = require("express");
var cors = require('cors');
const { data } = require("./data");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());

app.get("/api/data", (req, res, next) => {
    res.json(data);
});

app.listen(PORT, () => {
 console.log("Server running on port 8080");
});