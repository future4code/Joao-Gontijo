import connection from "../connection"


// export default async function orderUser(sort: string, order:string ):Promise<any> {
//     const result = await connection.raw(`
//        SELECT *
//        FROM aula49_exercicio ORDER BY ${sort} ${order}
//     `)
 
//     return result[0]
//  }

//  export default async function orderUser(sort: string, order:string ):Promise<any> {
//     const result = await connection("aula49_exercicio")
//     .select('*')
//     .orderBy(sort, order)
//     return result
//  }

const orderUserByNameOrType = async(sort: string, order: string):Promise<any> =>{
   const result = await connection('aula49_exercicio')
   .select('*')
   .orderBy(sort, order)
   return result
}

export default orderUserByNameOrType