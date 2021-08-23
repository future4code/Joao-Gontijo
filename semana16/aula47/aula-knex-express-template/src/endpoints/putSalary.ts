import {Request, Response} from 'express'
import newSalary from '../data/newSalary'

const updateSalary = async(req:Request, res: Response): Promise<any> => {
   try {
       const {id, salary} = req.body
    if(!id || !salary){
      return  res.status(422).send({error: "Insira os dados corretamente"})
    }

   await newSalary(id, salary)
    res.status(200).send({message: `Salário atualizado com sucesso!`})
   } catch (error) {
       if(res.status(200)){
           return res.status(500).send({error: "Erro interno do servidor!"})
       }
       res.send({error: error.message || error.sqlMessage})
   }
    
}
export default updateSalary