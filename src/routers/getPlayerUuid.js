const axios = require('axios')

const playerID = async(username) => {
    return new Promise(async(resolve, reject) => {
        await axios.get(`https://playerdb.co/api/player/minecraft/${username}`)
            .then((res) => {
                if(!res.data){
                    // console.log(res.data);
                    reject(res)
                }
                // console.log(res.data);
                resolve(res.data.data.player.raw_id)
    })
})}

module.exports = playerID