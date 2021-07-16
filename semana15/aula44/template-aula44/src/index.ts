import {app} from './app'
import { getAllUsers } from './endpoints/Ex1'
import { getUserByType } from './endpoints/Ex2'



app.get('/users', getAllUsers)
app.get('/users/:type',getUserByType)
// app.get('/user', getUserByName)


