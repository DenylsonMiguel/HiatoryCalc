import type { ICalc } from "../models/calcModels.js"
import { CalcModel } from "../models/calcModels.js";

export class CalcService {
    async getAll(): Promise<ICalc[]> {
        return await CalcModel.find();
    }
    
    async getById(id: string): Promise<ICalc | null> {
        return await CalcModel.findById(id);
    }
    
    async create(data: { operation: string, result: number }): Promise<ICalc> {
        const calc = new CalcModel(data);
        return await calc.save();
    }
}