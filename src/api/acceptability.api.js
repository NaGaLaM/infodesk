import express from 'express';
import AuthMiddlware from '../auth/auth.middlware'
import {AcceptabilityCotroller} from '../controller';


const router = express.Router();

router.get('/',
AcceptabilityCotroller.getAcceptability);
router.post('/',
AuthMiddlware.authenticateFor(['admin','superadmin']),
AcceptabilityCotroller.postAcceptability);
router.put('/:id',
AuthMiddlware.authenticateFor(['admin','superadmin']),
AcceptabilityCotroller.putAcceptability);
router.delete('/:id',
AuthMiddlware.authenticateFor(['admin','superadmin']),
AcceptabilityCotroller.deleteAcceptability);

export default router;