export interface ICalc {
    operation: string;
    result: number;
    creation: Date;
}
export declare const CalcModel: import("mongoose").Model<ICalc, {}, {}, {}, import("mongoose").Document<unknown, {}, ICalc, {}, {}> & ICalc & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
//# sourceMappingURL=calcModels.d.ts.map