const mongoose = require('mongoose');

const LikeSchema = mongoose.Schema({
    User : {
        type : mongoose.Types.ObjectId,
        ref : 'user',
    },
    Title : {
        type : string,

    }, 
    Emoji : String,
}) 

const like = mongoose.model('like',LikeSchema);

module.exports = like;