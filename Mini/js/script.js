$(function(){

	$('.menu-toggle').click(function(){
		$(this).toggleClass('active')
		$('.navbar').slideToggle(300);
	})

	$('.tabs a').click(function(){
		$(this).parents('.tab-container').find('.tab-content').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});
 

	$('.banner-slider, .comment-slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		responsive: [
		{
			breakpoint: 767,
			settings: {
				dots: false,
			}
		}
		]
		});

	$('.portfolio-slider').slick({
		dots: true,
		appendArrows: ('.portfolio-slider_buttons'),
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
		responsive: [
		{
			breakpoint: 767,
			settings: {
				dots: false,
			}
		}
		]
	})
});
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

});