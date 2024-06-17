import * as Express from "express"

import * as dotenv from "dotenv"
import { router } from "@/routes"

dotenv.config()

const PORT = process.env.PORT

const app = Express()

app.use(Express.json())
app.use(router)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
