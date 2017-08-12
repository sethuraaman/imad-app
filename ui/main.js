var button = document.getElementById('counter');

button.onclictk = function (){
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.Done){
            if request status === 200;){
                var counter = document.getElementById('counter');
                span.innerHTML = counter.toString();
            }
            
        }
    };
    request.open('GET', 'http://sethu18rr.imad.hasura-app.io/counter', true);
    request.send(null);
 };