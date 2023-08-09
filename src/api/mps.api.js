import express from 'express';
import { MpsController } from "../controller";
import AuthMiddlware from '../auth/auth.middlware';
const router = express.Router();

router.get('/',
MpsController.getText);
router.post('/',
AuthMiddlware.authenticateFor(['admin','superadmin']),
MpsController.addText);
router.put('/',
AuthMiddlware.authenticateFor(['admin','superadmin']),
MpsController.putText);
router.delete('/',
AuthMiddlware.authenticateFor(['admin','superadmin']),
MpsController.deleteText);

export default router;
