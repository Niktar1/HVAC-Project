// Swiper 

let swiper = new Swiper(".services-swiper", {
    slidesPerView: 1,
    slidesPerGroup: 3,
    slidesPerGroupSkip: 3,
    speed: 2000,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".swiper__services-pagination",
        clickable: true,
    },
    breakpoints: {
        1: {
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
            slidesPerGroupSkip: 0,
            slidesPerGroup: 2,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
    },
});


// clients Swiper 

let swiper__clients = new Swiper(".clients-swiper", {
    slidesPerView: 1,
    slidesPerGroup: 3,
    slidesPerGroupSkip: 1,
    speed: 2000,
    spaceBetween: 0,
    pagination: {
        el: ".swiper__clients-pagination",
        clickable: true,
    },
    breakpoints: {
        1: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});




// Intro custom Slider

const slider = document.getElementById("slider");
const arrowLeft = document.querySelector(".arrow-l");
const arrowRight = document.querySelector(".arrow-r");
const slides = document.querySelectorAll(".slider-image");
const bottom = document.getElementById("bottom");

let currentSlideIndex = 0;
const paginationCircles = [];
const sliderWidth = slider.clientWidth;

function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    bottom.appendChild(div);
    paginationCircles.push(div);
}

function addPagination() {
    slides.forEach(createPaginationCircle);
    paginationCircles[0].classList.add("active");
    paginationCircles.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlide(index));
    });
}

function addActiveClass() {
    paginationCircles[currentSlideIndex].classList.add("active");
}

function removeActiveClass() {
    paginationCircles[currentSlideIndex].classList.remove("active");
}

function showSlide() {
    const sliderWidth = slider.clientWidth;
    slider.style.transform = `translateX(-${currentSlideIndex * sliderWidth}px)`;
}

function changeSlide(slideIndex) {
    removeActiveClass();
    currentSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
}

function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1;
    if(newSlideIndex > slides.length - 1) {
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
}

function previousSlide() {
    let newSlideIndex = currentSlideIndex - 1;
    if(newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
    }
    changeSlide(newSlideIndex);
}

addPagination();
arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);

// Custom Menu Dropdown select

$("[data-collapse]").on("click", function (event) {
    event.preventDefault();

    $this = $(this),
    blockId = $(this).data('collapse');

    $this.toggleClass("active");    
    document.querySelectorAll(".item__bottom").forEach((e) => e.classList.toggle("active-hide"))
});


// Custom Select - choices js.

const element = document.querySelector(".js-select");

const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ""
});


// Auto play swiper

setInterval(() => {
    nextSlide();
}, 10000);


// Youtube Video frame

const videos = document.querySelectorAll('.video');


let generateUrl = function(id) {
	let query = '?rel=0&showinfo=0&autoplay=1';

	return 'https://www.youtube.com/embed/' + id + query;
};


let createIframe = function(id) {
	let iframe = document.createElement('iframe');

	iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay; encrypted-media');
	iframe.setAttribute('src', generateUrl(id));

	return iframe;
};


videos.forEach((el) => {
	let videoHref = el.getAttribute('data-video');

	let deletedLength = 'https://youtu.be/'.length;

	let videoId = videoHref.substring(deletedLength, videoHref.length);

	let img = el.querySelector('img');
	let youtubeImgSrc = 'https://i.ytimg.com/vi/' + videoId + '/maxresdefault.jpg';
	// img.setAttribute('src', youtubeImgSrc);

	el.addEventListener('click', (e) => {
		e.preventDefault();

		let iframe = createIframe(videoId);
		el.querySelector('.video-img').remove();
		el.appendChild(iframe);
		el.querySelector('.play-btn').remove();
	});
});


// Burger Menu //

document.addEventListener("DOMContentLoaded", function () {


    document.querySelector("#burger").addEventListener("click", function () {

        document.querySelector(".header").classList.toggle("open");
        document.querySelector(".header__burger-btn").classList.toggle("active-burger");

        if (document.querySelector(".dark") == document.querySelector(".dark.open")) {
            setTimeout(() => {
                document.querySelector(".dark").classList.remove("open");
            },500);
        } else {
            document.querySelector(".dark").classList.add("open");
        }
    });
})


document.getElementById("menu").addEventListener('click', event => {
    event._isClickWithInMenu = true; 
});

document.getElementById("burger").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});

document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;

    document.querySelector(".header").classList.remove("open")    
    document.querySelector(".dark").classList.remove("open") 
    document.querySelector(".header__burger-btn").classList.remove("active-burger");
});
