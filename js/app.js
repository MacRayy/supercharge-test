'use strict'

import GameController from './logic.js'
import UIController from './view.js'

const AppController = function (gameCtrl, UICtrl) {

	const init = () => setupEventListeners()

	const setupEventListeners = () => {
		const DOM = UICtrl.DOMStrings

		document.addEventListener('DOMContentLoaded', () => document.querySelector(DOM.selectCardNum).onchange = UICtrl.getDeckSize, false)
	}

	return {
		init
	}
}

AppController(GameController, UIController).init()
