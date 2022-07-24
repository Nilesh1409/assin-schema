const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name : {type : String, require : true},
    email : {type : String, require : true},
    socalProfile : {
        Linkedin  : String,
        Facebook : String,
        Twitter : String,
        Github : String
    },
    password : {type : String, require : false}
}) 

const user = mongoose.model('user',userSchema);

module.exports = user;