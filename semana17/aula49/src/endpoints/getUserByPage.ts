import {Request, Response} from "express";
import selectUserByPage from "../data/selectUserByPage";

export const getUserByPage = async (req: Request, res: Response): Promise<any> => {
    try {

        const page = Number(req.query.page) || 1
            
        const offset:number = (page - 1) * 5

        const users = await selectUserByPage(offset)

        if(!users){
            return res.status(404).send("Não encontramos nada!")
        }

        res.status(200).send(users)

    } catch (error) {
       if(res.status(200)){
           res.status(500).send("Erro interno do servidor!")
       }
        res.send(error.message || error.sqlMessage)
    }
} 