import express from 'express';
import AuthMiddlware from '../auth/auth.middlware';
import {UnitController} from '../controller';

const router = express.Router();

router.get('/',
UnitController.getUnits);
router.post('/',
AuthMiddlware.authenticateFor(['admin','superadmin']),
UnitController.addUnits);
router.put('/',
AuthMiddlware.authenticateFor(['admin','superadmin']),
UnitController.putUnits);
router.delete('/',
AuthMiddlware.authenticateFor(['admin','superadmin']),
UnitController.deleteUnits);


export default router;