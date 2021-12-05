let express = require("express");
const {request} = require("express");

let app = express();
let count = 0;

app.get("/count", (req, res) => {
    res.send(`${count}`);
})

app.post("/count", (req, res) => {
    count++;
    res.send(`${count}`)
})

app.listen(3000)
