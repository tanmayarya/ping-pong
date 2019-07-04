var bar1 = document.getElementById('one');
var bar2 = document.getElementById('two');
var ball = document.getElementById('ball');

document.body.addEventListener('keydown',function(event){
    console.log(event);

    var maxHeight = document.body.clientHeight;
    var maxWidth = document.body.clientWidth;

    var b1top = parseFloat(bar1.style.top.slice(0,-2));
    var b1bottom = b1top + 150;

    var b2top = parseFloat(bar2.style.top.slice(0,-2));
    var b2bottom = b2top + 150;

    var oldTop = parseFloat(ball.style.top.slice(0,-2));
    var oldLeft = parseFloat(ball.style.left.slice(0,-2));
    var oldRight = oldLeft + 100;
    var oldBottom = oldTop + 100;

    if(event.key == 'ArrowDown' && b2bottom <= maxHeight){

        bar2.style.top = (parseFloat(bar2.style.top.slice(0,-2)) + 100 ) + 'px';

    }


    if(event.key == 'ArrowUp' && b2top >= 0){

        bar2.style.top = (parseFloat(bar2.style.top.slice(0,-2)) - 100 ) + 'px';

    }
    

    if(event.key == 's' && b1bottom <= maxHeight){

        bar1.style.top = (parseFloat(bar1.style.top.slice(0,-2)) + 100 ) + 'px';

    }


    if(event.key == 'w' && b1top >= 0){

        bar1.style.top = (parseFloat(bar1.style.top.slice(0,-2)) - 100 ) + 'px';

    }
    

});


var xd =true;
var yd =true;

var move = function(){

    var maxHeight = document.body.clientHeight;
    var maxWidth = document.body.clientWidth;

    var b1top = parseFloat(bar1.style.top.slice(0,-2));
    var b1bottom = b1top + 150;

    var b2top = parseFloat(bar2.style.top.slice(0,-2));
    var b2bottom = b2top + 150;

    var oldTop = parseFloat(ball.style.top.slice(0,-2));
    var oldLeft = parseFloat(ball.style.left.slice(0,-2));
    var oldRight = oldLeft + 100;
    var oldBottom = oldTop + 100;


    if ((oldLeft == 28 && b1top <= oldBottom && b1bottom >= oldTop )|| (oldRight== maxWidth - 28 && b2top <= oldBottom && b2bottom >= oldTop)) {
        xd= !xd;
    }

    if (oldTop == 0 || oldBottom==maxHeight) {
        yd= !yd;
    }

    

    if (xd) {
        var newLeft = oldLeft + 2 ;
    } else{
        var newLeft = oldLeft - 2 ;
    }


    if (yd) {
        var newTop = oldTop + 1; ;
    } else{
        var newTop = oldTop - 1; ;
    }

    ball.style.left = newLeft + 'px';
    ball.style.top = newTop + 'px';
}



var number = setInterval(move, 1);