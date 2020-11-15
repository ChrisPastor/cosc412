import express from 'express';
import {userController} from "../controllers/UserController";
import {gameController} from "../controllers/GameController";
const router = express.Router();

router.get('/users', userController);
router.get('/games', gameController);

module.exports = router;
