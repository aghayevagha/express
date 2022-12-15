const express = require('express');
const app = express();

var myData = require("./workers.json");
app.get("/", (req, res) => {
    res.send(myData)
});

app.listen(3000);
