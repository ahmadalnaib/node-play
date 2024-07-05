const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node');

const User=mongoose.model('User',{name:String,age:Number,car:String});

const user=new User({name:'ahmad',age:10,car:'wewe'});
user.save().then(()=>console.log('User saved'));