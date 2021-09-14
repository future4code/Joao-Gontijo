import { Request, Response } from "express";
import pegarPokemonPorTipo from "../data/pegarPokemonPorTipo";
import pegarTodosPokemons from "../data/pegarTodosPokemons";

const getPokemonPorTipo = async(req: Request, res: Response): Promise <any> =>{
    try {
        const pagina: number = Number(req.query.pagina) || 1
        
        const offset: number = (pagina - 1) * 12

        const {tipo} = req.query

        if(typeof tipo !== "string"){
            return res.status(422).send({error: "Tem que ser string"})
        }

        const listaPaginada = await pegarPokemonPorTipo( tipo, offset)
        if(!listaPaginada.length){
            return res.status(404).send({error: "Não encontramos"})
        }
        
        res.status(200).send(listaPaginada)


    } catch (error: any) {
        
        res.send({error: error.message || error.sqlMessage})

    }
}
export default getPokemonPorTipo