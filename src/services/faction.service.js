import { FactionModel } from "../models";

export default class FactionService { 
    static getText() {
        return FactionModel.getText();
    }
    static async addText(data) {
        return FactionModel.addText(data);
    }
    static async putText(id,data) {
        return FactionModel.putText(id,data);
    }
    static async deleteText(id) {
        return FactionModel.deleteText(id);
    }
}