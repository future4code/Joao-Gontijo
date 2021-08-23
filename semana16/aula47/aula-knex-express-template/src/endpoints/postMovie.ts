import {Request, Response} from 'express'
import createMovie from '../data/createMovie'

export const postMovie = async(req:Request, res: Response):Promise<any> => {
   try {
       const {name, sinopse, data_de_lancamento, playing_limit_date} = req.body
       if(!name || !sinopse || !data_de_lancamento || !playing_limit_date){
           res.status(422).send({error: 'Preencha os parametros corretamente!'})
       }

       const result = await createMovie(
        name, 
        sinopse, 
        data_de_lancamento, 
        playing_limit_date
        )

        res.status(200).send({message: "Filme Criado com sucesso!"})
   } catch (error) {
       if(res.status(200)){
           res.status(500).send({error: "Erro interno do servidor"})
       }
       res.send({error: error.message || error.sqlMessage})
   }
    
}

export default postMovie