'use server'
import { Response } from "node-fetch";
import { connectToDatabase } from "../mongodb";
import { NextResponse } from "next/server";
const dotenv = require("dotenv");
dotenv.config();

export async function POST(newUser) {
    try {
        const client = await connectToDatabase();
        const db = client.db(process.env.DB_NAME);
        const userCollection = db.collection("users");
        let user = newUser.username
        let name;
        let description;
        let price;
        newUser.orders_history.forEach(order => {
            order.items.forEach(ordini => {
                console.log(ordini.name);
                name = ordini.name
                description = ordini.description
                price = ordini.price
            });
        });
        const verifyUser = await userCollection.findOne({ username: user })
        if (verifyUser) {
            const ciao = await userCollection.updateMany(
                {
                    "username": user,
                    "orders_history": { "$exists": true }
                },
                {
                    "$push": {
                        "orders_history.$[].items": { name, description, price }
                    }
                }
            );
            console.log("Utente aggiornato")
        }
        else {
            const result = await userCollection.insertOne(newUser);
            if (result) {
                console.log("Utente inserito con successo")
            }
            else {
                console.log("Utente non inserito")
            }
        }

    }
    catch (error) {
        console.error("Errore durante il recupero degli elementi del Users:", error);
        NextResponse.json({ error: "Errore durante il recupero degli elementi del Users" });
    }
}

