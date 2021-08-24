import connection from "../connection";

export const createActor = async( 
    name:string, 
    salary: number, 
    birth_date: Date,
    gender: string
    ):Promise<any> =>{
    await connection('Actor').insert({
        id:Date.now().toString(),
        name, 
        salary, 
        birth_date, 
        gender
    })
}

// THEN CATCH
// createActor(Date.now().toString(), 'nome', 10000, '1930-10-15', 'female')
// .then(()=> console.log('Ator criado'))
// .catch((err)=> console.log(err))

//async await
// (async () => {
// await createActor(Date.now().toString(), 'oi', 20202020,'1990-02-25', 'male')
// })()