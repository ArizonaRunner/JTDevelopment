var express       = require('express'),
    app           = express(),
    bodyParser    = require('body-parser');

app.use(express.static('assets'));

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('home');
    });


app.listen(3000, function(){
    console.log('Server running on port 3000.');
});

