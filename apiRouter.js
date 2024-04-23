const express = require('express')
const router =  express.Router()

router.get('/', (req, res) => {
    res.json('Api V1')
})

router.get('/user', (req, res) => {
    res.json('User')
})

router.get('/product', (req, res) => {
    res.json('Product')
})

router.get('/:id', (req, res) => {
    res.json(req.params.id)
})

module.exports = router