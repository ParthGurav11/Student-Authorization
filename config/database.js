const mongoose = require("mongoose");
require("dotenv").config()
const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,
        {useNewUrlParser:true,
        useUnifiedTopology:true,
    })
        .then(()=>{
            console.log("SuccessFull connection");
        })
        .catch((err)=>{
            console.log("Error Occured To Connect:  ",err);
            console.error(error.message);
            process.exit(1);
        })
}
module.exports = dbConnect;