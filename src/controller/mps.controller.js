import { MpsService } from "../services";

export default class MpsController {
    static async getText(req, res, next) {
        try {
            const data = await MpsService.getText();
            return res.json(data);
        } catch (error) {
            next(error)
        }
    };

    static async addText(req, res, next) {
        try {
            const { firstname, lastname, surname, phonenumber, key } = req.body;
            const result = await MpsService.addText({ firstname, lastname, surname, phonenumber, key });
            res.json(result)
        } catch (error) {
            next(error);
        }
    }

    static async putText(req, res, next) {
        try {
            const {id} =req.params
            const { firstname, lastname, surname, phonenumber, key } = req.body;
            const result = await MpsService.putText(id,{firstname,lastname,surname,phonenumber,key});
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
    static async deleteText(req,res,next) {
        try {
            const {id} = req.params;
            const result = await MpsService.deleteText(id);
            res.json(result);
        } catch (error) {
            next(error)
        }
    }
}