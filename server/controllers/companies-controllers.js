import express from 'express';
import { getAll } from '../bl/companies-bl.js';

const companiesRouter = express.Router();

companiesRouter.get('/medicins-compenies', async (req, res) => {
    let result = await getAll();

    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

export {
    companiesRouter
}