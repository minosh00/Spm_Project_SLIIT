const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
app.use(cookieParser());
app.use(express.json());

mongoose.connect('mongodb+srv://minosh:minosh@cluster0.u1yxx.mongodb.net/hotelssssssystem?retryWrites=true&w=majority');

mongoose.connection.on('error', err=>{

    console.log("connection failed ");

});

mongoose.connection.on('connected' , connected=>{
    console.log('connected with database ');
});

const userRouter = require('./routes/Userroutes');
app.use('/user',userRouter);

app.listen(5000,()=>{
    console.log('express server started');
});