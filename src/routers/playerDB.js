const express = require('express')
const axios = require('axios');
const playerID = require('./getPlayerUuid');
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', { title: 'Hello Everyone' });
})

router.get('/id/:username', (req, res) => {
    // var player_uuid;
    if(!req.params.username){
        res.send({"Error": "Please Give a Valid Input"})
    }
    playerID(req.params.username)
        .then((uuid) => {
            // player_uuid = uuid
            // console.log(uuid)
            res.send({
                "avatar": `https://crafatar.com/avatars/${uuid}`,
                "head": `https://crafatar.com/renders/head/${uuid}`,
                "body": `https://crafatar.com/renders/body/${uuid}`,
                "skins": `https://crafatar.com/skins/${uuid}`,
                "capes": `https://crafatar.com/capes/${uuid}`,
            })
        })
        .catch((e) => {
            console.log(e)
            res.send('An Error Occured. Try Again or Change the Searh term.')
        })
})

router.get('/hello', (req, res) => {
    res.send('Hello')
})

module.exports = router