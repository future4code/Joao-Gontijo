import connection from "../connection";

const newSalary = async(id:string, salary:number):Promise<any> =>{
    await connection('Actor')
    .update({salary: salary})
    .where('id', id)
}
export default newSalary
// const newSalary = async(id:string, salary: number):Promise<any> =>{
//     await connection.raw(`
//     UPDATE Actor SET salary =${salary}
//     WHERE id =${id}
//     `)
// }
// THEN CATCH
// newSalary('001', 5050505).
// then(result => {
//     result
// })
// .catch((err)=>{
//     console.log(err)
// }
// )
// ASYNC AWAIT
// (async()=> {
//    await newSalary('001', 20000)
// })()