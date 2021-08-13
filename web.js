const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const url = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false/khra'


mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})



app.use(express.json())

const port= process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server started')
})
const bdRouter = require('./routers/bd')
app.use('/bd',bdRouter)




