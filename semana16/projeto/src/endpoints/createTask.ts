import {Request, Response} from "express"
import moment from 'moment'
import insertTask from "../data/insertTask"

export default async function createTask (req: Request, res: Response) {
    try {
        if(!req.body.title || !req.body.description || !req.body.deadline || !req.body.authorId) {
            res.status(400).send({message: '"title", "description", "deadline" e "authorId" são obrigatórios'})
            return
        }
        
        const dateDiff: number = moment(req.body.deadline, "DD/MM/YYYY").unix() - moment().unix()
      

        if(dateDiff <= 0){
            res.status(400).send({message: '"deadline" deve ser uma data futura'})
            return
        }

        const id: string = Date.now() + Math.random().toString()
        
        await insertTask(
            id, 
            req.body.title,
            req.body.description, 
            moment(req.body.deadline, 'DD/MM/YYYY').format('YYYY-MM-DD'), 
            req.body.authorId
             )
            res.status(400).send({message:"Tarefa Criada!", id})

    } catch (error) {
        res.status(400).send({ message: error.message || error.sqlMessage})
    }
}