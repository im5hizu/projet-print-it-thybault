const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const btnCarouselLeft = document.getElementById('carouselLeft');
const btnCarouselRight = document.getElementById('carouselRight');

const displayDots = (nbrImg) => {
    const dotsElement = document.querySelector("#banner .dots");
    for(let i=0; i<nbrImg; i++){
        dotsElement.insertAdjacentHTML("afterbegin", '<div class="dot"></div>');
    }
}

const banner = document.getElementById('banner')
let imgBanner = document.querySelector("#banner img");
let currentImg = 0;
const nbrImg = slides.length;


const displayImg = (currentImg) => {
    banner.innerHTML = "";
    const divDots = document.createElement("div");
    divDots.setAttribute('class', 'dots')
    banner.appendChild(divDots);
    displayDots(nbrImg);
    banner.insertAdjacentHTML("afterbegin", `<img class="banner-img" src="./assets/images/slideshow/${slides[currentImg].image}" alt="Banner Print-it">`);
    banner.insertAdjacentHTML("beforeend", `<p>${slides[currentImg].tagLine}</p>`);
    imgBanner = document.querySelector("#banner img");

    const dotElements = document.querySelectorAll('.dot');
    let index = 0;
    dotElements.forEach((dot, index) =>{
        if(index === currentImg){
            dot.classList.add('dot_selected')
        }else {
            dot.classList.remove('dot_selected');
        }
    })
}
displayImg(currentImg);

btnCarouselLeft.addEventListener('click', () =>{
    currentImg--;
    if (currentImg < 0) {
        currentImg = nbrImg - 1;
    }
    imgBanner = document.querySelector("#banner img");
    displayImg(currentImg);
})


btnCarouselRight.addEventListener('click', () =>{
    currentImg++;
    if (currentImg > nbrImg - 1) {
        currentImg = 0;
    }
    displayImg(currentImg);
})