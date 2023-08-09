import {Model} from 'objection';

class TimeStampModel extends Model{
  static get idColumn() {return 'id';}

  static get tableName() {return 'time-table';}

  static get jsonSchema() {
    return {
      type:'object',
      required:[],
      properties: {
        id:{type:'integer'},
        day:{type:'string'},
        
      }
    }
  }

  $beforeInsert() {
    const date = new Date();
    this.created_at = date;
  }

  static getTime() {
    return TimeStampModel.query()
    .select('*')
    .where('date','>=',new Date());
  }

  static addTime(data) {
    return TimeStampModel.query()
    .insert(data)
  }
  static putTime(id,data) {
    return TimeStampModel.query()
    .where({id})
    .update(data);
  }
  static deleteTime(id) {
    return TimeStampModel.query()
    .where({id})
    .delete();
  }
}

export default TimeStampModel;