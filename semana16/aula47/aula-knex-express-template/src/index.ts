import app from "./app"
import connection from "./connection"
import { updateActor } from "./endpointfunctions"


app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id
        const result = await connection.raw(`
        SELECT * FROM Actor WHERE id = '${id}'
        `)
        res.status(200).send(result[0][0])
        console.log(result[0][0])

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

app.get ('/actors/:name', async (req, res) => {
    try {
        const name = req.params.name
        const result = await connection.raw (`
        SELECT * FROM Actor WHERE name = '${name}'
        `)

        res.status(200).send(result[0][0])
        console.log(result[0][0])
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

app.get('/users/', async (req, res) => {
    try {
        const gender = req.query.gender as string
        const result = await connection.raw (`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
        `)
        const count = result[0][0]
        res.status(200).send(count)
        console.log(count)
        
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})


app.post('/users', async (req, res) => {
    const {salary, id} = req.body
    try { 
    await connection("Actor")
    .update({salary})
    .where({id})
    
    res.status(200).send("Salário atualizado")
        
    } catch (error) {
    res.status(400).send(error.sqlMessage || error.message)
    }
})


  app.delete("/actor/:id", async (req, res) => {
      try {
          await connection("Actor")
          .delete()
          .where({id: req.params.id})
          res.status(200).send(`Deletou o ator de ID ${req.params.id}`)
          
      } catch (error) {
          res.status(400).send(error.sqlMessage || error.message)
      }
  })