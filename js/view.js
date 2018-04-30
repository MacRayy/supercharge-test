'use strict'

const UIController = (function () {
	const DOMStrings = {
		selectCardNum: '.deck-size-selector',
	}

	const getDeckSize = () => {
		const selector = document.querySelector(DOMStrings.selectCardNum)
		const deckSize = selector.options[selector.selectedIndex].value
		console.log(deckSize)
	}

	return {
		DOMStrings,
		getDeckSize
	}
})()

export default UIController
