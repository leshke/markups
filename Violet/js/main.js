$(document).ready(function(){
    $(".scroll-down").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });

    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        }

        else {
            $('#toTop').fadeOut();
        }
    });

    $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
    });
});