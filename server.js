var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title: 'Article One by Sethuraaman',
        heading: 'ARTICLE ONE',
        date: '05 AUG 2017;1700',
        content: `
        <p>
            this is my first web which i was tring it my own
        </p>
        `,
    },
    'article-Two': {
        title: 'Article Two by Sethuraaman',
        heading: 'ARTICLE TWO',
        date: '05 AUG 2017;1800',
        content: `
            <p
                Iam Trying my Best to Do It
            </p>
            `
    },
    'article-Three': {
        title: ' Article Three by Sethuraaman',
        heading: 'ARTICLE THREE',
        date: '05 AUG 2017;1900',
        content: `
        <p>
            It Might Be The Correct One
        </p>
            `,
    },
    
};

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
     var htmlTemplate = `
    <html>
        <head>
            <title>
                <h1>
                ${title}
                </h1>
            </title>
            <meta name='veiwport' content= 'width=device-width' intial-scale=1>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <a href="/"><H1>HOME</H1></a>
            </div>
            <hr/>
            <div>
                <h3>
                ${heading}
                </h3>
            </div>
            <div>
                ${date}
            </div>
            <div>
                <h2>
                ${content}
                </h2>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;  
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req,res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
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
