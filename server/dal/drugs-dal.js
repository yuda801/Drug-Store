import connection from '../db.js';

const getAllMeds = async () => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            'SELECT * FROM medicines'
        )

        result.success = true
        result.data = res[0]

        return result
    } catch (err) {
        result.success = false
        result.data = err

        return result
    }
}

const addMedicin = async (manufacturerID, medicineName, weight) => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            `INSERT INTO medicines (manufacturerID, medicineName, weight)
            VALUES
            ('${manufacturerID}','${medicineName}','${weight}');`
        )

        result.success = true
        result.data = res[0]

        return result
    } catch (err) {
        result.success = false
        result.data = err

        return result
    }
}


const deleteMedicins = async (id) => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            `DELETE FROM medicines WHERE medicineID = ${id};`
        )

        result.success = true

        return result
    } catch (err) {
        result.success = false
        result.data = err

        return result
    }
}

export default {
    getAllMeds,
    addMedicin,
    deleteMedicins
}
// addCustomer,
// deleteCustomer

// const deleteCustomer = async (id) => {
//     let result = {
//         success: false,
//         data: null
//     }
    
//     try {
//         let res = await connection.promise().query(
//             `DELETE FROM customers WHERE id = ${id};`
//             )
            
//             result.success = true
            
//             return result
//         } catch (err) {
//         result.success = false
//         result.data = err
        
//         return result
//     }
// }
