const slides = document.getElementsByClassName("carousel-item")

let slidePosition = 0

const totalSlides = slides.length

const nextButton = document.getElementById("carousel-button-next")

const prevButton = document.getElementById("carousel-button-prev")

function moveToPrevSlide() {

}

function moveToNextSlide() {

}

prevButton.addEventListener("click", moveToPrevSlide)

nextButton.addEventListener("click", moveToNextSlide)

console.log(slides)