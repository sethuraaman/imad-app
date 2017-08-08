var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone = {
      title: 'Article One || Sethuraaman',
      date: '05 aug 2017',
      head: 'Article One',
      content: `
	<p>
	<h1> this is my own first app designing learnt from IMAD
	</h1>
	</p>`

};

function createTemplate (data) {
   var title = data.title;
   var date = data.date;
   var head = data.head;
   var content = data.content;
   
   var htmlTemplate =`
      <html>
	 <head>
	    <title>
	       <h2>
	       ${title}
	       </h2>
	    </title>
	    <meta Name='viewport' content='width=device-width, 

intial-scale=1'>
	    <link href='/ui/stle.css' rel='stylsheet'/>
	 </head>
	 <body>
	    <div class='container'>
	       <div>
		  <a href='/'>HOME</a>
	       </div>
	       <hr/>
	       <h3>
		  ${heading}
	       </h3>
	       <div>
		  ${date}
	       </div>
	       <div>
		  ${content}
	       </div>
	    </div>
	 </body>
      </html>  
   `;
   return htmlTemplate;
}


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleone', function(req, res) {
    res.send(createTemplate(articleone));
});

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

