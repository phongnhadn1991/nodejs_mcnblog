const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
app.use(morgan('combined'))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const router1 = require('./apiRouter')

app.post('/register', (req, res, next) => {
  const username = req.body.username
  const password = req.body.password

  console.log(username, password);
  res.json({username, password})
})

app.get('/', (req, res, next) => {
  res.json('HomePage')
})

app.use('/api/v1/', router1)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})