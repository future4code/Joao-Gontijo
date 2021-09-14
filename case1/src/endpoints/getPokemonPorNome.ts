import { Request, Response } from "express";
import selecionarPorNome from "../data/selecionarPorNome";

const getPokemonPorNome = async(req:Request, res:Response):Promise<any> => {
    try {

    
      const {nome} = req.params
     if(!nome){
            return res.status(422).send ({error: "Insira um nome de pokemon"})
        }
        
      const resultado = await selecionarPorNome(nome)


     if(!resultado.length){
         return res.status(404).send ({error : "Pokemon não encontrado"})
     }

      res.status(200).send(resultado)

    } catch (error: any) {
        res.send({error: error.message || error.sqlMessage})
    }
}

export default getPokemonPorNome