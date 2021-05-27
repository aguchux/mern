import express from 'express'
import { CreateApi, ListApis } from '../controllers/api_controller.js'

const router = express.Router()

router.get('/', ListApis)
router.get('/list', ListApis)
router.get('/create', CreateApi)


export default router
