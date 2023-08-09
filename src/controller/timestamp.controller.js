import { TimeStampService } from '../services';
import { SuccessHandlerUtil } from '../utils';

export default class TimeStampController {
  static async getTime(req, res, next) {
    try {
      const users = await TimeStampService.getTime();

      SuccessHandlerUtil.handleList(res, next, users);
    } catch (error) {
      next(error)
    }
  }
  static async addTime(req, res, next) {
    try {
      const { date } = req.body
      const result = await TimeStampService.addTime({ date });
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
  static async putTime(req, res, next) {
    try {
      const { id } = req.params
      const { date } = req.body;
      const result = await TimeStampService.putTime(id, { date });
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  static async deleteTime(req, res, next) {
    try {
      const { id } = req.params;
      const result = await TimeStampService.deleteTime(id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}