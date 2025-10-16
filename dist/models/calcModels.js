import { Schema, model } from "mongoose";
const calcSchema = new Schema({
    operation: { type: String, required: true },
    result: { type: Number, required: true },
    creation: { type: Date, default: Date.now },
});
export const CalcModel = model("Calc", calcSchema);
//# sourceMappingURL=calcModels.js.map