import { CalcService } from "../services/calcService.js";
class CalcController {
    service = new CalcService();
    getAll = async (req, res) => {
        const history = await this.service.getAll();
        res.json(history);
    };
    getById = async (req, res) => {
        const id = req.params.id;
        if (!id)
            return res.status(400).json({ "error": "id is required" });
        const calc = await this.service.getById(id);
        if (calc)
            res.json(calc);
        else
            res.status(404).json({ "error": "Calc not found" });
    };
    create = async (req, res) => {
        const data = req.body;
        const newCalc = await this.service.create(data);
        res.status(201).json(newCalc);
    };
    delete = async (req, res) => {
        const id = req.params.id;
        if (!id)
            return res.status(400).json({ "error": "id is required" });
        const calc = await this.service.delete(id);
        if (calc)
            res.status(200).json(calc);
        else
            res.status(404).json({ "error": "Calc not found" });
    };
}
export const calcController = new CalcController();
//# sourceMappingURL=calcController.js.map