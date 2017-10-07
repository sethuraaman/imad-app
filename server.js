var express = require('express');
var morgan = require('morgan');
var path = require('path');
var http = require('http');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var config = {
    user: 'sethu18rr',
    database: 'sethu18rr',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: 'db-sethu18rr-22215'
};
var app = express();
app.use(morgan('combined'));

function createTemplate (data) {
   var title = data.title;
   var date = data.date;
   var heading = data.heading;
   var content = data.content;
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
                    <a href="/">Home</a>
                    ${link1}
                    ${link2}
                </div>
                <hr/>
                <h3> ${heading}</h3>
                <DIV>
                    ${date.toDateString()}
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

function hash(input, salt){
   var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
   return ["pbkdf2", "10000",salt ,hashed.toString('hex')];
}

app.get('/hash/:input', function(req, res){
   var hashedString = hash(req.params.input, 'this-is-some-randam-string');
   res.send(hashedString);
});

app.get('/create-user', function (req, res){
   var salt = crypto.getRandomBytes(128).toString('hex');
   vardbString = hash(password, salt);
   pool.query('INSERT INTO "user" (username, password) VALUES($1, $2)', [username, dbString], function (err, result){
      if(err){
	     res.status(500).send(err.toString());
      } else {
	     res.send('user successfully created: ' + username);
      }
   });
});

var pool = new Pool(config);
app.get('/test-db', function(req, res){
   pool.query('SELECT * FROM test', function (err, result){
      if(err){
	     res.status(500).send(err.toString());
      } else {
	     res.send(JSON.stringify(result));
      }
   });
});

var counter=0;
app.get('/counter',function(resq,res){
   counter = counter+1;
   res.send(counter.toString());
});

var names = [];
app.get('/submit-name',function(req,res){
   var name = req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
});

app.get('/:articleName', function(req, res) {
    pool.query("SELECT * FROM article WHERE title = $1", [req.params.articleName], function(err, result){
        if (err){
	        res.status(500).send(err.toString());
	    } else {
	        if (result.rows.length === 0) {
		        res.status(404).send('Article not found');
	        } else{
   	            var articleData = result.rows[0];
	        	res.send(createTemplate(articleData));
	        }
	    }
    });
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