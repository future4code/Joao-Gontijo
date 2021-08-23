import connection from "../connection"


// 1 B)
// RAW:
// const selectActorByName = async(name:string): Promise <any> =>{
//   const result =  await connection.raw(`
//     SELECT * FROM Actor WHERE name='${name}'
//     `)
//      return result[0][0]
//     }

const selectActorByName = async(name: string): Promise<any> => {
   const result = await connection ("Actor")
   .select('*')
    .where('name', name) 
    return result[0]
}



// COMO USAR FORA DO ENDPOINT COM THEN CATCH
// selectActorByName('jp').then(result => {
//     console.log(result)
// }).catch(err => {
//     console.log(err)
// })

// COMO USAR COM ASYNC AWAIT=
// (async () => {
//     console.log(await selectActorByName('jp'))
// })()

export default selectActorByName

