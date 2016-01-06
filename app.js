var express = require('espress');

var app = express();

app.get('/',function(req,res){
	res.render('index.ejs',{title:"express app 1"});
});

app.listen(3000);