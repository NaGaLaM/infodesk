import {AcceptabilityService} from '../services';
import { SuccessHandlerUtil } from '../utils';

export default class AcceptabilityCotroller {
  static async getAcceptability(req,res,next) {
    try {
      const users = await AcceptabilityService.getAcceptability();

      SuccessHandlerUtil.handleList(res,next,users);
    } catch (error) {
      next(error);
    }
  }

  static async postAcceptability(req,res,next){
    try {
      const {title,name,day,time} = req.body;
      const result = await AcceptabilityService.postAcceptability({title,name,day,time});
      res.send(result)
    } catch (error) {
      next(error)
    }
  }


  static async putAcceptability(req,res,next) {
    try {
      const {id} = req.params;
      const {
        title,name,day,time
      } = req.body
      const result = await AcceptabilityService.putAcceptability(id,{title,name,day,time});
      res.json(result)
      res.send()
    } catch (error) {
      next(error)
    }
  } 


  static async deleteAcceptability(req,res,next) {
    try {
      const {id} = req.params;
      const result = await AcceptabilityService.deleteAcceptability(id);
      res.json(result)
      res.send()
    } catch (error) {
      next(error)
    }
  } 

}