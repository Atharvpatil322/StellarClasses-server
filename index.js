import express from "express"
import dotenv from "dotenv"
import { connectToMongoDb } from "./lib/mongo.js"
import routes from "./routes.js"
import bodyParser from 'body-parser'
 

dotenv.config()

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const port = process.env.PORT || 3000


app.listen(port, () => {
    connectToMongoDb()
    console.log(`Server running at port ${port}`)
    routes(app);
});

