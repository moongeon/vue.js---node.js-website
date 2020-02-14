
/*---------------------------임폴트-------------------------------------*/

var express = require('express');
var router = express.Router();
var User = require('../libs/model');

/*---------------------------------------------------------------------*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//sign
router.post('/login', async function(req, res, next){
  console.log(req.body);
    User.findOne({userId:req.body.id ,userPw : req.body.password}, function(err, result){
    //구문에러
    if(err) return res.status(500).json({error: err});
    // User가 없으면 error
    if(!result) return res.status(404).json({error: 'user not found'});
    const data = {
      id : result.userId,
      nickname : result.userName,
      password : result.userPw,
  };
  console.log('data',result);
  return res.status(200).json({
    data: {        
        userData: data,
    },
});
    });
});
 
 

 

module.exports = router;
