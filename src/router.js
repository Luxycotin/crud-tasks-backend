const {rutas} = require("express").Router();
import { 
    mostrarTareas,
    editarTarea,
    eliminarTarea,
    buscarTarea
} from "./controllers"; 
import { crearTarea } from "./controllers";

rutas.get("/tasks", mostrarTareas)
rutas.get("/tasks/:id", buscarTarea)
rutas.post("/tasks", crearTarea)
rutas.put("/tasks/:id", editarTarea)
rutas.delete("/tasks/:id", eliminarTarea)

export {rutas};
//rutas.post("/tasks", body("title").isString().notEmpty().legth({ min: 5, max:10}) crearTarea)