import { connection } from "./connection";

const pegarPokemonPorTipo = async(type1:string, pagina: number): Promise<any> => {
    const resultadoPaginado = await connection ('Pokedex_go')
    .limit(12)
    .offset(pagina)
    .where({type1})
     return resultadoPaginado
}

export default pegarPokemonPorTipo