import {Model} from 'objection';

export default class CommitteeModel extends Model {
    static get idColumn() {return 'id';}

    static get tableName() {return 'committee';}

    static get jsonSchema() {
        return {
            type:"object",
            required:[],
            properties:{
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1, maxLength: 255 },
                member1: { type: 'string', minLength: 1, maxLength: 255 },
                member2: { type: 'string', minLength: 1, maxLength: 255 },
                cityphone: { type: 'string', minLength: 1, maxLength: 255 },
                internalphone: { type: 'string', minLength: 1, maxLength: 255 },
                internalphone2: { type: 'string', minLength: 1, maxLength: 255 }
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

    static async getText() {
        return CommitteeModel.query()
        .select('*')
        .orderBy('id');
    }
    static async addText(data){
        return CommitteeModel.query()
        .insert(data)
    }
    static async putText(id,data) {
        return CommitteeModel.query()
        .where({id})
        .update(data);
    }
    static async deleteText(id) {
        return CommitteeModel.query()
        .where({id})
        .delete()
    }
}