//Select element function
const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function (){
    body.classList.toggle('open');
});

// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 750,
    distance: '25rem',
    delay: 30
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 750,
    distance: '25rem',
    delay: 30
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 750,
    distance: '25rem',
    delay: 30
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 750,
    distance: '25rem',
    delay: 30
});

$(document).on('click', 'a[href^="#"]', function(event) {
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 500);
});

