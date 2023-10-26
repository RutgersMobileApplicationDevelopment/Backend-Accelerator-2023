const express = require('express')
const app = express()
const port = 3000

// Paths
app.get('/example_path', (req, res) => {
    res.send('We\'ve reached ./example_path!!')
})

// Params
app.get('/api/:example_param', (req, res) => {
    res.send(`We are on a sample API endpoint. Our <b>param</b> is <b>${req.params.example_param}</b>!`)
})

// Query string. e.g.: 0.0.0.0:3000/api?key=1234
app.get('/api/', (req, res) => {
    res.send(`We are on a sample API endpoint. Our <b>query</b> string is <b>${req.query.key}</b>!`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})