import connection from "../connection";


//QUERY BUILDER:
const selectActorById = async (id:string): Promise<any>=>{
   const result = await connection('Actor')
    .where('id', id )
    return result[0]
}

//RAW
// const selectActorById = async(id:string):Promise<any> => {
//     const result = await connection.raw(`
//     SELECT * FROM Actor WHERE id = '${id}'
//     `)
//     return result[0][0]
// }

// (async () => {
//     console.log(await selectActorById('001'))
// })()

export default selectActorById