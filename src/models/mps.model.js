import { Model } from "objection";

export default class MpsModel extends Model {
    static get idColumn() {return 'id';}

    static get tableName() {return 'mps';}
    
    static get jsonSchema() {
        return {
            type:"object",
            required:[],
            properties:{
                firstname: { type: 'integer' },
                lastname: { type: 'string', minLength: 1, maxLength: 255 },
                surtname: { type: 'string', minLength: 1, maxLength: 255 },
                phonenumber: { type: 'string', minLength: 1, maxLength: 255 },
                key: { type:'boolean' },
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

    static async getText(){
        return MpsModel.query()
        .select('*')
        .orderBy('id');
    }
    
    static async addText(data) {
        return MpsModel.query()
        .insert(data)
    }
    static async putText(id,data) {
        return MpsModel.query()
        .where({id})
        .update(data)
    }
    static async deleteText(id) {
        return MpsModel.query()
        .where({id})
        .delete();
    }
}