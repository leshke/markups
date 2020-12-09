	
$(function(){


	(function($) {
		$('.filter-list__item button').on('click',function() {
		if ($(this).hasClass('grid')) {
		$('.product-content').removeClass('list').addClass('grid');
		$('.grid').toggleClass('active');
		$('.list').removeClass('active');
		}
		else if($(this).hasClass('list')) {
		$('.product-content').removeClass('grid').addClass('list');
		$('.list').toggleClass('active');
		$('.grid').removeClass('active');
		}
		});

	})(jQuery);



	$('.btn-toggle').click(function(){
		$(this).toggleClass('active');
		$('.navbar-dropdown--tablet').toggleClass('open');
	});



	$('.navbar-dropdown__title').click(function(){
		$(this).toggleClass('drop-open');
	});



	$('.filter-btn').click(function(){
		$(this).toggleClass('active');
		$('.product-sidebar').toggleClass('open');
	});



	$('.accordion__head').on('click', function(){
		var el = $(this);
		el.next('.accordion__body').slideToggle();
		el.toggleClass('open');
		return false
	});


	$('.styler').styler();


	$( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 1000,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ]);
        $( "#amount2" ).val( "$" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount2" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ) );

});

