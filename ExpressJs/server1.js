const express = require("express");

// create an express application . the express function is top level fucntion is exported by express module
const app = express();

app.listen(3000,function(){
    console.log("server initiated");
});

//  base url

app.get("/", function(request,response){
    //console.log(request);
    //response.send("Connected")
    response.send("<h1>welcome</h1>");
});

app.get("/contact", function(req,res){
    res.send("<p>Please call us at <a href='tel:555-666-7777'>555-666-7777</a> </p>");
});


app.get("/home", function(request,response){
    response.send("<h1>this is our lovely homepage</h1>");
});