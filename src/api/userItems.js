import { connectToDatabase } from "./mongodb";
const dotenv = require("dotenv");
dotenv.config();

export default async function getUsersItems(req, res){
    if(req.method !== "GET"){
        return res.status(405).json({error: "Metodo non consentito", allowedMethods: ["GET"]});
    }
    
    try{
        const client = await connectToDatabase();
        const db = client.db(process.env.DB_NAME);
        const userCollection = db.collection("users");
        const userItems = await userCollection.find().toArray();
        userItems.forEach(item => {
            console.log(item);
        });
        res.status(200).json(userItems);
    }
    catch(error){
        console.error("Errore durante il recupero degli elementi del Users:", error);
        res.status(500).json({error: "Errore durante il recupero degli elementi del Users"});
    }
}