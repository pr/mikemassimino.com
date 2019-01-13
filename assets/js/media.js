$(document).ready(function(){

	$('.media-nav').slick({
		slidesToShow: 4,
		centerPadding: '60px',
		slidesToScroll: 1,
		asNavFor: '.media-videos',
		focusOnSelect: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.media-videos').slick({
		accessibility: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		infinite: true,
		fade: true,
		cssEase: 'linear',
		arrows: false
	});

	var showOnlyTelevisionAppearances = false;

	$('.showOnlyTelevisionAppearances').on('click', function(){
		if (showOnlyTelevisionAppearances === false) {
			$('.media-nav').slick('slickFilter','.Television');
			$('.media-videos').slick('slickFilter','.Television');
			$(this).text('Showing Only Television');
			showOnlyTelevisionAppearances = true;
		} else {
			$('.media-nav').slick('slickUnfilter');
			$('.media-videos').slick('slickUnfilter');
			$(this).text('Showing All Media');
			showOnlyTelevisionAppearances = false;
		}
	});


});
