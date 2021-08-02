import {Request, Response} from "express";
import connection from "../connection"
import selectUserByType from "../data/selectUserByType";

export const getUserByType = async(req: Request,res: Response): Promise<void> =>{
    try {
        const userByType = await selectUserByType(req.params.type)
        res.status(200).send(userByType)
    
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }
