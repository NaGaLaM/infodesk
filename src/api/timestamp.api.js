import express from 'express';

import {TimeStampController} from '../controller';

const router = express.Router();

router.get('/',
TimeStampController.getTime);
router.post('/',
TimeStampController.addTime);
router.put('/:id',
TimeStampController.putTime);
router.delete('/id',
TimeStampController.deleteTime)

export default router;