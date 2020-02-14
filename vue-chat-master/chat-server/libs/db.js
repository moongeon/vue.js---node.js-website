
var mongoose = require('mongoose');
var key   = "mongodb+srv://master:XEBzNTPR5x1ICW61@cluster0-xbrc6.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(key,{useUnifiedTopology : true , useNewUrlParser : true , autoIndex : false});

mongoose.connection.on('open', () =>{
console.log('nongoDB connection')

});


mongoose.connection.on('error', err =>{
    console.log('nongoDB error')
    
    });




module.exports = mongoose; 