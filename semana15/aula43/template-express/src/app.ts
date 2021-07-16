// npm i express cors
// npm i -D @types/express @types/cors

import express, { Express } from 'express'
import cors from 'cors'

export const app: Express = express()

app.use(express.json())
app.use(cors())

app.get ("/", (req,res) => {
    res.send("Hello from Express! =)")
})

app.listen(3010, () => {
    console.log("Server ready!")
})