console.log('Loaded!');

var element = document.getElementById("main text");

element.innerHTML = 'M A N I';

var img = document.getElementById('madi');
   var marginRight = 0;
   function moveRight (){
        marginLeft=marginLeft + 10;
        image.style.marginLeft= marginLeft + 'px';
   }
   img.onclick = function () {
       var interval = setInterval(moveRight,100);
   };