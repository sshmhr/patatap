var express = require("express");
var app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render("patatap.html");
});



app.get("*",function(req,res){
    res.send("error 404 page not found");
}

app.listen(process.env.PORT,process.env.IP);