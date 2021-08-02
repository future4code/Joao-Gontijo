import app from "./app"
import { getAllAdresses } from "./endpoints/getAllAdresses"
// INSERIMOS DADOS NA TABELA COM O COMANDO INSERT INTO aula_51 (`id`, `zipcode`, `street`, `number`, `neighbourhood`, `city`, `state`) VALUES (1, '30330-010', 'rua dos bobos', 0, "Sao Pedro", "BH", "MG");


app.get ('/address', getAllAdresses)