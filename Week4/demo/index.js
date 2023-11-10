const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.use( express.urlencoded() )

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/post.html'));
})

app.post('/post/form', (req, res) => {
  res.send('POST request to the homepage')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})