import { Request, Response } from 'express'
import removeActor from '../data/removeActor'

const deleteActorById = async(req: Request, res: Response): Promise<any> => {
    try {
        const {id} = req.params
        await removeActor(id)
        res.status(200).send({message: "Ator/atriz deletada/o com sucesso!"})
    } catch (error) {
        res.status(404).send({error: "Insira um id válido!"})
    }
}

export default deleteActorById