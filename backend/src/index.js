const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
const app = express()

// add your mongobd settings here
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-kdxee.mongodb.net/week10?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(3333)