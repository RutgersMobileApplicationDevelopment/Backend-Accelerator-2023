const express = require('express')
const app = express()
const port = 3000

const { MongoClient } = require("mongodb");
const __uri = "<connection string uri>";
const client = new MongoClient(uri);

const database = client.db('sample_guides');
const planets = database.collection('planets');

app.get("/planet/:name", (req, res) => {
    let result = ""

    // req.params.name
 
    res.send(result)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})