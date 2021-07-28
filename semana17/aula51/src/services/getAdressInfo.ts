import axios from "axios"
import { addressInfo } from "../types"

export const getAddressInfo = async(
    zipcode: string
):Promise<addressInfo | null> => {
    try {
         const result = await axios.get(`https://viacep.com.br/ws/${zipcode}/json/`)
         
         return {
            zipcode: result.data.zipcode,
            street: result.data.street,
            number: result.data.number,
            complement: result.data.complement,
            neighbourhood: result.data.neighbourhood,
            city: result.data.city,
            state: result.data.state
         }
    } catch (error) {
        console.log(error.response ? error.response.data : error.message);
        return null
    }
   
}