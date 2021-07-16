/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
"use strict";

const express = require('express');
const bookRouter = require('./routes/bookRouter');
const userRouter = require('./routes/userRouter');


const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 5500);
const port = app.get('port');

app.use(cors());
app.use(express.json());




app.use(userRouter);
app.use('/books', bookRouter);




app.use((req, res, next) => {
    res.status(404).send("Not found, please try again!")
});

app.use((err, req, res, next) => {

    res.status(500).send("Something went wrong, please try later!");
});


app.listen(port, () => console.log("listening on port number " + port));