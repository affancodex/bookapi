const mongoose= require('mongoose');

//connect 
mongoose.connect('mongodb://localhost/Booky');
//
mongoose.connection.once('open',function(){
    console.log('connection has to be made ')
;}).on('error',function(error) {
    console.log("error is ",error)
});












