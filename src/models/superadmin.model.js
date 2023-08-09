import { Model } from "objection";

export default class SuperadminModel extends Model {

    static get idColumn() {return 'id';}

    static get tableName() {return 'users'};

    $beforeInsert() {
        const date = new Date();
        this.created_at = date;
        this.role = 'admin'
    }

    $beforeUpdate() {
        const date = new Date();
        this.updated_at = date;
    }

    static async getAdmins() {
        return SuperadminModel.query()
        .select('*')
        .where('role','admin')
        .orderBy('id');
    }

    static async addAdmins(payload) {
        return SuperadminModel.query()
        .insert(payload)
        .returning('*')
    } 

    static async deleteAdmins(id) {
        return SuperadminModel.query()
        .where({id})
        .delete()
        .returning('*')
    }   
    
    static async editAdmins(id,payload) {
        return SuperadminModel.query()
        .where({id})
        .update(payload)
        .returning('*')
    }

    static async findByUsername (user) {
        const result = await SuperadminModel.query()
        .select('*')
        .where({user})
        .orderBy('id')
        return {...result[0]}
    }
}