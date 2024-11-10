const express = require("express");

require("./config/database");

const app = express();

const User = require("./models/user");
//request handler
app.post("/test", async(req,res) => {
     
    const user = new User({
        firstName :"shubham",
        lastName :"Sharma",
        emailId:"shubhamsh0532@gmail.com",
        password:"shubham@123"
    });

    await user.save();

    try {
        await user.save();
        res.send("user added successfully");
    }catch(err){
        res.status(400).send("error");
    }
});



app.listen(3000,()=>{
    console.log("server is successfully listening to port 3000");
});
