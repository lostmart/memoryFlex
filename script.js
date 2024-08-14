const imagesArray = [
	{ heroName: "capitain", imageUrl: "capitain.jpg" },
	{ heroName: "ironman", imageUrl: "ironman.jpg" },
	{ heroName: "spiderman", imageUrl: "spider.jpg" },
	{ heroName: "strange", imageUrl: "strange.jpg" },
	{ heroName: "thor", imageUrl: "thor.jpg" },
	{ heroName: "widow", imageUrl: "widow.jpg" },
]
const clonedArray = [...imagesArray]

const combinedArray = imagesArray.concat(clonedArray)

console.log(combinedArray)

const cardArray = document.querySelectorAll(".card")

// global variables
let isFlipped = false
let firstCard, secondCard

function flipCard() {
	this.classList.toggle("animate__rotate")
	// set first card
	if (!isFlipped) {
		isFlipped = true
		firstCard = this
	} else {
		// set the second card
		isFlipped = false
		secondCard = this
		// check if they match
		if (
			firstCard.getAttribute("hero-name") ===
			secondCard.getAttribute("hero-name")
		) {
			firstCard.removeEventListener("click", flipCard)
			secondCard.removeEventListener("click", flipCard)
		} else {
			setTimeout(() => {
				firstCard.classList.remove("animate__rotate")
				secondCard.classList.remove("animate__rotate")
			}, 980)
		}
	}
	console.log(firstCard.getAttribute("hero-name"))
}

cardArray.forEach((card, i) => {
	card.style.backgroundImage = `url("./assets/${combinedArray[i].imageUrl}")`
	card.addEventListener("click", flipCard)
	card.setAttribute("hero-name", combinedArray[i].heroName)
})
