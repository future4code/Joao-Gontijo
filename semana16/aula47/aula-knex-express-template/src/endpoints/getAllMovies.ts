import { Request, Response } from 'express'
import selectAllMovies from '../data/selectAllMovies'


const getAllMovies = async (req:Request, res:Response):Promise<any> => {
try {
    const result = await selectAllMovies()
   res.status(200).send(result)
} catch (error) {
    if(res.status(200)){
      return  res.status(500).send({error: "Erro interno do servidor"})
    }
    res.send({error: error.message || error.sqlMessage})
}
}

export default getAllMovies
