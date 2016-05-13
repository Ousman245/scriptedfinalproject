//<img src="https://s-media-cache-ak0.pinimg.com/736x/55/5d/a6/555da6e79a7951607bb351669f45b54d.jpg
//" id="myImage"></img>



var soldierPosition = {
    x: 0,
    y: 0
};

$(document).ready(function() {

    var img = $("<img>").attr('id', "soldier");
    img.attr('src', 'http://bf4gp.localhostr.de/Battlefield%204/soldier/missions-soldier-1.png');
    img.css('width', '100px');
    img.css('position', 'absolute');
    $("body").append(img);

    $("body").click(createBubble);
    $("body").mousemove(gunMove);

    
});

function distance(point1, point2) {
    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
}

function createBubble(ev) {

    var img2 = $("<img>");
    img2.attr('src', 'http://www.clipartbest.com/cliparts/yTk/gR8/yTkgR8r8c.png');
    img2.css('width', '100px');
    var gun = $('#Gun').offset();
    img2.css('left', gun.left - 20);
    img2.css('top', gun.top + 20);
    img2.addClass('bubble')

    $("body").append(img2);

    img2.animate({
        top: ev.pageY,
        left: ev.pageX,
        width: 0
    }, 1000);

    var mousePoint = {
        x: ev.pageX,
        y: ev.pageY
    };
    var dist = distance(soldierPosition, mousePoint);

    if (dist < 300) {
        $("#soldier").animate({
            width: 0,
            height: 0
        }, 900);
        newSoldier();
    }
};



function gunMove(ev) {
    //console.log(ev);
    $('#Gun').css('top', ev.pageY)
    $('#Gun').css('left', ev.pageX)
};
function newSoldier(){
    var randomTop= Math.round(Math.random()*100) + 1;
    var randomLeft= Math.round(Math.random()*100) + 1;
    
    soldierPosition.x = randomLeft;
    soldierPosition.y = randomTop;

    $("#soldier").css('top', randomTop + '%');
    $("#soldier").css('left', randomLeft + '%' );
     $("#soldier").animate({
            width: 100,
            height: 200
        }, 100);
    
}
SC.initialize({
  client_id: '90f2a1fb287219fc9350fe313a7dfced'
});


SC.stream('/tracks/263566457').then(function(player){
  player.play();
});

