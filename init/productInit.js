const product = require('../models/product');

const mongoose = require('mongoose');




mongoose.connect('mongodb://localhost/shopping',{useNewUrlParser:true},(error) =>{
  if(error){
    console.log('error')
  }else{
  console.log('database connected');}
})



const products = [
    new product ({

    imagepath : '/images/155.png' ,
    productName : 'Eren Jaeger' ,
    information : {
        caracterName : 'eren jaeger' ,
            genre : 'aot' ,
            prodType : 'anime' ,
    },
    price : 220 ,
}),
new product({

    imagepath : '/images/mikasa.png' ,
    productName : 'mikasa ackerman' ,
    information : {
        caracterName : 'mikasa ackerman' ,
            genre : 'aot' ,
            prodType : 'anime' ,
    },
    price : 220 ,
}) ,
new product({

    imagepath : '/images/armin.png' ,
    productName : 'armin alert' ,
    information : {
        caracterName : 'armin alert' ,
            genre : 'aot' ,
            prodType : 'anime' ,
    },
    price : 220 ,
}),
new product({

    imagepath : '/images/jean.png' ,
    productName : 'jean kristein' ,
    information : {
        caracterName : 'jean kristein' ,
            genre : 'aot' ,
            prodType : 'anime' ,
    },
    price : 220 ,
}),
new product({

    imagepath : '/images/levi.png' ,
    productName : 'levi' ,
    information : {
        caracterName : 'levi' ,
            genre : 'aot' ,
            prodType : 'anime' ,
    },
    price : 220 ,
}),
new product({

    imagepath : '/images/sacha.png' ,
    productName : 'sacha braus' ,
    information : {
        caracterName : 'sacha braus' ,
            genre : 'aot' ,
            prodType : 'anime' ,
    },
    price : 220 ,
}),
]
var done =0;
for( var i=0; i<products.length;i++){
        products[i].save((error ,doc)=>{
            if(error){
                console.log(error)
            } console.log(doc)
                done ++ 
                if(done === products.length){
                    mongoose.disconnect();
                }
            
        })
}

