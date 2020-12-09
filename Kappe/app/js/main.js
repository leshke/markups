$(document).ready(function() {
	$('#sidebarCollapse').on('click', function(){
		$('#sidebar').toggleClass('active');
	});

	$('#sidebarCollapse2').on('click', function(){
		$('#right-sidebar').toggleClass('active');
	});


    $('.nav-link').click(function() {
        $('.nav-link').removeClass('active')
        $(this).addClass('active')

    });

	$('.filter').click(function() {
        $('.filter').removeClass('active')
        $(this).addClass('active')

    });

    $('.content-image').magnificPopup({
  		delegate: 'a',
  		type: 'image',
  		gallery:{enabled:true},
  		mainClass: 'mfp-with-zoom', // this class is for CSS animation below

  zoom: {
    enabled: true,

    duration: 400,
    easing: 'ease-in-out',

    opener: function(openerElement) {
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }
  
	});

	$(function() {
		var selectedClass = "";
		$(".filter").click(function(){ 
			selectedClass = $(this).attr("data-rel"); 
			$(".gallery").fadeTo(400, .5);
			$(".col-xl-3").not("."+selectedClass).fadeOut().removeClass('scale-anm');
			$(".col-md-4").not("."+selectedClass).fadeOut().removeClass('scale-anm');
			$(".col-6").not("."+selectedClass).fadeOut().removeClass('scale-anm');

			setTimeout(function() {
				$("."+selectedClass).fadeIn().addClass('scale-anm');
				$(".gallery").fadeTo(600, 1);
			}, 600); 	
		});
	});

});

