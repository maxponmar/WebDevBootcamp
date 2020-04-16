const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Hello");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at: asd@asd.com");
});

app.get("/about", function(req, res) {
    res.send("My name is Maximiliano and I love code");
});

app.get("/hobbies", function(req, res) {
    res.send("My hobbies section");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});

