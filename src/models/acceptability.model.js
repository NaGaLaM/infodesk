import { Model } from 'objection';

class AcceptabilityModel extends Model {
  static get idColumn() {return 'id'}

  static get tableName() {return 'acceptability'}

  static get jsonSchema() {
    return {
      type:'object',
      required:[],
      properties: {
        id:{type:'integer'},
        name: {type:'string',minLength:1,maxLength:255},
        member1 :{type: 'string',minLength:1,maxLength:255},
        member2 :{type: 'string',minLength:1,maxLength:255},
        cityphone: {type:'string',minLength:1,maxLength:255},
        internalphone: {type:'string',minLength:1,maxLength:255},
        internalphone2: {type:'string',minLength:1,maxLength:255},
      }
    }
  }
  
  $beforeInsert() {
    const date = new Date();
    this.created_at = date;
  }

  $beforeUpdate() {
    const date = new Date();
    this.updated_at = date
  }

  static getAcceptability() {
    return AcceptabilityModel.query()
    .select('*')
    .orderBy('id')
  }

  static postAcceptability(data) {
    return AcceptabilityModel.query()
    .insert(data);
  }

  static putAcceptability(id,data) {
    return AcceptabilityModel.query() 
    .where({id})
    .update(data);
  }

  static deleteAcceptability(id){
    return AcceptabilityModel.query()
    .where({id})
    .delete()
  }
}

export default AcceptabilityModel;