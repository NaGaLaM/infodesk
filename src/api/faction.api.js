import express from 'express';
import {FactionController} from '../controller';

import AuthMiddlware from '../auth/auth.middlware';
const router = express.Router();

router.get('/',
FactionController.getText);
router.post('/',
AuthMiddlware.authenticateFor(['admin','superadmin']),
FactionController.addText);
router.put('/',
AuthMiddlware.authenticateFor(['admin','superadmin']),
FactionController.putText);
router.delete('/',
AuthMiddlware.authenticateFor(['admin','superadmin']),
FactionController.deleteText);

export default router