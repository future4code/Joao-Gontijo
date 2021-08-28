import app from "./app"
import createUser from "./endpoints/createUser"
import { getAllAdresses } from "./endpoints/getAllAdresses"


app.get ('/address', getAllAdresses)
app.post('/address', createUser)