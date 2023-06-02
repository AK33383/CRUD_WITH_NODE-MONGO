const express = require('express')
const app = express()
const expressroutes = require('./src/routes/expressroutes');
const dotenv = require('dotenv')

dotenv.config();

const port = process.env.PORT


app.use(express.json())

app.use(expressroutes)

app.listen(port,()=>{
    console.log(`your app is listening on port ${port}`)
})





