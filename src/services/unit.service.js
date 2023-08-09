import { UnitModel } from '../models';

export default class UnitService {
  static getUnits() {
    return UnitModel.getUnits();
  }

  static async addUnits(data) {
    return await UnitModel.addUnits(data);
  }
  static async putUnits(id,data) {
    return await UnitModel.putUnits(id,data);
  }
  static async deleteUnits(id) {
    return await UnitModel.deleteUnits(id);
  }
}