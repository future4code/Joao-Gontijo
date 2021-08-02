import {Request, Response} from "express"
import selectUserById from "../data/selectUserById"


export default async function getUserById (req: Request, res: Response) {
    try {
        const user = await selectUserById(req.params.id)
        if(!user){
            res.status(404).send({
                message: "usuario não encontrado"
            })
            return
        }

        res.status(200).send ({
            id: user.id,
            nickname: user.nickname
        })

    } catch (error) {
        res.status(400).send({ message: error.message || error.sqlMessage})
    }
}