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

const cardArray = document.querySelectorAll(".card")
const spanMissed = document.querySelector(".missed")
const spanMissedFinal = document.querySelector(".missed_final")

// global variables
let isFlipped = false
let firstCard, secondCard
let lockBoard = false
let correctCards = 0
let missed = 0

spanMissed.innerText = `Missed: ${missed}`

function flipCard() {
	if (lockBoard) return

	this.classList.toggle("animate__rotate")
	// set first card
	if (!isFlipped) {
		isFlipped = true
		firstCard = this
	} else {
		// set the second card
		isFlipped = false
		secondCard = this
		// loack the board
		lockBoard = true
		// check if they match
		if (
			firstCard.getAttribute("hero-name") ===
			secondCard.getAttribute("hero-name")
		) {
			firstCard.removeEventListener("click", flipCard)
			secondCard.removeEventListener("click", flipCard)
			lockBoard = false
			correctCards++
		} else {
			missed++
			spanMissed.innerText = `Missed: ${missed}`
			setTimeout(() => {
				firstCard.classList.remove("animate__rotate")
				secondCard.classList.remove("animate__rotate")
				lockBoard = false
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
