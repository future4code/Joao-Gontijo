import express from 'express'
import createTask from './endpoints/createTask'
import createUser from './endpoints/createUser'
import editUser from './endpoints/editUser'
import getTaskById from './endpoints/getTaskById'
import getUserById from './endpoints/getUserById'

const app = express ()
app.use (express.json())
app.listen(3003, () => {
    console.log("servidor na porta 3003")
})

app.put ('/user', createUser)
app.get('/user/:id', getUserById)
app.post('/user/edit/:id', editUser)
app.put('/task', createTask)
app.get('/task/:id', getTaskById)