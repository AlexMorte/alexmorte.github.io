//Этот файл для слайдера
$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		speed: 1000,
		slidesToShow: 1,
		infinite: false,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: false, // Чтобы нельзя было движением мыши перетаскивать слайды
		swipe: true, // То же самое, только на телефонах и планшетах
		touchThreshold: 10,
		touchMove: true,
		waitForAnimate: false,
		centerMode: true,
		variableWidth: true,
		slidesPerRow: 1,
		responsive: [
			{
				breakpoint: 860,
				settings: {
					arrows: false,
				}
			}
		]
	});
	$('.slidersmall').slick({
		arrows: true,
		dots: false,
		speed: 300,
		slidesToShow: 7,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: false, // Чтобы нельзя было движением мыши перетаскивать слайды
		swipe: true, // То же самое, только на телефонах и планшетах
		touchThreshold: 10,
		touchMove: true,
		waitForAnimate: true,
		centerMode: true,
		variableWidth: true,
		slidesPerRow: 1,
		responsive: [
			{
				breakpoint: 860,
				settings: {
					slidesToShow: 2,
					arrows: false,
					waitForAnimate: false,
					touchThreshold: 5,
				}
			}, {
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			}
		]
	});
});
