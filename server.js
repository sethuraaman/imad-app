var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

var articles = {
    articleone: {
	herf:'Home',
	link1:'<a href="/articletwo">Article-two</a>',
	link2:'<a href="/articlethree">Article-three</a>',
       title: 'Article One || Sethuraaman',
       date: '05 aug 2017',
       heading: 'Article One',
       content: `
	   <p>
	   <h1> This is my own first app designing learnt from IMAD </h1>
	   </p>`
    },
    
    articletwo: {
	herf:'Home',
        link1:'<a href="/articleone">Article-one</a>',
	link2:'<a href="/articlethree">Article-three</a>',
       	title: 'Aritcle Two || Sethuraaman',
        date: '06 Aug 2017',
        heading: 'Article Two',
        content: `
          <p>
             <h1> this is my trial to reduce the coding </h1> 
            </p> `
    },
    articlethree: {
	herf:'Home',
        link1:'<a href="/articleone">Article-one</a>',
	link2:'<a href="/articletwo">Article-two</a>',
       title:'Article Three || Sethuraaman',
        date:'07 Aug 2017',
        heading:'Article Three',
        content:`
        <p>
        <h1> this is the confirmed page which i created with the help of IMAD </h1>
        </p>`
    }
};

function createTemplate (data) {
   var title = data.title;
   var date = data.date;
   var heading = data.heading;
   var content = data.content;
   var herf = data.herf;
   var link1 = data.link1;
   var link2 = data.link2;
   
   var htmlTemplate =
      `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="/ui/style.css" rel="stylesheet">
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">${herf}</a>
                    ${link1}
                    ${link2}
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


var counter=0;
app.get('/counter',function(resq,res){
   counter = counter+1;
   res.send(counter.toString());
});

var names = [];
app.get('/submit-name/:name',function(req,res){
   var name = req.params.name;
   names.push(name);
   res.send(JSON.stringify(names));
});

app.get('/:articleName', function(req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/favicon.ico', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'favicon.ico'));
});

app.get('/ui/main.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var port = 8080;
    app.listen(port, function () {
        console.log(`IMAD course app listening on port ${port}!`);
});