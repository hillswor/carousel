const slides = document.getElementsByClassName("carousel-item")

let slidePosition = 0

const totalSlides = slides.length

const nextButton = document.getElementById("carousel-button-next")

const prevButton = document.getElementById("carousel-button-prev")


function hideAllSlides() {
	for (const slide of slides) {
		slide.classList.remove("carousel-item-visible")
		slide.classList.add("carousel-item-hidden")
	}
}


function moveToPrevSlide() {
	// slides[slidePosition].classList.remove("carousel-item-visible")
	hideAllSlides()
	if (slidePosition === 0) {
		slidePosition = totalSlides - 1
	} else {
		slidePosition --
	}

	slides[slidePosition].classList.add("carousel-item-visible")
}


function moveToNextSlide() {
	// slides[slidePosition].classList.remove("carousel-item-visible")
	hideAllSlides()
	if (slidePosition === totalSlides - 1) {
		slidePosition = 0
	} else {
		slidePosition ++
	}

	slides[slidePosition].classList.add("carousel-item-visible")
}


prevButton.addEventListener("click", moveToPrevSlide)

nextButton.addEventListener("click", moveToNextSlide)