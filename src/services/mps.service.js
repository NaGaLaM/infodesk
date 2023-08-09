import { MpsModel } from '../models';

export default class MpsService {
    static getText() {
        return MpsModel.getText();
    }
    static async addText(data) {
        return MpsModel.addText(data);
    }
    static async putText(id, data) {
        return MpsModel.putText(id, data);
    }
    static async deleteText(id) {
        return MpsModel.deleteText(id); 
    }

}