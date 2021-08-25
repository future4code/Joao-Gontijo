import {Request, Response} from "express";
import { send } from "process";
import selectUserByName from "../data/selectUserByName";


export const getUserByName = async(req:Request, res:Response): Promise<any> =>{
   try {
      const {name} = req.query
      if(typeof name !== "string"){
         return res.status(422).send({error: "Tem que ser do tipo string!"})
      }
         const users = await selectUserByName(name || '%')

         if(!users.length){
           return res.status(404).send('Não encontramos o usuário!')
         }
         return res.status(200).send(users)
   } catch (error) {
      if(res.status(200)){
         return res.status(500).send({error: "Erro interno do servidor"})
      }
      res.send({error: error.message || error.sqlMessage})
   }
}



// export const getUserByName = async(req: Request,res: Response): Promise<void> =>{
//     try {
//        const name = req.query.name
//       if (typeof name !== "string") {
//          res.statusCode = 500
//          throw new Error ("Deu ruim")
//       }
//        const users = await selectUserByName(name|| "%")
      
 
//        if(!users.length){
//           res.statusCode = 404
//           throw new Error("Não encontramos o usuário")
//        }
 
//        res.status(200).send(users)
       
//     } catch (error) {
//        console.log(error)
//        res.send(error.message || error.sqlMessage)
//     }
//  }


