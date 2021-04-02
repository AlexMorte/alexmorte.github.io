//Этот файл для бургер-меню
$(document).ready(function () {
	//navToggle
	let menu = $("#menu");
	let navToggle = $("#navToggle");

	navToggle.on("click", function (event) {
		event.preventDefault();

		menu.toggleClass("show");
	});
});