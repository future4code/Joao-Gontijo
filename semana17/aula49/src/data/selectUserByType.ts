import connection from "../connection"


// export default async function selectUserByType(type: string):Promise<any> {
//     const result = await connection.raw(`
//        SELECT id, name, email, type
//        FROM aula49_exercicio WHERE type LIKE '%${type}%' ;
//     `)
 
//     return result[0]
//  }


 const selectUserByType = async(type: string):Promise<any> => {
    const result = await connection('aula49_exercicio')
    .select('*')
   .where('type', 'like', `${type}`)
   return result
 }
 
 export default selectUserByType