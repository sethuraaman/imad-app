var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Articles = {
    'article-one': { 
        title: 'Article One Imad @ Sethuraaman',
        heading: 'Article One',
        date: '05 aug 2017;15.00',
        content:`
            <P>
                THIS IS FIRST ARTICLE PAGE, THIS IS FIRST ARTICLE PAGE, THIS IS FIRST ARTICLE PAGE, THIS IS FIRST ARTICLE PAGE
            </P>`
        },
    'article-two': {
        title: 'Article One Iamd @ sethuraaman',
        heading: 'article Two',
        date: '05.08.2017;16.00',
        content:`
            <p>
                this the my first code work
            </p>`
        },
    'article-three': {
        title: 'Article One Imad @ sethuraaman',
        heading: 'Article three',
        date: '05.08.2017;17.00',
        content:`
            <p>
                this is my first html programming
            </p>`
        },
};

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;

    var htmlTamplate = `
    <html>
        <head>
            <title>
                ${title}
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
                <h3>
                    ${heading} 
                </h3>
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
    return htmlTamplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename', function (req, res) {
    var articleName= req.params.articleName;
  res.send(createTamplate(Articles[articleName]));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
