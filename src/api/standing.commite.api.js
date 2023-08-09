//NPM Modules
import express from "express";
//Local Modules
import AuthMiddlware from "../auth/auth.middlware";
import {StandingCommiteController} from '../controller';


const router = express.Router();
router.get('/',
StandingCommiteController.getText);
router.post('/',
AuthMiddlware.authenticateFor(['admin','superadmin']),
StandingCommiteController.addText);
router.put('/:id',
AuthMiddlware.authenticateFor(['admin','superadmin']),
StandingCommiteController.editText)
router.delete('/:id',
AuthMiddlware.authenticateFor(['admin','superadmin']),
StandingCommiteController.deleteText);

export default router;