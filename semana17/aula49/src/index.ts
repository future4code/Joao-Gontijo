import app from "./app"
import connection from "./connection"
import { getUserByName } from "./endpoints/getUserByName"
import { getUserByPage } from "./endpoints/getUserByPage"
import { getUserByType } from "./endpoints/getUserByType"
import { getUserByNameOrType } from "./endpoints/orderUserByNameOrType"

// app.get('/users', getUserByName)
// app.get('/users/:type', getUserByType)
// app.get('/users', getUserByNameOrType) 
app.get('/users', getUserByPage)