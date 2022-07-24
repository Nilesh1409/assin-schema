const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    Category : String,
})


const category = mongoose.model('category',categorySchema);

module.exports = category;