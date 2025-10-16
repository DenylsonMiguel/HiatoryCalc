import { Schema, model } from "mongoose";

export interface ICalc {
    operation: string
    result: number
    creation: Date
}

const calcSchema = new Schema<ICalc>({
    operation: { type: String, required: true },
    result: { type: Number, required: true },
    creation: { type: Date, default: Date.now },
});

export const CalcModel = model<ICalc>("Calc", calcSchema);