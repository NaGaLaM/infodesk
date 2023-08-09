import express from "express";
import AuthMiddlware from "../auth/auth.middlware";
import { CitizenReceptionController } from '../controller';

const router = express.Router();

router.get('/',
CitizenReceptionController.getText);
router.post('/',
AuthMiddlware.authenticateFor(['admin','superadmin']),
CitizenReceptionController.addText);
router.put('/:id',
AuthMiddlware.authenticateFor(['admin','superadmin']),
CitizenReceptionController.putText)
router.delete('/:id',
AuthMiddlware.authenticateFor(['admin','superadmin']),
CitizenReceptionController.deleteText)

export default router;