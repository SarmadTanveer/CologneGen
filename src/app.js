import express from 'express';
import bodyParser from 'body-parser';

import { comboRouter } from './routes/combo.js'; 


const app = express();

app.use(bodyParser.json());

app.use(comboRouter);



export default app;