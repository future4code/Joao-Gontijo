import {Request, Response} from "express"
import updateUser from "../data/updateUser"


export default async function editUser (req: Request, res: Response) {
    try {
        if(req.body.name ==='' ||req.body.nickname ==='' || req.body.email===''){
            res.status(400).send({message: "Nenhum campo pode ficar em branco"})
        }
        if (!req.body.name && !req.body.nicknam && !req.body.email){
            res.status(400).send({message: "Preencha pelo menos um valor"})
            return
        }

        await updateUser(req.params.id, req.body.name, req.body.nickname, req.body.email)

        res.status(200).send({ message:"Usuário Atualizado!"})


    } catch (error) {
        res.status(400).send({ message: error.message || error.sqlMessage})
    }
}