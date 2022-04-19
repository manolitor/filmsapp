import { Router } from 'express';
const router = Router()
import * as controller from './register-controller.mjs'

router.post('/register', controller.index)

export default router