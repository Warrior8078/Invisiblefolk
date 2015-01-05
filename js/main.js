jQuery(function( $ ){

	$('[data-spy="scroll"]').resize(function () {
	  var $spy = $(this).scrollspy('refresh')
	})

	$('.top-nav').localScroll({
	duration:500,
	hash:true,
	offset: -50
	});
});

$(document).ready(function backgroundSize() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height() - 50;
	var aspectRatio = 3861 / 2574;
	var windowAspect = windowWidth / windowHeight;
	var picWidth, picHeight;
	if (windowAspect > aspectRatio) {
	    picHeight = windowWidth * 3861 / 2574;
	    $("#team .main-bg").css({
	        height: picHeight,
	        width: windowWidth,
	        "margin-left": "0",
	        "margin-top": -(picHeight - windowHeight) / 2
	    })
	} else {
	    picWidth = windowHeight * 3861 / 2574;
	    $("#team .main-bg").css({
	        height: windowHeight,
	        width: picWidth,
	        "margin-top": "0",
	        "margin-left": -((picWidth - windowWidth) / 2)
	    })
	}
});

$(window).resize(function backgroundSize() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height() - 50;
	var aspectRatio = 3861 / 2574;
	var windowAspect = windowWidth / windowHeight;
	var picWidth, picHeight;
	if (windowAspect > aspectRatio) {
	    picHeight = windowWidth * 3861 / 2574;
	    $("#team .main-bg").css({
	        height: picHeight,
	        width: windowWidth,
	        "margin-left": "0",
	        "margin-top": -(picHeight - windowHeight) / 2
	    })
	} else {
	    picWidth = windowHeight * 3861 / 2574;
	    $("#team .main-bg").css({
	        height: windowHeight,
	        width: picWidth,
	        "margin-top": "0",
	        "margin-left": -((picWidth - windowWidth) / 2)
	    })
	}
});