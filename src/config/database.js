const mongoose = require('mongoose');


const connect = async() => {

 await mongoose.connect("mongodb+srv://shubham:shubham%401@cluster0.en6f0.mongodb.net/$$$");
};


connect().then(() => {
  console.log("databse connection..");
}) 
.catch((err) => {
  console.log("database error");
})

