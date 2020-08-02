const express = require('express')
const router = express.Router()

router.get('/hellothere', (req, res) => {
    res.send('Hello')
})

module.exports = router