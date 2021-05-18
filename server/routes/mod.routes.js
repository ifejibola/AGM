import express from 'express'
import modCtrl from '../controllers/mod.controller'
import auth from '../controllers/auth.controller'
import role from '../controllers/mod.controller'
import userCtrl from '../controllers/user.controller'
const requireLogin = require('../Middlewares/requireLogin')

const router = express.Router()


const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic',
}
router.route('/mod/')
    .post(modCtrl.create)
router.route('/modUser/')
    .post(userCtrl.create)

// router.get('/user', modCtrl.list)
router.route('/user')
    .get(modCtrl.list)

// router.param('userId', modCtrl.read)
router.get('/current_user', modCtrl.currentUser)
router.get('/read', modCtrl.read)

// router.get('/:userId', modCtrl.profile)

export default router