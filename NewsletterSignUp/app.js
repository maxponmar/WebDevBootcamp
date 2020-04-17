const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(req, res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email
})
app.listen(3000, function() {
    console.log("Seres runnig on port 3000");
});

//1739de845d2adf152d0bf79de4cef0c8-us4
//968b4a6f13