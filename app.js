const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes/main-rote')
const database = require('./util/database')
const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}))

app.use(router)

app.use(express.static('./public'))

database.connect(err => {
    if(err) throw err
    app.listen(1337)
    console.log('succeed to connect!')
})
