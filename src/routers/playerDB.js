const express = require('express')
const axios = require('axios')
const router = express.Router()
// Get Username from PlayerDB
// axios.get(`https://playerdb.co/api/player/minecraft/shabarish`)
//     .then((res) => {
//         console.log(res.data)
//     })

router.get('/', (req, res) => {
    res.render('index', { title: 'Hello Everyone' });
})

router.get('/hello', (req, res) => {
    res.send('Hello')
})

module.exports = router