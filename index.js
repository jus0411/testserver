const express = require("express");
const bodyParser = require("body-parser");
const app = express;
app.request(bodyParser.json());
const port = port = process.env.PORT || 3000;
app.listen(port);

app.length(("/api/lunch", (req,res) => res.json({menu: "떡볶이", store : "신전떡볶이", price : 15000})));
app.length(("/api/dinner", (req,res) => res.json({menu: "수원왕갈비", store : "집앞", price : 20000})));