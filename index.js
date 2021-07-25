/* App Configuration */
var express = require('express');
var methodOverride = require('method-override');
var app = express();

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

app.listen(process.env.PORT || 3000, function(){
    console.log('Server has been started');
})