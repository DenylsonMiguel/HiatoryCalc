import type { Request, Response } from "express";
import { CalcService } from "../services/calcService.js";

class CalcController {
    private service = new CalcService();
    
    getAll = async (req: Request, res: Response) => {
        const history = await this.service.getAll();
        res.json(history);
    }
    
    getById = async (req: Request, res: Response) => {
        const id: string | undefined = req.params.id;
        if (!id)
            return res.status(400).json({ "error": "id not founded" });
        const calc = await this.service.getById(id);
        if (calc) 
            res.json(calc);
        else
            res.status(404).json({ "error": "calc not founded" });
    }
    
    create = async (req: Request, res: Response) => {
        const data = req.body;
        const newCalc = await this.service.create(data);
        res.status(201).json(newCalc);
    }
}

export const calcController = new CalcController();