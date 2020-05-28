const express = require('express')
const hellolib = require('hellolib')
const worldlib = require('worldlib')
const app = express()

app.get('/hello_world', (req, res) => res.send(hellolib.hello(worldlib.world())))

app.listen(3000)
