
const { MongoClient, ServerApiVersion } = require('mongodb');


const username = encodeURIComponent("chakshubisht459");
const password = encodeURIComponent("lionking789@#$");
const uri = `mongodb+srv://${username}:${password}@cluster0.h9p94dc.mongodb.net/?retryWrites=true&w=majority`;
// let uri =
//   `mongodb+srv://${username}:${password}@${cluster}/?authSource=${authSource}&authMechanism=${authMechanism}`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

run().catch(console.dir);

const express=require('express');

const app=express();
const port=3001;

app.use(express.json());

app.use('/admin',require('../backend-EVacc/routes/Admin'));
app.use('/user',require('../backend-EVacc/routes/User'));

app.listen(port,()=>{
    console.log(`Listening to port:${port}`);
})
