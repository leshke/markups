$( document ).ready(function(){
	$('.header-slider').slick({
		dots: true,
		appendArrows: '.header-slider-arrows',
		appendDots: '.slider-dots',
		prevArrow: '.prev',
		nextArrow: '.next',
		autoplay: true
	});


	window.onscroll = function() {myFunction()};
	var header = document.getElementById("navbar");
	var sticky = header.offsetTop;

	function myFunction() {
		if (window.pageYOffset > sticky) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	};


	$("#navbar").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});

	$(function() {
		var selectedClass = "";
		$(".filter").click(function(){ 
			selectedClass = $(this).attr("data-rel"); 
			$(".offered-wrapper").fadeTo(100, 0.1);
			$(".offered-item").not("."+selectedClass).fadeOut().removeClass('scale-anm');

			setTimeout(function() {
				$("."+selectedClass).fadeIn().addClass('scale-anm');
				$(".offered-wrapper").fadeTo(300, 1);
			}, 300); 	
		});
	});


	$('.btn.filter').on("click", function(){
		$('.active').removeClass('active');
		$(this).addClass('active');       
	});


	$('.event-slider').slick({
		appendArrows: '.event-slider-arrows',
		prevArrow: '.prev.event-arrow',
		nextArrow: '.next.event-arrow',
	});


	$('.staff-slider').slick({
		appendArrows: '.staff-slider-arrows',
		prevArrow: '.prev.staff-arrow',
		nextArrow: '.next.staff-arrow',
		slidesToShow: 4,
		responsive: [{

			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}

		}, {

			breakpoint: 480,
			settings: {
				slidesToShow: 2
			}
		}]
	});


	$('.happy-clients-slider').slick({
		appendArrows: '.happy-clients-arrows',
		prevArrow: '.prev.happy-clients-arrow',
		nextArrow: '.next.happy-clients-arrow',
		slidesToShow: 2,
		responsive: [{

			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
			}
		}]
	});

});
