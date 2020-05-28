const express = require('express')
const worldlib = require('worldlib')
const app = express()

app.get('/world', (req, res) => res.send(worldlib.world()))

app.listen(3000)
