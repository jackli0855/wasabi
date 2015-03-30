$(document).ready(function() {
	
	$('.section')
		.waypoint(function(direction) {
			if (direction === 'down') {
				$('.section').removeClass('current');
				$(this).addClass('current');
			}
		}, { offset: '75' })
		.waypoint(function(direction) {
			if (direction === 'up') {
				$('.section').removeClass('current');
				$(this).addClass('current');
			}
		}, { offset: '-75' });
	
	$('#next').click(function () {
		// if next section is not the footer
		if($('.current').next().attr('id') != "#AllFooterArea") {
			$('html, body').stop().animate({
				scrollTop: $('.current').next().offset().top
			}, 500);
		// if next section is the footer
		} else {
			$('html, body').stop().animate({
				 scrollTop: $('#Header').offset().top
			}, 500);
		}
		return false;
	});
	
	$('#prev').click(function () {
		// if current section is not the home section
		if($('.current').prev().length > 0 && $(window).scrollTop()+$(window).height()<$(document).height()) {
			$('html, body').stop().animate({
				 scrollTop: $('.current').prev().offset().top
			}, 500);
		// if current section is the home section
		} else {
			$('html, body').stop().animate({
				 scrollTop: $('#Header').offset().top
			}, 500);
		}
		return false;
	});
	

	
});


