//<img src="https://s-media-cache-ak0.pinimg.com/736x/55/5d/a6/555da6e79a7951607bb351669f45b54d.jpg
//" id="myImage"></img>


$(document).ready(function() {
    var img = $("<img>");
    img.attr('src', 'http://bf4gp.localhostr.de/Battlefield%204/soldier/missions-soldier-1.png');
    img.css('width', '100px');
    $("body").append(img);



    $("body").click(createBubble);
    $("body").mousemove(gunMove);

});

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
};

function gunMove(ev) {
    console.log(ev);
    $('#Gun').css('top', ev.pageY)
    $('#Gun').css('left', ev.pageX)
};
