import {Model} from 'objection';

class Text2Model extends Model {
    static get idColumn(){return 'id';}

    static get tableName() {return 'text2'};

    static get jsonSchema(){
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
    

    $beforeInsert(){
    const date = new Date();
    this.created_at = date;
    }
    $beforeUpdate() {
        const date = new Date();
        this.updated_at = date;
    }   

    static async getText() {
        return Text2Model.query().select('*').orderBy('id');
    }

    static async addText(data){
        return Text2Model.query()
        .insert(data);
    }

    static async editText(id,data) {
        return Text2Model.query()
        .where({id})
        .update(data)
    }
}

export default Text2Model;