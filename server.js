var express = require('express');
var app = express();
var router = require('express').Router();
var path = require('path');

//static files
app.use(express.static('public'));

router.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '../public/index.html'));
})

var server = app.listen(process.env.PORT || 3000, function() {
  var port =server.address().port;
console.log('Listening on port', port);
});

module.exports = router;
