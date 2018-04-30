'use strict'

const UIController = (function () {
	const DOMStrings = {
		selectCardNum: '.deck-size-selector',
		gameBoard: 'game-board'
	}

	const setupGameBoard = () => {
		const selector = document.querySelector(DOMStrings.selectCardNum)
		const deckSize = selector.options[selector.selectedIndex].value
		renderCards(deckSize)
	}

	const renderCards = (size) => {
		const gameBoard = document.getElementById(DOMStrings.gameBoard)
		clearGameBoard(gameBoard)
		for (let i = 0; i < size; i++) {
			const card = document.createElement('div')
			card.className = 'card card-back'
			gameBoard.appendChild(card)
		}
		addEventListenersToCards()
	}

	const clearGameBoard = gameBoard => gameBoard.innerHTML = ''

	const addEventListenersToCards = () => {
		const cards = Array.from(document.getElementsByClassName('card'))
		cards.forEach(c => c.addEventListener('click', changeCardStatus))
	}

	const changeCardStatus = () => {
		console.log('status change')
	}

	return {
		DOMStrings,
		setupGameBoard
	}
})()

export default UIController
