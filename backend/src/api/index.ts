import express from 'express';
import {userController} from "../controllers/UserController";
const router = express.Router();

router.get('/users', userController);

module.exports = router;
