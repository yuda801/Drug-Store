import drugsDal from '../dal/drugs-dal.js';

const getAllMeds = async () => {
    return await drugsDal.getAllMeds()
}

const addMedicin = async (body) => {
    return await drugsDal.addMedicin(
        body.manufacturerID, body.medicineName, body.weight)
}
const deleteMedicins = async (id) => {
    return await drugsDal.deleteMedicins(id)
}


export {
    getAllMeds,
    addMedicin,
    deleteMedicins
}