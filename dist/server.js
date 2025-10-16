import "dotenv/config";
import express from "express";
import { connectDB } from "./db.js";
import routes from "./routes/calc.js";
const app = express();
app.use(express.json());
connectDB();
app.use(routes);
const PORT = process.env.PORT || 3000;
console.log(process.env.PORT);
console.log(process.env.MONGO_URI);
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
//# sourceMappingURL=server.js.map