//include express
var express = require('express');
//create an express application
var app = express();

var path = require('path');

// app.use('/', express.static('assets'));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get('/',function(req, res, next){
  res.sendFile(path.join(__dirname+'/main.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(8080, function () {
      console.log('Example app listening on port 8080!');
});
