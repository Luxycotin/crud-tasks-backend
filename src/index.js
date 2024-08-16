import express, { json } from "express"
import cors from "cors"
import morgan from "morgan"

import { rutas } from "./router.js"

const app = express()

app.use(cors())
app.use(json())
app.use(morgan("dev"))
app.use(require("./router"))

app.listen(3000, ()=> {console.log("Servidor corriendose con éxito en el puerto 3000")});

//Se crearía un pc 