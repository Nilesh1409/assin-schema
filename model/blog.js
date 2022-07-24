const mongoose = require('mongoose');
const user = require('./user');


const blogSchema = mongoose.Schema({
    title : {type : String, require : true},
    content : {ype : String, require : true},
    date : new Date(),
    user : {
        type : mongoose.Types.ObjectId,
        ref : 'user',
    }
    
}) 

const blog = mongoose.model('blog',blogSchema);

module.exports = blog;