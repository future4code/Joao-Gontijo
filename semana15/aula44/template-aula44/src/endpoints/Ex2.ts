import  { Request, Response } from 'express'
import {users} from "../data"
import { User } from '../types'


export const getUserByType = (req: Request, res: Response) => {
    let codeError:number = 400
    try {
        let type: string = (req.params.type as string).toUpperCase()
        
        let user: User [] = users.filter(user =>user.type === type)
        
        if(type !=="ADMIN" && type !=="NORMAL") {
            codeError = 404
            throw new Error ('User not found')
        } else {
            res.status(200).send(user)
        }
    } catch (err) {
        res.status(codeError).send({message: err.message})
    }
}
