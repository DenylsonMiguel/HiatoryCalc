import { CalcModel } from "../models/calcModels.js";
export class CalcService {
    async getAll() {
        return await CalcModel.find();
    }
    async getById(id) {
        return await CalcModel.findById(id);
    }
    async create(data) {
        const calc = new CalcModel(data);
        return await calc.save();
    }
}
//# sourceMappingURL=calcService.js.map