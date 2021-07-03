
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');


app.set('port', process.env.PORT || 3000);
const port = app.get('port');

app.use(express.urlencoded({extended:true}));
// app.use(express.json());


app.use(express.static(path.join(__dirname,'public','css')));//mycss is used for not showing the acual path to the client.

app.use('/product',productRouter);
app.use('/user',userRouter);

app.get("/", (req,res,next)=>{
    res.send("Welcome to our home page.")
});



/////////////////////////////////////////////////////////////////////////////////////
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','404.html'));
});

app.use((err,req,res,next)=>{
    console.log(err);
    res.sendFile(path.join(__dirname,'views','500.html'));
});

// This is the last step called as bootup
app.listen(port,()=> console.log("This server is in page ",port));