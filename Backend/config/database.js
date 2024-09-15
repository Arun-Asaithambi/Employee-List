const mongoose = require('mongoose');

const connectDatabase = () =>{
    mongoose.connect(process.env.DB)
    .then((connect)=> console.log(`MongoDB is connected to the host : ${connect.connection.host}`))
    .catch((e) => console.log(e))
};

module.exports = connectDatabase;