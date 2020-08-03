// const express = require('express')
// const router = express.Router()
const axios = require('axios')

const playerID = (username) => {
    axios.get(`https://playerdb.co/api/player/minecraft/${username}`)
        .then((res) => {
            return res.raw_id
        })
}

module.exports = playerID