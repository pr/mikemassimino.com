$('.speaker-videos').slick({
	accessibility: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight: true,
	infinite: true,
	fade: true,
	cssEase: 'linear',
	dots: true
});


$('.speaker-reviews').slick({

	centerMode: true,
	centerPadding: '30px',
	slidesToShow: 3,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: false,

	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		}
	]
});

