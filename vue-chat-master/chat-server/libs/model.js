var mongoose = require('./db');

var userSchema = new mongoose.Schema(
{

   userId:
   {
     type : String,
     require : true,
     unique : true
   },
   userName:
   {
     type : String,
     require : true
   },
   userPw:
   {
     type : String,
     require : true
   },
   createDate:
   {
     type : Date,
     default : Date.now
   }

}
);

module.exports = mongoose.model('user', userSchema);