var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles= {
    
    'article-one': (__dirname, 'ui', 'aricle-one.html'),
    'article-two': (__dirname, 'ui', 'aricle-two.html'),
    'article-three': (__dirname, 'ui', 'aricle-three.html')
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename', function (req, res){
    var articlename= req.params.articlename
    res.sendFile(path.join(articles[articlename]) );
});

app.get('/article-two', function (req, res){
    res.sendFile(path.join(__dirname,'ui', 'article-two.html'));
});

app.get('/article-Three', function (req, res){
    res.send('article Three will be served')
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won"t run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
