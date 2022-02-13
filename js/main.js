const checkBtns = document.querySelectorAll('.check');
const radioBtns = document.querySelectorAll('.radio-btns>label>input[type="radio"]');
radioBtns[0].nextElementSibling.innerHTML = radioBtns[0].value;

checkBtns.forEach(elem => {
    elem.addEventListener('change', function(e) {
        const check = document.querySelectorAll('input:checked');
        const a = e.target.checked;

        for (let i = 0; i < radioBtns.length; i++) {
            radioBtns[i].nextElementSibling.innerHTML = '';
        };
        if (!a) {
            e.target.nextElementSibling.innerHTML = '';

        };
        for (let i = 0; i < check.length; i++) {
            if (check[i].getAttribute('class') !== 'switch-input') {
                const nextElem = check[i].nextElementSibling;
                nextElem.innerHTML = check[i].value;
            }
        };

    })
});

const switchBtn = document.querySelector('.switch-input');
switchBtn.addEventListener('change', function(e) {
    if (e.target.checked) {
        e.target.nextElementSibling.innerHTML = 'Switcher ON';
    } else {
        e.target.nextElementSibling.innerHTML = 'Switcher OFF'
    }
});


const starsItems = document.querySelectorAll('.rating-item');

starsItems.forEach(item => {
    item.addEventListener('click', function() {
        item.parentNode.dataset.all = item.dataset.ratingValue
    })
});


$(document).ready(function() {


    $('.slider_wrap').slick({
        rows: 0,
        dots: true,
        nextArrow: '<button class="slick-arrow slick-next"><img src="./img/next.svg" alt="next arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="./img/prev.svg" alt="prev arrow"></button>',
        responsive: [{
            breakpoint: 650,
            settings: {
                autoplay: true,
                arrows: false,
            }
        }, ]
    });

    const header = $('.nav-wrap');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            header.addClass('header_fixed');
        } else {
            header.removeClass('header_fixed');
        }
    });

    const burger = document.querySelector('.burger-btn');
    burger.addEventListener('click', function() {
        const showMenu = document.querySelector('.header_adaptive-menu');
        const body = document.querySelector('body');

        showMenu.classList.toggle('header_adaptive--active');
        body.classList.toggle('no-scroll');
    });

});