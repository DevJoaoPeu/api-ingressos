import express from "express"

import * as dotenv from "dotenv"
import { router } from "@/routes"
import { serve, setup } from "swagger-ui-express"
import swaggerDocs from "./swagger.json"

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use("/docs", serve, setup(swaggerDocs))
app.use(router)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
