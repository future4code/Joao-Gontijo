import { Request, Response } from "express";
import pegarTodosPokemons from "../data/pegarTodosPokemons";

const getTodosPokemons = async(req: Request, res: Response): Promise <any> =>{
    try {
        const pagina: number = Number(req.query.pagina) || 1
        
 
        const offset: number = (pagina - 1) * 12

        const listaPaginada = await pegarTodosPokemons(offset)
        if(!listaPaginada.length){
            return res.status(404).send({error: "Não encontramos"})
        }
        
        res.status(200).send(listaPaginada)


    } catch (error: any) {
        
        res.send({error: error.message || error.sqlMessage})

    }
}
export default getTodosPokemons