import {Request, Response} from "express"
import { countries } from "../data"
import { country } from "../types"

export const postCountryById = (
    req: Request,
    res: Response
) => {
    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    )
    if (result){
        res.send("Mudou")
    } else {
        res.statusCode = 404
        res.end()
    }
    
}


