
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
          if (request.readyState === XMLHttpRequest.DONE) {
              //Take Some Action
              if (request.status === 200) { 
                    alert('Logged in successfully');
                    } else if (request.status === 403){
                        alert ('username/password is incorrect');
                    }else if (request.status === 500) {
                        alert('something went wrong in the server');
                    }
                } 
          }; 
    }; 
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value; 
    request.open("POST", "http://sethu18rr.imad.hasura-app.io/login", true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username: username, password: password})); 
    //make a request to the server
};