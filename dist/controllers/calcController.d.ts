import type { Request, Response } from "express";
declare class CalcController {
    private service;
    getAll: (req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    create: (req: Request, res: Response) => Promise<void>;
}
export declare const calcController: CalcController;
export {};
//# sourceMappingURL=calcController.d.ts.map