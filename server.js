const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
app.use(morgan('combined'))

const router1 = require('./apiRouter')

// middleware
const check = (req, res, next) => {
  const dangnhap = true
  if(dangnhap) {
    next()
  }else {
    res.json('Bạn chưa đăng nhập')
  }
}

app.get('/', check, (req, res, next) => {
  res.json('Dữ liệu')
})

app.use('/api/v1/', router1)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})