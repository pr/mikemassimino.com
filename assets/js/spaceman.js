$(document).ready(function(){

	$('.spaceman-reviews').slick({

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
	//
	//
	// $('.spaceman-covers').slick({
	// 	accessibility: true,
	// 	speed: 500,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	adaptiveHeight: true,
	// 	infinite: true,
	// 	fade: true,
	// 	cssEase: 'linear',
	// 	arrows: false
	// });

});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight){
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}