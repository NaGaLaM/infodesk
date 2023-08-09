import {AcceptabilityModel} from '../models';

export default class AcceptabilityService{
  static getAcceptability() {
    return AcceptabilityModel.getAcceptability();
  }

  static postAcceptability(data) {
    return AcceptabilityModel.postAcceptability(data);
  }

  static putAcceptability(id,data) {
    return AcceptabilityModel.putAcceptability(id,data);
  }

  static deleteAcceptability(id) {
    return AcceptabilityModel.deleteAcceptability(id)
  }
}