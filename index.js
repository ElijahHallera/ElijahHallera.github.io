/* App Configuration */
var express = require('express');
var methodOverride = require('method-override');

var app = express();
var port = process.env.PORT || 8080;

app.use(express.static('public'));
app.set('view engine', 'ejs');

/* Home Route */
app.get('/', function(req, res){
    res.render('Homepage');
});

app.get('/about', function(req, res){
    res.render('About');
});

app.get('/projects', function(req, res){
    res.render('Projects');
});

app.get('/contact', function(req, res){
    res.render('Contact');
});

/* Error Route*/
app.get('*', function(req, res){
   res.render('error'); 
});

app.listen(port, () => console.log(`Listening on port ${port}`));