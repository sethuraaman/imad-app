var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

function createTamplate (data){`
    <html> 
        <head>
            <title>
                Article one | sethu18
            </title>
        <meta name="viewport" content="width=device-width, intial-scale=1">
        <link href="/ui/style.css" rel="stylesheet">
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">HOME</a>
                </div>
                <hr/>
                <h3> ARTICLE ONE</h3>
                <DIV>
                    AUG 05 2017
                </DIV>
                <DIV>
                    <P>THIS IS FIRST ARTICLE PAGE, THIS IS FIRST ARTICLE PAGE, THIS IS FIRST ARTICLE PAGE, THIS IS FIRST ARTICLE PAGE, THIS IS FIRST ARTICLE PAGE, THIS IS FIRST ARTICLE PAGE, THIS IS FIRST ARTICLE PAGE, THIS IS FIRST ARTICLE PAGE, THIS IS FIRST ARTICLE PAGE, THIS IS FIRST ARTICLE PAGE.
                    </P>
                </DIV>
            </div>
        </body>
    </html>
    `
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res){
   // var articleName= req.params.articleName
    res.send(createtamplate(article-one));
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
