import { connection } from "./connection";

const selecionarPorNome = async(name:string):Promise<any> => {
   const resultado = await connection ('Pokedex_go')
    .where({name})
return resultado
}

export default selecionarPorNome