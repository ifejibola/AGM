import express from 'express'
import userCtrl from '../controllers/user.controller'

const router = express.Router()

router.route('/api/users')
    .post(userCtrl.create)
// .get(userCtrl.list)

export default router