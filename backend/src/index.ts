import express, {Request, Response} from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const PORT = 8000;

app.get('/', (req: Request,res: Response) => res.status(200).send('Express + TypeScript Server'));

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});