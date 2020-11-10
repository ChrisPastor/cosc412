import {NextFunction, Request, Response} from "express";

import express from 'express';
const router = express.Router();

router.get('/database', (req: Request,res: Response, next: NextFunction) => {
    res.status(200).send({});
});

module.exports = router;
