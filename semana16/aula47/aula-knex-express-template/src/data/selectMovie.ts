import connection from "../connection";

// const selectMovie = async(query:string):Promise<any> => {
//     const result = await connection.raw(`
//         SELECT * FROM Movies
//         WHERE name OR sinopse
//         LIKE '%${query}%';
//     `)
//     return result[0]
// }

const selectMovie = async (query:string):Promise<any> => {
    const result = await connection('Movies')
    .select('*')
    .where('name', 'like', `%${query}%`)
    .orWhere('sinopse', 'like', `%${query}%`)
    return result
}
export default selectMovie