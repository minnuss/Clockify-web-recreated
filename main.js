// SECTION HERO SWITCH BUTTON
let switchBtn = document.querySelector('input[type="checkbox"]');
let changeImg = document.querySelector('.changeImg');

switchBtn.addEventListener('click', () => {
    // console.log('clicked')

    if (switchBtn.checked) {
        changeImg.src = 'img/time-tracker-dark-screenshot.svg';
    } else {
        changeImg.src = 'img/time-tracker-screenshot.svg';
    }
})

// HAMB MENU MOBILE

const hambBtn = document.querySelector('.hamb-menu-btn-box');
const hambLine = document.querySelectorAll('.hamb-menu-btn-line');
const leftLinks = document.querySelector('.left-links');
const rightLinks = document.querySelector('.right-links');


hambBtn.addEventListener('click', () => {
    hambLine.forEach(line => {
        line.classList.toggle('active');
    })

    leftLinks.classList.toggle('active')
    rightLinks.classList.toggle('active')
})


