'use strict'

import GameController from './logic.js'
import UIController from './view.js'

const AppController = function (gameCtrl, UICtrl) {
	console.log('memory game')
}

AppController(GameController, UIController)
