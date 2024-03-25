import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const dbName = "project_pizza";
let cachedClient = null;

async function connectToDatabase(){
    if(cachedClient){
        return cachedClient;
    }

    const client = await MongoClient.connect(uri, {useNewUrlParses: true, useUnifiedTopology: true});
    cachedClient = client;

    return client;
}