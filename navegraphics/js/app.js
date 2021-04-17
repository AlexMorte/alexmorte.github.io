// Анимация слайдера
var counter = 1;
setInterval(function () {
	document.getElementById('radio' + counter).checked = true;
	counter++;
	if (counter > 2) {
		counter = 1;
	}
}, 5000);

// Появление шапки при скроле
window.onscroll = function showHeader() {
	let header = document.querySelector('#header');

	if (window.pageYOffset > 300) {
		header.classList.add('header-fixed');
	} else {
		header.classList.remove('header-fixed');
	}
}

// Переключение классов иконки бургер-меню для изменения бургера на крестик при клике и наоборот
let burgerLink = document.querySelector('.burger__link');
let burgerIcon = document.querySelector('.burger__icon');

burgerLink.onclick = function () {
	burgerIcon.classList.toggle('burger-cross')
}

// Добавление и удаление класса для элемента "lightbox" при клике на "productImg", чтобы большое фото "lightbox" при клике на его превью плавно появлялось
let productImgFirst = document.querySelector('#productImgFirstJs');
let productImgSecond = document.querySelector('#productImgSecondJs');
let lightBox1 = document.querySelector('#lightbox1');
let lightBox2 = document.querySelector('#lightbox2');

productImgFirst.onclick = function () {
	lightBox1.classList.add('lightbox-smooth');
}
productImgSecond.onclick = function () {
	lightBox2.classList.add('lightbox-smooth');
}

lightBox1.onclick = function () {
	lightBox1.classList.remove('lightbox-smooth');
}
lightBox2.onclick = function () {
	lightBox2.classList.remove('lightbox-smooth');
}


// Аккордеон с плавным раскрытием ------------------
let acc = document.getElementsByClassName('accordion__btn');
let i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function () {
		this.classList.toggle('active');

		let panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + 'px';
		}
	});
}

