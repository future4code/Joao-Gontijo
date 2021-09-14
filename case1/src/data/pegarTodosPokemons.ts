import { connection } from "./connection";

const pegarTodosPokemons = async(pagina: number): Promise<any> => {
    const resultadoPaginado = await connection ('Pokedex_go')
    .limit(12)
    .offset(pagina)
    return resultadoPaginado
}

export default pegarTodosPokemons