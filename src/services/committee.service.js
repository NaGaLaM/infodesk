import { CommitteeModel } from "../models";

export default class CommitteeService {
    static getText() {
        return CommitteeModel.getText();
    }

    static addText(data) {
        return CommitteeModel.addText(data);
    }
    static putText(id,data) {
        return CommitteeModel.putText(id,data)
    }
    static deleteText(id) {
        return CommitteeModel.deleteText(id);
    }
}