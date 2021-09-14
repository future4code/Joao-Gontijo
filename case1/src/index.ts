import app from "./app";
import getPokemonPorGeracao from "./endpoints/getPokemonPorGeracao";
import getPokemonPorNome from "./endpoints/getPokemonPorNome";
import getPokemonPorTipo from "./endpoints/getPokemonPorTipo";
import getTodosPokemons from "./endpoints/getTodosPokemons";


//pegar todos os pokemons com paginacao
//pegar por nome
//pegar por tipo
//pegar por geraçao
//
app.get('/', getTodosPokemons)

app.get('/pokemons/:nome', getPokemonPorNome)

app.get ('/pokemons', getPokemonPorTipo)

app.get('/pokemons/geracao/:geracao', getPokemonPorGeracao)