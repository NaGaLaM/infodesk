import { CommitteeService } from "../services";

export default class CommitteeController {
    static async getText(req,res,next) {
        try {
            const data = await CommitteeService.getText();
            return res.json(data);
        } catch (error) {
            next(error);
        }
    }

    static async addText(req,res,next){
        try {
            const {name,member1,member2,cityphone,internalphone,internalphone2} = req.body;
            const result = await CommitteeService.addText({name,member1,member2,cityphone,internalphone,internalphone2});
            return res.json(result);
        } catch (error) {
            next(error)
        } 
    }
    static async putText(req,res,next) {
        try {
            const {name,member1,member2,cityphone,internalphone,internalphone2} = req.body;
            const {id} = req.params;
            const result = await CommitteeService.putText(id,{name,member1,member2,cityphone,internalphone,internalphone2});
            return res.json(result);
        } catch (error) {
            next(error);
        }
    }
    static async deleteText(req,res,next) {
        try {
            const {id} = req.params;
            const result = await CommitteeService.deleteText(id);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}