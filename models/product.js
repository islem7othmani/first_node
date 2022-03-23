const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    imagepath:{
        type : String ,
        required : true
    },
    productName :{
        type :String ,
        required : true 
    },
    information :{
        required : true,
        type :{
            caracterName : String ,
            genre : String ,
            prodType : String ,

        }
    },
    price :{
        type : Number,
        required : true
    },
});

module.exports = mongoose.model ('product' , productSchema);