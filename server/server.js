import express from "express";
import cors from 'cors'
import { companiesRouter } from "./controllers/companies-controllers.js";
import { drugsRouter } from "./controllers/drugs-controllers.js";

const app = express();

app.use(express.json())
app.use(cors())

app.use('/api', companiesRouter)
app.use('/api', drugsRouter)

app.listen(5000, () => {
    console.log('Server started on port 5000');
})