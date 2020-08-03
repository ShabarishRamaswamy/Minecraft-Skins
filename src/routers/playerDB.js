const express = require('express')
const axios = require('axios');
const playerID = require('./craftar');
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

router.get('/id/:username', (req, res) => {
    // console.log(req.params.username)
    const playerUuid = playerID(req.params.username)
    res.send(playerUuid)
})

router.get('/hello', (req, res) => {
    res.send('Hello')
})

module.exports = router