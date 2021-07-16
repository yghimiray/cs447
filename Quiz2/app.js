const express = require('express');
const app = express();
const productRouter = require('./routes/productRouter');

app.use(express.json());
//place code here
//needs require


//connect router
// app.use(productRouter);
app.use('/products', productRouter);




app.listen(3000, () => console.log('listening to 3000...'));