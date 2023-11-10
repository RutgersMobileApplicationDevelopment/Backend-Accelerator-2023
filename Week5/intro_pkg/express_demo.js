const express = require('express')
const app = express()
const port = 3000

const { MongoClient } = require("mongodb");
const password = "";
const uri = `mongodb+srv://admin:${password}@cluster0.vbk619n.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

const database = client.db('sample_guides');
const planets = database.collection('planets');

app.get("/planet/:name", async (req, res) => {
    let result = ""

    // req.params.name
    const query = {
        "name": req.params.name
    }

    const planet = await planets.findOne(query);
    console.log(planet)
    result = {
        "name": planet.name,
        "orderFromSun": planet.orderFromSun,
        "hasRings": planet.hasRings,
        "surfaceTemperature": planet.surfaceTemperatureC
    };

    res.send(result);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})