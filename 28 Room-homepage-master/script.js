// Slider:
const sliderLeft = document.getElementById('slider-left');
const sliderRight = document.getElementById('slider-right');

const title = document.getElementById('title');
const text = document.getElementById('text');
const image = document.getElementById('top-left');

// Hamburger.
const open =document.getElementById('open');
const close =document.getElementById('close');

const menu = document.getElementById('menu');
const navSm = document.getElementById('nav-small');

open.addEventListener('click', () => {
    navSm.style.display = "none";
    menu.style.display = "flex";
});

close.addEventListener('click', () => {
    navSm.style.display = "flex";
    menu.style.display = "none";
});


let currentPage = 0;


// Titles:
const titles = [
    'Discover innovative ways to decorate',
    'We are available all across the globe',
    'Manufactured with the best materials'
];

// Texts:
const texts = [
    'Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.',
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
];

// Change content
const changeContent = (page) => {
    title.innerText = titles[page];
    text.innerText = texts[page];
    image.style.background = `url("./images/desktop-image-hero-${page + 1}.jpg") no-repeat center center/cover`
}

// Slides
sliderRight.addEventListener('click', () => {
    if(currentPage === 2) {
        currentPage = -1;
    }

    currentPage++;
    changeContent(currentPage);
});

sliderLeft.addEventListener('click', () => {
    if(currentPage === 0) {
        currentPage = 3;
    }

    currentPage--;
    changeContent(currentPage);
});

