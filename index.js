const express = require("express");
const app = express();
const Students = require("./models/students.js")
const ejsMate = require("ejs-mate");
const path = require("path");
const port = process.env.PORT || 3000;

const mongoose = require("mongoose");
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Student-Authorization");
}
main()
    .then(()=>{
        console.log("Connection SuccessFull");
    })
    .catch((err)=>{
        console.log("Error Occured During connection");
    })
app.set("view engine","ejs");
app.engine("ejs",ejsMate);
app.set("views",path.join(__dirname,"views"));

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"./public")));

app.post("/verify",async(req,res)=>{
    let {userId:userId,password:pass} = req.body;
    console.log(pass);
    let user = await Students.find({password:pass});
    let userObj = user[0];
    console.log(user[0].username);  
    res.render("user.ejs",{userObj});
})
app.get("/home",(req,res)=>{
    console.log("Request Received...");
    res.render("home.ejs");
})

app.listen(port,()=>{
    console.log("Listening on Port",port);
})