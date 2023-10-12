let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}


$(document).ready(function () {

    $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
        }
    });

});