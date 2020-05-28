const express = require('express')
const { hello, world } = require('proxy')
const app = express()

app.get('/hello_world', async (req, res) => {
    const world = await world.world()
    const result = await hello.hello(world)
    res.send(result)
})

app.listen(3000)
