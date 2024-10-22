const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors =require('cors');
const app = express();
const port = process.env.PORT || 5000;


//midleware
app.use(cors());
app.use(express.json());

//djangooptional
//UrmuHmRmFcWgjOpl


// const uri = "mongodb+srv://djangooptional:UrmuHmRmFcWgjOpl@cluster0.gr92e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//
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
    const usercalection = client.db("usersDB").collection("users");

    app.get('/users',async(req,res)=>{

      const cursor = usercalection.find();
      const result = await cursor.toArray();
      res.send(result);

    })
    app.get("/users/:id",async(req,res)=>{
      const id = req.params.id;
      const query ={_id: new  ObjectId(id)}
      const user =await usercalection.findOne(query);
      res.send(user);
    })
    app.put('/users/:id', async(req, res) => {
        const id = req.params.id;
        const user = req.body;
        const filter ={_id: new  ObjectId(id)}

        const option = {upsert : true};
        const updateduser ={
          $set:{
            name : user.name,
            email:user.email,
          }
        }
        const result = await usercalection.updateOne(filter,updateduser,option);
        res.send(result);

       
    })
    

    app.post('/users',async(req,res)=>{
        const user = req.body;
        const result = await usercalection.insertOne(user);
        res.send(result);
    })

    app.delete('/users/:id',async(req,res)=>{
      const id = req.params.id;
      const query ={_id: new  ObjectId(id)}
      const result = await usercalection.deleteOne(query);
      res.send(result); 
    })





    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);










app.get('/',(req,res)=>{
    res.send("hello riad");
})

app.listen(port);