import app from "./app"

import { updateActor } from "./endpointfunctions"
import deleteActorById from "./endpoints/deleteActorById"
import getActorById from "./endpoints/getActorById"
import getActorByName from "./endpoints/getActorByName"
import getAllMovies from "./endpoints/getAllMovies"
import getAvgSalary from "./endpoints/getAvgSalary"
import getGenderNumber from "./endpoints/getGenderNumber"
import getMovie from "./endpoints/GetMovie"
import postActor from "./endpoints/postActor"
import postMovie from "./endpoints/postMovie"
import updateSalary from "./endpoints/putSalary"

app.get('/actors', getGenderNumber)
app.get('/actors/:id', getActorById)
// app.get('/actors/:name',getActorByName )
// app.get('/actors/:gender', getAvgSalary)
app.post('/actors', postActor)
app.put('/actors', updateSalary)
app.delete('/actors/:id', deleteActorById)


app.post('/movies', postMovie )
app.get('/movies/all', getAllMovies)
app.get('/movies/search', getMovie)

// app.get('/users/:id', async (req, res) => {
//     try {
//         const id = req.params.id
//         const result = await connection.raw(`
//         SELECT * FROM Actor WHERE id = '${id}'
//         `)
//         res.status(200).send(result[0][0])
//         console.log(result[0][0])

//     } catch (error) {
//         res.status(400).send(error.sqlMessage || error.message)
//     }
// })

// app.get ('/actors/:name', async (req, res) => {
//     try {
//         const name = req.params.name
//         const result = await connection.raw (`
//         SELECT * FROM Actor WHERE name = '${name}'
//         `)

//         res.status(200).send(result[0][0])
//         console.log(result[0][0])
//     } catch (error) {
//         res.status(400).send(error.sqlMessage || error.message)
//     }
// })

// app.get('/users/', async (req, res) => {
//     try {
//         const gender = req.query.gender as string
//         const result = await connection.raw (`
//         SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
//         `)
//         const count = (result[0][0].count).toString()
//         res.status(200).send(count)
//         console.log(count)
        
//     } catch (error) {
//         res.status(400).send(error.sqlMessage || error.message)
//     }
// })


// app.post('/users', async (req, res) => {
//     const {salary, id} = req.body
//     try { 
//     await connection("Actor")
//     .update({salary})
//     .where({id})
    
//     res.status(200).send("Salário atualizado")
        
//     } catch (error) {
//     res.status(400).send(error.sqlMessage || error.message)
//     }
// })


//   app.delete("/actor/:id", async (req, res) => {
//       try {
//           await connection("Actor")
//           .delete()
//           .where({id: req.params.id})
//           res.status(200).send(`Deletou o ator de ID ${req.params.id}`)
          
//       } catch (error) {
//           res.status(400).send(error.sqlMessage || error.message)
//       }
//   })



// (async()=> {
//    await newSalary('001', 20000)
// })()