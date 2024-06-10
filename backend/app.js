const cookieParser = require('cookie-parser');
const express = require('express');
const path = require("path")
const app = express();
const port = 3000;
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
app.set("view engine" , "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))
app.use()
app.use(cookieParser()); // Notice the parentheses to invoke cookie-parser

app.get('/', (req, res) => {
    // let token = jwt.sign({email:"pratik.patil9113@gmail.com"}, "secret");

    // res.cookie("token",token);
    // res.send("done");


    /* 2nd face */

});

app.get('/read', (req, res) => {
    // const nameCookie = req.cookies;
    // console.log(nameCookie)
    // res.send(`Reading cookie: ${nameCookie}`);

    // const data = jwt.verify(req.cookies.token, "secret");
    // console.log(data);



    /* 2nd face */ 
});

app.listen(port, () => {
    console.log(`Server is started at ${port}`);
});
