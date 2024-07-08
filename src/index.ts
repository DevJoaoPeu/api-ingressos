import express from "express"

import { router } from "@/routes"
import cors from "cors"
import * as dotenv from "dotenv"
import { serve, setup } from "swagger-ui-express"
import swaggerDocs from "./swagger.json"

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
)
app.use(express.json())

app.use("/docs", serve, setup(swaggerDocs))
app.use(router)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
