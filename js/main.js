//jQuery Codes

$(document).ready(function() {
	// Custom jQuery code where the element's content changes when the button is clicked
	$('.next').click(function(){
		$('.yes').text('Then what are you waiting for?! Contact Us.');
	});
	// This plugin allows different phrases to change in between a string
	$("#js-rotating").Morphext({
	    animation: "bounceIn",
	    separator: ",",
	    speed: 2000,
	    complete: function () {
	    }
	});
