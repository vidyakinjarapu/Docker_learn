const mongoose = require("mongoose");
const express = require("express");

const app = express();
const DATABASE = "mongodb://mymongo:27017/teststartup";

mongoose.connect(DATABASE)
.then( () => {
    console.log("DB is connected!");
})
.catch( () => {
    console.log("ERROR in DB connection!");
});

app.get("/", (req, res) => {
    res.json({
        message: "You are visiting the ROOT route"
    });
});

app.listen(7000, () => {
    console.log("7000 port is ready to serve and listen.")
});