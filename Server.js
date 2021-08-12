var express = require('express');
var app = express();
var metadata = require('node-ec2-metadata');

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/images'));
// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});


 
metadata.getMetadataForInstance('instance-id')
.then(function(instanceId) {
    console.log("Instance ID: " + instanceId);
})
.fail(function(error) {
    console.log("Error: " + error);
});

app.listen(8080);
console.log('Server is listening on port 8080');