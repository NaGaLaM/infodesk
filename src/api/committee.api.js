import express from 'express';
import { CommitteeController } from "../controller";

import AuthMiddlware from '../auth/auth.middlware';
const router = express.Router();

router.get('/',
CommitteeController.getText);
router.post('/',
AuthMiddlware.authenticateFor(['admin','superadmin']),
CommitteeController.addText);
router.put('/',
AuthMiddlware.authenticateFor(['admin','superadmin']),
CommitteeController.putText);
router.delete('/',
AuthMiddlware.authenticateFor(['admin','superadmin']),
CommitteeController.deleteText);

export default router;