const express = require('express');
const dotEnv = require("dotenv");
const cors = require('cors');
const dbConnection = require('./database/connection');
dotEnv.config();

const app = express();
dbConnection();



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors()) 

app.use('/api/v1/product', require('./routes/productRoutes') );

app.get('/', (req, res, next) => {
    res.send("test");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});


app.use( (err,req,res,next) => {
    console.log(err.stack);
    res.status(500).send({
        status:500,
        message: err.message,
        body: {}
    });
});