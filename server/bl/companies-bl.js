import companiesDal from '../dal/companies-dal.js';

const getAll = async () => {
    return await companiesDal.getAll()
}

export {
    getAll
}