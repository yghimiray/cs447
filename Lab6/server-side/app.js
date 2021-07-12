
const express = require('express');
const app = express();
const cors = require('cors');

const bookRouter = require('./routes/book-router');
const userRouter = require('./routes/user-router');
const User = require('./models/user');
User.init();

app.set('port', process.env.PORT || 3000);
const port = app.get('port');

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use('/books', bookRouter);

app.use((req,res,next)=>{
res.status(404).json({error:req.url+'API not supported'});
});

// app.use((err, req, res, next) => {
//     if (err.message === 'NOT Found') {
//         res.status(404).json({ error: err.message });
//     } else {
//         res.status(500).json({ error: 'Something is wrong! Try later' });
//     }
// });



app.listen(port,()=>console.log("Local Host is port.." + port));