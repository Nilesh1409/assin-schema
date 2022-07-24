const mongoose = require('mongoose');
const { object } = require('webidl-conversions');


const commentSchema = mongoose.Schema({
    Content : {String, require : true},
    Rating : Number,
    User : {
        type : mongoose.Types.ObjectId,
        ref : 'user'
    },
    Blog : {
        type : mongoose.Types.ObjectId,
        title : String,
    }

}) 

const comment = mongoose.model('comment',commentSchema);

module.exports = comment;