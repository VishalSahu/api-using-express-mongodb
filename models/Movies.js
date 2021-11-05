const mongoose = require('mongoose');
const movieSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    director:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Movies',movieSchema);