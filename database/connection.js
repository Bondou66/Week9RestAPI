const mongoose = require('mongoose');

module.exports = () => {
    const dbURI = "mongodb+srv://abanoub:Kyrillos17@cluster0.mongodb.net/ecommerce?retryWrites=true&w=majority";
    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(result => console.log("connected to MongoDB Atlas"))
        .catch(err => console.log(err));
}