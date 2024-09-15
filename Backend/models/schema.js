const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const detailsSchema = Schema({
    name:{
        type:String,
        required:[true,'Please enter your name']
    },
    email:{
        type:String,
        required:[true,'Please enter your email']
    },
    mobileNo:{
        type:Number,
        required:[true,'Please enter your mobile number'],
        min:10
    },
    designation:{
        type:String,
        required:true,
        enum:{
            values:[
                'HR',
                'Manager',
                'Sales'
            ]
        }
    },
    gender:{
        type: String,
        required: true,
        enum:{
            values:[
                'Male',
                'Female'
            ]
        }
    },
    course:{
        type:String,
        required:true,
        enum:{
            values:[
                'MCA',
                'BCA',
                'BSC'
            ]
        }
    },
    image:{
        image:[]
    }

});

const Details = mongoose.model("Details", detailsSchema);
module.exports = Details;

