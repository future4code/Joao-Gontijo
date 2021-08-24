import connection from "../connection";

const removeActor = async(id:string): Promise<any> =>{
    await connection('Actor')
    .delete()
    .where('id', id)
}

//RAW:
// const removeActor = async(id:string): Promise<any> => {
//     await connection.raw (`
//      DELETE FROM Actor WHERE id = ${id}
//     `)
// }

//.then.catch
// removeActor('005')
// .then(()=> console.log('deletado'))
// .catch(err=> console.log(err))

//async await:
// (async () => {
//     await removeActor('005')
// })
export default removeActor