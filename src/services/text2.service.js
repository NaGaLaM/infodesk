import { Text2Model } from "../models";

export default class Text2Serivce {
    static async getText() {
        return Text2Model.getText();
    }

    static async addText(data) {
        return Text2Model.addText(data);
    }

    static async editText(id,data) {
        return Text2Model.editText(id,data);
    }
}

