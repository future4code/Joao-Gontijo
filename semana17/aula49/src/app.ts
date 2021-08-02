import express from "express";
import cors from "cors";
import {AddressInfo} from "net";

const app = express();

app.use(express.json());
app.use(cors())

const server = app.listen (process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo ;
        console.log(`server rodando em http://localhost:${address.port}`);
    } else {
        console.error(`Servidor não iniciado`)
    }
})

export default app