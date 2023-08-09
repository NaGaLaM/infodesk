import {TimeStampModel} from '../models';

export default class TimeStampService {
  static getTime () {
    return TimeStampModel.getTime();
  }

  static addTime(data) {
    return TimeStampModel.addTime(data);
  }
  static putTime(id,data) {
    return TimeStampModel.putTime(id,data);
  }
  static deleteTime(id) {
    return TimeStampModel.deleteTime(id);
  }
}
