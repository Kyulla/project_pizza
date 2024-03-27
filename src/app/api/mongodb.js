import { MongoClient } from "mongodb";
const dotenv = require("dotenv");
dotenv.config();

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

const uri = `mongodb+srv://${user}:${password}@${host}/${database}`;
let cachedClient = null;

export async function connectToDatabase(){
    if(cachedClient){
        return cachedClient;
    }

    const client = await MongoClient.connect(uri);
    cachedClient = client;

    return client;
}