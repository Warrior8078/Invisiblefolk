jQuery(function( $ ){

	$('[data-spy="scroll"]').resize(function () {
	  var $spy = $(this).scrollspy('refresh')
	})

	$('.top-nav').localScroll({
	duration:500,
	hash:true
	});
});
