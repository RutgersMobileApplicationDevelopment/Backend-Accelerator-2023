const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const __uri = "<connection string uri>";


const client = new MongoClient(uri);

// findOne demo
async function demo1() {
    try {
        const database = client.db('sample_mflix');
        const movies = database.collection('movies');

        // Query for a movie that has the title 'Back to the Future'
        const query = { title: 'Back to the Future' };
        const movie = await movies.findOne(query);

        console.log(movie);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

// demo1().catch(console.dir);

// insertOne demo
async function demo2() {
    try {
        const database = client.db('sample_guides');
        const planets = database.collection('planets');

        // Query for a movie that has the title 'Back to the Future'
        await planets.insertOne(
            {
                "name": "Null",
                "orderFromSun": {
                  "$numberInt": "1"
                },
                "hasRings": false,
                "mainAtmosphere": [],
                "surfaceTemperatureC": {
                  "min": {
                    "$numberInt": "-173"
                  },
                  "max": {
                    "$numberInt": "427"
                  },
                  "mean": {
                    "$numberInt": "67"
                  }
                }
              }
        );
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

// demo2().catch(console.dir);

// update demo
async function demo3() {
  try {
      const database = client.db('sample_guides');
      const planets = database.collection('planets');

      // Query for a movie that has the title 'Back to the Future'
      await planets.updateOne(
          {"name": "Null"},
          {
            $set: {"name": "Rumad"}
          }
      );
  } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
  }
}

// demo3().catch(console.dir);

// delete demo
async function demo4() {
  try {
      const database = client.db('sample_guides');
      const planets = database.collection('planets');

      // Query for a movie that has the title 'Back to the Future'
      await planets.deleteOne(
          {"name": "Rumad"}
      );
  } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
  }
}

// demo4().catch(console.dir);