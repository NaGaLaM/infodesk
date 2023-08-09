import { SuperadminController } from "../controller";
import AuthMiddlaware from "../auth/auth.middlware";
import express from 'express';

const router = express.Router();

router.get('/',
AuthMiddlaware.authenticateFor(['superadmin']),
SuperadminController.getAdmins);
router.post('/',
AuthMiddlaware.authenticateFor(['superadmin']),
SuperadminController.addAdmins);
router.put('/:id',
AuthMiddlaware.authenticateFor(['superadmin']),
SuperadminController.editAdmins);
router.delete('/:id',
AuthMiddlaware.authenticateFor(['superadmin']),
SuperadminController.deleteAdmins);

export default router;