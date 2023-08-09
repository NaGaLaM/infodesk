import { UnitService } from '../services';
import { SuccessHandlerUtil } from '../utils';

export default class UnitController {
  static async getUnits(req, res, next) {
    try {
      const users = await UnitService.getUnits();

      SuccessHandlerUtil.handleList(res, next, users);
    } catch (error) {
      next(error);
    }
  }
  static async addUnits(req, res, next) {
    try {
      const { name, internalphone } = req.body;
      const result = await UnitService.addUnits({ name, internalphone });
      return res.json(result);
    } catch (error) {
      next(error)
    }
  }
  static async putUnits(req, res, next) {
    try {
      const { id } = req.params;
      const { name, internalphone } = req.body;
      const result = await UnitService.putUnits(id, { name, internalphone });
      return res.json(result);
    } catch (error) {
      next(error)
    }
  }
  static async deleteUnits(req, res, next) {
    try {
      const { id } = req.params;
      const result = await UnitService.deleteUnits(id);
      return res.json(result);
    } catch (error) {
      next(error)
    }
  }
}