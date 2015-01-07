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

var picHeight = 1662;
var picWidth = 2500;
var aspectRatio = picWidth / picHeight;
var divWidth, divHeight;

var backgroundSize = function() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height() - 50;
	var windowAspect = windowWidth / windowHeight;
	if (windowAspect > aspectRatio) {
	    divHeight = windowWidth * picHeight / picWidth;
	    $("#team .main-bg").css({
	        height: divHeight,
	        width: windowWidth,
	        "margin-left": "0",
	        "margin-top": -(divHeight - windowHeight) / 2
	    })
	} else {
	    divWidth = windowHeight * picWidth / picHeight;
	    $("#team .main-bg").css({
	        height: windowHeight,
	        width: divWidth,
	        "margin-top": "0",
	        "margin-left": -((divWidth - windowWidth) / 2)
	    })
	}
}

$(document).ready(backgroundSize);

$(window).resize(backgroundSize);