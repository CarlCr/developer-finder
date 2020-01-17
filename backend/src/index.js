const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
const app = express()

// adiciona aqui as suas configurações do mongobd
mongoose.connect('mongodb+srv://<user>:<password>@cluster0-efoe3.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(3333)