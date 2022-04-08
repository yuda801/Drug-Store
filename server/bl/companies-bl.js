import companiesDal from '../dal/companies-dal.js';

const getAll = async () => {
    return await companiesDal.getAll()
}

// const addCustomer = async (body) => {
//     return await companiesDal.addCustomer(
//         body.email, body.firstName, body.lastName, body.phone, body.password, body.statusId)
// }

// const deleteCustomer = async (id) => {
//     return await companiesDal.deleteCustomer(id)
// }

export {
    getAll
    // addCustomer,
    // deleteCustomer
}