import connection from "../connection";

const selectAllMovies = async():Promise<any> =>{
 const result =   await connection('Movies').select('*').limit(15)

 return result
}

export default selectAllMovies