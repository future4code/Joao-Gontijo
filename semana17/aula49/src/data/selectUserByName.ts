import connection from "../connection"


// export default async function selectUserByName(name: string):Promise<any> {
//     const result = await connection.raw(`
//        SELECT id, name, email, type
//        FROM aula49_exercicio WHERE name LIKE '%${name}%' ;
//     `)
 
//     return result[0]
//  }

const selectUserByName = async(name: string):Promise<any> => {
   const result = await connection('aula49_exercicio')
      .select('*')
      .where('name','like', `%${name}%`)

      return result
}

export default selectUserByName

