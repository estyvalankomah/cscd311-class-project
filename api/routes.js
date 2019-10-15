const express = require('express');
const Route = express.Router();
const AuthController = require('./controllers/Authentication');
const BlockController = require('./controllers/BlockController');
const HallController = require('./controllers/HallController');
const RoomController = require('./controllers/RoomController');
const ErrorHandler = require('./ErrorHandler');

Route.route('/registerStudent')
    .post(ErrorHandler.catchErrors(AuthController.register));

Route.route('/login')
    .post(ErrorHandler.catchErrors(AuthController.login));

Route.route('/createBlock')
    .post(ErrorHandler.catchErrors(BlockController.createBlock));

Route.route('/getBlocks')
	.get(ErrorHandler.catchErrors(BlockController.getBlocks))

Route.route('/createHall')
    .post(ErrorHandler.catchErrors(HallController.createHall));

Route.route('/getHalls')
    .get(ErrorHandler.catchErrors(HallController.getHalls));
    
Route.route('/displayHalls')
	.get(ErrorHandler.catchErrors(HallController.displayHalls));

Route.route('/createRoom')
    .post(ErrorHandler.catchErrors(RoomController.createRoom));

Route.route('/getRooms')
	.get(ErrorHandler.catchErrors(RoomController.getRooms));

Route.route('/getUsers')
	.get(ErrorHandler.catchErrors(RoomController.getRoomsWithUsers));

Route.route('/applyToRoom')
    .post(ErrorHandler.catchErrors(RoomController.applyToRoom));

module.exports = Route;