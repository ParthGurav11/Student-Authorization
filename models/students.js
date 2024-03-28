const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    url:{
        type:String,
    },
    username:String,
    userId : String,
    password:Number,
    Year:Number,

})
const Students = mongoose.model("Student",studentSchema);
module.exports = Students;

