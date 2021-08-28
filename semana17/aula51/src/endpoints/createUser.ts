import { user } from "../types";
import { Request, Response } from "express"
import { getAddressInfo } from "../services/getAddressInfo";
import connection from "../data/connection";
import transporter from "../services/mailTransporter";

export default async function createUser(
   req: Request,
   res: Response
): Promise<any> {
   try {

      const {nome, cep, numero, complemento} = req.body

      if (!nome || !cep || !numero) {
        res.status(422).send({error: "nome, cep e número são obrigatórios"})
      }

      const id: string = Date.now().toString()

     const {logradouro, bairro, localidade, uf}: any = await getAddressInfo(cep)

     const newUser:user = {id, nome, cep, logradouro, numero, complemento, bairro, localidade, uf}
    await connection('aula51_users').insert(newUser)

    
    // const mailInfo = await transporter.sendMail({
    //     from: `<${process.env.NODEMAILER_USER}>`,
    //     to: email
    // })

    res.status(201).send("Usuário criado!")


   } catch (error) {

      if (res.status(200)) {
         res.status(500).send({error: "Erro interno do servidor"})
      } else {
         res.send({error: error.sqlMessage || error.message})
      }

   }
}