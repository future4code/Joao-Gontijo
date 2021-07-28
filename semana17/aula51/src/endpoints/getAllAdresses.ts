import {Request, Response} from "express"
import selectAllUsers from "../data/selectAllAdresses"


export const getAllAdresses = async (req:Request, res: Response): Promise<void> => {
    try {
        const allAdresses = await selectAllUsers()
        res.status(200).send(allAdresses)
    } catch (error) {
        console.log(error)
    }
}