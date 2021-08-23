import {Request, Response} from 'express'
import genderSalary from '../data/genderSalary'

const getAvgSalary = async (req:Request, res: Response): Promise<any> => {
    try {
        const {gender} = req.params
        const result = await(genderSalary(gender))
        res.status(200).send( `O salário médio do gênero ${gender} é: ${result}`)
    } catch (error) {
        res.status(500).send({error: error.sqlMessage || error.message})
    }
}

export default getAvgSalary