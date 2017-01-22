function boot() {
    $('#txt a').click(function () {
        $('#txt a').removeClass('selected');
        $(this).addClass('selected').css('background-position', '-500px 0');
        hide();
    });
    $('#webframe').load(function () {
        if(pb) {
            show();
        }
    });
}

var pb;

function hide() {
    $('#container, #website').removeClass('show').addClass('hide');
    clearInterval(pb);
    pb = setInterval('startbar()', 250);
}

function show() {
    $('#container, #website').removeClass('hide').addClass('show');
    stopbar();
}

function startbar() {
    if(parseFloat($('a.selected').css('background-position'))<-250) {
        $('a.selected').css({backgroundPosition: function( index, value ) {return parseFloat(value)+(Math.floor((Math.random()*10)+1));}});
    }
}

function stopbar() {
    clearInterval(pb);
    $('a.selected').css('background-position', '-50px 0');
}
