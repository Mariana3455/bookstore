const express = require( 'express')
const app = express()
const port = process.env.PORT || 4040
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId} = require('mongodb');

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send ('Hello World!')})

///mongodb
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        const  bookCollection = client.db("BookInventory").collection("books");

        app.post("/uploadBook", async(req, res)=>{
            const data =req.body;
            const  result = await bookCollection.insertOne(data);
            res.send(result)
        })

        app.patch("/book/:id", async (req, res)=>{
            const  id = req.params.id;
            const  updateBookInfo = req.body;
            const  filter = {_id: new ObjectId(id)};
            const  options = {upsert:true};
            const updateDoc={
                $set: {
                    ...updateBookInfo
                }
            }
            const result = await bookCollection.updateOne(filter, updateDoc,options)
            res.send(result)
        })

        app.delete("/book/:id", async (req, res)=>{
            const  id = req.params.id;
            const  filter = {_id: new ObjectId(id)};
           const  result = await bookCollection.deleteOne(filter)
            res.send(result)
        })
        // find by category
        app.get("/allBooks", async (req, res) => {
            let query = {};
            if (req.query?.category) {
                const categoryRegex = new RegExp(req.query.category, 'i');
                query = { category: categoryRegex };
            }
            const result = await bookCollection.find(query).toArray();
            res.send(result);
        })

        app.get("/book/:id", async (req,res)=>{
            const id = req.params.id;
            const filter = {_id: new ObjectId(id)}
            const result = await bookCollection.findOne(filter);
            res.send(result)
        })



        await client.db("admin").command({ ping: 1 });
        console.log("You successfully connected to MongoDB!");
    } finally {

    }
}
run().catch(console.dir);

app.listen (port, () => {
        console.log(`http://localhost:${port}`)})
