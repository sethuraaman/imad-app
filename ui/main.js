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
var nameinput = document.getElemntById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onClick = function() {
    
    var names = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for (var i=0; i< names.length; i++){
        list += '<li>'+names[i]+'<li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML =list;
};