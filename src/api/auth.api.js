import express from 'express';
import AuthController from '../auth/auth.controller'; 
import AuthMiddlaware from '../auth/auth.middlware';
const router = express.Router();

router.post('/',
AuthController.login);
router.post('/refresh',
AuthController.refresh);

export default router