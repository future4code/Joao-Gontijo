import {Request, Response} from 'express'
import countByGender from '../data/countGender'

const getGenderNumber = async(req:Request, res: Response):Promise<any> =>{
    try {
        const {gender} = req.query
        if(typeof gender !== "string"){
           return res.status(422).send("Tipo inválido!")
        }

        const result = await countByGender(gender)
        if(!result){
            res.status(404).send("Gênero não encontrado na tabela!")
        }
        res.status(200).send(`O número de atrizes/atores do gênero ${gender} é: ${result}`)
    } catch (error) {
        if(res.status(200)){
            res.status(500).send({error: "Erro interno do servidor!"})
        }
        res.send({error: error.sqlMessage || error.message})
    }
}
 
export default getGenderNumber