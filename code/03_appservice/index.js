const express = require('express')
const axios = require('axios')
const app = express()

axios.defaults.responseType = 'text'

app.get('/hello_world', async (req, res) => {
    const world = await axios.get('http://world.service/world')
    const result = await axios.get(`http://hello.service/hello?arg0=${world}`)
    res.send(result)
})

app.listen(3000)
