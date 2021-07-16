import {app} from './app'
import { deleteCountryById } from './endpoints/deleteCoutryById'
import {getAllCountries} from './endpoints/GetAllCountries'
import { getCountryByFilter } from './endpoints/getCountryByFilter'
import { getCountryById } from './endpoints/getCountryById'
import { getRandomCountry } from './endpoints/getRandomCountry'
import { postCountryById } from './endpoints/postCountryById'

app.get("/countries", getAllCountries)
app.get("/countries/search", getCountryByFilter)
app.get("/countries/random", getRandomCountry)
app.get("/countries/:id", getCountryById)
app.delete("/countries/:id", deleteCountryById)
app.post('countries/:id', postCountryById)
