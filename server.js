"use strict"
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');

const app = express();

//Development
if (process.env.NODE_ENV === 'development') {
    const morgan = require('morgan');
    app.use(morgan('dev'));
}

var say = "hello"
var say = "mello"
console.log(say)


//midllewareee
app.use(express.json());


//API

app.post('/', (req, res) => {
    res.json({ message: 'Data received', data: req.body, mata: "mata" });
});

app.get("/", (req, res) => {
    res.send("Hello")
})

const port = process.env.PORT ?? 8000
app.listen(port, () => { console.log("------------------server is running port 8000--------------") })