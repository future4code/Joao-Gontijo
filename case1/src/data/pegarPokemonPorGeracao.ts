import { connection } from "./connection";

const pegarPokemonPorGeracao = async(generation:string, pagina: number): Promise<any> => {
    const resultadoPaginado = await connection ('Pokedex_go')
    .limit(12)
    .offset(pagina)
    .where({generation})
     return resultadoPaginado
}

export default pegarPokemonPorGeracao