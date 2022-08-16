$(document).ready(function() {
	$('.benefits__tabs-item').click(function(e){
		e.preventDefault();
		$('.benefits__tabs-item').removeClass('active');
		$('.benefits__item').removeClass('active');
		$(this).addClass('active');
		$($(this).attr('href')).addClass('active')
	});
	$('.services__tabs-item').click(function(e){
		e.preventDefault();
		
		$(this).toggleClass('active');
		$($(this).attr('href')).toggleClass('active')
	});
});