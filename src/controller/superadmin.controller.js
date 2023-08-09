import { SuperadminService } from "../services";

export default class SuperadminController {
    static async getAdmins(req, res, next) {
        try {
            const admins = await SuperadminService.getAdmins();
            res.json(admins);
        } catch (error) {
            next(error)
        }
    }

    static async addAdmins(req, res, next) {
        try {
            const {user,pwd} = req.body;
            const result = await SuperadminService.addAdmins({user,pwd});
            if(result.error) {
                res.json(result.message)
            }else{
                res.json(result.message)
            }
        } catch (error) {
            next(error);
        }
    }

    static async deleteAdmins(req, res, next) {
        try {
            const { id } = req.params;
            const result = await SuperadminService.deleteAdmins(id);
            res.json(result.message)
        } catch (error) {
            next(error);
        }
    }

    static async editAdmins(req,res,next) {
        try {
            const {id} = req.params;
            const payload = req.body
            const result = await SuperadminService.editAdmins(id,payload);
            res.json(result.message)
        } catch (error) {
            next(error);
        }
    }
}