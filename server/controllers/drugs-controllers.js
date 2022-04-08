import express from 'express';
import { getAllMeds, addMedicin, deleteMedicins } from '../bl/drugs-bl.js';
const drugsRouter = express.Router();

drugsRouter.get('/medicins', async (_, res) => {
    let result = await getAllMeds();

    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

drugsRouter.post('/medicins', async (req, res) => {
    let result = await addMedicin(req.body);
    if (!result.success) {
        res.status(500).send(result)
    } else {
        result.data = {
            ...req.body,
            id: result.data.insertId
        }
        res.send(result)
    }
})

drugsRouter.delete('/medicins/:id', async (req, res) => {
    let result = await deleteMedicins(req.params.id);

    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

export {
    drugsRouter
}