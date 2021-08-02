import {Request, Response} from "express";
import selectUserByPage from "../data/selectUserByPage";

export const getUserByPage = async (req: Request, res: Response): Promise<void> => {
    try {

        const page = Number(req.query.page) || 1

        const users = await selectUserByPage(page)

        res.status(200).send(users)

    } catch (error:any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
} 