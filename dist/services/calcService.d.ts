import type { ICalc } from "../models/calcModels.js";
export declare class CalcService {
    getAll(): Promise<ICalc[]>;
    getById(id: string): Promise<ICalc | null>;
    delete(id: string): Promise<ICalc | null>;
    create(data: {
        operation: string;
        result: number;
    }): Promise<ICalc>;
}
//# sourceMappingURL=calcService.d.ts.map