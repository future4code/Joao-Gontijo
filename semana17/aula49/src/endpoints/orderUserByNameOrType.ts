import {Request, Response} from "express";
import orderUser from "../data/orderUser";


export const getUserByNameOrType = async(req: Request,res: Response): Promise<void> =>{
    try {
        const sort : string = req.query.sort === "name" ? "name" : req.query.sort==="type" ? "type" : "email"
        const order : string = req.query.order === "DESC" ? "DESC" : "ASC" 
      
        const userByType = await orderUser(sort, order)
        res.status(200).send(userByType)
    
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }
