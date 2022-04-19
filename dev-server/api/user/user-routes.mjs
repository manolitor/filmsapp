import { Router } from 'express';
const router = Router()
import * as controller from './user-controller.mjs'

router.get('/user', controller.index)

export default router;