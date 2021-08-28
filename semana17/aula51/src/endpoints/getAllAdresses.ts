import {Request, Response} from "express"
import selectAllUsers from "../data/selectAllAdresses"


export const getAllAddresses = async (req:Request, res: Response): Promise<void> => {
    try {
        const allAddresses = await selectAllUsers()
        res.status(200).send(allAddresses)
    } catch (error) {
        console.log(error)
    }
}