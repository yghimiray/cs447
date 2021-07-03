//1.dependencies
const express = require('express');
const path = require('path');
const productRouter = require('./routes/productRoute');
const userRouter = require('./routes/userRoute');
const fs = require('fs');


//2. instantiation
const app = express();

//3. configuration
app.set('port', process.env.PORT || 3000);
const PORT = app.get('port');
//3.configuration
app.set('query parser', 'extended'); //default case

// 4.middleware
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/resources/abc', express.static(path.join(__dirname, 'public', 'css')));

app.use(express.urlencoded({
    extended: true
}));



app.get('/', (req, res, next) => {
   res.send('This is my home page...');
})

app.use('/product', productRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.use((err, req, res, next) => {
    console.log(err);
    res.sendFile(path.join(__dirname, 'views', '500.html'));
});

//7. bootup
app.listen(PORT, () => console.log('your server is on ' + PORT));