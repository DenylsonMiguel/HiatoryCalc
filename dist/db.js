import "dotenv/config";
import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI;
export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("DB connected sucesfully");
    }
    catch (err) {
        console.error(`Error: ${err}`);
    }
};
//# sourceMappingURL=db.js.map