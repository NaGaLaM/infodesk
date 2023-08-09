import { Model } from 'objection';

class Text1Model extends Model {
  static get idColumn() { return 'id'; }

  static get tableName() { return 'text1'; }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: { type: 'integer' },
        title: { type: 'string', minLength: 1, maxLength: 255 },
        text: { type: 'string', minLength: 1, maxLength: 255 }
      }
    }
  }


  $beforeInsert() {
    const date = new Date();
    this.updated_at = date
  }
  $beforeUpdate() {
    const date = new Date();
    this.updated_at = date
  }

  static async getText() {
    return Text1Model.query().select('*').orderBy('id');
  }

  static async addText(data){
    return Text1Model.query()
    .insert(data)
  }

  static async putText(id,data) {
    return Text1Model.query()
    .where({id})
    .update(data);
  }
  
  static async deleteText(id){
    return Text1Model.query()
    .where({id})
    .delete();
  }
}
export default Text1Model;