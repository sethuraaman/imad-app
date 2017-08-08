var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    articleone: {
       title: 'Article One || Sethuraaman',
       date: '05 aug 2017',
       heading: 'Article One',
       content: `
	   <p>
	   <h1> This is my own first app designing learnt from IMAD
	   </h1>
	   </p>`
    },
    
    articletwo: {
        title: 'Aritcle Two || Sethuraaman',
        date: '06 Aug 2017',
        heading: 'Article Two',
        Content: `
        <p>
        <h1> this is my trial to reduce the coding </h1>
        </p>`
    }
};


function createTemplate (data) {
   var title = data.title;
   var date = data.date;
   var heading = data.heading;
   var content = data.content;
   
   var htmlTemplate =
      `
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
                <h3> ${heading}</h3>
                <DIV>
                    ${date}
                </DIV>
                <DIV>
                    ${content}
                </DIV>
            </div>
        </body>
    </html>
   `;
   return htmlTemplate;
}


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/Article-three', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/:articleName', function(req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

//app.get('/Article-two', function (req, res) {
//  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
//});

app.get('/ui/style.css', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('ui/madi.png', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
    app.listen(port, function () {
        console.log(`IMAD course app listening on port ${port}!`);
});

