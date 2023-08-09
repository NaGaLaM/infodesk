import { Model } from 'objection';

class UnitModel extends Model {
  static get idColumn() {return 'id';}

  static get tableName() {return 'units';}

  static get jsonSchema() {
    return {
      type:'object',
      required: [],
      properties: {
        id: {type:'integer'},
        firstname: {type:'string', minLength:1 , maxLength:255},
        internalphone: {type:'string', minLength:1 , maxLength:255},
        name: {type:'string', minLength:1 , maxLength:255},
      }
    }   
  }

  $beforeInsert() {
    const date = new Date();
    this.created_at = date;
  }

  $beforeUpdate() {
    const date = new Date();
    this.updated_at = date;
  }

  static getUnits () {
    return UnitModel.query()
    .select('*')
    .orderBy('id');
  }

  static addUnits(data) {
    return UnitModel.query()
    .insert(data);
  }
  static putUnits (id,data) {
    return UnitModel.query()
    .where({id})
    .update(data);
  }
  static deleteUnits(id) {
    return UnitModel.query()
    .where({id})
    .delete();
  }
}

export default UnitModel;