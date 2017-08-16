function exec(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() 
    {
          if (request.readyState === XMLHttpRequest.DONE) 
          {
              //Take Some Action
              if (request.status === 200) 
                { 
                    var counter = request.responseText; 
                    var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
                } 
          } 
    }; 
    request.open("GET", "http://sethu18rr.imad.hasura-app.io/counter", true);
    request.send(); 
    console.log('EXECUTED');
}
var submit = document.getElementById('submit_btn');
submit.onClick= function(){
var request = new XMLHttpRequest();
    request.onreadystatechange = function() 
    {
          if (request.readyState === XMLHttpRequest.DONE) 
          {
              //Take Some Action
              if (request.status === 200) 
                { 
                    var names = request.responseText; 
                    names=JSON.parse(names);
                    var list = '';
                    for (var i =0; i < names.length; i++) {
                        list += '<li>' +name[i] + '</li>';
                    }
                var ul = document.getElementById('namelist')    ;
                ul.innerHTML = list;
                } 
          } 
    }; 
    var nameInput=document.getElementById('name');
    var name = nameInput.value;
    request.open("GET", "http://sethu18rr.imad.hasura-app.io/submit-name?name=" + name, true);
    console.code('executed');
    request.send(null); 
};