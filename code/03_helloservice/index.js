const express = require('express')
const hellolib = require('hellolib')
const app = express()

app.get('/hello', (req, res) => res.send(hellolib.hello(req.query.arg0)))

app.listen(3000)
