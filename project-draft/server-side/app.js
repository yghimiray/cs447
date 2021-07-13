
const express = require('express');
const cors = require('cors');
const bookRouter = require('./routes/book-router');
const userRouter = require('./routes/user-router');

const User = require('./models/user');
// User.init();


const app = express();

app.set('port', process.env.PORT || 3000);
const port = app.get('port');


app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use('/books', bookRouter);


// app.use((req, res, next) => {
//     res.status(404).send("Not found, please try again!")
// });

// app.use((err, req, res, next) => {
//     res.status(500).send("Something went wrong, please try later!");
// });



app.listen(port,()=>console.log("Local Host is port.." + port));