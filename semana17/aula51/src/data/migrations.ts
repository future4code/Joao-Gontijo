import connection from "./connection";
import users from './users.json'

const printError = (error:any) => { console.log(error.sqlMessage || error.message )}

const createTables = async():Promise<any> => {
   try {
      const criaTabela =  await connection.raw(`
        CREATE TABLE IF NOT EXISTS aula51_users (
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            cep VARCHAR(255) NOT NULL,
            logradouro VARCHAR(255) NOT NULL,
            numero INT NOT NULL,
            complemento VARCHAR(255),
            bairro VARCHAR(255) NOT NULL,
            localidade VARCHAR(255) NOT NULL,
            uf VARCHAR(255) NOT NULL
        )
    `)
    if(criaTabela){
        return console.log('Tabela  criada!')
    }
   } catch (error) {
       printError
   }
}

const insertEndereco = async () => await connection('aula51_users')
.insert(users)
.then(() =>  {console.log("Endereço adicionado!") })
.catch(printError)

const closeConnection = () => connection.destroy()

createTables()
.then(insertEndereco)
.finally(closeConnection)