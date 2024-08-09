const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use(require("./router"))

app.listen(3000, ()=> {console.log("El servidor corriendose con éxito en el puerto 3000")});

