const express = require("express");
let app = express();
const static = express.static(__dirname + "/public");

app.use(static);

configRoutes(app);

app.get('/', (req, res) => {
    res.send("description")
});

app.get("*", (req, res) => {
    res.status(404).send("Not Found");
});

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});