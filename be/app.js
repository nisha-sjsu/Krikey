import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { pool } from './db.js';
import { getTopAuthorsController } from "./controllers/saleItemsController.js";
const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get('/top-authors', (req, res) => getTopAuthorsController(req, res, pool));

app.listen(8000, () => {
    console.log("Server running on port 8000 successfully")
});