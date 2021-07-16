import { Request, Response } from "express"
import { countries } from "../data"

export const deleteCountryById = (
    req: Request,
    res: Response
) => {

    try {
        if (req.headers.authorization !== 'tokenabc123') {
            res.statusCode = 401
           throw new Error('tatoou sem token')
        }

        const index: number = countries.findIndex(
            country => country.id === Number(req.params.id)
        )

        countries.splice(index, 1)
        
        res.status(204).end()
    } catch (error) {
      if (res.statusCode === 200) {
          res.status(500).end()
      } else {
          res.statusMessage = error.message
          res.end()
      }
    }

}