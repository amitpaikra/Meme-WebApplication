const mongoose = require("mongoose") ;

const memeSchema = new mongoose.Schema({
    
    name : {
        type : String,  
        required : true
    },
    url : {
        type : String ,
        required : true
    },
    caption : {
        type : String,
        required : true
    }

}) ;

const Meme = new mongoose.model('Meme' , memeSchema) ;

module.exports = Meme ;