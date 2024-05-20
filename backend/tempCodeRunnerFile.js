const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const port = 3000;

app.use(cookieParser()); // Notice the parentheses to invoke cookie-parser

app.get('/', (req, res) => {
    res.cookie("name", "pratik");
    res.send("done");
});

app.get('/read', (req, res) => {
    const nameCookie = req.cookies.name;
    res.send(`Reading cookie: ${nameCookie}`);
});

app.listen(port, () => {
    console.log(`Server is started at ${port}`);
});
