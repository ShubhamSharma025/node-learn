const express = require("express");

const app = express();
//request handler
app.use("/test",(req,res) => {
    res.send("hello from this server")
})

app.use("/hello",(req,res) => {
    res.send("hello from  server")
})


app.listen(3000,()=>{
    console.log("server is successfully listening to port 3000");
});
