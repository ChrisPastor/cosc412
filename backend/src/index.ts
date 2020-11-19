import {AddressInfo} from "net";
import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';

require('dotenv').config();

const app = express();
app.use(cors());

app.get('/', (req: Request,res: Response) => res.status(200).send('Express + TypeScript Server'));

app.use('/test', (req: Request, res: Response) => {
    res.status(200).send({test: 'test response'})
});

app.use('/healthy-competition/api', require('./api'))

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${(server.address() as AddressInfo).port}`);
});

module.exports = app;
