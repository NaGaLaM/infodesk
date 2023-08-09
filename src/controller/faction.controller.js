import { FactionService } from "../services";

export default class FactionController {
    static async getText(req,res,next) {
        try {
            const data = await FactionService.getText();
            return res.json(data)
        } catch (error) {
            next(error)
        }
    }
    static async addText(req,res,next) {
        try {
            const {name,member1,member2,ciyphone,internalphone} = req.body
            const result = await FactionService.addText({name,member1,member2,ciyphone,internalphone});
            return res.json(result);
        } catch (error) {
            next(error);
        }
    }
    static async putText(req,res,next) {
        try {
            const {id} = req.body;
            const {name,member1,member2,ciyphone,internalphone} = req.body;
            const result = await FactionService.putText(id,{name,member1,member2,ciyphone,internalphone});
            res.json(result);
        } catch (error) {
            next(error)
        }
    }
    static async deleteText(req,res,next) {
        try {
            const {id} = req.body;
            const result = await FactionService.deleteText(id);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
    
}