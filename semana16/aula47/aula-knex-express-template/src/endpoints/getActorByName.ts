import {Request, Response} from 'express'
import selectActorByName from '../data/selectActorByName'

const getActorByName = async (req:Request, res: Response):Promise<any> => {
    try {
        const {name} = req.params
        const result= await selectActorByName(name)
        if(!result){
            return res.status(404).send({error: "Ator não encontrado"})
        }
        res.status(200).send(result)
    } catch (error) {
        if (res.status(200)){
            res.status(500).send({error: "Erro interno do servidor"})
        }
        res.send({error: error.sqlMessage || error.message})
    }
}

export default getActorByName