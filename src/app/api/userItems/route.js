import { Response } from "node-fetch";
import { connectToDatabase } from "../mongodb";
import { NextResponse } from "next/server";
const dotenv = require("dotenv");
dotenv.config();

export async function GET(){
    try{
        const client = await connectToDatabase();
        const db = client.db(process.env.DB_NAME);
        const userCollection = db.collection("users");
        const userItems = await userCollection.find().toArray();

        return(NextResponse.json(userItems));
    }
    catch(error){
        console.error("Errore durante il recupero degli elementi del Users:", error);
        NextResponse.json({error: "Errore durante il recupero degli elementi del Users"});
    }
}