
const express = require('express');
const bookRouter = require('./routes/book-router');
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 3000);
const port = app.get('port');


app.use(cors());
app.use(express.json());

app.get("/", (req,res,next)=>{
    res.send("Welcome to our home page.")
});

app.use('/books', bookRouter);

app.listen(port,()=>console.log("Local Host is port.." + port));