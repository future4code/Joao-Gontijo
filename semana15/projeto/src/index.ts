import express, {Express, Request, Response} from "express"
import cors from "cors"
import {accounts} from "./accounts"

const app = express()

app.use(express.json())
app.use(cors())

app.post("/users/create", (req: Request, res: Response) => {
    try {
        const{name, CPF, dateOfBirthAsString} = req.body
        const [day, month, year] = dateOfBirthAsString.split('/')
        const dateOfBirth : Date = new Date(`${day}-${month}-${year}`)

        const ageZoada:number = Date.now() - dateOfBirth.getTime()
        const ageCertinha: number = ageZoada / 1000 / 60 / 60 / 24 / 365
        
        if (ageZoada <18){
            res.statusCode =406
            throw new Error ("Di menor")
        }

        accounts.push ({
            name,
            CPF,
            dateOfBirth,
            balance: 0,
            statement: []
        })
        res.status(201).send("Criou a conta!")
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
})

app.get("/users/all", (req: Request, res: Response) => {
    try {
        if(!accounts.length) {
            res.statusCode=404
            throw new Error ("Achou conta não")
        }
        res.status(200).send(accounts)
    } catch (error) {
        res.send(error.message)
    }
})

app.listen(3003)


