import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const uri = `mongodb+srv://${process.env.CLIENT_USER}:${process.env.CLIENT_PASS}@${process.env.CLUSTER_URL}`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri)

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// run().catch(console.dir);

export async function findUser(usr, pw) {
  try {
    await client.connect();
    const collection = await client.db('rumad_week_6').collection('user_pass')
    const user = await collection.findOne({username: usr}, function(err, result) {
      if (err) throw err;
      // console.log(result)
    })
    if(user.password == pw) {
      return 200
    } else {
      return 401
    }
    // console.log(user)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}

export async function addSession() {
  try {
    await client.connect();
    const generateRandomString = (length=6)=>Math.random().toString(20).substring(2, length)
    const collection = await client.db('rumad_week_6').collection('sessions')
    const sessionDetails = generateRandomString(10)
    const insert = await collection.insertOne({ timeField: new Date(), metaField:  sessionDetails})
    console.log(insert)
    return sessionDetails
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}

export async function fetchSession(sessionData) {
  try {
    await client.connect();
    const collection = await client.db('rumad_week_6').collection('sessions')
    const session = await collection.findOne({metaField: sessionData})
    return session
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}

async function clearSessions() {
  try {
    await client.connect();
    const collection = await client.db('rumad_week_6').collection('sessions')
    const session = await collection.deleteMany({})
    console.log(session)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}

// clearSessions()