function exec(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
          if (request.readyState === XMLHttpRequest.DONE) {
              //Take Some Action
              if (request.status === 200) { 
                    var counter = request.responseText; 
                    var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
                } 
          } 
    }; 
    request.open("GET", "http://sethu18rr.imad.hasura-app.io/counter", true);
    request.send(); 
    console.log('finished');
}

var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
          if (request.readyState === XMLHttpRequest.DONE) {
              //Take Some Action
              if (request.status === 200) { 
                    //capture a list of names and render it as a list
                    var names = request.responseText;
                    names = JSON.parse(names);
                    var list = '';
                    for(var i=0;i< names.length; i++){
                        list +='<li>' + names[i] + '</li>';
                        }
                    var ul = document.getElementById('namelist');
                    ul.innerHTML = list;
                } 
          } 
    }; 
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open("GET", "http://sethu18rr.imad.hasura-app.io/submit-name?name="+ name, true);
    request.send(null); 
    //make a request to the server
};
    console.log ('executing');