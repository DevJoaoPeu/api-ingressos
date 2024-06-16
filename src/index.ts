import * as Express from "express"

import { router } from "./routes"
import * as dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT

const app = Express()

app.use(Express.json())
app.use(router)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
