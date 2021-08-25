import { Request, Response } from "express";
import orderUserByNameOrType from "../data/orderUserByNameOrType";


export const getUserByNameOrType = async (req: Request, res: Response): Promise<any> => {
    try {
        // const sort : string = req.query.sort === "name" ? "name" : req.query.sort==="type" ? "type" : "email"
        let { sort = "email" } = req.query
        
        if(typeof sort === "string"){
           sort = sort.toLowerCase()
        }
        
        if (sort !== "type" && sort !== "email" && sort !== "name") {
            return res.status(422).send("Insira um valor válido!");
           }
        const {order}= req.query
            if(typeof order !=="string" || null){
                return res.status(422).send("Tipo inválido")
            }
            

        const userByType = await orderUserByNameOrType(sort, order)
        res.status(200).send(userByType)


    } catch (error) {
        if(res.status(200)){
            return res.status(500).send("Erro interno do servidor!")
        }
        res.send(error.message || error.sqlMessage)
    }
}
