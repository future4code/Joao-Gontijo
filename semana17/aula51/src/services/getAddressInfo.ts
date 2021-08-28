import axios from "axios"
import { addressInfo } from "../types"

export const getAddressInfo = async (
    zipcode: string
): Promise<addressInfo | null > => {
    try {
        
        const result = await axios.get(`https://viacep.com.br/ws/${zipcode}/json/`)
        const {cep, logradouro, bairro, localidade, uf} = result.data
        
    const endereco ={
        cep,
        logradouro,
        bairro,
        localidade,
        uf
    } 

    return endereco
    } catch (error) {
        console.log(error.response ? error.response.data : error.message)
        return null
    }
  
}
const address = async() => {
    const cep = '70150-900'
   const result = await getAddressInfo(cep)
    return console.log(result)    
}
address()

// getAddressInfo('70150-900')
// .then(console.log)
// .catch(console.log)



