import { createActor } from "../data/createActor";
import { Request, Response } from 'express'
import { SSL_OP_NO_QUERY_MTU } from "constants";


const putActor = async (req: Request, res: Response): Promise<any> => {

    try {
        const { name, salary, birth_date, gender } = req.body
        if (!name || !salary || !birth_date || !gender) {
            res.status(422).send({ error: "Preencha os campos corretamente!" })
        }
        await createActor(
            name,
            salary,
            new Date(birth_date),
            gender)

        res.status(200).send({ message: 'Ator criado!' })

    } catch (error) {
        if (res.status(200)) {
            res.status(500).send({ error: 'Erro interno do servidor' })
        }
        res.send({ error: error.sqlMessage || error.message })
    }
}

export default putActor