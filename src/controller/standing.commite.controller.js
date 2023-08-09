import { Text2Serivce } from "../services";

export default class StandingCommiteController{
    static async getText(req,res,next){
        try {
            const result = await Text2Serivce.getText();
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    static async addText(req,res,next) {
        try {
            const {title,text} = req.body;
            const result = await Text2Serivce.addText({title,text});
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    static async editText(req,res,next) { 
        try {
            const {id} = req.params;
            const {title,text} = req.body;
            const result = await Text2Serivce.editText(id,{title,text});
            res.json(result);
        } catch (error) {
            next(erro)
        }
    }

    static async deleteText(req,res,next) {
        try {
            const {id} = req.params;
            const result = await Text2Serivce.deleteText(id);
            res.json("deleted");
        } catch (error) {
            next(error);
        }
    }
}

