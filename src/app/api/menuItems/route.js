import { Response } from "node-fetch";
import { connectToDatabase } from "../mongodb";
import { NextResponse } from "next/server";
import { Next } from "react-bootstrap/esm/PageItem";
const dotenv = require("dotenv");
dotenv.config();

export async function GET(){
    try{
        const client = await connectToDatabase();
        const db = client.db(process.env.DB_NAME);
        const menuCollection = db.collection("menu");
        const menuItems = await menuCollection.find().toArray();

        menuItems.forEach(item => {
            console.log(item.Pizze.name);
        });
        return(NextResponse.json(menuItems));
    }
    catch(error){
        console.error("Errore durante il recupero degli elementi del Menu:", error);
        NextResponse.json({error: "Errore durante il recupero degli elementi del Menu"});
    }
}