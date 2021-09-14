import { Request, Response } from "express";
import pegarPokemonPorGeracao from "../data/pegarPokemonPorGeracao";



const getPokemonPorGeracao = async(req: Request, res: Response): Promise <any> =>{
    try {
        const pagina: number = Number(req.query.pagina) || 1
        
        const offset: number = (pagina - 1) * 12

        const {geracao} = req.params

        if(typeof geracao !== "string"){
            return res.status(422).send({error: "Tem que ser string"})
        }

        const listaPaginada = await pegarPokemonPorGeracao( geracao, offset)
        if(!listaPaginada.length){
            return res.status(404).send({error: "Não encontramos"})
        }
        
        res.status(200).send(listaPaginada)


    } catch (error: any) {
        
        res.send({error: error.message || error.sqlMessage})

    }
}
export default getPokemonPorGeracao