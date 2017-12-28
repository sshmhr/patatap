var express = require("express");
var app = express();

app.use(express.static( __dirname +"/sounds" ));
app.use(express.static( __dirname +"/stylesheets" ));

app.get("/",function(req,res){
    res.render("patatap.ejs");
});



app.get("*",function(req,res){
 res.send("error 404 page not found");
});

app.listen(process.env.PORT,process.env.IP);