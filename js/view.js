'use strict'

const UIController = (function () {
	const DOMStrings = {
		selectCardNum: '.deck-size-selector',
		gameBoard: 'game-board'
	}

	let cardsInGame = []

	const setupGameBoard = () => {
		const selector = document.querySelector(DOMStrings.selectCardNum)
		const deckSize = selector.options[selector.selectedIndex].value

		renderCards(deckSize)
	}

	const renderCards = (size) => {
		const gameBoard = document.getElementById(DOMStrings.gameBoard)
		const cards = []

		clearGameBoard(gameBoard)

		for (let i = 0; i < size; i++) {
			const card = document.createElement('div')
			card.className = 'card card-back'
			cards.push(card)
		}

		cardsInGame = shuffle(cards)

		cardsInGame.forEach(c => {
			gameBoard.appendChild(c)
		})

		addEventListenersToCards()
	}

	const clearGameBoard = gameBoard => gameBoard.innerHTML = ''

	const addEventListenersToCards = () => {
		const cards = Array.from(document.getElementsByClassName('card'))
		cards.forEach(c => c.addEventListener('click', changeCardStatus))
		shuffle(cards)
	}

	const changeCardStatus = function () {
		this.classList.toggle('card-back')
		this.classList.toggle('card-front')
		this.classList.toggle('card-disabled')
	}

	const shuffle = (array) => {
		let currentIndex = array.length
		let temporaryValue = 0
		let randomIndex = 0

		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex)
			currentIndex -= 1
			temporaryValue = array[currentIndex]
			array[currentIndex] = array[randomIndex]
			array[randomIndex] = temporaryValue
		}
		return array
	}

	return {
		DOMStrings,
		cardsInGame,
		setupGameBoard
	}
})()

export default UIController
