const express = require("express");
var cors = require('cors');
const { data } = require("./data");

const app = express();
app.use(cors());

app.get("/api/data", (req, res, next) => {
    res.json(data);
});

app.listen(8080, () => {
 console.log("Server running on port 8080");
});