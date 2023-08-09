import { Text1Model } from '../models';

export default class Text1Service{
    static getText(){
        return Text1Model.getText();
    }
    static addText(data) {
        return Text1Model.addText(data);
    }
    static putText(id,data) {
        return Text1Model.putText(id,data);
    }
    static deleteText(id) {
        return Text1Model.deleteText(id);
    }
}