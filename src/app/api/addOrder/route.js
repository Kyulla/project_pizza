'use server'
import { connectToDatabase } from "../mongodb";
import { NextResponse } from "next/server";
const dotenv = require("dotenv");
dotenv.config();

export async function POST(newOrder) {
    try {
        const client = await connectToDatabase();
        const db = client.db(process.env.DB_NAME);
        const ordersCollection = db.collection("orders_history");
        
        if (!newOrder) {
            throw new Error('I dati dell\'ordine non sono validi');
        }

        const result = await ordersCollection.insertOne(newOrder);

        if (result.insertedCount === 1) {
            return NextResponse.created({ success: true, message: 'Ordine salvato con successo' });
        } else {
            throw new Error("Errore durante il salvataggio dell'ordine");
        }
    } catch (error) {
        console.error("Errore durante il salvataggio dell'ordine:", error);
        return NextResponse.error({ success: false, error: error.message });
    }
}
