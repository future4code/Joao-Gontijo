import { Request, Response } from 'express'
import selectActorById from '../data/selectActorById'


const getActorById = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params

        const result = await selectActorById(id)
        
        if (!result) {
            return res.status(404).send({ error: "O id informado não corresponde a um ator" })
        }
        
        
        res.status(200).send(result)

    } catch (error) {
        if (res.status(200)){
            res.status(500).send({error: "Erro interno do servidor"})
        }
        res.send({error: error.sqlMessage || error.message})
    }

}

export default getActorById;