import express from "express"
import cors from "cors"
import {AddressInfo} from "net"

const app = express();
app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, ():void => {
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Server running on http://localhost:${address.port}`)
        return;
    } 
    console.error('Servidor não inciado!')
})

export default app