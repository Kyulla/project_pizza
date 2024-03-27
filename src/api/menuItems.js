import { connectToDatabase } from "./mongodb";
const dotenv = require("dotenv");
dotenv.config();

export default async function getMenuItems(req, res){
    if(req.method !== "GET"){
        return res.status(405).json({error: "Metodo non consentito", allowedMethods: ["GET"]});
    }
    
    try{
        const client = await connectToDatabase();
        const db = client.db(process.env.DB_NAME);
        const menuCollection = db.collection("menu");
        const menuItems = await menuCollection.find().toArray();
        menuItems.forEach(item => {
            if (item.Pizze) {
                item.Pizze.forEach(pizza => {
                    console.log(pizza);
                });
            }
        });
        res.status(200).json(menuItems);
    }
    catch(error){
        console.error("Errore durante il recupero degli elementi del Menu:", error);
        res.status(500).json({error: "Errore durante il recupero degli elementi del Menu"});
    }
}