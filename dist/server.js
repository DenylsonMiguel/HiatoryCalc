import "dotenv/config";
import express from "express";
import { connectDB } from "./db.js";
import routes from "./routes/calc.js";
const app = express();
app.use(express.json());
connectDB();
app.use(routes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
//# sourceMappingURL=server.js.map