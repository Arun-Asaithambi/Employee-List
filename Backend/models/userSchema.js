const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const bcrypt = require("bcrypt");

const userSchema = Schema({
    username:{
        type:String,
        required:[true,'Please enter your username']
    },
    email:{
        type:String,
        required:[true,'Please enter your email'],
        unique:true,
        validate: [validator.isEmail, 'Please enter valid email address']
    },
    password:{
        type:String,
        required:[true,'Please enter your pasword'],
    }
})

// userSchema.pre('save', async ()=>{
//     // if(!this.isModified('password')){
//     //     next();
//     // }
//     this.password  = await bcrypt.hash(this.password, 10)
// })

userSchema.methods.isValidPassword = async function(enteredPassword){
    return  bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model("User", userSchema);
module.exports = User;