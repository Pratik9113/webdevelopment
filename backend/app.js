const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const port = 3000;
const bcrypt = require("bcrypt")
app.use(cookieParser()); // Notice the parentheses to invoke cookie-parser

app.get('/', (req, res) => {
    res.cookie("name", "pratik");
    res.send("done");
});

app.get('/read', (req, res) => {
    const nameCookie = req.cookies.name;
    console.log(nameCookie)
    res.send(`Reading cookie: ${nameCookie}`);
});

app.listen(port, () => {
    console.log(`Server is started at ${port}`);
});
