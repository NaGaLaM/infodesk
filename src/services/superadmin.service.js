import { SuperadminModel } from "../models";
import bcrypt from 'bcrypt'

export default class SuperadminService {
    static getAdmins () {
        return SuperadminModel.getAdmins();
    }

    static async addAdmins(payload) {
        const user = await SuperadminModel.query().where('user',payload.user);
        if(!user[0]){
            const hashedpassword = await bcrypt.hash(payload.pwd,3)
            payload.pwd = hashedpassword
            await SuperadminModel.addAdmins(payload);
            return {message:'Admin added successfully'}
        }else{
            return {message:'user has already used'}
        }
    }

    static async editAdmins(id,payload) {
        const users = await SuperadminModel.getAdmins();
        const result = users.filter(a=>a.user===payload.user);
        if(!result[0]){
            const hashedpassword = await bcrypt.hash(payload.pwd,3);
            payload.pwd = hashedpassword;
            const result = await SuperadminModel.editAdmins(id,payload);
            if(!result){
                return {message:'Not found id'}
            }else{
                return {message: 'user edited succesfully'}
            }
        }
        else{
            return {message:'user has already used'}
        }
    }

    static async deleteAdmins(id) {
       const result =  await SuperadminModel.deleteAdmins(id);
       if(!result) {
        return {message:"not found id"}
       }else{
        return {message:'user deleted successfully'}
       }
    }
}