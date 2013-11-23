function boot() {
    $('#txt a').click(function () {
        $('#txt a').removeClass('selected');
        $(this).addClass('selected');
        hide();
    });
    $('#webframe').load(function () {
        show();
    });
}

function hide() {
    $('#container').removeClass('show').addClass('hide');
    $('#website').removeClass('show').addClass('hide');
}

function show() {
    if ($('#container').hasClass('hide')) {
        $('#container').removeClass('hide').addClass('show');
        $('#website').removeClass('hide').addClass('show');
    }
}

