const express = require('express')
const axios = require('axios')
const router = express.Router()
// const username = require('../../public/app')

// Get Username from PlayerDB
// axios.get(`https://playerdb.co/api/player/minecraft/shabarish`)
//     .then((res) => {
//         console.log(res.data)
//     })

router.get('/', (req, res) => {
    res.render('index', { title: 'Hello Everyone' });
})

router.get('/:username', (req, res) => {
    console.log(req.params.username)
    res.render('index', { title: `Hello ${req.params.username}` });
})

router.get('/hello', (req, res) => {
    res.send('Hello')
})

module.exports = router