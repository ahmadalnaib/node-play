const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node');

const User=mongoose.model('User',{name:String,age:Number,car:String});

// const user=new User({name:'ahmad',age:10,car:'wewe'});
// user.save().then(()=>console.log('User saved'));


async function main()
{
// const user=new User({name:'bobo',age:10,car:'wewe'});
// await user.save();

// const id='6687e191fd2ae91ce4447039';
// const user=await User.findById(id);
// console.log(user);
}

main();