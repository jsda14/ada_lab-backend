import express from 'express';
import routes from './Routes';
import bp from 'body-parser'
import cors from "cors"
import { SERVER_PORT } from './global/enviroment';
import { sequelize } from './db/config';
require('dotenv').config()

const app = express()
const PORT = SERVER_PORT

app.use(cors())
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use("/", routes)

app.listen(process.env.PORT , () => {
    console.log(`Listening on port http://localhost:${PORT}`)
})


sequelize.sync().then( () => {
    console.log('Conexión a base de datos');
})
