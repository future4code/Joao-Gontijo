import {Request, Response} from "express";
import selectUserByName from "../data/selectUserByName";



export const getUserByName = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectUserByName(req.query.name as string|| "%")
 
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


