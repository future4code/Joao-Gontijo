import connection from "../connection";

// //RAW:
// const countByGender = async(gender: string): Promise<any> => {
//     const result = await connection.raw(`
//         SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
//     `)
//     return result[0][0].count
// }

//Query Builder:
const countByGender = async(gender: string): Promise<any> => {
    const result = await connection('Actor')
    .count('* AS count')
    .where({gender} )
    const count = String(result[0].count)
    return count
}


// como usar com then catch

// countByGender('male')
// .then(result => {
//     console.log(result)
// })
// .catch(err => {
//     console.log(err)
// })
 
// com async await
// (async () => {
//     console.log (await countByGender('male'))
// })()

export default countByGender