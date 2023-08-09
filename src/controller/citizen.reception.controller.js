import { CitizenReceptionService } from '../services';

export default class CitizenReception {
  static async getText(req, res, next) {
    try {
      const result = await CitizenReceptionService.getText();
     return res.json(result)
    } catch (error) {
      next(error);
    }
  }

  static async addText(req,res,next) {
    try {
      const {title,text,subtitle1,subtitle2} = req.body
      const result = await CitizenReceptionService.addText({title,text,subtitle1,subtitle2});
     return res.json(result)
    } catch (error) {
     next(error) 
    }
  }

  static async putText(req,res,next) {
    try {
      const {id} = req.params;
      const {title,text,subtitle1,subtitle2} = req.body;
      const result = await CitizenReceptionService.putText(id,{title,text,subtitle1,subtitle2});
      res.json(result);
    } catch (error) {
      next(error);
    }
  }


  static async deleteText(req,res,next) {
    try {
      const {id} = req.params;
      const result = await CitizenReceptionService.deleteText(id);
    } catch (error) {
      next(error)
    }
  }
}
