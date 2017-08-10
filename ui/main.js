console.log('Loaded!');

var element = document.getElementById("main text");

element.innerHTML = 'M A N I';

var img = document.getElementById('madi');
   var marginRight = 0;
   function moveright (){
        marginleft=marginleft + 10;
        image.style.marginleft= marginleft + 'px';
   }
   img.onclick = function () {
       var interval = setInterval(moveright,100);
   };