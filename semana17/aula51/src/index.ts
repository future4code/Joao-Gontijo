import app from "./app"
import createUser from "./endpoints/createUser"
import { getAllAddresses } from "./endpoints/getAllAdresses"


app.get ('/address', getAllAddresses)
app.post('/address', createUser)