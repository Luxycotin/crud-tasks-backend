
import cors from "cors"
import express from "express"
import morgan from "morgan"

import { taskRouter } from "./routes.js"

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/tasks", taskRouter)//

app.listen(3000, () => {
  console.log("Serivdor corriendse con éxito en el puerto 3000")
})