import {Request, Response} from "express";
import selectUserByType from "../data/selectUserByType";

export const getUserByType = async(req: Request,res: Response): Promise<any> =>{
    try {
        const {type} = req.params
        
        const userByType = await selectUserByType(type)
       
        if(!userByType.length){
            return res.status(404).send('Tipo de usuário não encontrado!')
        }
        res.status(200).send(userByType)
    
       
    } catch (error) {
      if(res.status(200)){
          return res.status(500).send({error: "Erro interno do servidor!"})
      }
       res.send(error.message || error.sqlMessage)
    }
 }
