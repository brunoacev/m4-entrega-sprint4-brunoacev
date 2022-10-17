import "reflect-metadata"
import express from "express"
import userRouter from "./routes/user.router"
import loginRouter from "./routes/login.router"

const app = express()
app.use(express.json())

app.use("/users", userRouter)
app.use("/login", loginRouter)



export default app