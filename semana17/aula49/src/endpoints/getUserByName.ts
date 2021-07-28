import {Request, Response} from "express";
import selectUserByName from "../data/selectUserByName";



export const getUserByName = async(req: Request,res: Response): Promise<void> =>{
    try {
       const name = req.query.name
      if (typeof name !== "string") {
         res.statusCode = 500
         throw new Error ("Deu ruim")
      }
       const users = await selectUserByName(name|| "%")
      
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("Não encontramos o usuário")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }


