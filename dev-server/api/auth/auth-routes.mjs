import { Router } from 'express';
const router = Router()
import * as controller from './auth-controller.mjs'

router.post('/auth', controller.index)

export default router;