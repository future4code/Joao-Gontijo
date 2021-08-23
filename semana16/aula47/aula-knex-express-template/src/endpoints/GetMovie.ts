import {Request, Response} from 'express'
import selectMovie from '../data/selectMovie'

const getMovie = async(req: Request, res: Response): Promise<any> =>{
    try {
        const {query} = req.query
        if(typeof query !== 'string'){
           return res.status(422).send({error: "A busca tem que ser feita por string!"})
        }
        const movies = await selectMovie(query)
        if(!movies){
            return res.status(404).send({error: "Não encontramos um filme com esses parâmetros!"})
        }
        res.status(200).send(movies)
    } catch (error) {
        if(res.status(200)){
            res.status(500).send({error: "erro interno do servidor!"})
        }
        res.send({error: error.message || error.sqlMessage})
    }
}

export default getMovie