import "dotenv/config";
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI)
    throw new Error("MONGO_URI not defined in environment variables");

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("DB connected sucessfully");
    } catch (err) {
        console.error(`Error: ${err}`);
    }
}