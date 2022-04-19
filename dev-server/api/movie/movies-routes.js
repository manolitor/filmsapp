const express = require('express')
const router = express.Router()

router.get('/movie/:id', (req, res) =>{
    res.send('get a movie')
})

router.get('/movie', (req, res) =>{
    res.send('get all movies')
})

module.exports = router;