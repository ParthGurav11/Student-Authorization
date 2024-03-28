const mongoose = require("mongoose");
const initData = require("./data.js");
const Student = require("../models/students.js");
const mongoUrl = "mongodb://127.0.0.1:27017/Student-Authorization";

async function main(){
    await mongoose.connect(mongoUrl);
}
main()
.then(()=>{
    console.log("Connection with MongoDb SuccessFull");
})
.catch((err)=>{
    console.log("Error Occurred During Connection:",err);
})

const initDB = async()=>{
    await Student.deleteMany({});
    await Student.insertMany(initData.data);
    console.log("Data was saved SuccessFully");
}
initDB();