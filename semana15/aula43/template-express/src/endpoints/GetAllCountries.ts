 import {Request, Response} from "express"
import { countries } from "../data"
 
 export const getAllCountries = (
     req: Request,
     res: Response
 ):void =>  {
    console.log(req.headers, req.query)
    res.statusMessage= "Deu bom"
    res.send(countries)
    console.table(countries)
}